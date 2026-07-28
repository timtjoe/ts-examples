type Light = { kind: "red" } | { kind: "yellow" } | { kind: "green" };

function next(l: Light): Light {
  // switch on l.kind
  switch (l.kind) {
    case "red":
      return { kind: "green" };
    case "green":
      return { kind: "yellow" };
    case "yellow":
      return { kind: "red" };
    default: {
      const _exhaustive: never = l;
      return _exhaustive;
    }
  }
}

const input = require("fs").readFileSync(0, "utf-8").trim();
const current: Light = { kind: input as "red" | "yellow" | "green" };
console.log(next(current).kind);
