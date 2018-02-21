var mongoose = require("mongoose");
var Hotel = mongoose.model('Hotel');

module.exports.hotelGetAll = function(req, res) {
    
        var offset = 0;
    var count = 5;
    
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    Hotel
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, hotels) {
        console.log('Found hotels', hotels.length);
        res
            .json(hotels);
    });

module.exports.hotelGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    console.log("GET hotelId ", hotelId);
    
    Hotel
    .findById(hotelId)
    .exec(function(err, doc) {
     res
        .status(200)
        .json( doc );    
    });
   
};

module.exports.hotelAddOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var newHotel;
    
    console.log("POST new hotel ");
    console.log(req.body);
    
    if (req.body && req.body.name && req.body.stars) {
        newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10);
        console.log(newHotel);
        collection.insertOne(newHotel, function(err, response){
        console.log(response);
        res
            .status(201)
            .json(response.ops);
        });
    } else {
         console.log("data missing from body");
        res
            .status(400)
            .json({message: "required message is missing"})
    }
}};
