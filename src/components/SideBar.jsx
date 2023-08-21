const sections = [
  {
    id: 1,
    title: "Home",
    src: "/home-2.svg",
    alt: "home",
  },
  {
    id: 2,
    title: "Members",
    src: "/users.svg",
    alt: "members",
  },
  { id: 3, title: "Calendar", src: "/calendar-event.svg", alt: "calendar" },
];

const SideBar = ({ setRouting }) => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__elements-container">
        <div className="flex flex-col gap-6">
          {sections.map(({ title, src, alt, id }) => (
            <button
              key={id}
              className="sidebar__buttons-style"
              onClick={() => setRouting(title)}
            >
              <img src={src} alt={alt} className="h-7" />
              <span className="text-[#5f5a69] text-sm">{title}</span>
            </button>
          ))}
        </div>
        <button
          className="sidebar__buttons-style"
          onClick={() => setRouting("Settings")}
        >
          <img src="/settings.svg" alt="settings" className="h-7" />
          <span className="text-[#5f5a69] text-sm">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
