import Banner from "../Section/Home/Banner";
import Catagory from "../Section/Home/Catagory";
import Faq from "../Section/Home/Faq";
import Stat from "../Section/Home/Stat";
import Works from "../Section/Home/Works";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner></Banner>

      {/* stat section */}

      <div className="my-10">
        <Stat></Stat>
      </div>

      {/* category section */}
      <Catagory></Catagory>

      {/* how we works section */}

      <Works></Works>

      {/* Faq section  */}

      <Faq></Faq>
    </div>
  );
};

export default Home;
