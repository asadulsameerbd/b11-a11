import { useSearchParams } from "react-router";

const FindTutorials = () => {
    const [searchParam] = useSearchParams()
    const language = searchParam.get('language')

  return (
    <div className="w-full bg-white">
      {/* Title */}
      <h1 className="text-center font-semibold text-xl md:text-4xl py-10">
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
            required
            placeholder="Search your favorite language tutor..."
            className="w-full outline-none bg-transparent"
          />
        </label>
      </div>

      {/* Content Section */}
      <div className="w-full px-5 md:px-10 lg:px-20">
        
      </div>
    </div>
  );
};

export default FindTutorials;
