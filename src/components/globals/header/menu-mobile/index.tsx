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
import logosheet from '../../../../assets/logosheet.png';

export function MenuMobile() {
  return (
    <header className="w-full h-16 bg-sand flex items-center justify-between px-8 shadow-md lg:hidden">
      <img src="logo.png" alt="Logo" className="w-9" />
      <Sheet>
        <SheetTrigger>
          <Menu size={32} className="text-burgundy" />
        </SheetTrigger>

        <SheetContent
          side={'left'}
          className="flex flex-col gap-8 bg-burgundy border-none"
        >
          <div>
            <img src={logosheet} alt="Logo" className="w-9" />
          </div>
          <div className="flex flex-col gap-3">
            <a
              className="flex items-center gap-2 text-2xl font-medium font-adamBold text-sand"
              href=""
            >
              <span>
                <House />
              </span>
              Home
            </a>
            <Accordion type="multiple" className="w-full">
              <AccordionItem
                value="item-1"
                className="border-none flex flex-col gap-3"
              >
                <AccordionTrigger className="flex items-center justify-start gap-2 decoration p-0 text-2xl font-medium font-adamBold text-white">
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
                    <AccordionTrigger className="flex items-center justify-start gap-2 decoration p-0 text-xl font-medium font-adamBold text-white">
                      Cabelo
                    </AccordionTrigger>
                    <AccordionContent className="p-0  font-medium font-adamBold text-lg text-lightCream flex flex-col gap-2">
                      <p>Calvicie</p>
                      <p>Implante</p>
                      <p>minoxidil</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-none flex flex-col gap-3"
                  >
                    <AccordionTrigger className="flex items-center justify-start gap-2 decoration p-0 text-xl font-medium font-adamBold text-white">
                      Pele
                    </AccordionTrigger>
                    <AccordionContent className="p-0  font-medium font-adamBold text-lg text-lightCream flex flex-col gap-2">
                      <p>Limpeza</p>
                      <p>Botox</p>
                      <p>Tirar mancha</p>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <a
              href=""
              className="flex items-center gap-2 text-2xl font-medium font-adamBold text-white"
            >
              <span>
                <Syringe />
              </span>
              Serviços
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-2xl font-medium font-adamBold text-white"
            >
              <span>
                <HeartHandshake />
              </span>
              Resultados
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-2xl font-medium font-adamBold text-white"
            >
              <span>
                <Stethoscope />
              </span>
              Leila Menezes
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
