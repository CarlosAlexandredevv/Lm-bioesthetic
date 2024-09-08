import { NavLink } from 'react-router-dom';
import { MenuMobile } from './menu-mobile';
import { Phone } from 'lucide-react';

export function Header() {
  const mensagem =
    'https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20clínica.';
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
              Início
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
            <a
              className="max-w-[225px] bg-green-600 p-2 rounded-lg flex justify-center items-center gap-2"
              href={mensagem}
              target="_blank"
            >
              <Phone className="text-white" />
              <p className="text-xl font-medium font-adamBold text-white">
                Fale conosco
              </p>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
