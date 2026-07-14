// index.js (a 'barrel' file)
// Re-exports - a module can re-expose another module's exports
export { add, multiply } from "./math.js"
export { default as logger } from "./logger.js"
export * from "./api.js"