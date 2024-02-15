#include <iostream>
using namespace std;
class demo
{
public:
    class demo1
    {
    public:
        int out()
        {
            cout << "Hellow";
        }
    };
    int demoo()
    {
        demo1 x;
        x.out();
    }
};
int main()
{
    system("cls");
    demo d;
    d.demo1() x;
    x.out();
}