document.write("<h1>1 To N In Loop</h1>")

var i=1
var N=parseInt(prompt("Enter N"))

document.write("<h3>While Loop</h3>")

while(i<=N){
    document.write(i+"<br>")
    i++;
}

document.write("<h3>Do While Loop</h3>")

var i=1
do{
    document.write(i+"<br>")
    i++;
}
while(i<=N)


document.write("<h3>For Loop</h3>")

var i=1
for(i=1;i<=N;i++){
    document.write(i+"<br>")
}