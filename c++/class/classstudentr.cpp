#include<iostream>
using namespace std;
class student_resulat
{
    public:
    int a,b,c,d,e,f,pr;

    int subject()
    {
        cout<<"english  ==>";
        cin>>a;
        cout<<"gujatari ==>";
        cin>>b;
        cout<<"computer ==>";
        cin>>c;
        cout<<"hindi    ==>";
        cin>>d;
        cout<<"account  ==>";
        cin>>e;
    }
    int subject_total()
    {
        f=a+b+c+d+e;
        cout<<"\ttotal==>"<<f;
    }
    int prt()
    {
        pr=f*100/500;
        cout<<"\n\tpr==>"<<pr<<"%";
    }

    int max()
    {
        if(a>b && a>c && a>d && a>e)
        {
            cout<<"highest "<<a<<" mark in english";
        }
        else if(b>c && b>d && b>e)
        {
            cout<<"highest "<<b<<" mark in gujatari";
        }
        else if(c>d && c>e)
        {
            cout<<"highest "<<c<<" mark in computer";
        }
        else if(d>e)
        {
            cout<<"highest "<<d<<" mark in hindi";
        }
        else{
            cout<<"highest "<<e<<" mark in account";
            }
    }
    int min()
    {
        if(a<b && a<c && a<d && a<e)
        {
            cout<<"lowest "<<a<<" mark in english";
        }
        else if(b<c && b<d && b<e)
        {
            cout<<"lowest "<<b<<" mark in gujatari";
        }
        else if(c<d && c<e)
        {
            cout<<"lowest "<<c<<" mark in computer";
        }
        else if(d<e)
        {
            cout<<"lowest "<<d<<" mark in hindi";
        }
        else{
            cout<<"lowest "<<e<<" mark in account";
            }
    }

    int grad()
    {
        if(pr>=90)
        {
            cout<<"pass with a grad";
        }
        else if(pr<90 && pr>=70)
        {
            cout<<"pass with b grad";
        }
        else if(pr<70 && pr>=50)
        {
            cout<<"pass with c grad";
        }
        else if(pr<50 && pr>=33)
        {
            cout<<"pass with d grad";
        }
        else
        {
            cout<<"fail in exam";
        }
    }

  

};


int main()
{
    student_resulat r,r1;
    system("cls");

    r.subject();
    r.subject_total();
    r.prt();
    cout<<"\n\n";
    r.max();
    cout<<"\n\n";
    r.min();
    cout<<"\n\n";
    r.grad();
    return 0;
    
}