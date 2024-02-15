#include<iostream>
using namespace std;
class array
{   
    public:
    int a[100],n,i,sum,min,max;
    int value()
    {
        cout<<"enter array sige :-";
        cin>>n;
        for(i=0;i<n;i++)
        {
            cout<<"a["<<i<<"] = ";
            cin>>a[i];
        }
        summ();
        maxx();
        minn();
    }
    int summ()
    {
        sum=0;
        for(i=0;i<n;i++)
        {
            sum=sum+a[i];
        }
        cout<<"sum = "<<sum;
    }
    int maxx()
    {
        max=a[0];
        for(i=0;i<n;i++)
        {
            if(max<a[i])
            {
                max=a[i];
            }
        }
        cout<<"\nMax = "<<max;
    }
    int minn()
    {
        min=a[0];
        for(i=0;i<n;i++)
        {
            if(min>a[i])
            {
                min=a[i];
            }
        }
        cout<<"\nMin = "<<min;
    }
};
int main()
{
    system("cls");
    array a;
    a.value();
}