const Works = () => {
  return (
    <div className="lg:w-[1380px] mx-auto">
      <h1 className="text-4xl font-semibold py-10 mt-10">How We Works</h1>

      <div>

        {/* card1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Works;
