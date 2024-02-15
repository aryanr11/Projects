#include <iostream>
using namespace std;
class first
{
public:
    int a;
    int get()
    {
        cout << "Enter A = ";
        cin >> a;
    }
};
class second : public first
{
public:
    int out()
    {
        cout << "A = " << a;
    }
};
int main()
{
    system("cls");
    second s;
    s.get();
    s.out();
}