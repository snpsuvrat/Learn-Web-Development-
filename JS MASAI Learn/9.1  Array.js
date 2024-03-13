let name=["Abhishek","Umendra","Suryakant",2,3,4,5,6,7,8];
for(i=0;i<=name.length-1;i++)
{
    if(name[i]=="Umendra" || name[i]=="Suryakant")
    {
        continue;
    }
    console.log(name[i]);
}
