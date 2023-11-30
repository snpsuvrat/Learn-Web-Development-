//If Statement
if(true){
  console.log("If Statement");
}

// If-Else Statement
if(false)
{
  //this statement will not executed as the condition is false
}
else{
  console.log("Else Statement");
}

//If-ElseIf-Else Statement
if(false){
  //statement will not be executed
}
else if(true){
  console.log("Else If Statement");
}
else
{
  console.log("Else Statement");
}

//Nested If Else

if(true)
{
  if(false)
  {
    console.log("Inner If");
  }
  else{
    console.log("Inner Else");
  }
}
else{
  console.log("Outer Else");
}