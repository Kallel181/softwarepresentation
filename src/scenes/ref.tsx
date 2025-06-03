import { Layout, makeScene2D, Rect, Img, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();

  const ref1Ref = createRef<Txt>();
  const ref2Ref = createRef<Txt>();
  const ref3Ref = createRef<Txt>();
  const ref4Ref = createRef<Txt>();
  const ref5Ref = createRef<Txt>();



  // Textos
  const title_final_text = "Referências";
  const ref1 = "Hosseinzadeh, S., Rauti, S., Laurén, J.-M., Mäkelä, J., Holvitie, J., Hyrynsalmi, S., and Leppänen, V., \"Diversification and obfuscation techniques for software security: A systematic literature review,\" Elsevier, 2018."
  const ref2 = "Chess, B. and McGraw, G., \"Static analysis for security,\" IEEE Computer Society, 2004."
  const ref3 = "Mavrogiannopoulos, N., Kisserli, N., and Preneel, B., \"A taxonomy of self-modifying code for obfuscation,\" Elsevier, 2011."
  const ref4 = "Sihag, V., Vardhan, M., and Singh, P., \"A survey of android application and malware hardening,\" Elsevier, 2021."
  const ref5 = "Majumdar, A. and Thomborson, C., \"Securing mobile agents control flow using opaque predicates,\" Department of Computer Science, The University of Auckland, 2005."

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
      padding={60} 
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
            {...styles.DefaultNormalText}
            ref={ref1Ref}
            text={ref1}
          />
        </Layout>
             
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={ref2Ref}
            text={ref2}
          />
        </Layout>   

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={ref3Ref}
            text={ref3}
          />
        </Layout>  
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={ref4Ref}
            text={ref4}
          />
        </Layout>    

        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={ref5Ref}
            text={ref5}
          />
        </Layout>    


      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);
  yield* all(
    ref1Ref().opacity(1,1),
    ref2Ref().opacity(1,1),
    ref3Ref().opacity(1,1),
    ref4Ref().opacity(1,1),
    ref5Ref().opacity(1,1),
  )



  yield* beginSlide('Animation Final');         
});
