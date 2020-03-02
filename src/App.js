import React, { useState } from 'react'
import Text from './component/Text'
import TextInput from './component/TextInput'

function App() {
  const [nameFromChild, setNameFromChild] = useState('')

  return (
    <>
      {/* sendText屬性是一個函式 */}
      <TextInput
        sendText={text => {
          //傳入text，然後回設定父母元件的state值
          setNameFromChild(text)
        }}
      />
      <br />
      <Text name={nameFromChild} />
    </>
  )
}

export default App
