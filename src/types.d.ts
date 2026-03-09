declare module 'readline-sync' {
  interface ReadlineSync {
    question(prompt?: string): string;
    questionInt(prompt?: string): number;
  }

  const readlineSync: ReadlineSync;
  export default readlineSync;
}
