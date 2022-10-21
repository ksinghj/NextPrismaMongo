import React, { useState } from 'react'
import { NextPage } from 'next'

import styles from '../styles/pages/form.module.scss'

const Form: NextPage = () => {
  const [text, setText] = useState('')

  const sendText = () => console.log({ text })

  return (
    <view className={styles.form__container}>
      <h1 className={styles.form__header}>Form</h1>
      <input type='text' onChange={e => setText(e.target.value)} />
      <button onClick={sendText}>Submit</button>
    </view>
  )
}

export default Form
