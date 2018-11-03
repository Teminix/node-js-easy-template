function temp(path,callback,vars=null,start="<(",end=")>"){ // Asynchronous Template function
  const files = require("fs"); // Get FileSystem module
  if (path[0] == "/") { // If the path provided starts with a slash, we have to remove it
  path = path.replace("/","");
  }
  files.readFile(path,function(error,data){ // Read the file asynchronously
    if (error) { // In case the file is not found or there is some error
      errorMsg= `EasyTemp: Error reading requested file: ${path}`;
      console.error(errorMsg)
      return errorMsg;
    }
    else { // If file is found
        if (vars == null) { // In case there are no variables specified
          callback(data.toString()) // Simply call the callback function of the plain template(template without vairables)
        }
        else { // Otherwise
          let output = data.toString();  // Grab the file data as a string
          let temp = "" // This is a temporary variable for turning the 'start' argument into a regular expression
          for (let char of start) {
            temp = temp+"\\"+char // Meant to escape all characters ex : start = "<("; temp = "\\<\\("
          }
          start = temp; // Set the start as an escaped start
          temp = "" // repeat same for the end
          for (let char of end) {
            temp = temp+"\\"+char
          }
          end = temp
          for (var variable in vars) { // Loop through the vars provided
            expression = new RegExp(`${start}${variable}${end}`,"g"); // Create a regular expression with the start string, variable and then end string
            output = output.replace(expression,`${vars[variable]}`);
            /*
            Then replace the matches for the VALUE of the variabe,
            ex: vars = {title:'hello'};
            in the template file, it will search for "<(title)>" and replace it with "hello"
            */
          }
          callback(output) // Once everything is replaces, call the callback function
        }
      }
    })
  }
function tempSync(path,vars=null,start="<(",end=")>"){ // Synchronous templating function, **SIMILAR TO THE PREVIOUS: READ COMMENTS OF PREVIOUS TO UNDERSTAND
  const files = require('fs');
  if (path[0] == "/") {
  path = path.replace("/","");
  }
  let content = files.readFileSync(path).toString(); // Get the file synchronously
  let temp = "";
  for (char of start) {
    temp = "\\" + temp + char;
  }
  start = temp;
  temp = "";
  for (char of end) {
    temp = "\\" + temp + char;
  }
  end = temp;
  if (vars == null) {
    return content;
  }
  else {
    let output = content
    for(let variable in vars){
      let expression = new RegExp(`${start}${variable}${end}`,"g")
      output = output.replace(expression,vars[variable])
    }
    return output
  }
}
module.exports.temp = temp; // export as 'temp'
module.exports.tempSync = tempSync; // export as 'tempSync'
