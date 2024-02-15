#include <iostream>
using namespace std;
class demo
{
public:
    int a;
    int demo1(int a)
    {
        this->a = a;
        cout << "A = " << a;
    }
};
class staticc
{
public:
    static int out()
    {
        cout << "\nHellow";
    }
};
int main()
{
    system("cls");
    demo d;
    d.demo1(12);
    staticc::out();jg
}