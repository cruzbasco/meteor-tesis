Meteor.methods({
   "addCareer": function (name) {
       var code = GenerateCode();
       var isUsed = false;
       var collection = "careers";
       var collectionId = new Mongo.ObjectID()._str;
       var field = "director_id";
       
       
       Careers.insert({"_id": collectionId, "name": "sin nombre.." , "code": code});
   } 
});

Meteor.publish("careers", function(){
    return Careers.find({});
})