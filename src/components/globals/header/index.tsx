import { NavLink } from 'react-router-dom';
import { MenuMobile } from './menu-mobile';
import {
  HeartHandshake,
  House,
  ShoppingBasket,
  Stethoscope,
  Syringe,
} from 'lucide-react';
import logosheet from '../../../assets/logosheet.png';

export function Header() {
  return (
    <>
      <MenuMobile />
      <header className="h-16 bg-burgundy hidden lg:flex px-8 shadow-md">
        <div className="flex justify-between items-center container mx-auto">
          <img src={logosheet} alt="Logo" className="w-9" />
          <nav className="flex items-center gap-5">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <House />
              </span>
              Home
            </NavLink>
            <NavLink
              to="/produtos"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <ShoppingBasket />
              </span>
              Produtos
            </NavLink>
            <NavLink
              to="/servicos"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <Syringe />
              </span>
              Serviços
            </NavLink>
            <NavLink
              to="/resultados"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <HeartHandshake />
              </span>
              Resultados
            </NavLink>
            <NavLink
              to="/leilamenezes"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <Stethoscope />
              </span>
              Leila Menezes
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
