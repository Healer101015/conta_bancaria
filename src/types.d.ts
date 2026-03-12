declare module 'readline-sync' {
  interface ReadlineSync {
    question(prompt?: string): string;
    questionInt(prompt?: string): number;
    questionFloat(prompt?: string): number;
    keyInSelect(items: string[], query?: string, options?: any): number;
    prompt(): void;
  }

  const readlineSync: ReadlineSync;
  export default readlineSync;
}