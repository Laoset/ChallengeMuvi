const NavBar = () => {
  return (
    <nav className="bg-[#272A2F] w-full h-20 flex flex-row items-center px-6 justify-between">
      <h1 className="text-white font-extrabold text-4xl">Muvinai</h1>
      <div className="flex flex-row gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png"
          alt="profile-image"
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <p className="text-lg text-white font-medium">Kevin Corman</p>
          <p className="text-md text-gray-300">Recepcionista</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
