interface User {
    name: string;
    age: number;
}

function isUser(x: unknown): x is User {
    return typeof x === 'object'
        && x !== null 
        && typeof (x as any).name === 'string'
        && typeof (x as any).age  === 'number'
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line: string) => {
    try {
        const parsed: unknown = JSON.parse(line);
        if (isUser(parsed)) {
            console.log(`user: ${parsed.name}, ${parsed.age}`);
        } else {
            console.log(`error: invalid user`);
        }
    } catch {
        console.log(`error: invalid user`);
    }
    rl.close();
});
rl.on("close", () => process.exit(0));
