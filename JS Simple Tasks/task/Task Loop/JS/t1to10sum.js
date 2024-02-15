document.write("<h1>1 To 10 In Sum and tabal</h1>")

var sum=0

for(var i=1;i<=10;i++)
{
    sum=sum+i;
}

document.write("Sum of 1 to 10 is "+sum)

document.write(`<h3>The tabal of Sum 👇</h3>`)

for(var i=1;i<=10;i++)
{
    var mul=sum*i;
    document.write(`${sum} * ${i} = ${mul}<br>`)
}

var N=parseInt(prompt("Enter N For Sum"))

document.write(`<h3>The tabal of N 👇</h3>`)

for(var i=1;i<=10;i++)
{
    var mul=N*i;
    document.write(`${N} * ${i} = ${mul}<br>`)
}

var N=parseInt(prompt("Enter N For !"))

document.write(`<h3>The ! of N 👇</h3>`)

var fac=1
for(var i=1;i<=N;i++)
{
        fac=parseInt(fac*i)
}
document.write(`${N}! = ${fac}`)



var i, temp, n, sum
        document.write(`<br><h3>Palidrom No</h3>`)
        i=parseInt(prompt("Enter Palidrom No"))
                n = i
                sum = 0
            while (n!=0)
            {
                temp=n%10
                sum=sum*10+temp
                n=parseInt(n/10)
            }
            if (i==sum)
            {
                document.write(`${i} is a Palidrom No`)
            }
            else
            {
                document.write(`${i} is Not a Palidrom No`)
            }


var i, n, sum, temp
    document.write(`<h3>Armstrom No</h3>`)
        i=parseInt(prompt("Enter Armstrom No"))
        n=i
        sum=0
            while(n!=0)
            {
                temp=n%10
                sum=sum+temp*temp*temp
                n=parseInt(n/10)
            }
            if(i==sum)
            {
                document.write(`${i} is a Armstrom No`)
            }
            else
            {
                document.write(`${i} is Not a Armstrom No`)
            }

    document.write(`<h3>Neone No</h3>`)
        i=parseInt(prompt("Enter Neone No"))

        n=i*i
            sum=0
            while (n != 0)
            {
                temp = parseInt(n%10)
                sum = sum + temp
                n = parseInt(n/10)
            }
            if(i==sum)
            {
                document.write(`${i} is a Neone No`)
            }
            else
            {
                document.write(`${i} is Not a Neone No`)
            }

var sum = 0, rem
        n = parseInt(prompt("Reverce Value"))

            document.write("value = " + n +"<br><br>")
    
            while(n!=0)
            {
                rem = n % 10
                sum = sum * 10 + rem
                n = parseInt(n / 10)   
            }
    
            document.write("Reverse = "+sum)


        n = parseInt(prompt("leep year Check"))

            document.write("value = " + n +"<br><br>")
    
            a=n%4

            if(a==0)
            {
                document.write(`${n} is Leep Year😎`)
            }
            else
            {
                document.write(`${n} is Not Leep Year😢`)
            }