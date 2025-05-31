import { Layout, makeScene2D, Img, Txt, Code, lines, CODE } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill('#101214');

  // Refs
  const pageNumber = createRef<Txt>();

  const tecRef = createRef<Txt>();
  const tecTextRef = createRef<Txt>();

  const codeExampleRef = createRef<Code>();


  // Textos
  const tecText = "Consiste na inserção de trechos de código que não são executados (dead code), com o objetivo de confundir ferramentas de análise e mascarar o fluxo real de execução do programa."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="7"
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
            text="Inserção Falsa (Bogus insertion)"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={tecTextRef}
            text={tecText}
          />
        </Layout>
        
        <Code
          {...styles.DefaultCodeStyle}
          fontSize={36}
          alignSelf={'center'}
          ref={codeExampleRef}
          code={CODE`\
#include <iostream>

int main() {
  int x = 10;

  if (x > 0) {
    std::cout << "Valor positivo\\n";
  } 

  return 0;
}`}
        />,
      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(tecRef(), "Inserção Falsa (Bogus insertion)", 0.04);

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
  ${comment1}
  if (x < 0 && x > 1000) {
    ${comment2}x = x * 42;
  }
  
  if (x > 0) {
    std::cout << "Valor positivo\\n";
  } 
       
  return 0;
}`,1);

  yield* beginSlide('Animation 5');
  yield* codeExampleRef().selection(lines(5,8), 0.6);

  yield* beginSlide('Animation 6');
  yield* comment1('\n  // Código falso (nunca executado)',1);
  
  yield* beginSlide('Animation 7');
  yield* codeExampleRef().selection(lines(7), 0.6);

  yield* beginSlide('Animation 9');
  yield* all(
    comment2('// Instruções falsas para confundir análise\n    ',1),
    codeExampleRef().selection(lines(7,8), 0.6)
  );

  yield* beginSlide('Animation 10');
  yield* codeExampleRef().selection(DEFAULT, 0.6);

  yield* beginSlide('Animation Final');
});
