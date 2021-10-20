let trHeight=8
let trWidth=2
let rectHeight=2
let rectWidth=-2
let trArea=trHeight*trWidth/2
let rectArea=rectHeight*rectWidth

if(trArea>=0 && rectArea>=0){
    if(trArea>rectArea){
        console.log('The area of triangle is bigger')
    } else{
        console.log('The area of rectangle is bigger')
    }
} else{
    console.log("You've inserted unvalid numbers")
    
}