let num=[12,21,53,17,84,25,6];
let max=-Infinity;            //dont use zero for comparison of smallest number take -Infinity
for(let i=0;i<=num.length-1;i++)
{
    if (num[i]>max)
    {
        max=num[i];
    }
}
console.log(max);