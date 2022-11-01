console.log("Section 2.1 FizzBuzz");
for(var i=1;i<=100;i++){
    if(i%3==0){
        console.log("Fizz");
    }
    if(i%5==0){
        console.log("Buzz");
    }
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
}

console.log("Section 2.2 chess board");
var hash = '';
var size = 8;

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        (i + j) % 2 ? hash += '#': hash += ' ';
    }
    hash += '\n';
} 
console.log(hash);

console.log("Section 2.3 The Sum of range");

function range(value1,value2,value3){
    const list=[];
    var i=0;
    if(value3==null){
        for(;value1<=value2;value1++){
            list[i]=value1;
            i+=1;
        }
        return list;
    }
    if(value3==-1){
        
        for(;value1>=value2;value1--){
            list[i]=value1;
            i+=1;
        }
        return list;
    }
}

function sum(arguments){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));

console.log("Section 2.4 Roman Numeral Converter");

function convertToRoman(value1){
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( value1 >= lookup[i] ) {
      roman += i;
      value1 -= lookup[i];
    }
  }
  return roman;
}
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(99));
console.log(convertToRoman(501));
console.log(convertToRoman(3423));