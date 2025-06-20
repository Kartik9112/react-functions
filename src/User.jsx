import React, { useState } from 'react'

function User() {
  const [count,cdata]=useState(0)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>cdata(count+1)}>Increase Count</button>
      <button onClick={()=>cdata(count-1)}>Decrease Count</button>
      <button onClick={()=>cdata(0)}>Reset Count</button>

    </div>
  )
}

export default User