import React from 'react'
import style from './InputForm.module.scss'

const InputForm = React.forwardRef(({label, ...props}, ref)=> (
  <div className={style.inputGroup}>
    {label ? <label className={style.label}>{label}</label> : null}
    <input className={style.input} ref={ref} {...props}/>
  </div>
))

export default InputForm