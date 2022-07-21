#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

int main()
{
    // the number of temperatures to analyse
    int n;
    int x = 0;
    int y = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        // a temperature expressed as an integer ranging from -273 to 5526
        int t;
        scanf("%d", &t);
        if (t > 0)
        {
            if (x == 0)
                x = t;
            if (t < x)
                x = t;
        }
        if (t < 0)
        {
            if (y == 0)
                y = t;
            if (t > y)
                y = t;
        }
    }
    if ((y * -1 < x || x == 0 ) && y)
        printf("%d\n", y);
    else
        printf("%d\n", x);
    // Write an answer using printf(). DON'T FORGET THE TRAILING \n
    // To debug: fprintf(stderr, "Debug messages...\n");

    return 0;
}