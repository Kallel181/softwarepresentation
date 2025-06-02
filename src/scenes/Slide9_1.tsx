import { Layout, makeScene2D, Img, Txt, Code, lines, CODE } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, all} from '@motion-canvas/core';
import { revealTextScramble } from './util/animations';

import * as styles from './util/styles';

export default makeScene2D(function* (view) {
  view.fill(styles.DefaultBackgroundColor);

  // Refs
  const pageNumber = createRef<Txt>();

  const codeExampleRef = createRef<Code>();

  // Número da página no canto inferior direito
  view.add(
    <Txt
      ref={pageNumber}
      text="11"
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
      alignItems="center" 
      gap={60} 
      padding={20} 
      width={1920} 
      height={1080} 
      wrap={'wrap'}>      

      <Layout layout direction="column" gap={20} alignItems={'center'}>              
        <Code
          {...styles.DefaultCodeStyle}
          fontSize={28}
          alignSelf={'center'}
          ref={codeExampleRef}
          code={CODE`\
#include <iostream>
#include <cstring>
#include <windows.h>

typedef int(*func_t)();

int main() {

  return 0;
}`}
        />,
      </Layout>    
    </Layout>
  );

  // Animações
  yield* beginSlide('Animation 1');
  yield* codeExampleRef().opacity(1, 0.5);

  yield* beginSlide('Animation 2');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  return 0;
}`,1);

  yield* beginSlide('Animation 3');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  // Aloca memória executável
  void* mem = VirtualAlloc(nullptr, sizeof(code), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  if (!mem) return 1;

  return 0;
}`,1);

  yield* beginSlide('Animation 4');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  // Aloca memória executável
  void* mem = VirtualAlloc(nullptr, sizeof(code), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  if (!mem) return 1;

  // Copia o código para a memória executável
  memcpy(mem, code, sizeof(code));

  return 0;
}`,1);

  yield* beginSlide('Animation 5');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  // Aloca memória executável
  void* mem = VirtualAlloc(nullptr, sizeof(code), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  if (!mem) return 1;

  // Copia o código para a memória executável
  memcpy(mem, code, sizeof(code));

  // Converte para função chamável
  func_t func = (func_t)mem;
  std::cout << "Antes da modificação: " << func() << "\\n"; // Deve imprimir 42

  return 0;
}`,1);

  yield* beginSlide('Animation 6');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  // Aloca memória executável
  void* mem = VirtualAlloc(nullptr, sizeof(code), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  if (!mem) return 1;

  // Copia o código para a memória executável
  memcpy(mem, code, sizeof(code));

  // Converte para função chamável
  func_t func = (func_t)mem;
  std::cout << "Antes da modificação: " << func() << "\\n"; // Deve imprimir 42

  // Modifica o código: muda 0x2A (42) para 0x64 (100)
  unsigned char* code_ptr = (unsigned char*)mem;
  code_ptr[1] = 0x64; // mov eax, 100

  return 0;
}`,1);

  yield* beginSlide('Animation 7');
  yield* codeExampleRef().code(CODE`\
typedef int(*func_t)();

int main() {
  // Código de função em Assembly que retorna 42
  unsigned char code[] = {
    0xB8, 0x2A, 0x00, 0x00, 0x00, // mov eax, 42
    0xC3                          // ret
  };

  // Aloca memória executável
  void* mem = VirtualAlloc(nullptr, sizeof(code), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  if (!mem) return 1;

  // Copia o código para a memória executável
  memcpy(mem, code, sizeof(code));

  // Converte para função chamável
  func_t func = (func_t)mem;
  std::cout << "Antes da modificação: " << func() << "\\n"; // Deve imprimir 42

  // Modifica o código: muda 0x2A (42) para 0x64 (100)
  unsigned char* code_ptr = (unsigned char*)mem;
  code_ptr[1] = 0x64; // mov eax, 100

  std::cout << "Depois da modificação: " << func() << "\\n"; // Deve imprimir 100

  // Libera memória
  VirtualFree(mem, 0, MEM_RELEASE);

  return 0;
}`,1);

  yield* beginSlide('Animation Final');
});
