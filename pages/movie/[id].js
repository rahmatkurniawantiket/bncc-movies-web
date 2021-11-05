import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MovieDetail({ data }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <div>Movie detail: {id}</div>
      <div>{data?.title}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/869250?api_key=18d7d5683270ef07c802bf36a0fda93f&language=en-US'
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
