var x = 0;
function foo() {
  x++;
  this.x = x;
  return foo;
}
var bar = new new foo;
console.log(bar.x);
