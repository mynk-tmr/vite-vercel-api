import { ky } from '@/+ky'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  async loader() {
    const data = await ky('/hello')
    return { data }
  },
})

function RouteComponent() {
  const { data } = Route.useLoaderData()
  const field = useField('1')
  return (
    <div>
      <h1>{data}</h1>
      <input type='number' {...field} />
      <Link to='/about/$id' params={{ id: field.value }}>
        See Todo
      </Link>
    </div>
  )
}

function useField(init: string) {
  const [value, setField] = useState(init)
  return {
    value,
    onChange: e => setField(e.target.value),
  } satisfies React.ComponentProps<'input'>
}
