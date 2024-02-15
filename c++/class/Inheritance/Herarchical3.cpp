#include <iostream>
using namespace std;
class first
{
public:
    int a, b, sum, minus;
    int get()
    {
        cout << "\nEnter A = ";
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
        minus = a - b;
        cout << "Minus = " << minus;
    }
};
class third : public first
{
public:
    int summ()
    {
        sum = a + b;
        cout << "Sum = " << sum;
    }
};
int main()
{
    system("cls");
    second s;
    s.get();
    s.out();
    third t;
    t.get();
    t.summ();
}