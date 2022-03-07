import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/BigSidebar";
import { FaTimes, FaHome } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
