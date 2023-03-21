function shout(string) {
return string.toUpperCase();
}

console.log(shout("Sun"))

function whisper(string) {
    return string.toLowerCase();
}

console.log(whisper("MOON"))


function logShout(string) {
    console.log(string.toUpperCase());
}

logShout("star")


function logWhisper(string) {
    console.log(string.toLowerCase());
}

logWhisper("SKY")


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        // Block of code
        return "I can't hear you!";
      }

      if (string === string.toUpperCase()) {
        // Block of code
        return "YES INDEED!";
      }

      if (string === "Let's have dinner together!") {
        // Block of code
        return "I would love to!"
      }
}

console.log(sayHiToHeadphonedRoommate("hello"))

console.log(sayHiToHeadphonedRoommate("WHAT'S UP"))

console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))

