import { Layout, makeScene2D, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, waitFor,slideTransition, Direction} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const paper = createRef<Txt>();


  //Texts
  const paper_name = "S. Hosseinzadeh, S. Rauti, S. Laurén, J.-M. Mäkelä, J. Holvitie, S. Hyrynsalmi, and V. Leppänen,“Diversification and obfuscation techniques for software security: A systematic literature review,” Elsevier, 2018"


  yield* slideTransition(Direction.Right,1);


  // Layout principal
  view.add(
    <Layout layout direction="column" alignItems="center" justifyContent={"center"} gap={60} padding={60} width={1920} height={1080} wrap={'wrap'}>
      <Txt 
        {...styles.DefaultTitleStyle}
        ref={paper}
        text={paper_name}
        fontSize={60}
        textAlign={'center'}
      />
    </Layout>
  );


  // Número da página no canto inferior direito
  view.add(
    <Txt
      text="1"
      fontFamily="Cal Sans"
      fontWeight={300}
      fill="#ffffff"
      fontSize={32}
      x={880}
      y={500}
    />
  );

  // Animações
  yield* beginSlide('Animation 1');
  yield* revealTextScramble(paper(), paper_name, 0.01);




  yield* beginSlide('Animation Final');
});
