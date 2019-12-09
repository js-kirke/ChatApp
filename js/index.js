const user = {
  id: 456,
  name: 'Charles Babbage',
  img: 'img/456.jpg'
}

const message = [
  {
     id: 1,
     from: {
        id: 123,
        name: 'Ada Lovelace',
        img: 'img/123.jpg'
     },
     time: {
        date: 1,
        month: 8,
        year: 1843,
        hour: 14,
        minute: 59
     },
     text: `You should check out this little script I just wrote. 😂 lol`
  }
]

function getMessageAsHtml(msg) {
  return `
  <article class="message">
  <p class="from-them">Hello this is a message</p>
  <p class="from-me">Hello This is a reply</p>
  </article>
  `
}

function renderMessages(arr) {
  const arrOfHtml = arr.map(getMessageAsHtml);
  const strOfHtml = arrOfHtml.join('\n');
  document.getElementById('messages').innerHTML = strOfHtml;
}

renderMessages(message)

document.getElementById(`btnOthers`).addEventListener('click', event => {
  document.getElementById(`others`).classList.toggle('open');
});