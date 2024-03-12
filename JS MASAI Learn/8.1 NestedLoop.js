
/*
to print 
12345
1234
123
12
1
*/
// for(let i=5;i>=1;i--)
// {
//     result=""
//   for(let j=1;j<=i;j++)

// {
//     result=result+j+" "
// }
//   console.log(result)
// }

/*
1
*
1 2
* *
1 2 3 
* * *
1 2 3 4
* * * *
1 2 3 4 5
* * * * * 
*/
for(let i=1;i<=5;i++)
{
    result=""
    star=""
  for(let j=1;j<=i;j++)

{
    result=result+j+" "
    star=star+"*"+" "
}
  console.log(result)
  console.log(star)
}