import React from 'react'
import './ComponentOne.css'

// What is JSX?
// JavaScript XML
// It is a file format that allows us to write HTML and JS in the same file
function ComponentOne(): JSX.Element {
  return (
    <>
        <div className="comp-one">ComponentOne</div>
    </>
  )
}

export default ComponentOne