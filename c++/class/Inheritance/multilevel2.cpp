#include <iostream>
using namespace std;
class first
{
public:
    int a, b, sum;
    int get()
    {
        cout << "Enter A = ";
        cin >> a;
        cout << "Enter B = ";
        cin >> b;
    }
};
class second : public first
{
public:
    int out()
    {
        cout << "A = " << a;
        cout << "\nB = " << b;
    }
};
class third : public second
{
public:
    int summ()
    {
        sum = a + b;
        cout << "\nSum = " << sum;
    }
};
int main()
{
    system("cls");
    third s;
    s.get();
    s.out();
    s.summ();
}