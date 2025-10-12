import Banner from "../Section/Home/Banner";
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
    </div>
  );
};

export default Home;
