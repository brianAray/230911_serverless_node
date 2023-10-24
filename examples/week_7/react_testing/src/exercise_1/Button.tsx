import React from 'react'

type ButtonProps = {
    label: string,
    onClick?: () => void
}

// function ButtonFunction({label, onClick}: ButtonProps) {
//     return (
//         <button onClick={onClick}>{label}</button>
//     );
// }

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button