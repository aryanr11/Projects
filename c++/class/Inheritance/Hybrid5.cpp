#include <iostream>
using namespace std;
class first
{
public:
    int a, b, sum, multi;
    int get()
    {
        cout << "\nEnter A = ";
        cin >> a;
        cout << "Enter B = ";
        cin >> b;
    }
};
class second : virtual public first
{
public:
    int out()
    {
        multi = a * b;
        cout << "Multi = " << multi;
    }
};
class third : virtual public first
{
public:
    int summ()
    {
        sum = a + b;
        cout << "\nSum = " << sum;
    }
};
class fourth : public second, public third
{
public:
    int su;
    int ss()
    {
        su = multi * sum;
        cout << "\nMulti * Sum = " << su;
    }
};
int main()
{
    system("cls");
    fourth x;
    x.get();
    x.out();
    x.summ();
    x.ss();
}