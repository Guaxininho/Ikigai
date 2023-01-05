import React from 'react'
import './index.scss'
import engrenagem from '../Engrenagem/engrenagem.png'

export default function Pecas(props) {
  return (
    <figure className='Pecas' style={{
      transform: `translate(calc(${props.x}), calc(${props.y})) rotate(${props.rotate})`,
      backgroundImage: `url(${engrenagem})`,
      animationName: `rodandoMenor`,
      animationPlayState: `running`
    }}>{props.nome}
    </figure>
  )
}

// eu preciso manter o valor de props.x e props.y e props.rotate, depois aplicar a animação, talvez o ideal seja desfazer esse componente e recriar ele na engrenagem e definir x, y e rotate na mão. Talvez eu possa fazer a posição fixa sem transform