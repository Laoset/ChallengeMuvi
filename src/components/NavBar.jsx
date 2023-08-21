const NavBar = () => {
  return (
    <nav className="navbar__container">
      <h1 className="navbar__branch-title">Muvinai</h1>
      <div className="navbar__container-elements">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png"
          alt="profile-image"
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <p className="text-base text-white font-medium">Kevin Corman</p>
          <p className="text-sm text-gray-300">Receptionist</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
