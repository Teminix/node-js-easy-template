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
### Key to documentation(important):
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




<br /><br /><br />
## *README still in progress...*
