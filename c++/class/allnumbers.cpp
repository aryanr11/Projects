#include <iostream>
using namespace std;
class demo
{
public:
    demo()
    {
        int i, n, sum, temp;
        cout << "Armstrom No \n";
        for (i = 10; i <= 1000; i++)
        {
            n = i;
            sum = 0;
            while (n != 0)
            {
                temp = n % 10;
                sum = sum + temp * temp * temp;
                n = n / 10;
            }
            if (i == sum)
            {
                cout << "\t" << i;
            }
        }
    }
    demo(int a)
    {
        int i, temp, n, sum;
        cout << "\npalidro no \n";
        for (i = 10; i <= 1000; i++)
        {
            n = i;
            sum = 0;
            while (n != 0)
            {
                temp = n % 10;
                sum = sum * 10 + temp;
                n = n / 10;
            }
            if (i == sum)
            {
                cout << "\t" << i;
            }
        }
    }
    demo(int a, int b)
    {
        int i, temp, n, sum, multi;
        cout << "\n Spy No.\n";
        for (i = 10; i <= 1000; i++)
        {
            n = i;
            multi = 1;
            sum = 0;
            while (n != 0)
            {
                temp = n % 10;
                sum = sum + temp;
                multi = multi * temp;
                n = n / 10;
            }
            if (multi == sum)
            {
                cout << "\t" << i;
            }
        }
    }
    demo(int a, int b, int c)
    {
        int i, temp, n, sum;
        cout << "\n Neon No.\n";
        for (i = 1; i <= 1000; i++)
        {
            n = i * i;
            sum = 0;
            while (n != 0)
            {
                temp = n % 10;
                sum = sum + temp;
                n = n / 10;
            }
            if (i == sum)
            {
                cout << "\t" << i;
            }
        }
    }
};
int main()
{
    system("cls");
    demo d;
    demo d1(11);
    demo d2(1, 1);
    demo d3(1, 1, 1);
}