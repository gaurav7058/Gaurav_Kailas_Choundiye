function Problem2(a){
    let num=1
    let result=[]
    for(let i=0;i<a;i++){
        result.push(num)
        num+=2
    }
    console.log(result.join(','))
}
const a=4
Problem2(a)