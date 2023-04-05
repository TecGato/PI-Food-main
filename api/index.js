//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config();
const server = require('./src/app.js');
const { conn, Diets } = require('./src/db.js');
const saveApiOnDB = require('./src/helpers/saveApiOnDB');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    const dietas = [
      'gluten free',
      'ketogenic',
      'dairy free',
      'vegan',
      'lacto ovo vegetarian',
      'pescatarian',
      'paleolithic',
      'fodmap friendly',
      'primal',
      'whole 30',
    ];
    dietas.forEach((dieta) => {
      Diets.create({ name: dieta });
    });
    // saveApiOnDB();
    console.log(`Is listening at ${port}`); // eslint-disable-line no-console
  });
});
