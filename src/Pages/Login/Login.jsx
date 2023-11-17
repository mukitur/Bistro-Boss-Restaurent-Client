import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TitleHelmet from '../../Components/TitleHelmet/TitleHelmet';
import Swal from 'sweetalert2';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  console.log('state in the location login page', from.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
        navigate('/login');
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

  // Captcha
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="label border mb-3">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {/* catcha end */}

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn bg-[#3a77d9] hover:bg-[#628fd7] text-white  font-semibold"
                type="submit"
                value="Login"
              />
              {/* <button
                className="btn bg-[#3a77d9] hover:bg-[#628fd7] text-white  font-semibold"
              >
                Login
              </button> */}
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
