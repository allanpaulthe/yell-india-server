const express = require('express');
var cors = require('cors')

var app = express()
const port = 4000;

app.use(cors())

app.get('/homepage/products', (req, res) => {
  res.send(JSON.stringify(homepageProducts));
});

app.get('/homepage/carousal', (req, res) => {
  res.send(JSON.stringify(homepageCarousal));
});

app.get('/homepage/shop', (req, res) => {
  res.send(JSON.stringify(homepageShop));
});

app.get('/product/details/:id', (req, res) => {
  var id = req.params.id;
  res.send(productsDetails(id))
});

app.listen(port, () => {
  console.log("listen on 4000");
});

app.get('/cart_details', (req, res) => {

  var name = "Stone island Garment dyed ..."
  var quantity = 1
  var id = 1
  var image_url = "localhost:4000/img/product_image/details/"+id+"/1"
  var price = "₹ 169"

  var obj = {
    id : id,
    name : name,
    image_url : image_url,
    quantity : quantity,
    price: price
  }

  var datas = {
    status : true,
    data : [
      obj, obj
    ],
    error_message : ""
  }
  res.send(JSON.stringify(datas))
});

app.get('/img/product/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/products/' + id + '.png');
});

app.get('/img/carousal/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/carousal/' + id + '.png');
});

app.get('/img/shop/:id', (req, res) => {
  var id = req.params.id
  res.sendFile(__dirname + '/images/shop/' + id + '.jpg');
});

app.get('/img/new_arrivals/:id', (req, res) => {
  var id = req.params.id;
  res.sendFile(__dirname + '/images/new_arrivals/' + id +'.png')
});

app.get('/img/product_image/details/:pdt_id/:img_id', (req, res) => {
  var product_id = req.params.pdt_id;
  var image_id = req.params.img_id;
  res.sendFile(__dirname + '/images/product_details/'+product_id+'/'+image_id+'.png');
})

function productsDetails(id){
  var image_url1 = "localhost:4000/img/product_image/details/"+id+"/1"
  var image_url2 = "localhost:4000/img/product_image/details/"+id+"/2"
  var image_url3 = "localhost:4000/img/product_image/details/"+id+"/2"
  var name = "STONE ISLAND GARMENT DYED CREW SWEAT"
  var price = "₹ 645"
  var description = `Stone Island have expertly combined their technical approach to materials and dying processes to create this Crew Neck Sweat which has become an absolute staple for the brand. This garment dyed, cotton jersey sweatshirt is finished with the classic Stone Island detachable compass logo badge at the arm and ribbed neck, cuffs and hemline.
  \n100% Cotton Jersey
  Garment Dyed
  Removable Stone Island Compass Logo Badge \n on Arm
  Ribbed Collar, Cuffs and Hem
  Art. No: 60940-V0022`

  var obj = {
    status : true,
    data : {
      id : id,
      name : name,
      price : price,
      description : description,
      images : [
        image_url1,image_url2,image_url3
      ]
    },
    error_message : ""

  }

  if(id == 1) {
    return JSON.stringify(obj)
  } else if (id == 2) {
    return JSON.stringify(obj)
  }else if (id == 3){
    return JSON.stringify(obj)
  } else if (id ==4){
    return JSON.stringify(obj)
  }
}


const homepageProducts = {
  "status" : "true",
  "data"  : {
    "products" : [
      {
        "id" : 1,
        "image_url" : "http://10.7.50.88:4000/img/product/1",
        "name" : "Garment dyed shirt sweat1",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "",
        "size" : "XL"
      },
      {
        "id" : 2,
        "image_url" : "http://10.7.50.88:4000/img/product/2",
        "name" : "Garment dyed shirt sweat2",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "260",
        "size" : "XL"
      },
      {
        "id" : 3,
        "image_url" : "http://10.7.50.88:4000/img/product/3",
        "name" : "Garment dyed shirt sweat3",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "260",
        "size" : "L"
      },
      {
        "id" : 4,
        "image_url" : "http://10.7.50.88:4000/img/product/4",
        "name" : "Garment dyed shirt sweat4",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "260",
        "size" : "M"
      },
      {
        "id" : 5,
        "image_url" : "http://10.7.50.88:4000/img/product/5",
        "name" : "Garment dyed shirt sweat4",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "260",
        "size" : "M"
      },
      {
        "id" : 6,
        "image_url" : "http://10.7.50.88:4000/img/product/6",
        "name" : "Garment dyed shirt sweat4",
        "brand" : "Stone island",
        "price" : "₹ 269",
        "offer_price" : "260",
        "size" : "M"
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
    "image_URL": "http://10.7.50.88:4000/img/carousal/2"}
  ]
}

const homepageShop ={
  "status":true,
  "data":[
    {"id":"bags",
    "image_URL": "http://10.7.50.88:4000/img/shop/bag"},
    {"id":"accessories",
    "image_URL": "http://10.7.50.88:4000/img/shop/accessories"},
    {"id":"jumpsuits",
    "image_URL": "http://10.7.50.88:4000/img/shop/jumpsuits"},
    {"id":"top",
    "image_URL": "http://10.7.50.88:4000/img/shop/top"}
  ]
}
