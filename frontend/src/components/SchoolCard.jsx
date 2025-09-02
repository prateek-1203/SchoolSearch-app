export default function SchoolCard({ name, address, city, state, contact, email_id, image }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
    
      <div className="w-full flex items-center justify-center bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm"><strong>Address:</strong> {address}</p>
        <p className="text-gray-600 text-sm"><strong>City:</strong> {city}</p>
        <p className="text-gray-600 text-sm"><strong>State:</strong> {state}</p>
        <p className="text-gray-600 text-sm"><strong>Contact:</strong> {contact}</p>
        <p className="text-gray-600 text-sm"><strong>Email:</strong> {email_id}</p>
      </div>
    </div>
  )
}
