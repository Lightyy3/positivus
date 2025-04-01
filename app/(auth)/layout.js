const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-center items-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        <img
          src="/images/110.svg"
          alt="Logo"
          className="h-auto max-h-full  max-w-full object-contain"
        />
      </div>

      {/* Right side with the current content */}
      <div className="flex justify-center items-center  bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
