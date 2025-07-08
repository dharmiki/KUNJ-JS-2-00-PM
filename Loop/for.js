let user = prompt("Enter The Value="); 

let f1 = -1, f2 = 1, ans;

for (let i = 0; i < user; i++) {
    ans = f1 + f2;
    console.log(ans + "  ");
    f1 = f2;
    f2 = ans;
}