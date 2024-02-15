#include<iostream>
using namespace std;
class sum
{   
    public:
    char x[50];
    int a,b,c,d,e,sum,pr,min,max,res,grad;
    int get1()
    {
        cout<<"Enter Name = ";
        cin.getline(x,50);
    }
    int get()
    {
        cout<<"Marks of Gujrati :-";
        cin>>a;
        cout<<"Marks of Maths   :-";
        cin>>b;
        cout<<"Marks of English :-";
        cin>>c;
        cout<<"Marks of Hindi   :-";
        cin>>d;
        cout<<"Marks of Com     :-";
        cin>>e;
    }
    int out()
    {
        cout<<x<<"\t"<<a<<"\t"<<b<<"\t"<<c<<"\t"<<d<<"\t"<<e;
        outt();
        prs();
        maxx();
        minn();
        gradd();
    }
    int name()
    {
            cout<<"Name\tguj\tmaths\teng\thindi\tcom\tsum\tpr\tmax\tmin\tgrade";
    }
    int outt()
    {
        sum=a+b+c+d+e;
        cout<<"\t"<<sum;
    }
    int prs()
    {   
        pr=sum*100/500;
        cout<<"\t"<<pr<<"%";
    }
    int maxx()
    {
        cout<<"\t";
        if (a>b && a>c && a>d && a>e)
        {
            cout<<"Guj";
        }
        else if (b>c && b>d && b>e)
        {
            cout<<"Math";
        }
        else if (c>d && c>e)
        {
            cout<<"Eng";
        }
        else if (d>e)
        {
            cout<<"Hindi";
        }
        else
        {
            cout<<"com";
        }
    }
    int minn()
    {
        cout<<"\t";
        if (a<b && a<c && a<d && a<e)
        {
            cout<<"Guj";
        }
        else if (b<c && b<d && b<e)
        {
            cout<<"Math";
        }
        else if (c<d && c<e)
        {
            cout<<"English";
        }
        else if (d<e)
        {
            cout<<"Hindi";
        }
        else
        {
            cout<<"com";
        }
    }
     int gradd()
    {
        cout<<"\t";
        if(pr>=90)
        {
            cout<<"A";
        }
        else if(pr<90 && pr>=70)
        {
            cout<<"B";
        }
        else if(pr<70 && pr>=50)
        {
            cout<<"C";
        }
        else if(pr<50 && pr>=33)
        {
            cout<<"D";
        }
        else
        {
            cout<<"Fail";
        }
    }

};
int main()
{
    system("cls");
    sum s,s1;
    s.get1();
    s1.get1();
    s.get();
    s1.get();
    system("cls");
    s.name();
    cout<<"\n";
    s.out();
    cout<<"\n";
    s1.out();
}