import { Layout, makeScene2D, Txt } from '@motion-canvas/2d';
import { createRef, beginSlide, waitFor,slideTransition, Direction} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();

  // Textos
  const title_final_text = "Por que usar Ofuscação e Diversificação?";
  const ofusc_final_text = "Ofuscação é o processo de embaralhar o código e torná-lo ininteligível (mas ainda funcional), a fim de dificultar a engenharia reversa. (Hosseinzadeh et al., 2018, p.72)";
  const divers_final_text = "Diversificação é a mudança das interfaces internas e da estrutura do software para gerar versões únicas e diversificadas dele. Os usuários recebem instâncias únicas que funcionam da mesma forma. (Hosseinzadeh et al., 2018, p.7)";

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

  yield* slideTransition(Direction.Right,1);
  
  // Layout principal
  view.add(
    <Layout layout direction="column" alignItems="start" gap={60} padding={60} width={1920} height={1080} wrap={'wrap'}>
      <Txt
        {...styles.DefaultTitleStyle}
        ref={title}
        text={title_final_text}
      />
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  



  yield* beginSlide('Animation Final');
});
