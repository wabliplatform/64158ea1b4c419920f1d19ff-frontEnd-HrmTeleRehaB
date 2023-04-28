const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Page2.html')));
			this.app.get('/Page2', (req, res) => res.sendFile(path.join(__dirname,'html','Page2.html')));
			this.app.get('/Page2/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page2.html')));
			this.app.get('/AddDoctor', (req, res) => res.sendFile(path.join(__dirname,'html','AddDoctor.html')));
			this.app.get('/AddDoctor/:id', (req, res) => res.sendFile(path.join(__dirname,'html','AddDoctor.html')));
			this.app.get('/addRoom', (req, res) => res.sendFile(path.join(__dirname,'html','addRoom.html')));
			this.app.get('/addRoom/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addRoom.html')));
			this.app.get('/updateRoom', (req, res) => res.sendFile(path.join(__dirname,'html','updateRoom.html')));
			this.app.get('/updateRoom/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateRoom.html')));
			this.app.get('/UpdateDoctor', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateDoctor.html')));
			this.app.get('/UpdateDoctor/:id', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateDoctor.html')));
			this.app.get('/addEquipment', (req, res) => res.sendFile(path.join(__dirname,'html','addEquipment.html')));
			this.app.get('/addEquipment/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addEquipment.html')));
			this.app.get('/updateEquipment', (req, res) => res.sendFile(path.join(__dirname,'html','updateEquipment.html')));
			this.app.get('/updateEquipment/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateEquipment.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;