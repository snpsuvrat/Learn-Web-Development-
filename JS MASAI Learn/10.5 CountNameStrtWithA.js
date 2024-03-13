//ForCountingNamesStartingWith "A"

let name=["Abhishek","Aash","auggal","Ashu","prapti","a"];

let Check_name="";
let countA=0;

for(i=0;i<=name.length-1;i++)
{
    Check_name=name[i];
    if(Check_name[0]=="A")
    {
        countA++;
    }
   
}
console.log("Number of Names Which Start with A are",countA)

// For Count Name Which Have "a" in it

let Counta=0;
for(i=0;i<=name.length-1;i++)
{
    Check_name=name[i];
   
    for(let j=0;j<=Check_name.length-1;j++)
{
    if(Check_name[j]=="a")
    {
        Counta++;
        break;
    }
}
   
}
console.log("Number of names which contain small a in it are",Counta)