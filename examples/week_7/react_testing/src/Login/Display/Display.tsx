import React from 'react'

type DisplayProps = {
    success: boolean
}

const Display: React.FC<DisplayProps> = ({success}) => {
  return (
    <>
        {
            success ? 
            <h3>Successful login!</h3>
            :
            <h3>Unsuccessful login!</h3>
        }
    </>
  )
}

export default Display