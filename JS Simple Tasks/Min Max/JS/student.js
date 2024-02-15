var a=88
var b=85
var c=87
var d=94
var e=90
var f=89
var g=93
var total=a+b+c+d+e+f+g
var pr=total/7
var grad

if(pr>=95)
{
    grad=1
}
else if(pr>=80)
{
    grad=2
}
else if(pr>=70)
{
    grad=3
}
else if(pr>=60)
{
    grad=4
}
else if(pr>=60)
{
    grad=5
}
else
{
    grad=6
}


document.write("<h1>-: Marks :-</h1>")
document.write("<h2>eng = "+a)
document.write("<h2>hindi = "+b)
document.write("<h2>guj = "+c)
document.write("<h2>math = "+d)
document.write("<h2>sci = "+e)
document.write("<h2>com = "+f)
document.write("<h2>sanskrit = "+g)
document.write("<h1>-: Result :-</h1>")
document.write("<h2>Total = "+total)
document.write("<h2>Pr = "+pr)

if(grad==1)
{
    document.write("<h2>Grad = A+🎉</h2>")
}
else if(grad==2)
{
    document.write("<h2>Grad = A😎</h2>")
}
else if(grad==3)
{
    document.write("<h2>Grad = B😊</h2>")
}
else if(grad==4)
{
    document.write("<h2>Grad = C👌</h2>")
}
else if(grad==5)
{
    document.write("<h2>Grad = D😗</h2>")
}
else if(grad==6)
{
    document.write("<h2>Grad = Fail😢</h2>")
}
document.write("</h2>")