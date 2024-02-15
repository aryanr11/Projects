#include <iostream>
using namespace std;
class first
{
public:
    int a, sum;
    int get()
    {
        cout << "Enter A = ";
        cin >> a;
    }
};
class second
{
public:
    int b;
    int out()
    {
        cout << "Enter B = ";
        cin >> b;
    }
};
class third : public second, public first
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
    third s;
    s.get();
    s.out();
    s.summ();
}