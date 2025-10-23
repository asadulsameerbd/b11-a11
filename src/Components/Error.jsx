import Lottie from "lottie-react";
import error from "../assets/error.json";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="pt-20 w-10 md:w-20 lg:w-50 mx-auto">
        <Lottie animationData={error}></Lottie>
      </div>
      <div>
        <p className="flex justify-center font-semibold lg:text-2xl">
          Page Not Found
        </p>
      </div>
    </div>
  );
};

export default Error;
