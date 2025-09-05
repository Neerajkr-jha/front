import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    gender: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://forms-6kkr.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
    } catch (err) {
      console.error(err);
      alert("error submitting form");
    }
  };

  return (
    <div className="bg-amber-200 h-auto w-90 flex justify-center p-10 rounded-xl shadow-md">
      <form className="flex flex-col gap-4 w-full " onSubmit={handleSubmit}>
        <h3 className="text-black text-xl font-semibold text-center">
          Registration Form
        </h3>

        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-black-400 rounded px-2 py-1"
          />
        </div>

        {/* Branch */}
        <div className="flex flex-col">
          <label className="mb-1">Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="border border-black-400 rounded px-2 py-1"
          >
            <option value="">Select</option>
            <option value="ds">CSE DS</option>
            <option value="aiml">CSE AIML</option>
            <option value="it">IT</option>
            <option value="cse">CSE</option>
          </select>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="mb-1">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "others"}
                onChange={handleChange}
              />{" "}
              Others
            </label>
          </div>
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="mb-1">Select Your City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border border-black-400 rounded px-2 py-1"
          >
            <option value="">Select</option>
            <option value="GZB">Ghaziabad</option>
            <option value="MRT">Meerut</option>
            <option value="NDA">Noida</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-white w-30 mx-21 my-7 rounded-lg outline-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
