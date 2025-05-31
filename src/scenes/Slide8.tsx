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
  const tecText = "As transformações de listas consistem na alteração da estrutura de arrays e matrizes com o objetivo de dificultar sua análise. Técnicas como divisão em subarrays, junção de múltiplos arrays, aumento ou redução da dimensionalidade (folding e flattening)."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="9"
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
            text="Transformações de Listas"
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
using namespace std;

int main() {
  int dados[6] = {10, 20, 30, 40, 50, 60};
  
  for (int i = 0; i < 6; i++) {
    cout << "Valor: " << dados[i] << endl;
  }

  return 0;
}`}
        />,
      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(tecRef(), "Transformações de Listas", 0.04);

  yield* beginSlide('Animation 2');
  yield* tecTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* codeExampleRef().opacity(1, 0.5);



  yield* beginSlide('Animation Final');
});
