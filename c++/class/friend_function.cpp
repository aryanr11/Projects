#include <iostream>
using namespace std;
class hellow
{
public:
    int a;
    int get1()
    {
        cout << "Enter A = ";
        cin >> a;
    }
    friend int summ();
};
class helloww
{
public:
    int b;
    int get2()
    {
        cout << "Enter B = ";
        cin >> b;
    }
    friend int summ();
};
int summ(hellow x, helloww y)
{
    int sum;
    sum = x.a + y.b;
    cout << "\nSum = " << sum;
}
int main()
{
    system("cls");
    hellow x;
    x.get1();
    helloww y;
    y.get2();
    summ(x, y);
}