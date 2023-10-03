const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'くっそあっつい日に:insertx: が日光浴をしました。その後、暑い所に移動したかったため、 :inserty:に行った,さらに:insertx: はドMなので自分の極限まで発汗させようとした。 :insertx: は、:insertz: 、過ごした。 私の生きがいは自分を極限の状態までいじめることである。 — しかし、:insertx: は体重が100kgある。';
const insertX = ['まさお', '杉村', 'まーたん'];
const insertY = ['沖縄', '砂漠', 'サウナ'];
const insertZ = ['辛いものを食べて', 'ロウリュウを浴びて', '大量の服を着込んで'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Manaka', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
