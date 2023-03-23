// import React from 'react'
import styled from './Button.module.css'

type ButtonProps = {
  text: string
  cls?: string
  mark?: string
}

function Button({ text, cls }: ButtonProps) {
  return <button className={styled.btn}>{text}</button>
}

export default Button
