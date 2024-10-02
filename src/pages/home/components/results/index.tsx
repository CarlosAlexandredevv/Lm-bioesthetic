import { ResultsCards } from '@/components/ui/results-cards';
import { results } from './utils/data';

export function Results() {
  const mensagem =
    'https://wa.me/5585985066530?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20mais%20informacoes%20sobre%20os%20resultados.';
  return (
    <section className="min-h-[calc(100vh-10rem)] bg-lightCream flex flex-col items-center w-full p-6 gap-8">
      <h1 className="text-darkRose font-adamBold font-bold text-3xl text-center italic min-w-64 max-w-96">
        Os resultados que esperam por você:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {results.map((result) => (
          <ResultsCards
            key={result.id}
            title={result.title}
            description={result.description}
            before={result.before}
            after={result.after}
          />
        ))}
      </div>

      <a href={mensagem} target="_blank">
        <button className="bg-burgundy p-3 rounded-full text-lightCream font-bold hover:opacity-70 duration-300 uppercase">
          Quero meus resultados
        </button>
      </a>
    </section>
  );
}
