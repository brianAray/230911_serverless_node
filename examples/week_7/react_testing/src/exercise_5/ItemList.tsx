import React from 'react'
import { useSelector } from 'react-redux'

const ItemList = () => {
    const items = useSelector((state: any) => state.items);

  return (
    <ul data-testid="item-list">
        {items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

export default ItemList