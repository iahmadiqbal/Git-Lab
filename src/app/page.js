import Heading from "./pages/heading";

export default function Home() {
  const users = [
    { id: 1, username: "Ali", position: "frontend", salary: "20k" },
    { id: 2, username: "Khan", position: "AI developer", salary: "50k" },
    { id: 3, username: "Fawad", position: "full-stack", salary: "60k" },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-6 p-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-5 w-64 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-black">Ali</h2>
          <p className="text-gray-600 mb-1">Position: frontend</p>
          <p className="text-gray-600">Salary: 20k</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-5 w-64 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-yellow-500">Khan</h2>
          <p className="text-gray-600 mb-1">Position: AI developer</p>
          <p className="text-gray-600">Salary: 50k</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-5 w-64 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-black">Fawad</h2>
          <p className="text-gray-600 mb-1">Position: full-stack</p>
          <p className="text-gray-600">Salary: 60k</p>
        </div>
      </div>
      {/* <Heading /> */}
    </>
  );
}
