import { Layout, makeScene2D, Rect, Img, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();
  const engRevRef = createRef<Txt>();
  const engRevTitleRef = createRef<Txt>();


  const card1_ref = createRef<Rect>();
  const card2_ref = createRef<Rect>();
  const card3_ref = createRef<Rect>();

  const arrow1_ref = createRef<Img>();
  const arrow2_ref = createRef<Img>();

  const disclamer_ref = createRef<Txt>();

  // Textos
  const title_final_text = "Por que usar Ofuscação e Diversificação?";
  const engRev = "O principal objetivo das técnicas de ofuscação e diversificação é dificultar a engenharia reversa de software.";
  const disclamer = "Em linguagens interpretadas a extração da lógica ocorre direto do código, sem desmontagem, uma vez que o código não é compilado. A ofuscação textual é a principal defesa.";

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="3"
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
            ref={engRevTitleRef}
            text="Engenharia Reversa"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={engRevRef}
            text={engRev}
          />
        </Layout>
        
        
        <Layout layout direction={'row'} alignItems={'center'} gap={20} alignSelf={'center'}>
          <Rect layout ref={card1_ref} direction={'row'} alignItems={'center'} stroke={'#de7c31'} radius={25} lineWidth={8} padding={20} gap={15} opacity={0}>
            <Img src={'src/scenes/assets/Binary.png'} width={100}/>
            <Txt
              {...styles.DefaultNormalText}
              text={"Arquivo Binário"}
              fill={'#de7c31'}
              opacity={1}
            />            
          </Rect>

          <Img src={'src/scenes/assets/arrow.png'} ref={arrow1_ref} width={100} opacity={0}/>
          
          <Rect layout ref={card2_ref} direction={'row'} alignItems={'center'} stroke={'#b0de31'} radius={25} lineWidth={8} padding={20} gap={15} opacity={0}>
            <Img src={'src/scenes/assets/Binary_cogs.png'} width={120}/>
            <Txt
              {...styles.DefaultNormalText}
              text={"Disassembler"}
              fill={'#b0de31'}
              opacity={1}
            />            
          </Rect>

          <Img src={'src/scenes/assets/arrow.png'} ref={arrow2_ref} width={100} opacity={0}/>
          
          <Rect layout ref={card3_ref} direction={'row'} alignItems={'center'} stroke={'#31bbde'} radius={25} lineWidth={8} padding={20} gap={15} opacity={0}>
            <Img src={'src/scenes/assets/Binary_glass.png'} width={120}/>
            <Txt
              {...styles.DefaultNormalText}
              text={"Extração de Lógica"}
              fill={'#31bbde'}
              opacity={1}
            />            
          </Rect>
        </Layout>
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={disclamer_ref}
            text={disclamer}
          />
        </Layout>


      </Layout>
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* revealTextScramble(engRevTitleRef(), "Engenharia Reversa", 0.03);

  yield* beginSlide('Animation 2');
  yield* engRevRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* card1_ref().opacity(1, 0.5);

  yield* beginSlide('Animation 4');
  yield* all(
    arrow1_ref().opacity(1, 0.5),
    card2_ref().opacity(1, 0.5)
  );

  yield* beginSlide('Animation 5');
  yield* all(
    arrow2_ref().opacity(1, 0.5),
    card3_ref().opacity(1, 0.5)
  );

  yield* beginSlide('Animation 6');
  yield* disclamer_ref().opacity(1, 0.5);



  yield* beginSlide('Animation Final');
});
