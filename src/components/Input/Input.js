import React from 'react'
import classes from './Input.module.scss'

import Aux from '../../hoc/Aux/Aux'

const Input = (props) => {
  let inputElement = null;

  const fieldKey = Object.keys(props.data);
  const index = fieldKey.findIndex(x=> x === props.field);

  let test = props.data[fieldKey[index]];
  console.log(test);
  

  switch(test.elType)
  {
    case "input" :
      inputElement = <input name="newInput" onChange={props.newHandler} type="text" placeholder={test.placeholder} />
      break;
    case "input2" :
      inputElement = <input name="newInput2" onChange={props.newHandler} type="text" placeholder={test.placeholder} />
    default: break;
  }

  return (
    <Aux>
      {
        inputElement
      }
    </Aux>
  )
}

export default Input
