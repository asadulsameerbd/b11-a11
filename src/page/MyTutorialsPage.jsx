import { useContext, useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const MyTutorialsPage = () => {
  const { user } = useContext(AuthContext);

  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/add-tutors?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTutorials(data));
    }
  }, [user]);

  return (
    <div>
      <div className="flex h-[80vh] justify-center flex-col gap-8 m-10">
        {tutorials.length > 0 ? (
          tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center md:justify-start">
                <img
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border"
                  src={tutorial.image}
                  alt={tutorial.name}
                />
              </div>
              <div className="text-center md:text-left flex flex-col gap-2">
                <h1 className="font-bold text-xl md:text-2xl">
                  {tutorial.name}
                </h1>
                <div className="flex justify-center md:justify-start">
                  <div className="badge badge-sm badge-secondary">
                    Super Tutor
                  </div>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600">
                  <IoMdSchool className="text-lg" />
                  <span className="font-medium">{tutorial.language}</span>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                  {tutorial.description?.slice(0, 100)}...
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end gap-4">
                <div className="flex justify-between w-full md:w-auto gap-6">
                  <span className="flex flex-col items-center">
                    <span className="flex items-center gap-1">
                      <BsStarFill className="text-yellow-500" />
                      <span className="font-bold">{tutorial.rating}</span>
                    </span>
                    <p className="text-gray-500 text-sm">Reviews</p>
                  </span>

                  <span className="text-right">
                    <h1 className="font-bold text-lg">BDT {tutorial.price}</h1>
                    <p className="text-gray-500 text-sm">50 min lesson</p>
                  </span>
                </div>

                {user?.email === tutorial.email ? (
                  <button
                    disabled
                    className="btn bg-gray-400 text-white rounded-lg px-4 py-2 transition cursor-not-allowed"
                  >
                    Book Trial Lesson
                  </button>
                ) : (
                  <button className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition">
                    Book Trial Lesson
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-5 text-center md:text-left p-5 bg-pink-100 md:bg-white rounded-xl">
            <p className="text-gray-700 font-medium">
              You haven't added any tutorials. Please add
            </p>
            <Link
              to={"/add-tutorials"}
              className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition"
            >
              Tutorials
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTutorialsPage;
