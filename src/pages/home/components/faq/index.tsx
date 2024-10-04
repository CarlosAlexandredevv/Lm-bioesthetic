import { AccordionFaq } from '@/components/ui/accordion-faq';

export function FAQ() {
  return (
    <section className="w-full flex flex-col gap-6 justify-center items-center mx-0 h-auto bg-sand p-6">
      <h1 className="text-burgundy font-adamBold font-bold text-3xl text-center italic min-w-64 max-w-96">
        Dúvidas Frequentes
      </h1>
      <div className="md:w-[600px] lg:w-[800px]">
        <AccordionFaq />
      </div>
    </section>
  );
}
