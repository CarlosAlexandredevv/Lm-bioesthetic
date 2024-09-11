import { NavLink } from 'react-router-dom';
import { MenuMobile } from './menu-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
              className="flex items-center text-xl font-medium font-adamBold text-white hover:opacity-70 duration-300"
            >
              Início
            </NavLink>

            <NavigationMenu>
              <NavigationMenuList className="flex gap-5">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      to="/procedimentos"
                      className="flex items-center gap-2 text-xl font-medium font-adamBold text-white hover:opacity-70 duration-300"
                    >
                      Procedimentos
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex items-center flex-col gap-2 w-full px-4 py-3 bg-lightCream text-x text-burgundy font-medium font-adamBold">
                    <NavLink
                      className="w-full text-center hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-6 py-1 border-2 border-burgundy"
                      to="/procedimentos"
                    >
                      Capilar
                    </NavLink>
                    <NavLink
                      className="w-full text-center hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-6 py-1 border-2 border-burgundy"
                      to="/procedimentos"
                    >
                      Facial
                    </NavLink>
                    <NavLink
                      className="w-full text-center hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-6 py-1 border-2 border-burgundy"
                      to="/procedimentos"
                    >
                      Corporal
                    </NavLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      to="/produtos"
                      className="flex items-center gap-2 text-xl font-medium font-adamBold text-white hover:opacity-70 duration-300"
                    >
                      Produtos
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex items-center flex-col gap-2 w-full px-2 py-3 bg-lightCream text-x text-burgundy font-medium font-adamBold">
                    <NavLink
                      className="w-full text-center hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-2 py-1 border-2 border-burgundy"
                      to="/produtos"
                    >
                      Capilar
                    </NavLink>
                    <NavLink
                      className="w-full text-center hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-2 py-1  border-2 border-burgundy"
                      to="/produtos"
                    >
                      Facial
                    </NavLink>
                    <NavLink
                      className="hover:bg-burgundy hover:text-lightCream rounded-md duration-300 px-2 py-1  border-2 border-burgundy"
                      to="/produtos"
                    >
                      Corporal
                    </NavLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink
              to="/resultados"
              className="flex items-center text-xl font-medium font-adamBold text-white hover:opacity-70 duration-300"
            >
              Resultados
            </NavLink>
            <NavLink
              to="/leilamenezes"
              className="flex items-center  text-xl font-medium font-adamBold text-white hover:opacity-70 duration-300"
            >
              Leila Menezes
            </NavLink>
            <a
              className="max-w-[225px] bg-green-600 p-2 rounded-lg flex justify-center items-center gap-2 hover:opacity-80 duration-300"
              href={mensagem}
              target="_blank"
            >
              <img src="zap.svg" className="size-6" alt="" />
              <button className="text-xl font-medium font-adamBold text-white">
                Fale conosco
              </button>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
