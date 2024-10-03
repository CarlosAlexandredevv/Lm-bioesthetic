import { ResultsCards } from '@/components/ui/results-cards';
import { results } from './utils/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function Results() {
  const mensagem =
    'https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informacoes%20sobre%20os%20resultados.';
  return (
    <section
      id="resultados"
      className="h-auto bg-lightCream flex flex-col items-center w-full p-6 gap-8"
    >
      <h1 className="text-darkRose font-adamBold font-bold text-3xl text-center italic min-w-64 max-w-96">
        Os resultados que esperam por você:
      </h1>

      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {results.map((result) => (
          <ResultsCards
            key={result.id}
            title={result.title}
            description={result.description}
            before={result.before}
            after={result.after}
          />
        ))}{' '}
      </div>

      <Carousel className="relative w-full block sm:hidden overflow-hidden">
        <CarouselContent>
          {results.map((result) => (
            <CarouselItem key={result.id}>
              <ResultsCards
                title={result.title}
                description={result.description}
                before={result.before}
                after={result.after}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <a href={mensagem} target="_blank">
        <button className="bg-burgundy p-3 rounded-full text-lightCream font-bold uppercase hover:scale-110 duration-300">
          Quero meus resultados
        </button>
      </a>
    </section>
  );
}
