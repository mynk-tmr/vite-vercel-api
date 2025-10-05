const base = import.meta.env.DEV ? 'http://localhost:3000' : ''

export const ky = (path: string) =>
  fetch(`${base}/api${path}`)
    .then(res => res.text())
    .catch((e: Error) => e.message)
