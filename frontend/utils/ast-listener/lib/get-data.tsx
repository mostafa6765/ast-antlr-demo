import getText from "./get-text"

/**
 * Generate output data.
 * 
 * @param {string} id 
 * @param {any} ctx 
 * @param {any} parser 
 * @param {string} sliceLastCharacter 
 * @returns {object}
 */
function getData(id: any, ctx: any, parser:any, sliceLastCharacter: any): object {
  let data: any = {
    id: id,
    line: [ctx._start.line, ctx._stop?.line],
    text: getText(ctx),
    type: parser.ruleNames[ctx.ruleIndex].slice(0,sliceLastCharacter)
  }
  return data
}
export default getData