import { Layout, makeScene2D, Img, Txt, Code, lines, CODE } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();
  const title = createRef<Txt>();

  const tecRef = createRef<Txt>();
  const tecTextRef = createRef<Txt>();

  const codeExampleRef = createRef<Code>();


  // Textos
  const title_final_text = "Tecnicas de Ofuscação e Diversificação";
  const tecText = "Expressões booleanas que sempre resultam em verdadeiro ou falso, mas cuja avaliação só pode ser confirmada em tempo de execução. Elas confundem o fluxo de execução do programa, dificultando a análise e a engenharia reversa."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="6"
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
  
  
  // Layout Inicial - Especifico da seção
  view.add(
  <Layout layout alignContent={'center'}>
    <Txt
      {...styles.DefaultTitleStyle}
      ref={title}
      text={title_final_text}
    />
  </Layout>
  );    
  
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
            text="Predicados Opacos (Opaque predicates)"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={tecTextRef}
            text={tecText}
          />
        </Layout>
        
        <Code
          {...styles.DefaultCodeStyle}
          alignSelf={'center'}
          ref={codeExampleRef}
          code={CODE`\
#include <iostream>

int main() {

  func1();

  return 0;
}`}
        />,
      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(title(), title_final_text, 0.02);

  yield* beginSlide('Animation 1');
  yield* title().opacity(0, 0.5);
  yield* revealTextScramble(tecRef(), "Predicados Opacos (Opaque predicates)", 0.03);

  yield* beginSlide('Animation 2');
  yield* tecTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* codeExampleRef().opacity(1, 0.5);

  
  const comment1 = Code.createSignal(``);
  const comment2 = Code.createSignal(``);

  yield* beginSlide('Animation 4');
  yield* codeExampleRef().code(CODE`\
#include <iostream>

int main() {
  int x = 10;
  int y = x * x - x * x; ${comment1}

  if ((y == 0) || (x * x + 1 == x * x + 1)){ ${comment2}
    func1();
  } else {
    func2();
  }

  return 0;
}`,1);

  yield* beginSlide('Animation 5');
  yield* codeExampleRef().selection(lines(3,4), 0.6);

  yield* beginSlide('Animation 6');
  yield* comment1('//y sempre será 0',1);
  
  yield* beginSlide('Animation 7');
  yield* codeExampleRef().selection(lines(6), 0.6);

  yield* beginSlide('Animation 8');
  yield* codeExampleRef().selection(lines(4,6), 0.6);

  yield* beginSlide('Animation 9');
  yield* comment2('//sempre verdadeiro',1);

  yield* beginSlide('Animation 10');
  yield* codeExampleRef().selection(DEFAULT, 0.6);

  yield* beginSlide('Animation Final');
});
