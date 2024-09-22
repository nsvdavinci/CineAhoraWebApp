import React from "react";
import { logo, UserIcon } from "../../assets";
import { colorMap } from "../../constants";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/routes";

const Header: React.FC = () => {
  return (
    <nav className="flex bg-black px-2 py-4 items-center">
      <Link to={PATHS.HOME}>
        <div className="flex font-bold items-center gap-x-2">
          <img src={logo} className="h-8" />
          <div className="text-xl">
            <span className="text-primary">Cine</span>
            <span className="text-white">Ahora</span>
          </div>
        </div>
      </Link>
      <div className="flex-1 flex flex-row justify-center text-white font-bold gap-x-4">
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
      <UserIcon fill={colorMap.WHITE} />
    </nav>
  );
};

Header.displayName = "Header";

export { Header };
