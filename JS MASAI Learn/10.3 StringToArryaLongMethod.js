let str="Donald";                    //string

let arr=[];                         //empty store to store string char
for(let i=0;i<=str.length-1;i++)
{
    arr.push(str[i]);                 //pushing string character to the array
}
console.log(arr)        //output will be [ 'D', 'o', 'n', 'a', 'l', 'd' ]

arr[0]="R";

//conver arr to str

let bag="";
for(i=0;i<=arr.length-1;i++)
{
    bag=bag+arr[i];
}
console.log(bag);

