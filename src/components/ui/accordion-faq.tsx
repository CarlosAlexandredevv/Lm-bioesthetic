import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionFaq() {
  return (
    <Accordion type="multiple" className="w-full bg-burgundy rounded-lg p-6">
      <AccordionItem className="border-sand" value="item-1">
        <AccordionTrigger className="text-white text-xl">
          Quais serviços a clínica oferece?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Nossa clínica oferece uma ampla gama de serviços, incluindo consultas
          médicas, exames laboratoriais, vacinação, fisioterapia e atendimento
          de urgência.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          Quais são os horários de funcionamento?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          A clínica funciona de segunda a sexta-feira, das 8h às 18h, e aos
          sábados, das 8h às 12h. Não abrimos aos domingos e feriados.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          Onde a clínica está localizada?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Estamos localizados na Rua das Flores, 123, no centro da cidade. Há
          estacionamento disponível para os pacientes.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          Como posso entrar em contato com a clínica?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Você pode entrar em contato conosco pelo telefone (11) 1234-5678 ou
          pelo email contato@clinicaflores.com. Também estamos disponíveis no
          WhatsApp pelo número (11) 98765-4321.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          A clínica aceita convênios?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Sim, aceitamos diversos convênios. Por favor, entre em contato para
          verificar se o seu convênio é aceito.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          Quais são as formas de pagamento aceitas?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Aceitamos pagamentos em dinheiro, cartão de crédito, cartão de débito
          e transferência bancária.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          A clínica oferece atendimento domiciliar?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Sim, oferecemos atendimento domiciliar para pacientes que necessitam
          de cuidados em casa.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8" className="border-sand">
        <AccordionTrigger className="text-white text-xl">
          Como posso agendar uma consulta?
        </AccordionTrigger>
        <AccordionContent className="text-sand font-adamBold font-semibold text-lg">
          Você pode agendar uma consulta pelo nosso site, pelo telefone (11)
          1234-5678 ou pelo WhatsApp (11) 98765-4321.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
