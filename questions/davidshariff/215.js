function foo(a, b) {
  arguments[1] = 2;
  alert(b);
}
foo(1);
