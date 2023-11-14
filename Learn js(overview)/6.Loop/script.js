// for loop

for(let i = 1; i < 11 ; i++)
{
    console.log('For loop :',i);
}

//while loop

let w = 1;
while(w < 11)
{
    console.log('While loop :',w);
    w += 1;
}

// do..while loop

let d = 1;
do
{
    console.log('Do..While loop :',d);
    d +=1;
}
while(d < 11)

//break and continue

let c = 0;
while(c < 11)
{
    c += 1;
    if(c == 5)
    {
        continue;
    }
    console.log('Continue : ',c);
} 

//break 

let b = 0;
while(b < 11)
{
    b += 1;
    if(b == 8)
    {
        break;
    }
    console.log('Break : ',b);
} 