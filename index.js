var ping3 = {
    name : "ping3",
    description:"Simple ping/pong permettant des mesures de temps de réponse",
    patterns : [
        "ping3 {message}",
    ],
    synonyms :{},
    tests :[
        {
            input: "ping3 5",
            result: {message:"5"}
        }
    ],
    callback : function(params, message){
        return "pong3 "+params.message;
    }
};

module.exports.bindings = [ping3];
