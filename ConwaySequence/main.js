/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const R = parseInt(readline());
 const L = parseInt(readline());
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 let i = 1;
 let y = 0;
 let n = R.toString()
 let p = [];
 p.push(n);
 let temp = [];
 
 while (i < L)
 {
     y = 0;
     temp = [];
     while (p[y])
     {
         count = 1;
         while (p[y] == p[y + 1])
         {
             count++;
             y++;
         }
         temp.push(count);
         temp.push(p[y]);
         y++;
     }
     p = temp;
     i++;
 }
 i = 0;
 let c = 0;
 let ret = ""; 
 while (p[i])
 {
     ret += p[i].toString();
     if (i + 1 < p.length)
         ret += " ";
     i++;
 }
 console.log(ret)