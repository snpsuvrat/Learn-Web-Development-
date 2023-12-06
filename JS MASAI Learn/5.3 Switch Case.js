let choice=2;
switch(choice)
{
    case 1 : console.log("ENglish");                       // 1 is the value of choice
             break;                                        //break is required to break it from the thread else all the case statements will execute after selected choice case
    case 2 : console.log("Marathi");
             break;
    case 3 : console.log("Gujrati");
             break; 
    case 4 : console.log("Bengali");
             break;       
    default : console.log("Invalid Choice"); // if any case is not matched then default statement runs
}