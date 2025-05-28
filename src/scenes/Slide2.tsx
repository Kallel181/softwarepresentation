import { Layout, makeScene2D, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, waitFor,slideTransition, Direction} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const title = createRef<Txt>();
  const ofuscTitle = createRef<Txt>();
  const ofuscText = createRef<Txt>();
  const diversTitle = createRef<Txt>();
  const diversText = createRef<Txt>();
  const pageNumber = createRef<Txt>();


  // Textos
  const title_final_text = "O que é Ofuscação e Diversificação?";
  const ofusc_final_text = "Ofuscação é o processo de embaralhar o código e torná-lo ininteligível (mas ainda funcional), a fim de dificultar a engenharia reversa. (Hosseinzadeh et al., 2018, p.72)";
  const divers_final_text = "Diversificação é a mudança das interfaces internas e da estrutura do software para gerar versões únicas e diversificadas dele. Os usuários recebem instâncias únicas que funcionam da mesma forma. (Hosseinzadeh et al., 2018, p.7)";


  yield* slideTransition(Direction.Right,1);
  
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
            ref={ofuscTitle}
            text="Ofuscação"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={ofuscText}
            text={ofusc_final_text}
          />
        </Layout>
        <Layout layout direction="column" gap={20} alignItems={'start'}> 
          <Txt
            textWrap={true}
            ref={diversTitle}
            text="Diversificação"
            fontFamily="Cal Sans"
            fontWeight={700}
            fill="#ffffff"
            fontSize={64}
            opacity={0}
          />
          <Txt
            textWrap={true}
            ref={diversText}
            text={divers_final_text}
            fontFamily="Cal Sans"
            fontWeight={400}
            fill="#ededed"
            fontSize={42}
            opacity={0}
          />
        </Layout>
      </Layout>
    </Layout>
  );



  // Animações
  yield* beginSlide('Animation 1');
  yield* revealTextScramble(title(), title_final_text, 0.03);

  yield* beginSlide('Animation 2');
  yield* revealTextScramble(ofuscTitle(), "Ofuscação", 0.03);

  yield* beginSlide('Animation 3');
  yield* ofuscText().opacity(1, 0.5);

  yield* beginSlide('Animation 4');
  yield* revealTextScramble(diversTitle(), "Diversificação", 0.03);

  yield* beginSlide('Animation 5');
  yield* diversText().opacity(1, 0.5);




  yield* beginSlide('Animation Final');
});
