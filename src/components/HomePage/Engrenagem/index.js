import React from 'react'
import './index.scss'
import {useState} from 'react'

export default function Engrenagem() {
  const [rotacao, setRotacao] = useState('paused')
  const [nomeAnimacao, setnomeAnimacao] = useState('rodando')
  return (
    <img onClick={()=>{
      if (nomeAnimacao === 'rodando'){
        setRotacao('running')
        setTimeout(() => {
          setRotacao('paused')
          setnomeAnimacao('voltando')
        }, 1000); // aqui ta o tempo que a animacao de rodar dura
        
      }
      else{
        setRotacao('running')
        setTimeout(() => {
          setRotacao('paused')
          setnomeAnimacao('rodando')
        }, 1000); // aqui ta o tempo que a animacao de rodar dura
      }
      }} style={{
        animationPlayState: `${rotacao}`,
        animationName: `${nomeAnimacao}`
    }} className='engrenagem' src='./engrenagem.png' />
  )
  
}
