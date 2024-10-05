import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-burgundy">
      <div className="w-full flex flex-col justify-center md:flex-row gap-5 p-6">
        <div className="flex flex-col justify-center gap-5 border-b border-white pb-5 md:border-b-0 md:border-r md:pr-3">
          <a
            href="https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20clínica"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img className="w-6" src="zapfooter.svg" alt="" />
            <p className="text-white font-semibold text-center font-adamBold hover:text-sand duration-300">
              (85) 98506-6530
            </p>
          </a>

          <a
            href="https://www.instagram.com/leilamenezesoficial/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Instagram className="text-sand" />
            <p className="text-white font-semibold text-center font-adamBold hover:text-sand duration-300">
              leilamenezesoficial
            </p>
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.801020380397!2d-38.5414956!3d-3.7665537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74eccbe95b4f9%3A0x6ab347a63d751b9d!2sLeila%20Menezes%20Bioesthetic!5e0!3m2!1spt-BR!2sbr!4v1728128444437!5m2!1spt-BR!2sbr"></iframe>
        </div>
        <div className="flex flex-col items-center border-t border-white pb-5 md:border-t-0 md:border-l lg:pl-5 md:pl-3">
          <img className="w-40" src="logofooter.png" alt="" />
          <p className="text-white font-semibold text-center md:text-start  font-adamBold w-56">
            Dra. Leila Menezes 2024 © Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
