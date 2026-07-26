// class Stack<T> { ... }

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line: string) => {
    // const stack = new Stack<number>();
    // line.split(" ").map(Number).forEach(n => stack.push(n));
    // while (stack.size() > 0) console.log(stack.pop());
    rl.close();
});
rl.on("close", () => process.exit(0));
