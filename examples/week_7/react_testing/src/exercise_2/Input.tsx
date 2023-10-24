import React from 'react'

type InputProps = {
    label: string;
    type: 'text' | 'password' | 'email' | 'number';
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({label, type, onChange}) => {
  return (
    <>
        <label>
            {label}
            <input
                type={type}
                onChange={e => onChange && onChange(e.target.value)}
            />
        </label>
    </>
  )
}

export default Input