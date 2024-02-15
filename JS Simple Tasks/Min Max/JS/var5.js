document.write("<h1>5 Variable Max A & B & C & D & E</h1>")

if(a>b)
{
    if(a>c)
    {
        if(a>d)
        {
            if(a>e)
            {
                document.write("<h3>A is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
        else
        {
            if(d>e)
            {
                document.write("<h3>D is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
    }
    else
    {
        if(c>d)
        {
            if(c>e)
            {
                document.write("<h3>C is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
        else
        {
            if(d>e)
            {
                document.write("<h3>D is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
    }
}
else
{
    if(b>c)
    {
        if(b>d)
        {
            if(b>e)
            {
                document.write("<h3>B is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
        else
        {
            if(d>e)
            {
                document.write("<h3>D is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
    }
    else
    {
        if(c>d)
        {
            if(c>e)
            {
                document.write("<h3>C is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
        else
        {
            if(d>e)
            {
                document.write("<h3>D is MAX</h3>")
            }
            else
            {
                document.write("<h3>E is MAX</h3>")
            }
        }
    }
}