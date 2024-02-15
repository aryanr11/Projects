#include <iostream>
using namespace std;
int main()
{
   int cnt,i,j,k,str;
   char a[100], b[100], c[100]={'c','r','e','a','t','i','v','e'}, m, n;
   system("cls");

   first:
   cout<<"enter the string a := ";
   cin.getline(a,100);
   cout<<"enter the string b :- ";
   cin.getline(b,100);
   
   for(i=0;a[i]='\0';i++)
   {
      if(a[i]==b[i])
      {
         str=1;
      }
      else
      {
         goto first;
      }
   }

   if (str==1)
   {
      cnt=0;
      
      for(i=0;c[i]!='\0';i++)
      {
         cnt++;
      }
      k=cnt;
      for(i=0;i<k;i++)
      {
         for(j=0;j<=i;j++)
         {
            cout<<" "<<c[j];
         }
         cout<<"\n";
      }
   }  
   else{
      system("cls");
      goto first;
   } 
   return 0;
}