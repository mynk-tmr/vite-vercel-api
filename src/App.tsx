import { Suspense, use } from 'react';
import { api } from './lib/api-client';

const data = api.$get().then((rs) => rs.text());

export default function App() {
  return (
    <Suspense fallback='loading ...'>
      <Text />
    </Suspense>
  );
}

function Text() {
  const text = use(data);
  return <h1>{text}</h1>;
}
