import { Suspense, use } from 'react';
import { data } from './lib/api-client';

export default function App() {
  return (
    <Suspense fallback="loading ...">
      <Text />
    </Suspense>
  );
}

function Text() {
  const text = use(data);
  return <h1>{text}</h1>;
}
