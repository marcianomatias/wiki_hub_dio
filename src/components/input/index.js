import React from 'react'

import { InputContainer } from './styles'

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input type="text" placeholder="   Digite o repositório (ex: github/nome-do-repositório)" value={value} onChange={onChange} className="search"/>
    </InputContainer>
  )
}

export default Input;