import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const UpdateTutors = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tutorData, setTutorsData] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`https://b11-a11-server-azure.vercel.app/update-tutor/${id}`)
        .then((res) => res.json())
        .then((data) => setTutorsData(data));
    }
  }, [user, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedTutor = {
      name: form.name.value,
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
    };

    fetch(`https://b11-a11-server-azure.vercel.app/update-tutor/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTutor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Tutorial Updated Successfully",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Tutorial Already Updated",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="py-20">
        <h1 className="text-center font-semibold text-xl md:text-3xl lg:text-4xl mb-8">
          Update Tutor
        </h1>
        <div className="card bg-[#D36F74] w-[90%] md:w-[800px] lg:w-[1100px] mx-auto shadow-xl">
          <div className="card-body p-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left column */}
              <div className="space-y-4">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName || ""}
                    placeholder="Enter your name"
                    className="input input-bordered w-full cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="label">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Tutorial Image URL"
                    className="input input-bordered w-full"
                    defaultValue={tutorData.image}
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
                    defaultValue={tutorData.language}
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
                    defaultValue={tutorData.price}
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
                    defaultValue={tutorData.description}
                  />
                </div>

                <div>
                  <label className="label">Rating (0 to 5)</label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Out of 5"
                    className="input input-bordered w-full cursor-not-allowed"
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
                  <button
                    type="submit"
                    className="btn bg-[#eb3b5a] text-white border border-black w-full"
                  >
                    Update Tutorial
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTutors;
