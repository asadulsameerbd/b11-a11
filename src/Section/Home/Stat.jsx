const Stat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white lg:w-[1380px] mx-auto">
      {/* start  1 */} 
      <div className="stats shadow mx-5 bg-[#9170d381]">
        <div className="stat">
          <div className="stat-title">Total Tutors</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
      {/* start  2 */}
      <div className="stats shadow mx-5 bg-[#7093d381]">
        <div className="stat">
          <div className="stat-title">Total Reviews</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
      {/* start  3 */}
      <div className="stats shadow mx-5 bg-[#70d38581]">
        <div className="stat">
          <div className="stat-title">Total Languages</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
      {/* start  4 */}
      <div className="stats shadow mx-5 bg-[#d3ab7081]">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
