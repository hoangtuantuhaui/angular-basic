let arr = <T>(arr: T[]): T | undefined => {
  return arr.length > 0 ? arr[0] : undefined
}

const liststring: string[] = ["test", "test2"]
console.log(arr(liststring))

const listnumberarr: number[] = [1,2]
console.log(arr(listnumberarr))