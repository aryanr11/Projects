#include <stdio.h>
int summ(int n, int a[10][10])
{
    int i, sum = 0, j;
    system("cls");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            sum = sum + a[i][j];
        }
    }
    printf("Sum = %d", sum);
}
int main()
{
    system("cls");
    int i, a[10][10], n, j;
    printf("Entrr the valu of N = ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            printf("a[%d][%d] = ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
    summ(n, a);
    return 0;
}