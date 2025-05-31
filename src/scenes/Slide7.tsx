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

  const codeExampleRef = createRef<Code>();

  // Textos
  const tecText = "A técnica de transposição de métodos substitui chamadas de função pelo próprio corpo da função. Isso dificulta a análise e compreensão modular do código, pois oculta a estrutura original do programa ao eliminar a separação entre funções."

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="8"
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
            text="Transposição de Métodos (Inlining methods)"
          />
          <Txt
            {...styles.DefaultNormalText}
            ref={tecTextRef}
            text={tecText}
          />
        </Layout>
        
        <Code
          {...styles.DefaultCodeStyle}
          fontSize={32}
          alignSelf={'center'}
          ref={codeExampleRef}
          code={CODE`\
#include <iostream>
using namespace std;
int c = 0;

void modificar(int x) {
  if (x % 2 == 0) {
    c += x * 2;
  } else {
    c += x + 3;
  }
}

int main() {
  modificar(4);
  cout << "Valor de c: " << c << endl;
  
  return 0;
}`}
        />,
      </Layout>    
    </Layout>
  );

  // Animações
  yield* revealTextScramble(tecRef(), "Transposição de Métodos (Inlining methods)", 0.04);

  yield* beginSlide('Animation 2');
  yield* tecTextRef().opacity(1, 0.5);

  yield* beginSlide('Animation 3');
  yield* codeExampleRef().opacity(1, 0.5);

  yield* beginSlide('Animation 4');
  yield* codeExampleRef().selection(lines(4,10), 0.6);

  yield* beginSlide('Animation 4.1');
  yield* codeExampleRef().selection(lines(13), 0.6);

  yield* beginSlide('Animation 5');
  yield* codeExampleRef().selection(DEFAULT, 0.6);

  const comment1 = Code.createSignal(``);

  yield* beginSlide('Animation 6');
  yield* codeExampleRef().code(CODE`\
#include <iostream>
using namespace std;
int c = 0;

int main() {
    int x = 4;
    ${comment1}
    if (x % 2 == 0) {
      c += x * 2;
    } else {
      c += x + 3;
    }

    cout << "Valor de c: " << c << endl;
    return 0;
}`,2);

  yield* beginSlide('Animation 7');
  yield* codeExampleRef().selection(lines(5,11), 0.6);

  yield* beginSlide('Animation 8');
  yield* all(
    comment1('\n    // Código da função \'modificar\' embutido diretamente na main',1),
    codeExampleRef().selection(lines(5,12), 0.6)
  );
  
  yield* beginSlide('Animation 9');
  yield* codeExampleRef().selection(DEFAULT, 0.6);

  yield* beginSlide('Animation Final');
});
