import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { Link, useLoaderData, useSearchParams } from "react-router";

const FindTutorials = () => {
  const tutors = useLoaderData();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const language = searchParams.get("language");

  // filtered data 
  const filteredDatas = tutors.filter((tutor) => {
    const matchSearch = tutor.language
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchLanguage = language
      ? tutor.language.toLowerCase() === language.toLowerCase()
      : true;
    return matchSearch && matchLanguage;
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <h1 className="text-center font-semibold text-2xl md:text-4xl py-10 px-4">
        Explore Online Tutors & Teachers for Learning a New Language
      </h1>

      {/* Search Box */}
      <div className="flex justify-center pb-10 w-full">
        <label className="input w-[90%] md:w-[60%] lg:w-[40%] flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
          <svg
            className="h-[1.2em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
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
          <div className="flex flex-col gap-8">
            {filteredDatas.map((filterdata) => (
              <div
                key={filterdata._id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center md:justify-start">
                  <img
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border"
                    src={filterdata.image}
                    alt={filterdata.name}
                  />
                </div>
                <div className="text-center md:text-left flex flex-col gap-2">
                  <h1 className="font-bold text-xl md:text-2xl">
                    {filterdata.name}
                  </h1>
                  <div className="flex justify-center md:justify-start">
                    <div className="badge badge-sm badge-secondary">
                      Super Tutor
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600">
                    <IoMdSchool className="text-lg" />
                    <span className="font-medium">{filterdata.language}</span>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base">
                    {filterdata.description?.slice(0, 100)}...
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center md:items-end gap-4">
                  <div className="flex justify-between w-full md:w-auto gap-6">
                    <span className="flex flex-col items-center">
                      <span className="flex items-center gap-1">
                        <BsStarFill className="text-yellow-500" />
                        <span className="font-bold">{filterdata.rating}</span>
                      </span>
                      <p className="text-gray-500 text-sm">Reviews</p>
                    </span>

                    <span className="text-right">
                      <h1 className="font-bold text-lg">
                        BDT {filterdata.price}
                      </h1>
                      <p className="text-gray-500 text-sm">50 min lesson</p>
                    </span>
                  </div>

                  <button onClick={()=>handleBooked()} className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition">
                    Book Trial Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="lg:flex justify-center items-center gap-5 rounded-2xl bg-pink-100 p-10 text-center">
            <p className="text-gray-600 font-medium">
              ❌ No Tutors/Tutorials found. Please add a tutor from here —
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
