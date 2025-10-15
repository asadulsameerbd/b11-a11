import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const tutorial = {
      name: user?.displayName,
      email: user?.email,
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
      rating: form.rating.value,
    };
    console.log("Submitting tutorial:", tutorial);
    
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-center font-semibold text-xl md:text-3xl lg:text-4xl mb-8">
        Add Tutorials Page
      </h1>
      <div className="card bg-base-100 w-[90%] md:w-[800px] lg:w-[1100px] mx-auto shadow-xl">
        <div className="card-body p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left column */}
            <div className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Image URL</label>
                <input
                  type="url"
                  name="image"
                  placeholder="Tutorial Image URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">Language</label>
                <input
                  type="text"
                  name="language"
                  placeholder="Enter the language"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                  min="0"
                  step="any"
                  required
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div>
                <label className="label">Description</label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Write tutorial description"
                  required
                />
              </div>

              <div>
                <label className="label">Rating (0 to 5)</label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Out of 5"
                  className="input input-bordered w-full"
                  min="0"
                  max="5"
                  step="0.1"
                  defaultValue={0}
                  onInput={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val > 5) e.target.value = 5;
                    if (val < 0) e.target.value = 0;
                  }}
                />
              </div>

              <div className="mt-6">
                <button type="submit" className="btn btn-neutral w-full">
                  Add Tutorial
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
