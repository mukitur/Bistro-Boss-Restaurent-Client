import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TitleHelmet from '../../Components/TitleHelmet/TitleHelmet';
import Swal from 'sweetalert2';

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // sign In user
    signInUser(email, password)
      .then((result) => {
        const loggedinUser = result.user;
        console.log(loggedinUser);
        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Passsword dosent match');
      });
  };

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
      <TitleHelmet title="Bistro Boss | Login" />
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full md:w-1/2 md:mr-10">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/WnMwzB6/login-register.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-3xl font-bold text-center text-[#444] mt-16">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn bg-[#3a77d9] hover:bg-[#628fd7] text-white  font-semibold">
                Login
              </button>
            </div>
            <div>
              <p className="font-poppins text-sm text-gray-600">
                New to this site?
                <Link to="/register">
                  <button className="btn-link text-[#3a77d9] ml-1">
                    Register!
                  </button>
                </Link>
              </p>

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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
