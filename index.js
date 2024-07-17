const http=require("http");
const PORT=8080;
const fs=require("fs");
const path = require("path");
let folder = fs.readdirSync(__dirname, "utf-8");
console.log(folder);
const server=http.createServer((req,res)=>{
    if(req.url == "/"){
        folder.forEach((ele)=>{
            if(fs.statSync(path.join(__dirname,ele)).isDirectory){
                res.write(`<a href=${ele}> <li>&#128193 ${ele}<li></a>`);
            }else{
                res.write(`<a href=${ele}> <li>&#128493 ${ele}<li></a>`);
            }
            });
            res.end();
    }else{
        const reqPath =req.url;
        res.write(reqPath);
        res.end();
    }
});
server.listen(PORT,()=>{
    console.log(`server $(PORT)`);
})