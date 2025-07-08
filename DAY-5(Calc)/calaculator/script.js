function cal(a) {
    document.getElementById("miki").value += a;

}
function can() {
    document.getElementById("miki").value = "";
}
function del() {
    let display = document.getElementById("miki");
    display.value = display.value.slice(0, -1);
}
function calc() {
    let a = document.getElementById("miki").value;

    document.getElementById("miki").value = eval(a)
}