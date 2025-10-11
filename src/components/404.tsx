import { useNavigate } from 'react-router'

export const NotFound = () => {
  const goto = useNavigate()
  return (
    <div>
      <h1>Not Found</h1>
      <button type='button' onClick={() => goto('/home')}>
        Go Back
      </button>
    </div>
  )
}
