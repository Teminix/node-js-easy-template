# Node JS Easy Templating Module
This is a templating module which is used for node JS. Highly versatile and easy to use. You can add your own variable
detection parameters. This templating module does not require you to only use html, it can in fact, be used in any type of file.<br />
<br />
### Warning: project still in progress, downloading and using this module is not advised. Download/use on your own risk.
<br /><br />
**Architecture**: Asynchronous and Synchronous.<br /><br /><br />
## Setup
Download [`easy-temp.min.js`](https://github.com/Teminix/node-js-easy-template/raw/master/easy-temp.min.js) if you wish to integrate it in you application without the intention of understanding the code, place it in your respective application directory or wherever you can access it. However, if you do want to understand the code, download [`easy-temp.js`](https://github.com/Teminix/node-js-easy-template/raw/master/easy-temp.js), it provides commenting.<br />
Code to initiate:
```javascript
const et = require("./path/to/easy-temp.min"); // remove the '.min' if your using uncompressed version
```
### Key to documentation syntax(important):
For a function in this documentation: 
```javascript
functionName(String(name),Number(amount),function(callback),?argument=Object(defaultValue))
```
<br />
`?` Is an optional argument, after the '`=`' is  where the `Object(defaultValue)` is the default value. `Object` tells the argument type, which is an Object.<br />

`String(name)` Means nothing but that the argument named '`name`' must be a `String`. Same applies to any other supported datatype.<br />
`function(callback)` means that the argument takes a function with a name of '`callback`'<br /><br />
An example of this function would be:
```javascript
functionName('blah',45,function(){console.log('hello')},{message:'this is an optional argument'})
```
<br /><br /><br /><br />
## Usable functions from this library:
This library at this stage has only two functions, Asynchronous and Synchronous respectively:
* `temp()`
* `tempSync()`
<br /><br /><br />
## Asynchronous temp() function:
Assume `et` as the module using the require function below:
```javascript
const et = require('./path/to/easy-temp.min');
```
#### Syntax: 
```javascript
et.temp(String(path),function(callback),?vars=null,?start='<(',?end=')>')
```
<br /><br />
**path:**<br /><br />
This is the path to respective file you want to template.<br /> **Example**: `"index.html"` or some other file(does not have to be an html file)<br /><br /><br />
**callback:**<br /><br />
This is a callback function since this is an asynchronous function. This callback has one callback variable. That variable is the content of the template file after it has been processed.<br /> **Example**: `function(resp){console.log(resp)}` would log the `resp` to the console.
<br /><br /><br />
**vars:(Object)**<br /><br />
This is where you would specify your variables, note that this is an optional variable, so you do not have to specify variables for the template to substitute if you do not want it to. This would take a key value pair object. <br />
**Example:** `{title:'Future of society',content:'The world as we know it... blah'}`<br />
Here the variable `title` has the value `'Future of society'` and `content` has the value `'The world as we know it... blah'`<br /><br /><br />
**start:(String) and end:(String)**<br /><br />
Optional, you can specify how you want the template function to replace variables in the file you are rendering. The `start` argument would specify the start parameter and the `end` would specify the end <br />
**Example:**
As an example, you wish to substitute: `$title$` with `Heavens` in your template. You set the `start` argument in the function as `"$"` and end as `"$"`
```html
<span class='title'>$title$</span>
```
Here, the `$title$` part would be replaced with 'Heavens' after the function executes:

```html
<span class='title'>Heavens</span>
```

## Examples:
<br /><br /><br />
Here are some full fledged examples of code and ways to implement this function in your application:
### Basic templating using default start and end
Start and end parameters are: `<(` and `)>` respectively.<br />
#### Javascript(index.js):
```javascript
const et = require('./path/to/easy-template.min');
et.temp('index.html',function(resp){console.log(resp)},{title:'My dream job',content:'My dream job is front end web development ... ...'})
// The response/output would be logged to the console
```
#### HTML(index.html):
```html
<body>
  <h1><(title)></h1>
   <p><(content)></p>
</body>
```
#### Output(console):
```
node index.js

<body>
  <h1>My dream Job</h1>
   <p>My dream job is front end we development ... ...</p>
</body>
```
<br /><br />
### Templating with different start and end parameters
#### Example 1:
Start and end parameters here are: `*` and `*` respectively.<br />
#### Javascript(index.js):
```javascript
const et = require('./path/to/easy-template.min');
et.temp('index.html',function(resp){console.log(resp)}
,{location:'India',name:'Sarah'}
, "*","*");
// The response/output would be logged to the console
```
#### HTML(index.html):
```html
<body>
  <h1>Welcome *name*!</h1>
   <p>Explore the vast heritage of *location*</p>
</body>
```
#### Output(console):
```
node index.js

<body>
  <h1>Welcome Sarah!</h1>
   <p>Explore the vast heritage of India</p>
</body>
```
<br />

#### Example 2:
Start and end parameters here are: `${` and `}` respectively.<br />
#### Javascript(index.js):

```javascript
const et = require('./path/to/easy-template.min');
et.temp('index.html',function(resp){console.log(resp)}
,{car:'BMW',owner:'Bill'}
, "*","*");
// The response/output would be logged to the console
```

#### HTML(index.html):

```html
<body>
  <img>
  <div class="car">${car}</div><br>
  <input type='text' name='owner' value='${owner}'>
</body>
```

#### Output(console):

```
node index.js
<body>
  <img>
  <div class="car">BMW</div><br>
  <input type='text' name='owner' value='Bill'>
</body>
```



## *README still in progress...*
