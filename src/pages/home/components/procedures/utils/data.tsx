import { CardDTO } from '@/models/CardDTO';
import { BASE_MESSAGE_WPP } from '@/utils/system';

export const procedimentos: CardDTO[] = [
  {
    id: 1,
    bg: 'src/assets/procedures/clareamento.jpg',
    title: 'CLAREAMENTO',
    message: `${BASE_MESSAGE_WPP}clareamento.`,
  },
  {
    id: 2,
    bg: 'src/assets/procedures/botox.jpg',
    title: 'BOTOX',
    message: `${BASE_MESSAGE_WPP}Botox.`,
  },
  {
    id: 3,
    bg: 'src/assets/procedures/detox.jpg',
    title: 'DETOX',
    message: `${BASE_MESSAGE_WPP}Detox`,
  },
  {
    id: 4,
    bg: 'src/assets/procedures/estrias.jpg',
    title: 'ESTRIAS',
    message: `${BASE_MESSAGE_WPP}estrias`,
  },
  {
    id: 5,
    bg: 'src/assets/procedures/seborreia.jpg',
    title: 'SEBORREIA',
    message: `${BASE_MESSAGE_WPP}seborreia`,
  },
  {
    id: 6,
    bg: 'src/assets/procedures/calvicie.jpg',
    title: 'CALVÍCIE',
    message: `${BASE_MESSAGE_WPP}calvície`,
  },
  {
    id: 7,
    bg: 'src/assets/procedures/peeling.jpg',
    title: 'PEELING',
    message: `${BASE_MESSAGE_WPP}Peeling`,
  },
  {
    id: 8,
    bg: 'src/assets/procedures/preenchimento.jpg',
    title: 'PREENCHIMENTO',
    message: `${BASE_MESSAGE_WPP}preenchimento`,
  },
];
