# are-you-js

Work in progress

## Flavours

We have two different flavours that you can use in your application. The ```are-you``` flavour, and the ```you-are``` flavour.
You can use both flavours as you like but they will probably be used in different situations.

### Are you
```JavaScript
var isNumber = are.you.a.number(10);
```

### You are
```JavaScript
if(you.are.a.number(10)) {
    // ...
}
```

As you can see, it would not entirely fit if we should use the ```are-you``` flavour, right?

## Examples

```JavaScript
are.you.a.number(10); // -> true
are.you.a.number('10'); // -> false
are.you.a.string('Hello'); // -> true
are.you.an.array(['yes', 'i', 'am']); // -> true
```

```JavaScript
are.you.not.a.number(10); // -> false
are.you.not.a.number('10'); // -> true
are.you.not.a.string('Hello'); // -> false
```
