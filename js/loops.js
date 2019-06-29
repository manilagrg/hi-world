

//initializer is to set the number amounts etc in computer programe so that it ready to work.
/* to start up frist you need to give variables 
*/

var ans = 0

for( ans; ans <= 20; ans = ans +1){
    console.log(ans)
    if(ans % 3 == 0 ){
        console.log("Odd number")
    }
}



for( var n = 0; n < 20; n +1 ){
    console.log(n)
    if( n % 2 == 0 ){
        console.log("Divisible by two")
    }
}

for(var m = 0; m < 10; m +1){
    console.log(m, m * 2)
}

//using while is same but the method is different you can prefer which you will feel easy 

var n = 0;
while(n < 20){
    console.log(n)
    if(n % 3 == 0){
        console.log("Odd number")
    }
    //add stepper
    n = n +1

}

    




