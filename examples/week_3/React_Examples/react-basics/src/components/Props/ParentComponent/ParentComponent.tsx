import React from 'react'
import Button from '../ChildComponent/Button'

function ParentComponent() {
  return (
    <>
        <Button message="button1" bgColor="red" isRounded="true"/>
        <Button message="button2" bgColor="lightblue" isRounded="false"/>
    </>
  )
}

export default ParentComponent