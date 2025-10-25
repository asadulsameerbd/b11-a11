import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Link, useSearchParams } from "react-router";
import Loading from "../Components/Loading";

const FindTutorials = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const language = searchParams.get("language");

  // Fetch data using useEffect 
  useEffect(() => {
    fetch("https://b11-a11-server-black.vercel.app/addtutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // filtered data 
  const filteredDatas = tutors.filter((tutor) => {
    const matchSearch = tutor.language
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchLanguage = language
      ? tutor.language?.toLowerCase() === language.toLowerCase()
      : true;

    return matchSearch && matchLanguage;
  });

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="w-full min-h-screen bg-base-100 text-base-content">
      <h1 className="text-center font-semibold text-2xl md:text-4xl py-10 px-4">
        Explore Online Tutors & Teachers for Learning a New Language
      </h1>

      {/* Search Box */}
      <div className="flex justify-center pb-10 w-full">
        <label className="input w-[90%] md:w-[60%] lg:w-[40%] flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your favorite language tutor..."
            className="w-full outline-none bg-transparent"
          />
        </label>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[900px] mx-auto px-4 md:px-10 lg:px-20">
        {filteredDatas.length > 0 ? (
          filteredDatas.map((filteredData) => (
            <div
              key={filteredData._id}
              className="card flex-col md:flex-row card-side m-10 border border-[#D36F74] bg-base-200 shadow-sm hover:shadow-lg transition"
            >
              <figure>
                <img
                  className="w-45"
                  src={filteredData.image}
                  alt={filteredData.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span>Name: </span>
                  {filteredData.name}
                </h2>
                <h2 className="card-title">
                  <span>Rating: </span>
                  {filteredData.rating}{" "}
                  {filteredData.rating > 4.5 ? (
                    <IoIosStar className="text-yellow-400" />
                  ) : (
                    <IoIosStarHalf className="text-yellow-400" />
                  )}
                </h2>
                <p>
                  <b>Language:</b> {filteredData.language}
                </p>
                <p>{filteredData.description?.slice(0, 50)}...</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/tutorDetails/${filteredData._id}`}
                    className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="lg:flex justify-center items-center gap-5 rounded-2xl bg-pink-100 dark:bg-base-300 p-10 text-center">
            <p className="text-gray-600 dark:text-gray-500 font-medium">
              ❌ No Tutors/Tutorials found. Please adjust your search —
            </p>
            <Link
              to="/add-tutorials"
              className="btn bg-[#eb3b5a] text-white ml-3 rounded-lg px-4 py-2"
            >
              Add Tutorial
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindTutorials;
