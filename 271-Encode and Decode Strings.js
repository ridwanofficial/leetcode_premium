/*

list to string map

1. take marker => suppose ";"  
2. when this is not our given marker add an extra marker to understand \

so "a;b" means =>[a,b]
but "a\;b"means => [a;b] 
but "a\\;b"means => [a\;b] 
but "a\\b"means => [a\\b]
but "a\\\;b"means => [a\,b]


decode 
so if not "\" nothing to do 
if(one consecutive "\" and ;) {
    push
}if(multiple \\) skip one \

encode 

if (\ cumulate all) then push len+1 
if(array member ends )push \;

just number to teack each array need two charcacter extra 
1#a1#b
*/
