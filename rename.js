var base64Img = require('base64-img');
var multer  = require('multer')
var fs=require("fs");
var glob = require("glob")


testFolder="./pics"
/*
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
      /*fs.rename(file[i].path,'public/images/questions/'+"question"+date,function(err){
        if(err)throw(err);
        console.log("File uploaded to server");*/
      //});
    //});
  //})

path1="./RenamedPics/classname1991"
var getDirectories = function (src, callback) {
    glob(src + '/**/*', callback);
};
getDirectories(testFolder, function (err, res) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log(res);
        console.log("reslen: ",res.length)
        for(i=0;i<=res.length;i++){
        fs.rename(res[i],path1+i+".jpg",function(err){
            if(err) throw(err);
            console.log("Renamed.")
        });
        }
        };
    });
