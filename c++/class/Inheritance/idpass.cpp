#include <iostream>
#include <string.h>
using namespace std;
class second
{
public:
    int pass, pass1;
    void passs()
    {
        pass1 = 12;
        cout << "Enter Password = ";
        cin >> pass;
        if (pass1 == pass)
        {
            cout << "Welcome";
        }
        else
        {
            for (int i = 3; i >= 1; i--)
            {
                cout << "re-enter pass (" << i << " tymes Left) = ";
                cin >> pass;
                if (pass1 == pass)
                {
                    cout << "Welcome";
                    break;
                }
            }
        }
    }
};
class first : public second
{
public:
    int a;
    char b[10];
    void get()
    {
        string id1 = "creative", id;
        cout << "Enter Id = ";
        cin >> id;
        if (id == id1)
        {
            second::passs();
        }
        else
        {
            for (int i = 3; i >= 1; i--)
            {
                cout << "re-enter id (" << i << " tymes Left) = ";
                cin >> id;
                if (id1 == id)
                {
                    second::passs();
                    break;
                }
            }
        }
    }
};
int main()
{
    system("cls");
    first s;
    s.get();
}