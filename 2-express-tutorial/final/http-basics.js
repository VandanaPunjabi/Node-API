const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./2-express-tutorial/navbar-app/index.html')
const homeStyles = readFileSync('./2-express-tutorial/navbar-app/style.css')
const homeImage = readFileSync('./2-express-tutorial/navbar-app/logo.svg')
const homeLogic = readFileSync('./2-express-tutorial/navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    //console.log(req.url)

    const url = req.url;
    console.log(url)
//home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.write('<h1>about Page</h1>')
        res.end()
    }
   //styles
    else if(url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //image/logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    //styles
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    } 
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(8000)