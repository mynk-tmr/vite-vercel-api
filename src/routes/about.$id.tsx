import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return (
    <div>
      Hello "/about/{id}!". Go back to <Link to='/'>home</Link>
    </div>
  )
}
