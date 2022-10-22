import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/pages/form.module.scss'
import { ResponseData } from './api/get-posts'

const fetcher = async (input: RequestInfo, init: RequestInit, ...args: any[]) => {
  const res = await fetch(input, init)
  return res.json()
}

const Form = () => {
  const { data, error }: { data?: ResponseData; error?: string } = useSWR('/api/get-posts', fetcher)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log(data?.allPosts)
  }, [data])

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
