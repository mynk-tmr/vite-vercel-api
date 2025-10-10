import { spawn } from 'node:child_process';

const [client, server] = [
  spawn('bun', ['run', 'dev:s'], { stdio: 'inherit' }),
  spawn('bun', ['run', 'dev:c'], { stdio: 'inherit' }),
];

client.on('exit', () => {
  server.kill();
  console.log('Exited the dev setup');
  process.exit();
});
