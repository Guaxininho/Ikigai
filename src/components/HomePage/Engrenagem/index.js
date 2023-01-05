import React from 'react'
import './index.scss'
import Pecas from '../Pecas'
import {useState} from 'react'
import engrenagem from './engrenagem.png'

export default function Engrenagem() {
  const [rotacao, setRotacao] = useState('paused')
  // const [nomeAnimacao, setnomeAnimacao] = useState('rodando')

  return (
    <div className='Eixo'> 
      <div onClick={()=>{
          setRotacao('running')
          setTimeout(() => {
            setRotacao('paused')
          }, 1400); // aqui ta o tempo que a animacao de rodar dura

        }} style={{
          animationPlayState: `${rotacao}`,
          animationName: `rodando`,
          backgroundImage: `url(${engrenagem})`
      }} className='engrenagem'>
      </div>
      <Pecas x = '-50% + 89px'  y = '-50% + 34px' rotate = '20deg' ligar={rotacao}/>
      <Pecas x = '-50% - 89px'  y = '-50% - 34px' rotate = '20deg' ligar={rotacao}/>
    </div>
  )
  

}
