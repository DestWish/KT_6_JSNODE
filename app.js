const http = require('http');
const fs = require('fs');

http.createServer(async (req, res) => {
    // res.setHeader('UserId', '666666');
    // res.setHeader('Content-Type', 'text/html; charset=utf-8;');


    // реализовал отправку файлов
    // первый способ:
    // console.log(`Запрошенный адресс ${req.url}`);

    // const filePath = req.url.substr(1);

    // fs.access(filePath, fs.constants.R_OK, err => {
    //     if (err) {
    //         res.statusCode = 404;
    //         res.end("File not found");
    //     } else {
    //         fs.createReadStream(filePath).pipe(res);
    //     }
    // });

    // второй способ:
    // fs.readFile(filePath, (err, data) => {
    //     if (err) {
    //         res.statusCode = 404;
    //         res.end("File not found");
    //     } else {
    //         res.end(data);
    //     }
    // });


    // реализовал переадресацию
    // if (req.url === '/') {
    //     res.statusCode = 302;
    //     res.setHeader('Location', '/newpage');
    // }
    // else if (req.url === '/newpage') {
    //     res.write("<h2>New address</h2>")
    // }
    // // реализовал маршрутизацию
    // else if (req.url === '/home') {
    //     res.write("<h2>home</h2>")
    // }
    // else if (req.url == '/abou1') {
    //     res.write("<h2>About1</h2>")
    // }
    // else if (req.url == '/contact') {
    //     res.write("<h2>Contacts</h2>")
    // }
    // else {
    //     res.write("<h2>Not Found</h2>")
    // }
    // res.end();


    // реализовал получение данных от клиента при помощи событий data 
    // if (req.url === '/user') {
        
    //     let data = '';
    //     req.on('data', chunk => {
    //         data += chunk;
    //     });
    //     req.on('end', () => {
    //         console.log(data);
    //         res.end('<h2>Данные успешно записаны</h2>');
    //     });
    // }else{
    //     fs.readFile("index.html", (err, data) => res.end(data));
    // }


    // реализовал получение данных от клиента при помощи перебора объекта req
    // if (req.url === '/user') {
    //     let buffers = [];

    //     for await (const chunk of req) {
    //         buffers.push(chunk);
    //     }
    //     const data = Buffer.concat(buffers).toString();
    //     console.log(data);
    //     res.end('Данные успешно записаны');
    // }else{
    //     fs.readFile("index.html", (err, data) => res.end(data));
    // }


    // использовал шаблоны
    fs.readFile("index.html", "utf8", function(err, data) {
        let message = "Привет я делаю 6 кт по NODEJS";
        let header = "Главная страница";
        data = data.replace("{header}", header).replace("{message}", message);
        res.end(data);
    }); 
}).listen(3000);