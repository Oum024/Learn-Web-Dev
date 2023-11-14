const age = 65;

if(age >=18)
{
    console.log('You can Vote');

    if(age > 60)
    {
        console.log('you are senior citizen');
    }
}
else
{
    if(age > 5)
    {
        console.log('now it"s your time to go to school');
    }
    console.log('you cannot vote');
}


//else if laddder

const mark = 69;
if(mark >= 90)
{
    console.log('A1');
}
else if(mark >= 80)
{
    console.log('A2');
}
else if(mark >= 70)
{
    console.log('B1');
}
else if(mark >= 60)
{
    console.log('B2');
}
else if(mark >= 50)
{
    console.log('C1');
}
else if(mark >= 40)
{
    console.log('C2');
}
else
{
    console.log('Fail! Better luck next time')
}


//ternary operation

const mrk = 50;
const result = (mrk >= 40) ? "Passed" : "Fail";
console.log("Result : ",result);