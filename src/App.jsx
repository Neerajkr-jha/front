import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Username: "",
    password:"",
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
        <h3 className="text-black text-xl font-semibold text-center">Login</h3>

        <div className="flex flex-col w-full">
          <label className="mb-1">Username</label>
          <input
            type="text"
            name="Userame"
            placeholder="Username"
            value={formData.Username}
            onChange={handleChange}
            className="border border-black-400 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-black-400 rounded px-2 py-1"
          />
        </div>

        <button
          type="submit"
          className="bg-white w-30 mx-21 my-7 rounded-lg outline-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
