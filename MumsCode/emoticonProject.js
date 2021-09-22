//Emoticon Project
function toEmoticon(emotion) {
  switch (emotion) {
    case 'shrug' : return '|_{"}_|';
    break;
    case 'smiley face' : return ':)';
    break;
    case 'frowny face' : return ':(';
    break;
    case 'winky face' : return ';)';
    break;
    case 'heart' : return '<3';
    break;
    default : return '|_(* ~ *)_|';
  }
}

console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

console.log(toEmoticon('shrug'))
console.log(toEmoticon('heart'))
console.log(toEmoticon('smiley face'))