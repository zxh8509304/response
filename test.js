var fs=require('fs');
fs.readFile('readme.txt','UTF-8',function (err,data) {
    if(err){
        console.err(err);
    }else{
        console.log(data);
    }
});
