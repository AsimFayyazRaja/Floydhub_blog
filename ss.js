var fs = require('fs');
var screenshot = require('electron-screenshot-service');
 
screenshot({
  url : 'http://google.de',
  width : 1024,
  height : 768
})
.then(function(img){
  fs.writeFile('./out.png', img.data, function(err){
    screenshot.close();
  });
});