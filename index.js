
const http=require("http");
const exportsFromAnother=require("./another")
console.log(exportsFromAnother)

function resquestController(){
    console.log("Hola Mudo!!");
}


//configuracion del servidor
const server=http.createServer(resquestController)
server.listen(4000)
    