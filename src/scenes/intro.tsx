import {Layout, makeScene2D,Txt,Img} from '@motion-canvas/2d';
import {beginSlide, all, createRef, waitFor, slideTransition, Direction} from '@motion-canvas/core';


import { revealTextScramble } from './util/animations';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();

  const title_final_text = "Segurança de Software"
  const sub_title_final_text = "Tecnicas de Ofuscação e Diversificação"

  //BG
  view.add(
    <Img
      src={'src/scenes/assets/BG.png'}
      opacity={0.03}
    />
  )

  yield* beginSlide('Animation 1');
  yield* waitFor(0.1);

  //Main Scene Objects
  view.add(
    <>
      <Layout 
      layout 
      height={1080} 
      width={1920} 
      gap={5} 
      padding={10} 
      direction={"column"}
      justifyContent="center"
      >
        <Layout marginLeft={100} direction={"column"}>
          <Txt 
          ref={title} 
          text={title_final_text} 
          fontFamily={"Cal Sans"} 
          fontWeight={900}
          fill={"#ffffff"}
          fontSize={120}
          opacity={0}
          />
          <Txt 
          ref={subtitle} 
          text={sub_title_final_text} 
          fontFamily={"Cal Sans"} 
          fontWeight={200}
          fill={"#ffffff"}
          fontSize={80}
          opacity={0}
          />
        </Layout>
      </Layout>
    </>
  );

//============================================== Slide 2 ==============================================
  yield* beginSlide('Animation 2');
  
  yield* revealTextScramble(title(), title_final_text, 0.05);


//============================================== Slide 3 ==============================================
  yield* beginSlide('Animation 3');

  yield* revealTextScramble(subtitle(), sub_title_final_text, 0.03);
  yield* beginSlide('Animation Final');
});