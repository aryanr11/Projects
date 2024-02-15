document.write("<h1>4 Variable Min A & B & C & D</h1>")

if(a<b)
{
    if(a<c)
    {
        if(a<d)
        {
            document.write("<h3>A is MIN</h3>")
        }
        else
        {
            document.write("<h3>D is MIN</h3>")
        }
    }
    else
    {
        if(c<d)
        {
            document.write("<h3>C is MIN</h3>")
        }
        else
        {
            document.write("<h3>D is MIN</h3>")
        }
    }
}
else
{
    if(b<c)
    {
        if(b<d)
        {
            document.write("<h3>B is MIN</h3>")
        }
        else
        {
            document.write("<h3>D is MIN</h3>")
        }
    }
    else
    {
        if(c<d)
        {
            document.write("<h3>C is MIN</h3>")
        }
        else
        {
            document.write("<h3>D is MIN</h3>")
        }
    }
}