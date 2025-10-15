import { FaLanguage } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
const categorys = [
  { id: 1, name: "English", image: "/images/english" },
  { id: 2, name: "Bangla", image: "/images/english" },
  { id: 3, name: "Spanish", image: "/images/english" },
  { id: 4, name: "Japanese", image: "/images/english" },
  { id: 5, name: "German", image: "/images/english" },
  { id: 6, name: "korean", image: "/images/english" },
  { id: 7, name: "chinese", image: "/images/english" },
  { id: 8, name: "Hindi", image: "/images/english" },
  { id: 9, name: "Arabic", image: "/images/english" },
];

const Catagory = () => {

  const navigate = useNavigate()

  // btn

  const handleClick = (language) =>{
    navigate(`/find-tutors?language=${language}`)
  }
 
  return (
    <div>
      <div className="lg:w-[1380px] mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold  py-13">
          Discover the perfect Tutor for your Learning journey
        </h1>
      </div>
      <div className="lg:w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categorys.map((category) => (
          <button key={category.id} onClick={()=>handleClick(category.name)}>
            <div className="flex cursor-pointer justify-between m-3 rounded-xl  gap-10 border-2 p-5  items-center hover:bg-[#ff545d] hover:text-white">
              <span>
                <FaLanguage size={30} />
              </span>
              <span>
                <p>{category.name}</p>
              </span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
