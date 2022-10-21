import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

import styles from '../styles/pages/form.module.scss'
import { PrismaClient } from '@prisma/client'

const Form: NextPage = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    // console.log({ res })
  }, [])

  const sendText = () => console.log({ text })

  return (
    <view className={styles.form__container}>
      <h1 className={styles.form__header}>Form</h1>
      <input type='text' onChange={e => setText(e.target.value)} />
      <button onClick={sendText}>Submit</button>
    </view>
  )
}

// export async function getServerSideProps() {
//   const prisma = new PrismaClient()
//   const allPosts = await prisma.post.findMany()
//   console.log(allPosts)

//   return { props: { allPosts } }
// }

export default Form
