import React from 'react'

import { ButtonProps } from 'react-bootstrap/Button'
import { Button } from 'react-bootstrap'

import './Main.scss'

const ButtonMain: React.FC<ButtonProps> = ({
  id,
  className,
  style,
  onClick,
  type,
  children,
  disabled,
  form,
}) => {
  return (
    <Button
      id={id}
      className={`${className || 'primary'} button-main`}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
    >
      {children}
    </Button>
  )
}

export default ButtonMain
