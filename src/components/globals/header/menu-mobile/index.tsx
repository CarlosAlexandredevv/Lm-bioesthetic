import {
  HeartHandshake,
  House,
  Menu,
  ShoppingBasket,
  Stethoscope,
  Syringe,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NavLink } from 'react-router-dom';

export function MenuMobile() {
  const mensagem =
    'https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20clínica.';
  return (
    <header className="w-full h-16 bg-burgundy flex items-center justify-between px-8 shadow-md lg:hidden">
      <NavLink to="/">
        <img src="logo.png" alt="Logo" className="w-9" />
      </NavLink>
      <Sheet>
        <SheetTrigger>
          <Menu size={32} className="text-sand" />
        </SheetTrigger>

        <SheetContent
          side={'left'}
          className="flex flex-col gap-8 bg-burgundy border-none"
        >
          <div>
            <img src="logo.png" alt="Logo" className="w-9" />
          </div>
          <div className="flex flex-col gap-6">
            <NavLink
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
              to="/"
            >
              <span>
                <House />
              </span>
              Início
            </NavLink>
            <Accordion type="multiple" className="w-full flex flex-col gap-6">
              <AccordionItem
                value="item-1"
                className="border-none flex flex-col gap-3"
              >
                <AccordionTrigger className="flex items-center justify-start gap-2 decoration p-0 text-xl font-medium font-adamBold text-white">
                  <span>
                    <ShoppingBasket />
                  </span>
                  Produtos
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-3">
                  <AccordionItem
                    value="item-2"
                    className="border-none flex flex-col gap-3"
                  >
                    <NavLink
                      to="/produtos/capilar"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Capilar
                    </NavLink>
                    <NavLink
                      to="/produtos/facial"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Facial
                    </NavLink>
                    <NavLink
                      to="/produtos/corporal"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Corporal
                    </NavLink>
                  </AccordionItem>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-none flex flex-col gap-3"
              >
                <AccordionTrigger className="flex items-center justify-start gap-2 decoration p-0 text-xl font-medium font-adamBold text-white">
                  <span>
                    <Syringe />
                  </span>
                  Procedimentos
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-3">
                  <AccordionItem
                    value="item-2"
                    className="border-none flex flex-col gap-3"
                  >
                    <NavLink
                      to="/procedimentos/capilar"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Capilar
                    </NavLink>
                    <NavLink
                      to="/procedimentos/facial"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Facial
                    </NavLink>
                    <NavLink
                      to="/procedimentos/corporal"
                      className="flex items-center justify-start gap-2 decoration p-0 text-lg font-medium font-adamBold text-white"
                    >
                      Corporal
                    </NavLink>
                  </AccordionItem>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <NavLink
              to="resultados"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <HeartHandshake />
              </span>
              Resultados
            </NavLink>
            <NavLink
              to="leilamenezes"
              className="flex items-center gap-2 text-xl font-medium font-adamBold text-white"
            >
              <span>
                <Stethoscope />
              </span>
              Leila Menezes
            </NavLink>

            <a
              className="max-w-[225px] bg-green-600 p-3 rounded-lg flex justify-center items-center gap-2"
              href={mensagem}
              target="_blank"
            >
              <img src="zap.svg" className="size-6" alt="" />
              <button className="text-xl font-medium font-adamBold text-white">
                Fale conosco
              </button>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
