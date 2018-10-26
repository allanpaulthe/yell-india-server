const express = require('express');
var cors = require('cors')
const fs = require("fs")
var app = express()
const port = 4000;

app.use(cors())

const cartDataPath = './myCart.json';

app.listen(port, () => {
  console.log("listen on 4000");
});


app.get('/homepage/products', (req, res) => {
  res.send(JSON.stringify(homepageProducts));
});

app.get('/homepage/carousal', (req, res) => {
  res.send(JSON.stringify(homepageCarousal));
});

app.get('/homepage/shop', (req, res) => {
  res.send(JSON.stringify(homepageShop));
});

app.get('/user/cart', (req, res) => {

  fs.readFile(cartDataPath, 'utf8', function (err, data) {

		const cart = (JSON.parse(data))
		res.send(JSON.stringify(cart));

	});

});

app.get('/product/details/:id', (req, res) => {
  var id = req.params.id;
  res.send(productsDetails(id))
});

app.get('/img/product/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/products/' + id + '.png');
});

app.get('/img/carousal/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/carousal/' + id + '.jpg');
});

app.get('/img/shop/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/shop/' + id + '.jpg');
});

app.get('/categories/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/categories/' + id + '.png');
});

app.get('/review/:id', (req, res) => {

	var id = req.params.id
	const review=reviews[id]
  	res.send( JSON.stringify(review));
});

app.get('/menu/data', (req, res) => {
  res.send( JSON.stringify(menudata));
});

app.get('/menu/data/:main', (req, res) => {
  var main= req.params.main
  function findMatching(x){
    return x.name==main
  }
  const oneMenu=menudata.data.filter(findMatching)
  res.send( JSON.stringify(oneMenu));
});

app.post('/insertIntoCart', (req, res) => {
  let data=req.headers.data;
  data=JSON.parse(data)
		fs.writeFile(cartDataPath, JSON.stringify(data), function (err) {

			  if (err) return console.log(err);

			  console.log('writing to ' + cartDataPath);
		});


});

function productsDetails(id){
  var obj=homepageProducts.data.products[id-1]

    return JSON.stringify(obj)
}

const menudata={
  data:[{
    name:"Apparals",
    list:[{
      type:'jumpsuits',
      sublist:[
        'Stone Island',
        'Peter England',
        'Nike'
      ]
    },{
      type:'Shorts',
      sublist:[
        'Stone Island',
        'Peter England',
        'Nike'
      ]
    },{
      type:'Necklaces',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  },{
    name:"Accessories",
    list:[{
      type:'Scarfs',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  },{
    name:"Bags",
    list:[{
      type:'Block Printing',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  },{
    name:"Care About",
    list:[{
      type:'Jamdani',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  },{
    name:"Footwear",
    list:[{
      type:'Ikat',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  },{
    name:"Outwear",
    list:[{
      type:'Gift Cards',
      sublist:[
        'Stone Island',
        'Peter England',
        'Scullers'
      ]
    }]
  }]
}

const reviews={
	"1":[{
		value:4.5,
		by:"Alan Paul",
		comment:"good products"
	}],
	"2":[{
		value:3.5,
		by:"Alan Paul",
		comment:"This is a good product"
	}],
	"3":[{
		value:3,
		by:"Alan Paul",
		comment:"good product"
	}],
	"4":[{
		value:3.5,
		by:"Alan Paul",
		comment:"nice product"
	}],
	"5":[{
		value:5,
		by:"Alan Paul",
		comment:"good product"
	}],
	"6":[{
		value:4.5,
		by:"Alan Paul",
		comment:"bad product"
	}]

}

const homepageProducts = {
  "status" : "true",
  "data"  : {
    "products" : [
      {
        "id" : 1,
        "image_url" : ["http://10.7.50.88:4000/img/product/1",
              "http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/5"],
        "name" : "Indian Authentic  Jersey 2018",
        "brand" : "Nike",
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
	"rating":4.5,
        "price" : 269,
        "size" :[
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      },
      {
        "id" : 2,
        "image_url" : ["http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/1",
              "http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/5"],
        "name" : "Brazil Authentic Jersey 2018",
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
	"rating":3.5,
        "brand" : "Adidas",
        "price" : 270,
        "size" :[
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      },
      {
        "id" : 3,
        "image_url" : ["http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/1",
              "http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/5"],
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
        "name" : "Brazil Authentic Jersey 2018",
	"rating":3,
        "brand" : "Nike",
        "price" : 250,
        "size" :[
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      },
      {
        "id" : 4,
        "image_url" : ["http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/1",
              "http://10.7.50.88:4000/img/product/5"],
        "name" : "Indian Authentic Jersey 2018",
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
        "brand" : "Stone island",
	"rating":3.5,
        "price" : 150,
        "size" :[
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      },
      {
        "id" : 5,
        "image_url" : ["http://10.7.50.88:4000/img/product/5",
              "http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/1"],
        "name" : "England Authentic Jersey 2018",
	"rating":5,
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
        "brand" : "Rebook",
        "price" : 100,
        "size" :[
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      },
      {
        "id" : 6,
        "image_url" : ["http://10.7.50.88:4000/img/product/6",
              "http://10.7.50.88:4000/img/product/2",
              "http://10.7.50.88:4000/img/product/3",
              "http://10.7.50.88:4000/img/product/4",
              "http://10.7.50.88:4000/img/product/5"],
        "name" : "Brasil Authentic Jersey 2018",
	"desc":"Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
        "brand" : "Nike",
	"rating":4.5,
        "price" : 200,
        "size" : [
			{
			    size: 's',
			    available: '2'
			},
			{
			    size: 'm',
			    available: '1'
			},
			{
			    size: 'l',
			    available: '0'
			},
			{
			    size: 'xl',
			    available: '1'
			},
			{
			    size: 'xxl',
			    available: '0'
			}
	   	 ]
      }
    ]
  },
  "error_message" : "Service not available/success"
}

const homepageCarousal ={
  "status":true,
  "data":[
    {"id":1,
    "image_URL": "http://10.7.50.88:4000/img/carousal/1"},
    {"id":2,
    "image_URL": "http://10.7.50.88:4000/img/carousal/2"},
    {"id":3,
    "image_URL": "http://10.7.50.88:4000/img/carousal/3"},
    {"id":4,
    "image_URL": "http://10.7.50.88:4000/img/carousal/4"},
    {"id":5,
    "image_URL": "http://10.7.50.88:4000/img/carousal/5"}
  ]
}

const homepageShop ={
  "status":true,
  "data":[
    {"id":"Bags",
    "image_URL": "http://10.7.50.88:4000/img/shop/bag"},
    {"id":"Accessories",
    "image_URL": "http://10.7.50.88:4000/img/shop/accessories"},
    {"id":"Footwear",
    "image_URL": "http://10.7.50.88:4000/img/shop/jumpsuits"},
    {"id":"Outwear",
    "image_URL": "http://10.7.50.88:4000/img/shop/top"}
  ]
}
