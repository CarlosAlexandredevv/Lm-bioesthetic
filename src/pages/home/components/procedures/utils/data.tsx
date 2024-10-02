import { CardDTO } from '@/models/CardDTO';
import { BASE_MESSAGE_WPP } from '@/utils/system';

import clareamentoImg from '@/assets/procedures/clareamento.jpg';
import botoxImg from '@/assets/procedures/botox.jpg';
import detoxImg from '@/assets/procedures/detox.jpg';
import estriasImg from '@/assets/procedures/estrias.jpg';
import seborreiaImg from '@/assets/procedures/seborreia.jpg';
import calvicieImg from '@/assets/procedures/calvicie.jpg';
import peelingImg from '@/assets/procedures/peeling.jpg';
import preenchimentoImg from '@/assets/procedures/preenchimento.jpg';

export const procedimentos: CardDTO[] = [
  {
    id: 1,
    bg: botoxImg,
    title: 'BOTOX',
    message: `${BASE_MESSAGE_WPP}Botox.`,
  },
  {
    id: 2,
    bg: preenchimentoImg,
    title: 'PREENCHIMENTO',
    message: `${BASE_MESSAGE_WPP}preenchimento`,
  },
  {
    id: 3,
    bg: clareamentoImg,
    title: 'CLAREAMENTO',
    message: `${BASE_MESSAGE_WPP}clareamento.`,
  },
  {
    id: 4,
    bg: detoxImg,
    title: 'DETOX',
    message: `${BASE_MESSAGE_WPP}Detox`,
  },
  {
    id: 5,
    bg: estriasImg,
    title: 'ESTRIAS',
    message: `${BASE_MESSAGE_WPP}estrias`,
  },
  {
    id: 6,
    bg: seborreiaImg,
    title: 'SEBORREIA',
    message: `${BASE_MESSAGE_WPP}seborreia`,
  },
  {
    id: 7,
    bg: calvicieImg,
    title: 'CALVÍCIE',
    message: `${BASE_MESSAGE_WPP}calvície`,
  },
  {
    id: 8,
    bg: peelingImg,
    title: 'PEELING',
    message: `${BASE_MESSAGE_WPP}Peeling`,
  },
];
