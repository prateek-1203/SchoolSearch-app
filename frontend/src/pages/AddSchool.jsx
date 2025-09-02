import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddSchool() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    try {
      await axios.post("http://localhost:5000/schools", formData);
      toast.success("School added successfully!");
      reset(); // Clear form
      setTimeout(() => navigate("/"), 1500); // Redirect to Home after 1.5s
    } catch (err) {
      console.log(err);
      toast.error("Failed to add school!");
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow bg-white">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-2xl font-bold mb-6 text-center">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("name", { required: true })} placeholder="Name" className="border p-2 rounded"/>
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input {...register("address", { required: true })} placeholder="Address" className="border p-2 rounded"/>
        {errors.address && <span className="text-red-500">Address is required</span>}

        <input {...register("city", { required: true })} placeholder="City" className="border p-2 rounded"/>
        {errors.city && <span className="text-red-500">City is required</span>}

        <input {...register("state", { required: true })} placeholder="State" className="border p-2 rounded"/>
        {errors.state && <span className="text-red-500">State is required</span>}

        <input {...register("contact", { required: true, pattern: /^\d{10}$/ })} placeholder="Contact" className="border p-2 rounded"/>
        {errors.contact && <span className="text-red-500">Enter a valid 10-digit number</span>}

        <input {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="border p-2 rounded"/>
        {errors.email_id && <span className="text-red-500">Enter a valid email</span>}

        <input type="file" {...register("image", { required: true })} className="border p-2 rounded"/>
        {errors.image && <span className="text-red-500">Image is required</span>}

        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mt-2">
          Add School
        </button>
      </form>
    </div>
  )
}
