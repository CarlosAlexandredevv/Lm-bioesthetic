import { CardDTO } from '@/models/CardDTO';
import { Link } from 'react-router-dom';

type CardProps = {
  card: CardDTO;
};

export function Card({ card }: CardProps) {
  return (
    <Link
      className="w-full min-h-[250px] max-h-[250px] hover:scale-105 duration-300"
      to={`https://wa.me/5585985066530?text=${card.message}`}
      target="_blank"
    >
      <div
        style={{ backgroundImage: `url(${card.bg})` }}
        className="w-full min-h-[250px] max-h-[250px] bg-cover bg-center flex items-center justify-center relative rounded-lg"
      >
        <div className="w-full bg-sand  text-center h-[250px] opacity-75 rounded-lg"></div>
        <h1 className="absolute text-burgundy text-2xl font-bold max-w-44 text-center font-adamBold">
          {card.title}
        </h1>
      </div>
    </Link>
  );
}
