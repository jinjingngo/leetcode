// /* C Program for Memoized version for nth Fibonacci number */
// #include <stdio.h>
// #define NIL -1
// #define MAX 100

// int lookup [MAX];

// /* Function to initialize NIL values in lookup table */
// void _initialize () 
// {
//   int i; 
//   for (i = 0; i < MAX; i++)
//   {
//     lookup[i] = NIL;
//   }
// }

// int fib(int n)
// {
//   if (lookup[n] == NIL) 
//   {
//     if (n <= 1) 
//     {
//       lookup[n] = n;
//     }
//     else
//     {
//       lookup[n] = fib(n - 1) + fib(n - 2);
//     }
//   }
//   return lookup[n];
// }

// int main ()
// {
//   int n = 40;
//   _initialize();
//   printf("Fibonacci number is %d ", fib(n));
//   return 0;
// }

#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
  vector<string> msg { "Hello", "C++", "World", "from", "VS Code!" };
  for (const string& word : msg)
  {
    cout << word << " ";
  }
  cout << endl;
}