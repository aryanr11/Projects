int summ(int n,int a[100])
{
    int i,sum=0;
    for(i=0;i<n;i++)
    {
        sum=sum+a[i];
    }

    printf("Sum = %d",sum);
}