import { useState } from 'react'

import { DataMatrix } from '@/types'

export default function GridSelection(props: {
  grid: DataMatrix
  activeSquare: Function
  toggleSquare: Function
}) {
  const { grid, activeSquare, toggleSquare } = props
  const [isSelecting, setIsSelecting] = useState(false)

  const handleSquareInteraction = (row: number, col: number) => () => {
    if (!isSelecting) {
      setIsSelecting(true)
      toggleSquare(row, col)
    }
  }

  const handleSquareMouseEnter = (row: number, col: number) => () => {
    if (isSelecting) {
      activeSquare(row, col)
    }
  }

  const handleMouseUp = () => setIsSelecting(false)

  return (
    <div className="flex flex-col" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      {grid.map((row, rowIndex) => (
        <div className="flex flex-row" key={rowIndex}>
          {row.map((isActive, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-3 h-3 md:w-4 md:h-4 cursor-pointer ${
                isActive ? 'bg-green-500' : 'bg-red-500'
              }`}
              onMouseDown={handleSquareInteraction(rowIndex, colIndex)}
              onMouseEnter={handleSquareMouseEnter(rowIndex, colIndex)}
              onTouchStart={handleSquareInteraction(rowIndex, colIndex)}
              onTouchMove={handleSquareMouseEnter(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
