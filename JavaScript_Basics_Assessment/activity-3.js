//Larry Yang Prework module 2 lesson 2 assessment
//Activity 3

//1.
const names = ['ben','jack','neil'];

//2+3
let a = 3;
while(a<6){
    let i = prompt('enter one more names');
    names.push(i);
    a++;
    console.log(names);
}

//4.
for(let k=0;k<names.length;k++){
    console.log(names[k]);
}

