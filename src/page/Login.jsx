import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { signinUser, signGoogle } = use(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // submit btn

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User Login SuccessFully!",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // sign in with google

  const hangleGoogle = () => {
    
    signGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire(
          "login Successful!",
          `Welcome  ${user.displayName}`,
          "success"
        );
        navigate('/')
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              If you have a registered account, please login, otherwise click on
              the register link.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />

                  <button className="btn btn-neutral mt-4">Login</button>
                  {/* Google */}
                  <button
                    onClick={hangleGoogle}
                    className="btn bg-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                  <p className="text-sm text-center">
                    Don't have an account , Please{" "}
                    <Link
                      to="/register"
                      className="text-pink-700 font-semibold"
                    >
                      Register
                    </Link>
                  </p>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
