import React from 'react'

function Button(props: any) {
  return (
    <button style={{
        backgroundColor: props.bgColor,
        borderRadius: props.isRounded === "true" ? "6px" : "0px"
    }}
    >{props.message}</button>
  )
}

export default Button