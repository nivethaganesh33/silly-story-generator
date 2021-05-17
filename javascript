
let enterit= document.getElementById('enterit');
let randomit= document.querySelector('.randomit');
let story= document.querySelector('.story');

function generateRandomName(array){
  const value=Math.floor(Math.random() *array.length);
  return array[value];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomit.addEventListener('click',result);

function result(){
  let newStory=storyText;
  let xItem = generateRandomName(insertX);
  let yItem = generateRandomName(insertY);
  let zItem = generateRandomName(insertZ);
  newStory =  newStory.replace('insertx',xItem);
  newStory =  newStory.replace('inserty',yItem);
  newStory =  newStory.replace('insertz',zItem);
  
  if(enterit.value !== ''){
    newStory=newStory.replace('bob',enterit.value);
  }
  
  if(document.getElementById("uk").checked){
    const weight = Math.round(300*0.0714286) +'stone';
    const temperature = Math.round() + 'centigrade';
    newStory= newStory.replace('300 pounds',weight);
    newStory= newStory.replace('94 fahrenheit',temperature);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
