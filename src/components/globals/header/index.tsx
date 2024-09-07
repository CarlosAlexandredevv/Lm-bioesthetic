import { NavLink } from 'react-router-dom';
import { MenuMobile } from './menu-mobile';

export function Header() {
  return (
    <>
      <MenuMobile />
      <header className="h-16 bg-burgundy hidden lg:flex px-8 shadow-md">
        <div className="flex justify-between items-center container mx-auto">
          <NavLink to="/">
            <img src="logo.png" alt="Logo" className="w-9" />
          </NavLink>
          <nav className="flex items-center gap-5">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              Inicío
            </NavLink>
            <NavLink
              to="/produtos"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              Produtos
            </NavLink>
            <NavLink
              to="/servicos"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              Procedimentos
            </NavLink>
            <NavLink
              to="/resultados"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              Resultados
            </NavLink>
            <NavLink
              to="/leilamenezes"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              Leila Menezes
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
