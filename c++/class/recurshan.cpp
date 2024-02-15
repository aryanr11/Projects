#include <iostream>
using namespace std;
int fect(int n)
{
    if (n > 0)
    {
        return n * fect(n - 1);
    }
    return 1;
}
int main()
{
    int n;
    system("cls"); 
    cout << "Enter Number = ";
    cin >> n;
    cout << fect(n);
}