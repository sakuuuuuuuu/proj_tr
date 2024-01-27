import * as readline from 'readline';

const calculateFactorial = (N: number): number => {
  if (N === 0 || N === 1) {
    return 1;
  } else {
    return N * calculateFactorial(N - 1);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('正整数Nを入力してください: ', (input) => {
  const result: number = calculateFactorial(Number(input));
  console.log(`${input}の階乗は${result}です。`);
  rl.close();
});
