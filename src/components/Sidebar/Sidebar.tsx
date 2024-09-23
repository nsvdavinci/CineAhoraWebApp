import React from "react";
import { BarIcon, XCircleIcon } from "@/assets";
import { colorMap } from "@/constants";
import { PATHS } from "@/routes";
import { Link } from "react-router-dom";

export const Sidebar: React.FC<{
  routes: React.ReactNode;
}> = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return showMenu ? (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black flex flex-col">
      <button className="flex mb-4 py-4 px-2" onClick={toggleMenu}>
        <XCircleIcon fill={colorMap.WHITE} />
      </button>
      <div className="flex flex-col justify-center text-white font-bold gap-y-4 px-4">
        <Link to={PATHS.HOME}>
          <span>Peliculas</span>
        </Link>
        <Link to={PATHS.OFFERS}>
          <span>Promociones</span>
        </Link>
        <Link to={PATHS.ABOUT_US}>
          <span>Sobre nosotros</span>
        </Link>
      </div>
    </div>
  ) : (
    <button className="sm:hidden" onClick={toggleMenu}>
      <BarIcon fill={colorMap.WHITE} />
    </button>
  );
};
