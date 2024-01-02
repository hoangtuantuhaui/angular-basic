interface Persion {
  name: string,
  age: number,
  email: string
}

let showinfor = (persion: Persion) => {
  console.log('Name: ' + persion.name + ', Age: ' + persion.age + ', Email: ' + persion.email)
}

const persion: Persion = {
  name: "Test",
  age: 18,
  email: "test@gmail.com"
}

showinfor(persion)