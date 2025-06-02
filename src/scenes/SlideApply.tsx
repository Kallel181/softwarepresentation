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

  const PostDistTitleRef = createRef<Txt>();
  const PostDistTextRef = createRef<Txt>();


  // Textos
  const title_final_text = "Momentos de Aplicação das Técnicas de Ofuscação e Diversificação";
  const pre = "Técnicas aplicadas antes da compilação, diretamente no código-fonte."
  const comp = "Modificações realizadas durante o processo de compilação, aproveitando o comportamento do compilador para gerar binários mais difíceis de entender."
  const post_comp = "Aplicadas após a geração do executável, atuando diretamente no código binário ou bytecode."
  const post_dist = "Utilizadas após o software ser distribuído, geralmente em tempo de execução."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="12"
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
        fontSize={70}
      />

      <Layout layout direction="column" gap={50}>        
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={PreTitleRef}
            text="Pré-compilação"
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
            text="Compilação"
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
            text="Pós-compilação"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={PostCompTextRef}
            text={post_comp}
          />
        </Layout>   

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={PostDistTitleRef}
            text="Pós-distribuição"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={PostDistTextRef}
            text={post_dist}
          />
        </Layout>      
       


      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* revealTextScramble(PreTitleRef(), " Pré-compilação", 0.03);

  yield* beginSlide('Animation 2');
  yield* PreTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* revealTextScramble(CompTitleRef(), "Compilação", 0.03);

  yield* beginSlide('Animation 4');
  yield* CompTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 5');
  yield* revealTextScramble(PostCompTitleRef(), "Pós-compilação", 0.03);

  yield* beginSlide('Animation 6');
  yield* PostCompTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 7');
  yield* revealTextScramble(PostDistTitleRef(), "Pós-distribuição", 0.03);

  yield* beginSlide('Animation 8');
  yield* PostDistTextRef().opacity(1, 0.5);


  yield* beginSlide('Animation Final');         
});
