// Update Record Collection from freeCodeCamp
//Object manipulation

// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};


// Only change code below this line

//Keep a copy of the collection for test
let collectionCopy = JSON.parse(JSON.stringify(collection));

//Start
function updateRecords(id, prop, value) {
    //kondisi 4 (terakhir)
    if (value === '') {
        delete collection[id][prop]
    }
    //kondisi 2 & 3
    else if (prop === 'tracks') {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    // kondisi 1
    else {
        collection[id][prop] = value;
    }

    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "Take a Chance on Me"));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "tracks", ""));
console.log(updateRecords(1245, "album", "Riptide"));