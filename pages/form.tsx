import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Post } from '@prisma/client'
import { ResponseData } from './api/get-posts'
import styles from '../styles/pages/form.module.scss'
import mockPost from './mockPost'

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init)
  return res.json()
}

const createPost = async (post: Post) => {
  const res = await fetch('/api/create-post', {
    method: 'POST',
    body: JSON.stringify(post)
  })

  const data = await res.json()
  console.log(data)

  // return res.json()
}

const Form = () => {
  const { data, error } = useSWR<ResponseData>('/api/get-posts', fetcher)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log(data?.allPosts)
  }, [data])

  return (
    <view className={styles.form__container}>
      <h1 className={styles.form__header}>Form</h1>
      <input type='text' onChange={e => setText(e.target.value)} />
      <button onClick={async () => await createPost(mockPost)}>Submit</button>
    </view>
  )
}

export default Form
