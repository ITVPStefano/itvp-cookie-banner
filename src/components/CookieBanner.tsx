import React, { FC, ReactElement, useState } from 'react'

type Props = {
}
const CookieBanner:FC<Props> = ({}: Props):ReactElement => {
  const [counter, setCounter] = useState("")

  return (
    <div>
      <h1>Cookie banner</h1>
    </div>
  )
}

export default CookieBanner