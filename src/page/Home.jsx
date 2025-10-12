import Banner from "../Section/Home/Banner";
import Catagory from "../Section/Home/Catagory";
import Stat from "../Section/Home/Stat";

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
    </div>
  );
};

export default Home;
