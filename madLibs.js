function worldBalnks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";

    result += "The " + myAdjective + " "+ myNoun + " " + myVerb + " "+ "to the store"

    return result;
}

console.log(worldBalnks("dog", "big", "ran", "quickly"));
console.log(worldBalnks("bike", "slow", "flew", "slowly"));