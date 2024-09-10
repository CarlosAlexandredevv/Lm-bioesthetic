import { Card } from '@/components/ui/card';
import { procedimentos } from './utils/data';
import { Link } from 'react-router-dom';

export function Procedures() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-burgundy flex flex-col items-center p-6 gap-6">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-sand font-adamBold font-semibold text-3xl text-center italic">
          Nossos
        </h2>
        <h2 className="text-sand font-adamBold font-bold text-4xl text-center italic">
          Procedimentos
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 container h-full justify-items-center py-6">
        {procedimentos.map((procedimento) => (
          <Card card={procedimento} key={procedimento.id} />
        ))}
      </div>
      <Link to="/procedimentos">
        <button className="bg-sand p-3 font-adamBold text-burgundy font-bold rounded-full hover:scale-110 duration-300">
          MAIS PROCEDIMENTOS
        </button>
      </Link>
    </section>
  );
}
