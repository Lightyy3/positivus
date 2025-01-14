import { getItems } from "@/lib/items";

export default function Request() {
  const requests = getItems();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-bold">
        {requests.map((request, index) => (
          <div
            key={index}
            className="shadow-lg rounded-3xl p-6 border border-green-300 hover:shadow-xl "
          >
            <h2 className="text-2xl  text-green-600 mb-4">
              Name: {request.name}
            </h2>
            <p className="text-gray-700 break-words ">Email: {request.email}</p>
            <p className="text-gray-700">Service: {request.service}</p>
            <p className="text-gray-700">Details: {request.details}</p>
            {request.budget && (
              <p className="text-gray-700">Budget: {request.budget}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
