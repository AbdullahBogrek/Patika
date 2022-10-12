import React from 'react'

import { Button } from 'asbui'
import 'asbui/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <Button type="primary" text="Primary Button"/>
      <Button text="Default Button"/>
      <Button type="dashed" text="Dashed Button"/>
      <Button type="text" text="Text Button"/>
      <Button type="link" text="Link Button"/>
    </div>
  )
} 

export default App
