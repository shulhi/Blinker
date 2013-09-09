Blinker is a simple animation applied to text on your website. Like the name suggest, it blinks words/letters. This is a quick write up I did while developing my personal [website](http://shulhi.com). This is inspired by blinking animation in [blocklevel.nl](http://blocklevel.nl).

**Demo**
- [JSFiddle](http://jsfiddle.net/shulhi/gZadq/1/embedded/result/)
- [shulhi.com](http://shulhi.com)
- [blocklevel.nl](http://blocklevel.nl)

### Usage

HTML
```HTML
<div class="header">
    <span>B</span>
    <span>L</span>
    <span>I</span>
    <span>N</span>
    <span>K</span>
    <span>E</span>
    <span>R</span>
</div>
```

Then, for usage just simply call
```JavaScript
$('.header').blinker();
```

### Options

- `interval` - How fast to blink in ms. Default is `200`
- `endcolor` - When you leave the cursor, this is the final color. Default is black `#000`
- `colors` - Arrays of colors to blink. The default are as below. Credit to [FlatUIColors](http://flatuicolors.com/)

```
Default colors

'#e74c3c',
'#f1c40f',
'#3498db',
'#9b59b6',
'#1abc9c',
'#e67e22',
'#95a5a6',
'#34495e',
'#2ecc71',
'#c0392b'
```

**Example**

```JavaScript
$('.header').blinker({
    interval: 500,
    endcolor: '#fff',
    colors: [
        '#111',
        '#222',
        '#333'
    ]
});
```