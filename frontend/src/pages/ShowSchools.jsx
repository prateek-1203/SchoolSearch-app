import { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "../components/SchoolCard";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.log(err));
  }, []);

  
  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Schools List</h2>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name, city, or state..."
          className="w-full sm:w-1/2 border p-2 rounded shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[70vh] overflow-y-auto">
        {filteredSchools.length > 0 ? (
          filteredSchools.map(school => (
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
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No schools found</p>
        )}
      </div>
    </div>
  );
}



