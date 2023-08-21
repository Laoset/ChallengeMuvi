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
    <div className="bg-[#D9D9D9] w-20 h-full fixed">
      <div className="w-full flex flex-col h-full justify-around">
        <div className="flex flex-col gap-6">
          {sections.map(({ title, src, alt, id }) => (
            <button
              key={id}
              className="flex flex-col items-center"
              onClick={() => setRouting(title)}
            >
              <img src={src} alt={alt} className="h-7" />
              <span className="text-sm">{title}</span>
            </button>
          ))}
        </div>
        <button className="flex flex-col items-center">
          <img src="/settings.svg" alt="settings" className="h-7" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
