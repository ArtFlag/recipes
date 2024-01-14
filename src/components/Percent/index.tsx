import React from 'react'

interface PercentProps {
  reference: number
  value: number
  showSign: boolean
}

function Percent({
  reference,
  value,
  showSign = false,
}: PercentProps): JSX.Element {
  return (
    <>
      <span>{Math.round((value * 100) / reference)}</span>
      {showSign && '%'}
    </>
  )
}

export default Percent
