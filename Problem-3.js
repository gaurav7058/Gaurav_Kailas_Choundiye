function Problem3(a){
    let count = (a % 2 === 0) ? a - 1 : a;
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(2 * i + 1);
    }
    console.log(result.join(", "));
}
const a=3
Problem3(a)