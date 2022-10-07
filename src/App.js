import React from 'react'
import generatePassword from './utils/generatePassword';
import {Header, P, Button, Shadow, Line, Passwords, PasswordInput,} from './App.jsx';


const App = () => {
  const [passwords, setPasswords] = React.useState(['', '']);

  const handleClick = () => {
    setPasswords([generatePassword(), generatePassword()])
  }

  return (
    <main>
      <Header>Generate a <br/>
        <span>Random Password</span>
      </Header>
      <P>Never use an insecure password again</P>
      <Button onClick={handleClick}>Generate Random Password</Button>
      <Shadow/>
      <Line/>
      <Passwords>
        {passwords.map((pass, i) => (
          <PasswordInput value={pass} key={i} readOnly />
        ))}
      </Passwords>
    </main>
  )
}

export default App;