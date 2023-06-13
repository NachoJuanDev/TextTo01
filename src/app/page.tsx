'use client'
import { useState } from 'react'

import { Roboto_Mono as RobotoMono } from 'next/font/google'

import GridSelection from '@/components/GridSelection'
import GridText from '@/components/GridText'
import { copyToClipboard } from '@/utils/clipboard'
import { getNewMatrix, matrixToText } from '@/utils/matrix'

const robotoMono = RobotoMono({ subsets: ['latin'] })

function Home() {
  const [grid, setGrid] = useState(getNewMatrix())

  const activeSquare = (row: number, col: number) => {
    const newGrid = grid.map(subarray => [...subarray])
    newGrid[row][col] = true
    setGrid(newGrid)
  }

  const toggleSquare = (row: number, col: number) => {
    const newGrid = grid.map(subarray => [...subarray])
    newGrid[row][col] = !newGrid[row][col]
    setGrid(newGrid)
  }

  const handleCopyToClipboard = () => copyToClipboard(matrixToText(grid))
  const handleCopyToClipboardOneLine = () => copyToClipboard(matrixToText(grid, true))

  const reset = () => setGrid(getNewMatrix())

  return (
    <main className="container mx-auto min-h-min flex flex-col items-center">
      <div className="h-32 flex items-center">
        <h1 className={`text-3xl ${robotoMono.className}`}>TextTo01</h1>
      </div>
      <div className="h-min flex flex-col max-md:items-center md:flex-row md:justify-center">
        <div className="max-md:mb-5 md:mr-5">
          <GridSelection
            grid={grid}
            activeSquare={activeSquare}
            toggleSquare={toggleSquare}
          />
        </div>
        <GridText grid={grid} />
      </div>
      <div className="w-80 flex justify-between m-4">
        <button onClick={reset}>Reiniciar</button>
        <button onClick={handleCopyToClipboard}>Copiar</button>
        <button onClick={handleCopyToClipboardOneLine}>Copiar en una línea</button>
      </div>
    </main>
  )
}

export default Home
