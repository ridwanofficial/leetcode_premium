/*

[-2 1 3 0]

triplet order matter 


it can be greedy !! no 
i = -2
j,k < 2-(-2) = 4
(0,1,3)<4 
O(n) 

0 => 
1 => need [upto 2] =>(1,0)
3 => need [upto 0] =>(3,0)

map: 0,1,3

O(n^3)


we can sort to consume two sum concept => nlogn +n^2 

****  but need to keep track index to check condition i<j<k

*/
