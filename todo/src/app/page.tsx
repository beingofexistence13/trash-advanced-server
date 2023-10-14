import Image from 'next/image'
import AddTodo from '../components/AddTodo'

export default function Home() {
  return (
    <main>
      <h1>
        Nextjs 13.4 Todo App (30/06/2023 == Friday)
      </h1>
      <AddTodo />
    </main>
  )
}
