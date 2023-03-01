import React from 'react'
import { Button } from 'semantic-ui-react'
import {getAuth} from "firebase/auth"
export default function App() {
  console.log(getAuth())
  return (
    <div>
      <h1>Hola Musicfy</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  )
}
