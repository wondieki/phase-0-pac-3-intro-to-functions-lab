function shout(string){
    let capital = string.toUpperCase();
    return capital;
}

function whisper(string){
    let capital = string.toLowerCase();
    return capital;
}

function logShout(string){
    let capital = string.toUpperCase();
    console.log(capital);
}

function logWhisper(string){
let capital = string.toLowerCase();
console.log(capital);

}


function sayHiToHeadphonedRoommate(string)
{

    let upper = string.toUpperCase();
    let lower = string.toLowerCase();
    let dinner = "Let's have dinner together!";

    if (string === upper)
    {
        return "YES INDEED!";
    } else if (string === lower)
    {
        return "I can't hear you!";
    } else if (string === dinner)
    {
        return "I would love to!";
    }
}