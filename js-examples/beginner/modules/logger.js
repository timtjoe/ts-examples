// Default export - for mmodules that have one main thing to export
export default function log(msg) {
  console.log(`[${new Date().toISOString()}] ${msg}`)
}