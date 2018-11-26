

function theBeatlesPlay(musicians, instruments){
 var theBand = [];
 for (let i = 0; i < musicians.length; i++) {
   theBand.push(musicians[i] + " plays " + instruments[i]);

 }
 return theBand
}

function johnLennonFacts(){
var facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
 "He was a choir boy and boy scout",
"He hates the sound of his own voice"];

var truths = [];
let i = 0
while (i < facts.length) {
  truths.push(facts[i] + "!!!");
  i++;
}
  return truths
}
