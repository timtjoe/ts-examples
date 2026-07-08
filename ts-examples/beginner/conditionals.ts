function describe(value: string | number): string {
  // type narrowing
  if(typeof value === "string" ){
    return `string of length ${value.length}`; // .length is safe
  }
  return `number: ${value.toFixed(2)}` //.toFixed is safe
}