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

# Contributors
* Sam Verschueren   [sam.verschueren@gmail.com]

# MIT License
The MIT License (MIT)

Copyright (c) 2015 Sam Verschueren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
