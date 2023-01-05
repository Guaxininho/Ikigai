import React from 'react'
import './index.scss'
import engrenagem from '../Engrenagem/engrenagem.png'
import styled, { keyframes } from 'styled-components'

export default function Pecas(props) {

  const rodandoMenor = keyframes`
    from {
      transform: translate(calc(${props.x}), calc(${props.y})) rotate(${props.rotate});
    }
    to {
      transform: translate(calc(${props.x}), calc(${props.y})) rotate(calc(${props.rotate} - 180deg));
  }`;

  const Engrena = styled.div`
      animation-name: ${rodandoMenor};
      animation-duration: 1.4s;
      animation-play-state: ${props.ligar};
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
  `;

  return (
    <Engrena className='Pecas' style={{
      transform: `translate(calc(${props.x}), calc(${props.y})) rotate(${props.rotate})`,
      backgroundImage: `url(${engrenagem})`
    }}>{props.nome}
    </Engrena>
  )
}

// eu preciso manter o valor de props.x e props.y e props.rotate, depois aplicar a animação, talvez o ideal seja desfazer esse componente e recriar ele na engrenagem e definir x, y e rotate na mão. Talvez eu possa fazer a posição fixa sem transform