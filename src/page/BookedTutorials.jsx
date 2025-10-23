import { useContext, useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const BookedTutorials = () => {
  const { user } = useContext(AuthContext);
  const [bookedTutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookedTutor?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTutorials(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="min-h-screen p-4 md:p-10 bg-base-100 text-base-content transition-colors duration-300">
      {bookedTutorials.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-base-200 border border-gray-300 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:shadow-lg"
            >
              {/* Tutor Image */}
              <div className="flex-shrink-0">
                <img
                  className="w-full md:w-48 h-48 object-cover"
                  src={tutorial.image}
                  alt={tutorial.name}
                />
              </div>

              {/* Tutor Info */}
              <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-base-content">
                    {tutorial.name}
                  </h2>
                  <p className="text-base-content/70 text-sm mt-1 mb-2">
                    <b>Language:</b> {tutorial.language}
                  </p>
                  <p className="text-base-content/70 text-sm mb-2">
                    {tutorial.description?.slice(0, 80)}...
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base-content/80 font-medium">
                      Rating:
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      {tutorial.rating > 4.5 ? (
                        <IoIosStar />
                      ) : (
                        <IoIosStarHalf />
                      )}
                      {tutorial.rating}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row md:flex-col justify-end gap-2">
                  <Link
                    to={`/tutorDetails/${tutorial.tutorId}`}
                    className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 rounded-2xl bg-base-200 p-10 text-center transition-colors duration-300">
          <p className="text-base-content/80 font-medium">
            ❌ No Tutors/Tutorials found. Please Book a tutor from here —
          </p>
          <Link
            to="/find-tutors"
            className="btn bg-[#eb3b5a] text-white rounded-lg px-4 py-2"
          >
            Book Tutors
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookedTutorials;
