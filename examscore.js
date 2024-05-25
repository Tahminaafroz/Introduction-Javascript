const score = 80;
// greater than 90=A
// between 80-90=b
// between 70 and 80=c 
//else you get "try harder next time"

if (score>=90){
    console.log("You got A");
}
else if(80<=score && score<90){
    console.log("You got B");
}
    else if(70<=score || score<80){
        console.log("You got C");
    
}
else{
    console.log("You will try harder next time");
}// you got A

// && AND operator
//  || or operator