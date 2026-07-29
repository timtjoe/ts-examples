export {};

type Email = string & { readonly __brand: "Email" };

function asEmail(s: string): Email {
  if (!s.includes("@")) throw new Error("not an email");
  return s as Email;
}
function sendTo(email: Email): void {
  console.log(`sending to ${email}`);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line: string) => {
  try {
    const email = asEmail(line);
    sendTo(email);
  } catch (e) {
    console.log(`error: ${e.message}`);
  }
  rl.close();
});
rl.on("close", () => process.exit(0));
