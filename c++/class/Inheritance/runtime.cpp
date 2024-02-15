#include <iostream>
using namespace std;
class first
{
public:
    int a, b;
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
    int sum;
    int get()
    {
        sum = a + b;
        cout << "Sum = " << sum;
    }
};
int main()
{
    system("cls");
    second s;
    s.first::get();
    s.get();
}