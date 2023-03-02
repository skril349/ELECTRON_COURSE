import React from 'react'
import { Button } from 'semantic-ui-react'
import {Auth} from "../../api"
const auth = new Auth();
export function Home() {
  return (
    <div>
      <h1>HOME SCREEN</h1>
      <Button onClick={auth.logout}>logout</Button>
    </div>
  )
}
