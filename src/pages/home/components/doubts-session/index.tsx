import { Ballon } from '@/components/ui/ballon';
import { ballons } from './utils/data';

export function Doubts() {
  return (
    <section className="min-h-[calc(100vh-9rem)] bg-sand flex flex-col items-center w-full  gap-6 p-6">
      <h1 className="text-burgundy font-adamBold font-bold text-3xl text-center italic min-w-64 max-w-96">
        Os tratamentos são para você que sentiu que:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {ballons.map((ballon) => (
          <Ballon key={ballon.id} content={ballon.content} />
        ))}
      </div>
    </section>
  );
}
