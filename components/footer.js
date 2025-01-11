export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className=" bg-gray-200 py-4">
        <div className="mx-auto  text-center text-gray-600">
          &copy; {year} My Website. All rights reserved.
        </div>
      </footer>
    </>
  );
}
