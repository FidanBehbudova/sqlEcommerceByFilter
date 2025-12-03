// const path = require('path');
// const express = require('express');
// const router = express.Router();

// let db = require("../data/db")

// const data = {
//     title: "derslikler",
//     contents: ['web development', 'mobil development', 'data', 'gaming'],
//     product: [
//         {
//             productId: 1,
//             productName: "java dersleri",
//             description: "java ile ilgili temel ve ileri seviye dersler",
//             img: "1.avif"
//         },
//         {
//             productId: 2,
//             productName: "python dersleri",
//             description: "python ile ilgili temel ve ileri seviye dersler",
//             img: "2.jpg"
//         },
//         {
//             productId: 3,
//             productName: "c# dersleri",
//             description: "c# ile ilgili temel ve ileri seviye dersler",
//             img: "3.jpg"
//         },
//         {
//             productId: 4,
//             productName: "c# dersleri",
//             description: "c# ile ilgili temel ve ileri seviye dersler",
//             img: "4.jpg"
//         },
//     ]
// }

// router.get("/blog/:blogId", (req, res) => {
//     res.render("users/blog-views");
// });
// router.get("/blog", (req, res) => {
//     res.render("users/blog");
// });
// router.get("/", (req, res) => {
//     db.execute("SELECT * FROM new_table")
//       .then(response => {
//           res.render("users/index", {
//               title: "derslikler",
//               contents: data.contents,
//               products: response[0]
//           });
//       })
//       .catch(err => console.log(err));
// });


// module.exports = router




const express = require('express');
const mysql = require('mysql2');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'blogapp'
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM bagshoes_filter', (err, results) => {
    if(err) throw err;
    res.render('users/index', { products: results, filter: 'all' });
  });
});

app.get('/:filter', (req, res) => {
  const filter = req.params.filter;
  let query = 'SELECT * FROM bagshoes_filter';

  if(filter === 'shoes') query += ' WHERE TheShoes = 1';
  if(filter === 'bag') query += ' WHERE TheBag = 1';

  db.query(query, (err, results) => {
    if(err) throw err;
    res.render('users/index', { products: results, filter });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

module.exports = app;