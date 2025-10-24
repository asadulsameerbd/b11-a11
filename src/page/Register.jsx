import { updateProfile } from "firebase/auth";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate()

  // handle Submit button

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const { email, password, name, photourl } = Object.fromEntries(
      formdata.entries()
    );
    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photourl,
        });
      })
      .then(() => {
        Swal.fire({
          title: `User created Successfully`,
          icon: "success",
          draggable: true,
        });
        e.target.reset()
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Welcome to the registration page. Please fill up the information
              for create an account
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Photo URl</label>
                  <input
                    type="url"
                    name="photourl"
                    className="input"
                    placeholder="photo url"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <button className="btn btn-neutral mt-4">Login</button>
                  <p className="text-sm text-center">
                    Don't have an account , Please{" "}
                    <Link to="/login" className="text-pink-700 font-semibold">
                      Login
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

export default Register;
