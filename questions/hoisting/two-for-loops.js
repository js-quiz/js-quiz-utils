var a = [];

for (var i = 0; i < 10; i++)
  a.push(function () {
    console.log(i);
  })

for (var j = 0; j < 10; ++j)
  a[j]()
