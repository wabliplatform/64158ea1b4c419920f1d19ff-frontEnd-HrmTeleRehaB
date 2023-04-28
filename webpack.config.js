const path = require('path');

module.exports = {
  entry: {
	'Page2' : './javascript/Page2.js',
	'AddDoctor' : './javascript/AddDoctor.js',
	'addRoom' : './javascript/addRoom.js',
	'updateRoom' : './javascript/updateRoom.js',
	'UpdateDoctor' : './javascript/UpdateDoctor.js',
	'addEquipment' : './javascript/addEquipment.js',
	'updateEquipment' : './javascript/updateEquipment.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};