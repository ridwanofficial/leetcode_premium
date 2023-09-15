/*

word
1 to 4
x => n-x+1

x = 1 => 4
x = 2=> 3

so 1 to 4 is n*(n+1)

not only subarray

1x1x

combinatorics problem 4C0+...+4C4 = 2^n

2^n means we can take or not take(dfs simple) 

know we have to generate 

n = words length 
r => 0 to n
        nCr by r nested for loop

*/
