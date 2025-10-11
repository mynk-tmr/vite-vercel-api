import { type MiddlewareFunction, redirect } from 'react-router'

const routeLog: MiddlewareFunction = (args, next) => {
  const { pathname } = new URL(args.request.url)
  let t = performance.now()
  next()
  t = Math.ceil(performance.now() - t)
  console.log(`Navigated to ${pathname} in ${t}ms`)
}

const sendtoHome: MiddlewareFunction = (args) => {
  const { pathname } = new URL(args.request.url)
  if (pathname === '/') {
    console.log('Redirecting to /home')
    throw redirect('/home')
  }
}

export { routeLog, sendtoHome }
