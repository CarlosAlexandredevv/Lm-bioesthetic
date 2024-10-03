import { cn } from '@/lib/utils';
import Marquee from '../ui/marquee';

const reviews = [
  {
    name: 'Ana Silva',
    username: '@ana',
    body: 'O atendimento foi excelente e superou minhas expectativas!',
    img: 'https://avatar.vercel.sh/ana',
  },
  {
    name: 'Carlos Pereira',
    username: '@carlos',
    body: 'Serviço rápido e eficiente. Recomendo a todos!',
    img: 'https://avatar.vercel.sh/carlos',
  },
  {
    name: 'Mariana Souza',
    username: '@mariana',
    body: 'Equipe muito atenciosa e profissional. Fiquei muito satisfeita.',
    img: 'https://avatar.vercel.sh/mariana',
  },
  {
    name: 'Roberto Lima',
    username: '@roberto',
    body: 'Qualidade impecável e atendimento de primeira. Voltarei com certeza!',
    img: 'https://avatar.vercel.sh/roberto',
  },
  {
    name: 'Fernanda Costa',
    username: '@fernanda',
    body: 'Adorei o serviço! Muito rápido e eficiente.',
    img: 'https://avatar.vercel.sh/fernanda',
  },
  {
    name: 'Lucas Almeida',
    username: '@lucas',
    body: 'Profissionais muito competentes e atendimento excelente.',
    img: 'https://avatar.vercel.sh/lucas',
  },
  {
    name: 'Juliana Oliveira',
    username: '@juliana',
    body: 'Fiquei muito satisfeita com o atendimento. Recomendo!',
    img: 'https://avatar.vercel.sh/juliana',
  },
  {
    name: 'Juliana Oliveira',
    username: '@juliana',
    body: 'Fiquei muito satisfeita com o atendimento. Recomendo!',
    img: 'https://avatar.vercel.sh/juliana',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:opacity-80 bg-sand',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] bg-sand',
      )}
    >
      <div className="flex flex-row items-center gap-2 bg">
        <img className="rounded-full" width="56" height="56" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm  text-burgundy font-adamBold font-bold">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white opacity-60">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white font-adamBold font-semibold">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeComments() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-burgundy md:shadow-xl">
      <h1 className="absolute  top-2 text-sand font-adamBold font-bold text-3xl text-center italic min-w-64 max-w-96">
        O que nossos clientes acham da gente:
      </h1>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
