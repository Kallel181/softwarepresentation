import { Layout, makeScene2D, Rect, Img, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();

  const softwaresec = createRef<Txt>();
  const SofSecTextRef = createRef<Txt>();

  const DRMTitle = createRef<Txt>();
  const DRMTextRef = createRef<Txt>();


  // Textos
  const title_final_text = "Por que dificultar a engenharia reversa?";
  const SofSecText = "Dificultar a engenharia reversa reduz a chance de que vulnerabilidades sejam descobertas e exploradas por agentes mal-intencionados."
  const DRMText = "Ao tornar a análise do código mais complexa, evita-se a cópia não autorizada e a modificação indevida de softwares proprietários."


  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="4"
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
      padding={60} 
      width={1920} 
      height={1080} 
      wrap={'wrap'}>
      
      <Txt
        {...styles.DefaultTitleStyle}
        ref={title}
        text={title_final_text}
      />

      <Layout layout direction="column" gap={100}>        
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={softwaresec}
            text="Segurança de Software"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={SofSecTextRef}
            text={SofSecText}
          />
        </Layout>
             
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={DRMTitle}
            text="Propriedade Intelectual (DRM)"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={DRMTextRef}
            text={DRMText}
          />
        </Layout>       
       


      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* revealTextScramble(softwaresec(), "Segurança de Software", 0.03);

  yield* beginSlide('Animation 2');
  yield* SofSecTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* revealTextScramble(DRMTitle(), "Propriedade Intelectual (DRM)", 0.03);

  yield* beginSlide('Animation 4');
  yield* DRMTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation Final');
});
