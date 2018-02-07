var edt = {
    name : "Prochain cours",
    description:"Permet de connaitre l'intitulé et la salle de son prochain cours",
    patterns : [
        "prochain cours",
    ],
    synonyms :{},
    tests :[
        {
            input: "prochain cours",
            result: {}
        }
    ],
    callback : function(reply, params){
        reply("Votre prochain cours est PROJET Fin d'études dans 13 minutes en salle E-106 pendant 4 heures");
    }
};

module.exports.bindings = [edt];
module.exports.name = "edt";
module.exports.init = function(){};
