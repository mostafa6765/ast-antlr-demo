/**
 * Get rule based input stream text.
 * 
 * @param context 
 * @returns {string}
 */
function getText(context: any, inputStream: any = ''): string {
  let start: number = context._start?.startIndex
  let theEnd: number = context._stop?.stopIndex
  let end: number = theEnd + 1
  let getTheText: string

  if (inputStream === '') {
    getTheText = context._start?.inputStream?.data.slice(start, end)
  } else {
    getTheText = inputStream?.data.slice(start, end)
  }
  
  return getTheText
}
export default getText