import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SchoolCard from "../components/SchoolCard";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 flex flex-col gap-6">
      <button 
        onClick={() => navigate("/")} 
        className="self-start bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>

      <h2 className="text-3xl font-bold mb-6 text-center">Schools List</h2>

      <div className="overflow-y-auto max-h-[70vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {schools.map(school => (
            <SchoolCard 
              key={school.id} 
              name={school.name} 
              address={school.address} 
              city={school.city} 
              state={school.state} 
              contact={school.contact} 
              email_id={school.email_id}
              image={`http://localhost:5000/schoolImages/${school.image}`} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}


