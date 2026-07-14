import { PI, add } from "./math.js";
// Rename:
import { add as plus } from "./math.js";
// default imports
import log from "./logger.js";
import logMsg from './logger.js'

// ONE default import AND multiple exports
import Client, {VERSION, ping} from "./api.js";

// Namespace import - Import everything as one object:
// Useful when you want to be explicit about which module a function comes from
import * as math from './math.js'

// Use barrel instead of using import from many files
// import {add, Logger} from "./index.js"

console.log(add(2, 5));   //5
console.log(plus(2, 5));   //5
console.log(PI); // 3.14159
log("Hello world")
logMsg("Log message")
console.log(VERSION);
console.log(math.add(4,5));
console.log(math.PI);

// Dynamic imports = Load a module at runtime
// Useful for code splitting (only load what's needed when its needed) and conditional imports
async function loadModule() {
  const math = await import("./math.js");
  console.log(math.add(6, 7))
}

loadModule()



