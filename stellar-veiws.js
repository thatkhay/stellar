document.querySelector('button').addEventListener('click', Fetch)
const pic = document.querySelector('img')
const vid = document.querySelector('iframe')
function Fetch(){
    const dateChoice = document.querySelector('input').value 
    console.log(dateChoice);

    const url = `https://api.nasa.gov/planetary/apod?api_key=pfZ8M8GiQmMRDmGGHvA9VPORMviUc3UyeRvziImE&date=${dateChoice}`

    fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
if (data.media_type === 'image') {
    pic.src = data.hdurl
    pic.style.display = 'block'
    vid.style.display = 'none'
}else if (data.media_type === 'video') {
   vid.src = data.url
   vid.style.display = 'block'
   pic.style.display = 'none'
}

document.querySelector('h2').innerText = data.title
document.querySelector('h3').innerText = data.explanation
})
  .catch(error => console.error(error));


}

