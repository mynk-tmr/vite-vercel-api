import type { MiddlewareFunction } from 'react-router'

const routeLog: MiddlewareFunction = (args, next) => {
  const { pathname } = new URL(args.request.url)
  let t = performance.now()
  next()
  t = Math.ceil(performance.now() - t)
  console.log(`Navigated to ${pathname} in ${t}ms`)
}

export default routeLog
