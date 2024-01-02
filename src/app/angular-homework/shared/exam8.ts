export function factorial(num: number): number {
    if (num == 0) return 1
    else return num * factorial(num - 1)
}

//console.log(factorial(1))

export function isPrime(n: number): boolean {
    if (n <= 1) return false
    else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true
    }
}

//console.log(isPrime(4))