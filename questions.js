const questions =
[ { name: '10',
    category: 'unclassified',
    value: 'console.log(4 - "5" + 0xf - "1e1");\n' },
  { name: '11',
    category: 'unclassified',
    value: 'function F() {}\n\nconsole.log(F.prototyope);\n' },
  { name: '12',
    category: 'unclassified',
    value: 'function F() {}\n\nconsole.log(F instanceof Function);\n' },
  { name: '13',
    category: 'unclassified',
    value: 'var a = [1, 2, 3];\nvar b = [1, 2, 3];\n\nconsole.log(a == b);\n' },
  { name: '7',
    category: 'unclassified',
    value: 'var a = new Array(1,2),\n    b = new Array(3);\n\nconsole.log(a[0] + b[0]);\n' },
  { name: '6',
    category: 'unclassified',
    value: 'console.log( +"something" );\n' },
  { name: '8',
    category: 'unclassified',
    value: 'var a = (1,5 - 1) * 2;\n\nconsole.log(a);\n' },
  { name: '9',
    category: 'unclassified',
    value: 'for (var key in {1:1, 0:0}) {\n  console.log(key);\n}\n' },
  { name: '400',
    category: 'array',
    value: 'var arr = [];\narr[0]  = \'a\';\narr[1]  = \'b\';\narr.foo = \'c\';\nalert(arr.length);\n' },
  { name: '500',
    category: 'boolean',
    value: '10 > 9 > 8 === true;\n' },
  { name: '501', category: 'boolean', value: 'NaN === NaN;\n' },
  { name: '1',
    category: 'hoisting',
    value: 'var foo = 1;\n\nfunction bar() {\n  if ( !foo ) {\n    var foo = 10;\n  }\n\n  console.log(foo);\n}\n\nbar();\n' },
  { name: '2',
    category: 'hoisting',
    value: 'function test() {\n  a = 1;\n\n  console.log(a);\n\n  console.log(b);\n\n  console.log(c());\n\n  var a;\n\n  var b = 2;\n\n  function c() {\n    return 3;\n  }\n}\n\ntest();\n' },
  { name: '3',
    category: 'hoisting',
    value: 'var a = 1;\n\nfunction test() {\n  a = 10;\n\n  return;\n\n  function a() {}\n}\n\ntest();\n\nconsole.log(a);\n' },
  { name: '5',
    category: 'hoisting',
    value: 'console.log(str);\nvar str = "Hello";\n' },
  { name: 'two-for-loops',
    category: 'hoisting',
    value: 'var a = [];\n\nfor (var i = 0; i < 10; i++)\n  a.push(function () {\n    console.log(i);\n  })\n\nfor (var j = 0; j < 10; ++j)\n  a[j]()\n' },
  { name: '200',
    category: 'davidshariff',
    value: 'var foo = function foo() {\n  console.log(foo === foo);\n};\nfoo();\n' },
  { name: '202',
    category: 'davidshariff',
    value: 'Number("1") - 1 == 0;\n' },
  { name: '203',
    category: 'davidshariff',
    value: '(true + false) > 2 + true;\n' },
  { name: '205',
    category: 'davidshariff',
    value: '"1" - - "1";\n' },
  { name: '206',
    category: 'davidshariff',
    value: 'var x = 3;\n\nvar foo = {\n  x: 2,\n  baz: {\n    x: 1,\n    bar: function() {\n      return this.x;\n    }\n  }\n}\n\nvar go = foo.baz.bar;\n\nalert(go());\nalert(foo.baz.bar());\n' },
  { name: '207',
    category: 'davidshariff',
    value: 'new String("This is a string") instanceof String;\n' },
  { name: '208',
    category: 'davidshariff',
    value: '[] + [] + \'foo\'.split(\'\');\n' },
  { name: '209',
    category: 'davidshariff',
    value: 'new Array(5).toString();\n' },
  { name: '210',
    category: 'davidshariff',
    value: 'var myArr = [\'foo\', \'bar\', \'baz\'];\nmyArr.length = 0;\nmyArr.push(\'bin\');\nconsole.log(myArr);\n' },
  { name: '211',
    category: 'davidshariff',
    value: 'String(\'Hello\') === \'Hello\';\n' },
  { name: '212',
    category: 'davidshariff',
    value: 'var x = 0;\nfunction foo() {\n  x++;\n  this.x = x;\n  return foo;\n}\nvar bar = new new foo;\nconsole.log(bar.x);\n' },
  { name: '213',
    category: 'davidshariff',
    value: 'var bar = 1,\n  foo = {};\n\nfoo: {\n  bar: 2;\n  baz: ++bar;\n};\nfoo.baz + foo.bar + bar;\n' },
  { name: '214',
    category: 'davidshariff',
    value: 'var myArr = [\'foo\', \'bar\', \'baz\'];\nmyArr[2];\nconsole.log(\'2\' in myArr);\n' },
  { name: '215',
    category: 'davidshariff',
    value: 'function foo(a, b) {\n  arguments[1] = 2;\n  alert(b);\n}\nfoo(1);\n' },
  { name: '300',
    category: 'instanceof',
    value: '"This is a string" instanceof String;\n' },
  { name: '600',
    category: 'this',
    value: 'var a = function Car() {\n  this.a = 0\n}\n\nvar b = a();\nconsole.log(b);\n\nvar c = new a();\nconsole.log(c);\n' },
  { name: '601',
    category: 'this',
    value: 'function Person() {\n  this.canSleep = true;\n  this.canHide = false;\n}\n\nPerson.prototype.canSleepF = function () {\n  return this.canSleep;\n};\n\nfunction Ninja() {\n  this.canHide = true;\n}\nNinja.prototype = Person.prototype;\n\nNinja.prototype.canHideF = function () {\n  return this.canHide;\n}\n\nvar person = new Person();\nvar ninja = new Ninja();\nconsole.log(ninja.canSleepF());\nconsole.log(person.canHideF());\n' },
  { name: '602',
    category: 'this',
    value: 'function Person() {\n  this.canSleep = true;\n  this.canHide = false;\n}\n\nPerson.prototype.canSleepF = function () {\n  return this.canSleep;\n};\n\nfunction Ninja() {\n  this.canHide = true;\n}\nNinja.prototype = new Person();\n\nNinja.prototype.canHideF = function () {\n  return this.canHide;\n}\n\nvar person = new Person();\nvar ninja = new Ninja();\nconsole.log(ninja.canSleepF());\nconsole.log(person.canHideF());\n' },
  { name: '102',
    category: 'perfectionkills',
    value: '(function(x){\n  delete x;\n  return x;\n})(1);\n' },
  { name: '111',
    category: 'perfectionkills',
    value: '(function f(){\n  function f(){ return 1; }\n  return f();\n  function f(){ return 2; }\n})();\n' },
  { name: '112',
    category: 'perfectionkills',
    value: 'function f(){ return f; }\nnew f() instanceof f;\n' },
  { name: '113',
    category: 'perfectionkills',
    value: 'with (function(x, undefined){}) length;\n' },
  { name: '100',
    category: 'typeof',
    value: '(function(){\n  return typeof arguments;\n})();\n' },
  { name: '103',
    category: 'typeof',
    value: 'var y = 1, x = y = typeof x;\nx;\n' },
  { name: '101',
    category: 'typeof',
    value: 'var f = function g(){ return 23; };\ntypeof g();\n' },
  { name: '104',
    category: 'typeof',
    value: '(function f(f){\n  return typeof f();\n})(function(){ return 1; });\n' },
  { name: '105',
    category: 'typeof',
    value: 'var foo = {\n  bar: function() { return this.baz; },\n  baz: 1\n};\n(function(){\n  return typeof arguments[0]();\n})(foo.bar);\n' },
  { name: '106',
    category: 'typeof',
    value: 'var foo = {\n  bar: function(){ return this.baz; },\n  baz: 1\n}\ntypeof (f = foo.bar)();\n' },
  { name: '107',
    category: 'typeof',
    value: 'var f = (function f(){ return "1"; }, function g(){ return 2; })();\ntypeof f;\n' },
  { name: '108',
    category: 'typeof',
    value: 'var x = 1;\nif (function f(){}) {\n  x += typeof f;\n}\nx;\n' },
  { name: '109',
    category: 'typeof',
    value: 'var x = [typeof x, typeof y][1];\ntypeof typeof x;\n' },
  { name: '110',
    category: 'typeof',
    value: '(function(foo){\n  return typeof foo.bar;\n})({ foo: { bar: 1 } });\n' },
  { name: '201',
    category: 'typeof',
    value: 'function aaa() {\n  return\n  {\n    test: 1\n  };\n}\nalert(typeof aaa());\n' },
  { name: '204',
    category: 'typeof',
    value: 'function bar() {\n  return foo;\n  foo = 10;\n  function foo() {}\n  var foo = \'11\';\n}\nalert(typeof bar());\n' },
  { name: '4',
    category: 'typeof',
    value: 'var y = 1;\n\nif (function f(){}) {\n  y += typeof f;\n}\n\nconsole.log(y);\n' } ];

export default questions;