let str="Donald";
let new_str="";

for(i=0;i<=str.length-1;i++)
{
    if(i==0)
    {
        new_str=new_str+"R";
    }
    else
    {
        new_str=new_str+str[i];
    }
}
console.log(str);
console.log(new_str);