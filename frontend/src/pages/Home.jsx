export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-100 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center">School Management App</h1>
      <p className="text-gray-600 text-center">Add and view schools easily</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/add" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition text-center">
          Add School
        </a>
        <a href="/show" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-center">
          Show Schools
        </a>
      </div>
    </div>
  )
}


