import React, { useState } from 'react'

const HelloComp: React.FC = () => {
    const [clicks, setClicks] = useState<number>(0);
    const message: string = "Hello from HelloComp";

    const showAlert = () => {
        alert(message);
    }

  return (
    <div style={{border: '1px solid pink', padding: '10px', margin: '10px'}}>
        <div>HelloComp</div>
        <button onClick={() => setClicks(clicks + 1)}>
            Click me {clicks} times
        </button>
        <button onClick={showAlert}>
            you can click me too!
        </button>

    </div>
  )
}

export default HelloComp