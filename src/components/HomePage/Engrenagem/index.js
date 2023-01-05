import React from 'react'
import './index.scss'
import Pecas from '../Pecas'
import {useState} from 'react'
import engrenagem from './engrenagem.png'

export default function Engrenagem() {
  const [rotacao, setRotacao] = useState('paused')
  // const Audio = 
  return (
    <div className='Eixo'> 
      <div onClick={()=>{
          const Som = new Audio('./repetitivo.mp3')
          Som.volume = 0.05
          Som.play()
          setRotacao('running')
        }} style={{
          animationPlayState: `${rotacao}`,
          animationName: `rodando`,
          backgroundImage: `url(${engrenagem})`
      }} className='engrenagem'>
      </div>
      <Pecas x = '-50% + 89px'  y = '-50% + 34px' rotate = '20deg' ligar={rotacao} />
      <Pecas x = '-50% - 89px'  y = '-50% - 34px' rotate = '20deg' ligar={rotacao} />
    </div>
  )
  

}
