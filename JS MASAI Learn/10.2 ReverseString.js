let name="Bruce Wayne";
let start=0;
let end=name.length-1;
let ReString="";
for(i=end;i>=start;i--)
{
    ReString=ReString+name[i];
}
console.log(ReString);