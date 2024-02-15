#include <iostream>
using namespace std;
class demo
{
private:
    int x;
public:
    int set()
    {
        x = 1;
        return x;
    }
};
int main()
{
    system("cls");
    demo d;
    d.hellow();
    d.cout << d.set();
}
