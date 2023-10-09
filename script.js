// Lab_4.7
// Гринчук Тарас
// Лабораторна робота № 4.7
// Обчислення суми ряду Тейлора за допомогою ітераційних циклів та рекурентних
// Варіант №4

let xp,xk,x,dx,eps,a = 0,R = 0,S = 0,n = 0;

xp = parseFloat(prompt("xp = "));
xk = parseFloat(prompt("xk = "));
dx = parseFloat(prompt("dx = "));
eps = parseFloat(prompt("eps = "));

console.log(`|\tx\t| |\t\tln(x+1)\t\t\t| |\t\t\tS\t\t\t\t| |\t\tn\t\t|`);

x = xp;

while (x <= xk) {
   n = 0;
   a = x;
   S = a;
   do {
      n++;
      R = -x / (n + 1);
      a *= R;
      S += a;
   } while (Math.abs((a * x) / (n + 1)) >= eps);
   console.log(`|\t${x}\t| |\t${Math.log(x + 1)}\t| |\t${S}\t|     |\t${n}\t|`);
   x += dx;
}
