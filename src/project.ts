import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import Slide1 from './scenes/Slide1?scene';
import Slide2 from './scenes/Slide2?scene';
import Slide3 from './scenes/Slide3?scene';
import Slide4 from './scenes/Slide4?scene';

import './global.css'; // <- import the css

export default makeProject({
  scenes: [intro,Slide1,Slide2,Slide3,Slide4],
});



/*
Qual o trabalho principal?
O que é ofuscação e diversificação? (definição formal) 
Porque usar Ofuscaão e diversificação? (forma geral: atrasar engenharia reversa)

Porque dificultar a engenharia reversa? (DRM e Segurança)

Avanços da pesquisa (Descrever o que foi feito no trabalho: Ajuste de termos e nomes, 
coletanea de dados e (o mais importate) classificação e nomeação dos métodos de ofuscação e 
diversificação)

*/