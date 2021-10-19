import React from 'react';
import styled from 'styled-components';
import Button from '@edu-mendes/ui/src/components/Button';
import { UIProvider } from '@edu-mendes/ui/src/theme/UIProvider';


const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <UIProvider>
      <div>
        <Button disabled>
          oi
        </Button>
        {/* <Button>
          Adicionando children onde estamos usando o componente
        </Button> */}
        <Title>Nosso site que usa a lib de componentes local</Title>
      </div>
    </UIProvider>
  )
}
