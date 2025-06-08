export function getRandomGreet() {
  const messages = [
    'Namaste',
    'Hello',
    'Hola',
    'Bonjour',
    'Ciao',
    'Merhaba',
    'Olá',
    'Hallo',
    'Hej',
    'Guten Tag',
    'Bonjour',
    'Ciao',
    'Merhaba',
    'Olá',
    'Hallo',
    'Hej',
    'Guten Tag',
    'Bonjour',
    'Ciao',
  ];
  return 'Bun says ' + messages[Math.floor(Math.random() * messages.length)];
}
