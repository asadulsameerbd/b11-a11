import Lottie from 'lottie-react';
import learning from '../../assets/Learning.json';
import tutor from '../../assets/Online Classes.json';
import icon from '../../assets/practice.png';

const Works = () => {
  return (
    <div className="lg:w-[1380px] mx-auto">
      <h1 className="text-4xl font-semibold text-center lg:text-left py-10 mt-10">How We Works</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>

        {/* card1 */}
        <div className="card lg:m-4 bg-base-100 w-full lg:w-96 shadow-sm">
          <div className="card-body">
            <span className="card-title font-bold p-2">1</span>
            <h1 className="text-2xl font-semibold">Find Your Tutor</h1>
            <p>
              We will connect you with a tutor who will motivate , challenge and inspiration you.
            </p>
          </div>
          <figure>
            <Lottie animationData={tutor} className='w-60'  loop={true}></Lottie>
          </figure>
        </div>
        {/* card2 */}
        <div className="card lg:m-4 border-2 bg-base-100 w-full lg:w-96 shadow-sm">
          <div className="card-body">
            <span className="card-title font-bold p-2">2</span>
            <h1 className="text-2xl font-semibold">Start learning</h1>
            <p>
              your mentor will lead you thought your first steps and assist you in mapping out your learning journey ahead.
            </p>
          </div>
          <figure>
            <Lottie animationData={learning} className='w-60' loop={true}></Lottie>
          </figure>
        </div>
        {/* card3 */}
        <div className="card lg:lg:m-4 bg-base-100 w-full lg:w-96 shadow-sm ">
          <div className="card-body">
            <span className="card-title font-bold p-2">3</span>
            <h1 className="text-2xl font-semibold">Practice</h1>
            <p>
              Practice your project. practice makes a men perfect.
            </p>
          </div>
          <figure className='flex items-center justify-center '>
            <img className='w-50 p-5' src={icon}  alt="" />
          </figure>
        </div>
        
      </div>
    </div>
  );
};

export default Works;
