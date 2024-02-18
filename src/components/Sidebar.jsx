import { FaHome } from "react-icons/fa";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { MdOutlineManageHistory } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import shorticon from "../assets/images/shorticon.png";
import { CgProfile } from "react-icons/cg";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const menuItems = [
  {
    Link: "/",
    icon: <FaHome className="text-2xl m-4   " />,
    label: "Home",
  },
  {
    Link: "/shorts",
    icon: <img src={shorticon} className="h-10 w-10 m-2 " alt="" />,
    label: "Shorts",
  },
  {
    Link: "#",
    icon: <SubscriptionsIcon sx={{ fontSize: 22, margin: "15px" }} />,
    label: "Subscriptions",
  },
  {
    Link: "#",
    icon: <CgProfile className="text-xl mt-3 mx-4" />,
    label: "Your Channel",
  },
  {
    Link: "#",
    icon: <MdOutlineManageHistory className="text-2xl m-4" />,
    label: "History",
  },
  {
    Link: "#",
    icon: <GoVideo className="text-2xl m-4" />,
    label: "Your videos",
  },
  {
    Link: "#",
    icon: <CiClock2 className="text-2xl m-4" />,
    label: "Watch Later",
  },
];
function Sidebar() {
  const open = useSelector((state) => state.app.open);

  return (
    <div
      className={`bg-white top-16 h-screen w-auto z-10 left-0 flex overflow-y-auto fixed  transition-all`}
    >
      {/* Desktop */}
      <div>
        {menuItems.map((item, index) => (
          <Link to={item.Link} key={index}>
            <div className="flex justify-start items-center">
              <span>{item.icon}</span>
              {open ? (
                <p className="block transition-all px-6">{item.label}</p>
              ) : (
                <p className="hidden transition-all">{item.label}</p>
              )}
            </div>
          </Link>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
