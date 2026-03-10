declare module 'readline-sync' {
  interface ReadlineSync {
    question(prompt?: string): string;
    questionInt(prompt?: string): number;
  }

  const readlineSync: ReadlineSync;
  export default readlineSync;

  export function questionInt(arg0: string): number {
    throw new Error("Function not implemented.");
  }

  export function prompt() {
    throw new Error("Function not implemented.");
  }
}
