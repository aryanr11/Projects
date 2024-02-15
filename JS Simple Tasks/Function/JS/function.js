function t1to10oddeven(a)
{
    for(i=1;i<=10;i++)
    {
        if(a==1)
        {
            var b=i%2
            if(b==1)
            {
                document.write(`${i}  `)
            }
        }
        if(a==2)
        {
            var b=i%2
            if(b==0)
            {
                document.write(`${i}  `)
            }
        }
    }
}

function t1to100_2()
{
    for(i=1;i<=100;i++)
    {
        var b=i%2
        if(b==0)
        {
            document.write(`${i}  `)
        }
    }
}

function t1to100_3_5(a)
{
    for(i=1;i<=1000;i++)
    {
        if(a==3)
        {
            var b=i%3
            if(b==0)
            {
                document.write(`${i}  `)
            }
        }
        if(a==5)
        {
            var b=i%5
            if(b==0)
            {
                document.write(`${i}  `)
            }
        } 
    }
}


document.write(`<h2>Odd Num</h2>`)
t1to10oddeven(1)

document.write(`<h2>Even Num</h2>`)
t1to10oddeven(2)

document.write(`<h2>1 to 100 divid with Num 2</h2>`)
t1to100_2()

document.write(`<h2>1 to 1000 divid with Num 3</h2>`)
t1to100_3_5(3)

document.write(`<h2>1 to 100 divid with Num 5</h2>`)
t1to100_3_5(5)