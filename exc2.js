let a=1
let b=-5
let c=6

if(a===0){
    console.log('the solution for the polynomial is '+(-c/b))
} else{
    let det=b**2-4*a*c
    if(det<0){
        console.log('Unsolvable')
    }
    else if(det===0){
        console.log('X='+(-b/(2*a)))
    }
    else {
        console.log('X1='+((-b+det**0.5)/(2*a))+", X2="+((-b-det**0.5)/(2*a)))
    }
}