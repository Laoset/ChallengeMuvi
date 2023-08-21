import { useState } from "react";
import "./App.css";
import { NavBar, SideBar } from "./components/index.js";
import { Calendar, Home, Members, Settings } from "./views";
const App = () => {
  const [routing, setRouting] = useState("Members");

  const viewSelected = () => {
    switch (routing) {
      case "Members":
        return <Members />;
      case "Home":
        return <Home />;
      case "Settings":
        return <Settings />;
      case "Calendar":
        return <Calendar />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="flex flex-row">
        <SideBar setRouting={setRouting} />
        <div className="ml-20 p-6 w-full ">{viewSelected()}</div>
      </section>
    </div>
  );
};

export default App;
