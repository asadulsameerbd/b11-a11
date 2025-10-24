import { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const TutorDetails = () => {
  const tutorDetailsData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooked = () => {
    if (!user?.email) {
      Swal.fire({
        title: "Please Login first",
        icon: "error",
        draggable: true,
      });
      navigate("/login");
      return;
    }

    // booked user data

    const bookedTutor = {
      tutorId: tutorDetailsData._id,
      name: tutorDetailsData.name,
      email: tutorDetailsData.email,
      image : tutorDetailsData.image,
      description: tutorDetailsData.description,
      language: tutorDetailsData.language,
      rating: tutorDetailsData.rating,
      price: tutorDetailsData.price,
      bookedBy: user.email,
    };

    // send data to backend

    fetch(`http://localhost:3000/bookedTutor`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedTutor),
    })
      .then((res) => res.json())
      .then((data) => {
       
         if (data.insertedId) {
          Swal.fire({
            title: "Tutor booked successfully!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Already Booked tutors!",
            icon: "error",
          });
        
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col h-[80vh] lg:w-[1380px] mx-auto gap-8 p-6 md:p-10">
      <div
        key={tutorDetailsData._id}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
      >
        <div className="flex justify-center md:justify-start">
          <img
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border"
            src={tutorDetailsData.image}
            alt={tutorDetailsData.name}
          />
        </div>

        <div className="text-center md:text-left flex flex-col gap-2">
          <h1 className="font-bold text-xl md:text-2xl">
            {tutorDetailsData.name}
          </h1>

          <div className="flex justify-center md:justify-start">
            <div className="badge badge-sm badge-secondary">Super Tutor</div>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2 text-gray-600">
            <IoMdSchool className="text-lg" />
            <span className="font-medium">{tutorDetailsData.language}</span>
          </div>

          <p className="text-gray-500 text-sm md:text-base">
            {tutorDetailsData.description?.slice(0, 90)}...
          </p>
        </div>

        <div className="flex flex-col justify-center items-center md:items-end gap-4">
          <div className="flex justify-between w-full md:w-auto gap-6">
            <span className="flex flex-col items-center">
              <span className="flex items-center gap-1">
                <BsStarFill className="text-yellow-500" />
                <span className="font-bold">{tutorDetailsData.rating}</span>
              </span>
              <p className="text-gray-500 text-sm">Reviews</p>
            </span>

            <span className="text-right">
              <h1 className="font-bold text-lg">
                BDT {tutorDetailsData.price}
              </h1>
              <p className="text-gray-500 text-sm">50 min lesson</p>
            </span>
          </div>

          <button
            onClick={() => handleBooked()}
            className="btn bg-[#eb3b5a] hover:bg-[#d7334e] text-white rounded-lg px-4 py-2 transition"
          >
            Book Trial Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
