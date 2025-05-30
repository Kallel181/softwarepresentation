import {makeProject} from '@motion-canvas/core';
import {HighlightStyle} from '@codemirror/language';

import {Code, LezerHighlighter} from '@motion-canvas/2d';
import {tags} from '@lezer/highlight';
import {parser} from '@lezer/cpp';

export const MyStyle = HighlightStyle.define([
  {tag: tags.keyword, color: '#c792ea'},             // roxo claro
  {tag: tags.controlKeyword, color: '#ffcb6b'},       // amarelo ouro
  {tag: tags.definitionKeyword, color: '#82aaff'},    // azul claro

  {tag: tags.variableName, color: '#ffffff'},         // branco
  {tag: tags.function(tags.variableName), color: '#82aaff'}, // azul claro
  {tag: tags.typeName, color: '#f07178'},             // rosa avermelhado
  {tag: tags.className, color: '#f78c6c'},             // laranja suave

  {tag: tags.string, color: '#c3e88d'},               // verde claro
  {tag: tags.number, color: '#ff5370'},               // vermelho suave
  {tag: tags.bool, color: '#ff5370'},
  {tag: tags.null, color: '#ff5370'},

  {tag: tags.comment, color: '#c792ea', fontStyle: 'italic'}, // cinza azulado

  {tag: tags.operator, color: '#89ddff'},             // azul neon
  {tag: tags.punctuation, color: '#89ddff'},          // mesmo azul dos operadores

  {tag: tags.meta, color: '#7fdbca'},                 // azul esverdeado
  {tag: tags.annotation, color: '#f78c6c'},           // laranja
  {tag: tags.attributeName, color: '#ffcb6b'},        // amarelo ouro

  {tag: tags.invalid, color: '#ffffff', backgroundColor: '#ff5370'}, // erro: texto branco com fundo vermelho
]);

Code.defaultHighlighter = new LezerHighlighter(parser,MyStyle);

import intro from './scenes/intro?scene';
import Slide1 from './scenes/Slide1?scene';
import Slide1_1 from './scenes/Slide1_1?scene';
import Slide2 from './scenes/Slide2?scene';
import Slide3 from './scenes/Slide3?scene';
import Slide4 from './scenes/Slide4?scene';
import Slide5 from './scenes/Slide5?scene';

import './global.css'; // <- import the css

export default makeProject({
  scenes: [intro,Slide1,Slide1_1,Slide2,Slide3,Slide4,Slide5],
});



/*
Qual o trabalho principal?
Avanços da pesquisa (Descrever o que foi feito no trabalho: Ajuste de termos e nomes, 
coletanea de dados e (o mais importate) classificação e nomeação dos métodos de ofuscação e 
diversificação)

O que é ofuscação e diversificação? (definição formal) 
Porque usar Ofuscaão e diversificação? (forma geral: atrasar engenharia reversa)
Porque dificultar a engenharia reversa? (DRM e Segurança)



*/