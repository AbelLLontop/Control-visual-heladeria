import { NavLink } from "react-router-dom";
import { routesLinks } from "../routesLinks";

const IconScreen = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
  >
    <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H368c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288H96z" />
  </svg>
);



const Aside = () => {
  return (
    <aside className="text-sm fixed z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl bg-white border border-slate-200 ">
      <div className="relative">
        <div className="flex items-center justify-center pt-4">
          <img
            src="/img/logo_frost_deligh-removebg-preview.png"
            className="w-[8rem]"
          />
        </div>
      </div>
      <div>
        <ul className="p-4 flex flex-col">
          {routesLinks.map((route, index) => (
            <li
              key={index}
             
            >
              <NavLink  
              className={({ isActive }) => `${(isActive ? 'shadow-lg shadow-cyan-500/50 bg-cyan-500 text-white' : '')} rounded-md p-4 flex gap-2 items-center `}
              to={route.path}>
                <IconScreen />
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
