import { getItems } from "@/lib/items";

import DeleteButton from "./button";

export default function Request() {
  // const [requests, setRequests] = useState([]);

  // useEffect(() => {
  //   // Get stored requests from localStorage
  //   const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
  //   setRequests(storedRequests);
  // }, []);

  const requests = getItems();
  // ///////
  // const handleDelete = (id) => {
  //   // Delete the item from the database
  //   deleteItem(id);

  //   // Reload the page to reflect the changes
  //   window.location.reload();
  // };

  // const [requests, setRequests] = useState(getItems());

  // const handleDelete = (id) => {
  //   // Update the state to remove the deleted item
  //   setRequests((prevRequests) =>
  //     prevRequests.filter((request) => request.id !== id)
  //   );
  // };

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
            {/* <DeleteButton id={request.id} onDelete={handleDelete} /> */}
          </div>
        ))}
      </div>
    </>
  );
}
