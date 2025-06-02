import { Layout, makeScene2D, Rect, Img, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();

  const PreTitleRef = createRef<Txt>();
  const PreTextRef = createRef<Txt>();

  const CompTitleRef = createRef<Txt>();
  const CompTextRef = createRef<Txt>();

  const PostCompTitleRef = createRef<Txt>();
  const PostCompTextRef = createRef<Txt>();


  // Textos
  const title_final_text = "Considerações Finais";
  const pre = "Combinar técnicas de ofuscação e diversificação e aplicá-las em diferentes momentos cria um ecossistema robusto de segurança para o software."
  const comp = "Ofuscação dificulta a leitura direta do código; diversificação gera múltiplas variantes funcionais para reduzir ataques replicáveis. Ambas aumentam a resiliência do software."
  const post_comp = "Modelos de IA possuem a capacidade de identificar e reverter técnicas de ofuscação, exigindo proteção cada vez mais sofisticada e adaptativa contra análises automatizadas."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="13"
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
    <Layout 
      layout 
      direction="column" 
      alignItems="start" 
      gap={60} 
      padding={31} 
      width={1920} 
      height={1080} 
      wrap={'wrap'}>
      
      <Txt
        {...styles.DefaultTitleStyle}
        ref={title}
        text={title_final_text}
      />

      <Layout layout direction="column" gap={50}>        
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={PreTitleRef}
            text="Camadas de Proteção"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={PreTextRef}
            text={pre}
          />
        </Layout>
             
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={CompTitleRef}
            text="Ofuscação e Diversificação"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={CompTextRef}
            text={comp}
          />
        </Layout>   

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={PostCompTitleRef}
            text="Impacto da Inteligência Artificial"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={PostCompTextRef}
            text={post_comp}
          />
        </Layout>   

       


      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* revealTextScramble(PreTitleRef(), "Camadas de Proteção", 0.03);

  yield* beginSlide('Animation 2');
  yield* PreTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* revealTextScramble(CompTitleRef(), "Ofuscação e Diversificação", 0.03);

  yield* beginSlide('Animation 4');
  yield* CompTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 5');
  yield* revealTextScramble(PostCompTitleRef(), "Impacto da Inteligência Artificial", 0.03);

  yield* beginSlide('Animation 6');
  yield* PostCompTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation Final');         
});
