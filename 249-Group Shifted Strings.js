/*

["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]

we can generate a hash "0,1,1"
just use two pointer next-cur =if negative add 26 or shortcut just do %26

az => 25-0 =  25
ba => 0 - 1 = -1+26=25 or -1%26=25

za = 0-25 = -25+26=1
ab  = 1-0 = 1


*/
