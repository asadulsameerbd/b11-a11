import { motion } from "motion/react";
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-[#D36F74] ">
      <div className="hero  h-[800px] py-15">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img animate={{y:[0, 50,0], x:[0,50,0], transition:{duration : 5, repeat : Infinity}}}
            src={banner}
            className="max-w-md lg:w-full border-b-10 border-l-10 border-[#fa8231] rounded-r-3xl rounded-t-3xl shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-bold leading-18">Connecting Learners with <motion.span animate={{color :  ["#fed330","#45aaf2","#26de81","#2bcbba"], transition: {duration : 4, repeat : Infinity} }}>Expert Tutors</motion.span> Worldwide</h1>
            <p className="py-6">
              Find The Perfect Tutors for your Favourite language
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
