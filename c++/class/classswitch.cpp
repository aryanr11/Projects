#include <iostream>
using namespace std;
class switchcase
{
public:
   int a, b, c, d, e, sum, n;
   int op()
   {
      cls();
      cout << "1.SUM\n2.MIN\n3.MAX\n4.MULTI\nSELECT OPTION==>";
      cin >> n;
   }
   int cls()
   {
      system("cls");
   }
   int sums(int a, int b)
   {
      cls();
      sum = a + b;
      cout << a << "+" << b << "=" << sum;
   }
   int sums(int a, int b, int c)
   {
      cls();
      sum = a + b + c;
      cout << a << "+" << b << "+" << c << "=" << sum;
   }
   int sums(int a, int b, int c, int d)
   {
      cls();
      sum = a + b + c + d;
      cout << a << "+" << b << "+" << c << "+" << d << "=" << sum;
   }
   int sums(int a, int b, int c, int d, int e)
   {
      cls();
      sum = a + b + c + d + e;
      cout << a << "+" << b << "+" << c << "+" << d << "+" << e << "=" << sum;
   }
   int mins(int a, int b)
   {
      cls();
      if (a < b)
      {
         cout << "min=" << a;
      }
      else
      {
         cout << "min=" << b;
      }
   }
   int mins(int a, int b, int c)
   {
      cls();
      if (a < b && a < c)
      {
         cout << "min=" << a;
      }
      else if (b < c)
      {
         cout << "min=" << b;
      }
      else
      {
         cout << "min=" << c;
      }
   }
   int mins(int a, int b, int c, int d)
   {
      cls();
      if (a < b && a < c && a < d)
      {
         cout << "min=" << a;
      }
      else if (b < c && b < d)
      {
         cout << "min=" << b;
      }
      else if (c < d)
      {
         cout << "min=" << c;
      }
      else
      {
         cout << "min=" << d;
      }
   }
   int mins(int a, int b, int c, int d, int e)
   {
      cls();
      if (a < b && a < c && a < d && a < e)
      {
         cout << "min=" << a;
      }
      else if (b < c && b < d && b < e)
      {
         cout << "min=" << b;
      }
      else if (c < d && c < e)
      {
         cout << "min=" << c;
      }
      else if (d < e)
      {
         cout << "min=" << d;
      }
      else
      {
         cout << "min=" << e;
      }
   }
   int maxs(int a, int b)
   {
      cls();
      if (a > b)
      {
         cout << "max=" << a;
      }
      else
      {
         cout << "max=" << b;
      }
   }
   int maxs(int a, int b, int c)
   {
      cls();
      if (a > b && a > c)
      {
         cout << "max=" << a;
      }
      else if (b > c)
      {
         cout << "max=" << b;
      }
      else
      {
         cout << "max=" << c;
      }
   }
   int maxs(int a, int b, int c, int d)
   {
      cls();
      if (a > b && a > c && a > d)
      {
         cout << "max=" << a;
      }
      else if (b > c && b > d)
      {
         cout << "max=" << b;
      }
      else if (c > d)
      {
         cout << "max=" << c;
      }
      else
      {
         cout << "max=" << d;
      }
   }
   int maxs(int a, int b, int c, int d, int e)
   {
      cls();
      if (a > b && a > c && a > d && a > e)
      {
         cout << "max=" << a;
      }
      else if (b > c && b > d && b > e)
      {
         cout << "max=" << b;
      }
      else if (c > d && c > e)
      {
         cout << "max=" << c;
      }
      else if (d > e)
      {
         cout << "max=" << d;
      }
      else
      {
         cout << "max=" << e;
      }
   }
   int multis(int a, int b)
   {
      cls();
      sum = a * b;
      cout << a << "*" << b << "=" << sum;
   }
   int multis(int a, int b, int c)
   {
      cls();
      sum = a * b * c;
      cout << a << "*" << b << "*" << c << "=" << sum;
   }
   int multis(int a, int b, int c, int d)
   {
      cls();
      sum = a * b * c * d;
      cout << a << "*" << b << "*" << c << "*" << d << "=" << sum;
   }
   int multis(int a, int b, int c, int d, int e)
   {
      cls();
      sum = a * b * c * d * e;
      cout << a << "*" << b << "*" << c << "*" << d << "*" << e << "=" << sum;
   }
};

int main()
{
   switchcase s;
   int n, a, b, c, d, e;
   system("cls");
   cout << "1.TWO VALUE\n2.THREE VALUE\n3.FOUR VALUE\n4.FIVE VALUE\nNETER THE OPTION==>";
   cin >> n;

   switch (n)
   {
   case 1:
   {
      system("cls");
      cout << "ENTER THE VALUE 1==> ";
      cin >> a;
      cout << "ENTER THE VALUE 2==> ";
      cin >> b;
      s.op();
      switch (s.n)
      {
      case 1:
      {
         s.sums(a, b);
         break;
      }
      case 2:
      {
         s.mins(a, b);
         break;
      }
      case 3:
      {
         s.maxs(a, b);
         break;
      }
      case 4:
      {
         s.multis(a, b);
         break;
      }
      default:
      {
         break;
      }
      }
      break;
   }
   case 2:
   {
      system("cls");
      cout << "ENTER THE VALUE 1==> ";
      cin >> a;
      cout << "ENTER THE VALUE 2==> ";
      cin >> b;
      cout << "ENTER THE VALUE 3==> ";
      cin >> c;
      s.op();
      switch (s.n)
      {
      case 1:
      {
         s.sums(a, b, c);
         break;
      }
      case 2:
      {
         s.mins(a, b, c);
         break;
      }
      case 3:
      {
         s.maxs(a, b, c);
         break;
      }
      case 4:
      {
         s.multis(a, b, c);
         break;
      }
      default:
      {
         break;
      }
      }
      break;
   }
   case 3:
   {
      system("cls");
      cout << "ENTER THE VALUE 1==> ";
      cin >> a;
      cout << "ENTER THE VALUE 2==> ";
      cin >> b;
      cout << "ENTER THE VALUE 3==> ";
      cin >> c;
      cout << "ENTER THE VALUE 4==> ";
      cin >> d;
      s.op();
      switch (s.n)
      {
      case 1:
      {
         s.sums(a, b, c, d);
         break;
      }
      case 2:
      {
         s.mins(a, b, c, d);
         break;
      }
      case 3:
      {
         s.maxs(a, b, c, d);
         break;
      }
      case 4:
      {
         s.multis(a, b, c, d);
         break;
      }
      default:
      {
         break;
      }
      }
      break;
   }
   case 4:
   {
      system("cls");
      cout << "ENTER THE VALUE 1==> ";
      cin >> a;
      cout << "ENTER THE VALUE 2==> ";
      cin >> b;
      cout << "ENTER THE VALUE 3==> ";
      cin >> c;
      cout << "ENTER THE VALUE 4==> ";
      cin >> d;
      cout << "ENTER THE VALUE 5==> ";
      cin >> e;
      s.op();
      switch (s.n)
      {
      case 1:
      {
         s.sums(a, b, c, d, e);
         break;
      }
      case 2:
      {
         s.mins(a, b, c, d, e);
         break;
      }
      case 3:
      {
         s.maxs(a, b, c, d, e);
         break;
      }
      case 4:
      {
         s.multis(a, b, c, d, e);
         break;
      }
      default:
      {
         break;
      }
      }
      break;
   }
   default:
   {
      system("cls");

      break;
   }
   }
   return 0;
}