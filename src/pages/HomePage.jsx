import { GiButterflyFlower } from "react-icons/gi";
import { CiSearch, CiHome, CiStickyNote } from "react-icons/ci";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications, IoIosLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Hero from "../components/Hero.jsx";
const HomePage = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Hero />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-24 min-h-full bg-base-200 text-base-content justify-between">
          <div className="flex flex-col justify-center items-stretch">
            <div className="flex flex-col justify-center items-stretch mb-8">
              <li className="p-2">
                <a>
                  <GiButterflyFlower size={20} />
                </a>
              </li>
              <li className="p-2">
                <a>
                  <CiSearch size={20} />
                </a>
              </li>
            </div>
            <li className="p-2">
              <a className="bg-primary">
                <CiHome size={20} />
              </a>
            </li>
            <li className="p-2">
              <a>
                <HiOutlineBanknotes size={20} />
              </a>
            </li>
            <li className="p-2">
              <a>
                <CiStickyNote size={20} />
              </a>
            </li>
            <li className="p-2">
              <a>
                <CgProfile size={20} />
              </a>
            </li>
          </div>
          <div>
            <li className="p-2">
              <a>
                <IoIosNotifications size={20} />
              </a>
            </li>
            <li className="p-2">
              <a>
                <IoIosLogOut size={20} />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
