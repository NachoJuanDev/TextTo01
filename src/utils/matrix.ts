import { DataMatrix } from '@/types'

export function getNewMatrix(): DataMatrix {
  return Array(28).fill(Array(28).fill(false))
}

export function matrixToText(data: DataMatrix) {
  let text = ''
  data.forEach(row => {
    row.forEach(isActive => {
      text += isActive ? '1' : '0'
    })
    text += '\n'
  })
  return text
}
