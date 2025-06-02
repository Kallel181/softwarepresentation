import { Layout, makeScene2D, Rect, Img, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();
  
  const adjustRef = createRef<Txt>();
  const adjustTextRef = createRef<Txt>();

  const colectRef = createRef<Txt>();
  const colectTextRef = createRef<Txt>();
  
  const classificationRef = createRef<Txt>();
  const classificationTextRef = createRef<Txt>();


  // Textos
  const title_final_text = "Avanços da pesquisa";
  const adjustTex = "Revisão e padronização da terminologia para garantir clareza e consistência conceitual.";
  const colectText = "Levantamento e análise de 357 artigos acadêmicos sobre técnicas de ofuscação e diversificação.";
  const classificationText = "Agrupamento das técnicas em categorias bem definidas, com proposta de nomenclatura padronizada."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="2"
      fontFamily="Cal Sans"
      fontWeight={300}
      fill="#ffffff"
      fontSize={32}
      x={880}
      y={500}
    />
  );

  //BG
  view.add(
    <Img
      src={'src/scenes/assets/BG.png'}
      opacity={0.03}
    />
  )

  yield* slideTransition(Direction.Right,1);
  
  // Layout principal
  view.add(
    <Layout layout direction="column" alignItems="start" gap={60} padding={60} width={1920} height={1080} wrap={'wrap'}>
      <Txt
        {...styles.DefaultTitleStyle}
        ref={title}
        text={title_final_text}
      />
      <Layout layout direction="column" gap={100}>
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={adjustRef}
            text="Ajuste de Termos e Nomes"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={adjustTextRef}
            text={adjustTex}
          />
        </Layout>   

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={colectRef}
            text=" Coleta e Organização de Dados"
          />
          <Txt {...styles.DefaultNormalText}
            ref={colectTextRef}
            text={colectText}
          />
        </Layout>  

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={classificationRef}
            text="Classificação e Nomeação dos Métodos"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={classificationTextRef}
            text={classificationText}
          />
        </Layout>       


      </Layout>
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* revealTextScramble(adjustRef(), "Ajuste de Termos e Nomes", 0.02);

  yield* beginSlide('Animation 2');
  yield* adjustTextRef().opacity(1,0.5);

  yield* beginSlide('Animation 3');
  yield* revealTextScramble(colectRef(), "Coleta e Organização de Dados", 0.02);

  yield* beginSlide('Animation 4');
  yield* colectTextRef().opacity(1,0.5);

  yield* beginSlide('Animation 5');
  yield* revealTextScramble(classificationRef(), "Classificação e Nomeação dos Métodos", 0.015);

  yield* beginSlide('Animation 6');
  yield* classificationTextRef().opacity(1,0.5);





  yield* beginSlide('Animation Final');
});
