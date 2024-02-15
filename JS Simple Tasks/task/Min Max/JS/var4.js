document.write("<h1>4 Variable Max A & B & C & D</h1>")

if(a>b)
{
    if(a>c)
    {
        if(a>d)
        {
            document.write("<h3>A is MAX</h3>")
        }
        else
        {
            document.write("<h3>D is MAX</h3>")
        }
    }
    else
    {
        if(c>d)
        {
            document.write("<h3>C is MAX</h3>")
        }
        else
        {
            document.write("<h3>D is MAX</h3>")
        }
    }
}
else
{
    if(b>c)
    {
        if(b>d)
        {
            document.write("<h3>B is MAX</h3>")
        }
        else
        {
            document.write("<h3>D is MAX</h3>")
        }
    }
    else
    {
        if(c>d)
        {
            document.write("<h3>C is MAX</h3>")
        }
        else
        {
            document.write("<h3>D is MAX</h3>")
        }
    }
}