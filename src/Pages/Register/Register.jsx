import { useContext, useState } from 'react';
import TitleHelmet from '../../Components/TitleHelmet/TitleHelmet';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSquareCheck } from 'react-icons/fa6';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const location = useLocation();
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password);

    // Reset error & success
    setRegisterError('');
    setRegisterSuccess('');

    // Check password
    if (password.length < 6) {
      setRegisterError('Password must be minimum 6 Character Long');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should one upper case Letter');
      return;
    } else if (!/[?=.*[!#$%&?]/.test(password)) {
      setRegisterError('Your password should one special character');
      return;
    }

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateProfile(email, password)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: name,
            email: email,
          };
          axiosPublic.post('/users', userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to the database');
              // reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location?.state ? location.state : '/');
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  //   createUser(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //       setRegisterSuccess('Your Account Successfully created');
  //       form.reset();

  //       // update profile
  //       updateProfile(result.user, {
  //         displayName: name,
  //         photoURL: photo,
  //       });
  //       navigate(location?.state ? location.state : '/');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setRegisterError(error.message);
  //     });
  // };

  //   Google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TitleHelmet title="Bistro Boss | Register" />
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-full md:w-1/2 md:mr-10 ">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/WnMwzB6/login-register.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-3xl font-bold text-center text-[#444] mt-16">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#3a77d9] hover:bg-[#628fd7] text-white">
                Register
              </button>
            </div>
            <div>
              <p className="font-poppins text-sm text-gray-600">
                Already have account? Please
                <Link to="/login">
                  <button className="btn-link text-[#009cd9] ml-1 mt-3">
                    Login!
                  </button>
                </Link>
              </p>
              {registerError && <p>{registerError}</p>}
              {registerSuccess && (
                <p className="text-[#3a77d9] flex gap-2 items-center mt-3">
                  {' '}
                  <FaSquareCheck />
                  {registerSuccess}
                </p>
              )}
            </div>
            {/* Google Login */}
            <div className="text-center mt-5 ">
              <p className="my-3 font-bold">---- or ----</p>
              <button
                onClick={handleGoogleSignIn}
                className="bg-[#3a77d9] hover:bg-[#628fd7] px-4 py-2 rounded-md text-white"
              >
                Login with Google
              </button>
            </div>
            {/* google signin end */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
