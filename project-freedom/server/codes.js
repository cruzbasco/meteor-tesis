Meteor.methods({
    "useCode": function (usedCode, userID) {
        var code = Codes.findOne({"code":usedCode});
        //    Codes.insert({"code":code, "isUsed":isUsed, "collection": collection, "collection_id": collectionId, "field": field});
        
        console.log(code);    
                
        if (code.collection === "careers")
        {
            Careers.update(
                {"_id": code.collection_id}, 
                {$set:{"${code.field}": userID}}
            );
            
            Meteor.users.update(
                { "_id": userID }, 
                {$addToSet:{"profile.appUser": "director"}}
            );
        }
    }
});



GenerateCode = function () {
    var length = 8;
    var code = "";
    var possible = "abcdefghijkmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        code += possible.charAt(Math.floor(Math.random() * possible.length));

    return code;
}