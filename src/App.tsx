import { Suspense, use } from 'react'
import css from './App.module.css'

const base_url = import.meta.env.DEV ? 'http://localhost:3000' : ''

const App = () => {
  const data = fetch(`${base_url}/api`).then((res) => res.text())
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Message data={data} />
    </Suspense>
  )
}

const Message: React.FC<{ data: Promise<string> }> = ({ data }) => {
  const message = use(data)
  return <h1 className={css.message}>{message}</h1>
}

export default App
