import AboutImage from '../../../../assets/HeroLeilaMenezes.jpeg';

export function AboutUs() {
  const mensagem =
    'https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20clínica.';

  return (
    <section className="bg-sand px-6 py-7 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3">
      <div className="flex flex-col justify-center items-center">
        <img src="logo2.png" alt="" className="min-w-36 max-w-52" />
        <div className="flex flex-col justify-center items-center gap-5  col-span-2 ">
          <h1 className="text-xl md:text-2xl text-burgundy font-montserrat italic font-semibold max-w-96 min-w-64 ">
            DRA. LEILA MENEZES
          </h1>
          <p className="font-adamBold text-lg md:text-xl italic text-darkRose font-medium max-w-96 min-w-64">
            Contamos com uma estrutura moderna, com profissionais qualificados e
            tecnologias de última geração.
          </p>
          <p className="font-adamBold text-sm md:text-base  opacity-90 text-darkRose max-w-96 min-w-64">
            Nosso propósito é cuidar de você, respeitando a sua individualidade
            e os seus objetivos. "Sua pele em boas mãos"
          </p>
          <a href={mensagem} target="_blank">
            <button className="bg-burgundy w-full px-12 py-3 rounded-full text-white font-bold hover:opacity-70 duration-300">
              QUERO SABER MAIS!
            </button>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center py-6 md:py-0">
        <img
          src={AboutImage}
          alt="Imagem sobre a clínica"
          className="min-w-56 max-w-sm rounded-3xl"
        />
      </div>
    </section>
  );
}
