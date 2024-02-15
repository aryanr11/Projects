#include<iostream>
using namespace std;
class cacu
{  public:
   int sum,modus,mines,multi,a,b;
   float devision;
   int cls()
   {
      system("cls");
   }
   int sums(int a,int b)
   {
      cls();
      sum=a+b;
      cout<<a<<"+"<<b<<"="<<sum;
   }
   int miness(int a,int b)
   {
      cls();
      mines=a-b;
      cout<<a<<"-"<<b<<"="<<mines;
   }
   int multis(int a,int b)
   {
      cls();
      multi=a*b;
      cout<<a<<"*"<<b<<"="<<multi;
   }
   int devisions(int a,int b)
   {
      cls();
      devision=a/b;
      cout<<a<<"/"<<b<<"="<<devision;
   }
   int moduss(int a,int b)
   {
      cls();
      modus=a%b;
      cout<<a<<"%"<<b<<"="<<modus;
   }
};
int main()
{
cacu c;
int a,b;
char n;
system("cls");
   cout<<"input value 1==>";
   cin>>a;
   cout<<"input value 2==>";
   cin>>b;


   cout<<"choes sum to press +\nchoes mines to press -\nchoes multi to press *\nchoes division to press / \nchoes modus to press % \nenter the option==>";
   cin>>n;
   switch(n)
   {
      case '+':
      {
       c.sums(a,b);  
       break;
      }
      case '-':
      {
      c.miness(a,b);
       break;
      }
      case '*':
      {
      c.multis(a,b);
       break;
      }
      case '/':
      {
      c.devisions(a,b);  
       break;
      }

      case '%':
      {
         c.moduss(a,b);
       break;
      }
      default:
      {
         break;
      }
   }
return 0;
}