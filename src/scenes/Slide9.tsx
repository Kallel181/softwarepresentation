import { Layout, makeScene2D, Img, Txt, Code, lines, CODE } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill(styles.DefaultBackgroundColor);

  // Refs
  const pageNumber = createRef<Txt>();

  const tecRef = createRef<Txt>();
  const tecTextRef = createRef<Txt>();

  const disclaimerblockRef = createRef<Layout>();
  const disclaimerTextRef = createRef<Txt>();

  // Textos
  const tecText = "Técnica em que o programa modifica seu próprio código durante a execução, alterando dinamicamente seu comportamento. Isso dificulta a análise e engenharia reversa, pois a estrutura do software não é estática, tornando-o mais imprevisível e complexo de entender."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="10"
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

      <Layout layout direction="column" gap={50}>        
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultSubTitleStyle}
            ref={tecRef}
            text="Mecanismo de auto-modificação (Self-modification mechanism)"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={tecTextRef}
            text={tecText}
          />
        </Layout>

        <Layout layout direction="column" gap={20} alignItems={'center'}marginTop={50}>
          <Layout layout direction={'row'} gap={20} opacity={0} ref={disclaimerblockRef}>
            <Img src={'src/scenes/assets/caution-icon.png'} width={100}/>
            <Txt {...styles.DefaultSubTitleStyle} opacity={1} alignSelf={'center'}>Ressalva Importante</Txt>
          </Layout>
        </Layout>
        
        <Layout layout direction="column" gap={20}>
          <Txt
            {...styles.DefaultNormalText}
            ref={disclaimerTextRef}
            text={"Este exemplo é puramente educacional, mostra conceitos básicos, e pode ser bloqueado por medidas de segurança do sistema operacional ou antivírus."}
          />
        </Layout>

      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(tecRef(), "Mecanismo de auto-modificação (Self-modification mechanism)", 0.02);

  yield* beginSlide('Animation 2');
  yield* tecTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* disclaimerblockRef().opacity(1, 0.5);

  yield* beginSlide('Animation 4');
  yield* disclaimerTextRef().opacity(1, 0.5);


  yield* beginSlide('Animation Final');
});
