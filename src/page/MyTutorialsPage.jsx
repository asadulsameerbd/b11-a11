import { useContext, useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const MyTutorialsPage = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/add-tutors?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTutorials(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/deleteTutor/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setTutorials((prev) => prev.filter((t) => t._id.toString() !== id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen p-4 md:p-10 bg-base-100 text-base-content transition-colors duration-300">
      {tutorials.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-base-200 border border-gray-300 shadow-md rounded-xl p-5 flex flex-col md:flex-row gap-4 md:gap-6 hover:shadow-lg transition"
            >
              {/* Tutor Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={tutorial.image}
                  alt={tutorial.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border"
                />
              </div>

              {/* Tutor Info */}
              <div className="flex-1 flex flex-col justify-between gap-2 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-base-content">
                  {tutorial.name}
                </h2>
                <div className="flex justify-center md:justify-start mt-1 gap-2">
                  <IoMdSchool className="text-lg text-base-content/70" />
                  <span className="font-medium text-base-content/80">
                    {tutorial.language}
                  </span>
                </div>
                <p className="text-base-content/70 text-sm md:text-base mt-1">
                  {tutorial.description?.slice(0, 100)}...
                </p>
                <div className="flex justify-center md:justify-start items-center gap-4 mt-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    <BsStarFill className="text-yellow-500" />
                    <span className="font-bold">{tutorial.rating}</span>
                  </div>
                  <span className="text-base-content/70 text-sm">
                    BDT {tutorial.price} - 50 min lesson
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-center items-center md:items-end gap-2 mt-3 md:mt-0">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => handleDelete(tutorial._id)}
                    className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-2 flex items-center justify-center"
                  >
                    <MdDelete className="text-lg" />
                  </button>
                  <Link
                    to={`/update-tutors/${tutorial._id}`}
                    className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-2 flex items-center justify-center"
                  >
                    <FaEdit className="text-lg" />
                  </Link>
                </div>

                {user?.email === tutorial.email ? (
                  <button
                    disabled
                    className="btn bg-gray-400 text-white rounded-lg px-4 py-2 mt-2 cursor-not-allowed"
                  >
                    Book Trial Lesson
                  </button>
                ) : (
                  <button className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 mt-2">
                    Book Trial Lesson
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 text-center p-5 bg-base-200 rounded-xl transition-colors duration-300">
          <p className="text-base-content/80 font-medium">
            You haven't added any tutorials. Please add
          </p>
          <Link
            to={"/add-tutorials"}
            className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2"
          >
            Add Tutorials
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTutorialsPage;
