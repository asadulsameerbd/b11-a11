import { motion } from "motion/react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-[#D36F74] px-4 md:px-10">
      <div className="hero min-h-full md:h-[800px] py-10 md:py-20">
        <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8">

          {/* ===== Image Section ===== */}
          <motion.img
            animate={{
              y: [0, 50, 0],
              x: [0, 25, 0],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={banner}
            alt="Banner"
            className="w-full md:max-w-md lg:max-w-lg border-b-8 border-l-8 border-[#fa8231] rounded-r-3xl rounded-t-3xl shadow-2xl object-cover"
          />
          
          {/* ===== Text Section ===== */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-snug md:leading-[1.3]">
              Connecting Learners with{" "}
              <motion.span
                animate={{
                  color: ["#fed330", "#45aaf2", "#26de81", "#2bcbba"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >
                Expert Tutors
              </motion.span>{" "}
              Worldwide
            </h1>
            <p className="py-5 text-sm sm:text-base md:text-lg text-gray-100">
              Find the perfect tutors for your favourite language
            </p>
            <button className="btn btn-primary text-sm sm:text-base">
              Get Started
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Banner;
