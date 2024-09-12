import { Sparkle } from 'lucide-react';
type BallonProps = {
  content: string;
};

export function Ballon({ content }: BallonProps) {
  return (
    <div className="border-burgundy border-4 rounded-full shadow-md">
      <div className="min-w-52 max-w-72 min-h-full bg-burgundy flex flex-col items-center justify-center rounded-full gap-1 border-sand border-2 p-6 ">
        <Sparkle className="text-sand" size={28} />
        <h1 className="text-center font-adamBold font-semibold text-sand">
          {content}
        </h1>
      </div>
    </div>
  );
}
