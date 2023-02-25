//Import database Connection from the Config Folder
let db = require('../Config/index.js');
//Import bcrypt module
let{hash, compare, hashSync} = require('bcrypt');
