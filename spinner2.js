let timer = 100;
const object = {
  1: '\r|   ',
  2: '\r/   ',
  3: '\r-   ',
  4: '\r\\  '
};
for (let i = 1; i <= 2; i++) {
  for (const key in object) {
    setTimeout(() => {process.stdout.write(object[key]);}, timer);
    timer += 200;
  }
};