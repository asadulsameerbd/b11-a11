import axios from "axios";
import { useEffect, useState } from "react";

const Stat = () => {
  const [tutors, setTutors] = useState([]);
  const [bookedTutors, setBookedTutors] = useState([]);

  useEffect(() => {
    // fetch all tutors
    axios
      .get("http://localhost:3000/addtutors")
      .then((res) => setTutors(res.data))
      .catch((error) => console.log("Error fetching tutors:", error));

    // fetch booked tutors
    axios
      .get("http://localhost:3000/bookedTutor", )
      .then((res) => setBookedTutors(res.data))
      .catch((error) => console.log("Error fetching booked tutors:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1380px] mx-auto">
      {/* Total Tutors */}
      <div className="stats shadow m-5 bg-[#9170d381]">
        <div className="stat">
          <div className="stat-value">{tutors.length}</div>
          <div className="stat-title">Total Tutors</div>
        </div>
      </div>

      {/* Total Reviews */}
      <div className="stats shadow m-5 bg-[#7093d381]">
        <div className="stat">
          <div className="stat-value">{bookedTutors.length}</div>
          <div className="stat-title">Total Reviews</div>
        </div>
      </div>

      {/* Total Languages */}
      <div className="stats shadow m-5 bg-[#70d38581]">
        <div className="stat">
          <div className="stat-value">{tutors.reduce((acc) => acc + 1, 0)}</div>
          <div className="stat-title">Total Languages</div>
        </div>
      </div>

      {/* Total Users */}
      <div className="stats shadow m-5 bg-[#d3ab7081]">
        <div className="stat">
          <div className="stat-value">
            {new Set(bookedTutors.map((t) => t.bookedBy)).size}
          </div>
          <div className="stat-title">Total Users</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
