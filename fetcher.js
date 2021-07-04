const request = require('request');
const fs = require('fs')



const fetchContent = function(inputUrl) {
  
  request(`${url}`, function(error, response, body) {
    
    if(error) {
      console.error(error);
      return;
    }
    
    // console.log(body);
    // return body;

    let data = body;
    console.log(data);
    return data;
    
  });
  
}


const writeContent = function(inputUrl, inputLocalPath) {

  let content = fetchContent(inputUrl);
  // console.log(content);
  let fileSize = content.length;

  fs.writeFile(`${inputLocalPath}`, content, err => {
    
    if (err) {
      console.error(err)
      return;
    }
    
    console.log(`Downloaded and saved ${fileSize} bytes to ${inputLocalPath}`);
    
  })

}

let url = process.argv[2];
let localPath = process.argv[3];
console.log(writeContent(url, localPath));

