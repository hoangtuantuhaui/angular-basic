let sum = (arr:number[]) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue,0)
}

const listnumber: number[] = [1,2,3,4]
console.log(sum(listnumber))