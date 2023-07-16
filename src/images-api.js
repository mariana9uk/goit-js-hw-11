import axios from "axios";
const API_KEY = "7728721-8f567dd07946de7960dce4801"
const BASE_URL = "https://pixabay.com/api/"


const getImagesByQuery = (query) => axios.get(`${BASE_URL}/?${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)

// fetch()
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })

function renderCard(recievedData){
    const photosArray = recievedData
    .map(photo=>{webformatURL, largeImageURL, tags, 
        likes,
        views,
        comments,
        downloads})

        `<div class="photo-card">
<img src="" alt="" loading="lazy" />
<div class="info">
  <p class="info-item">
    <b>Likes</b>
  </p>
  <p class="info-item">
    <b>Views</b>
  </p>
  <p class="info-item">
    <b>Comments</b>
  </p>
  <p class="info-item">
    <b>Downloads</b>
  </p>
</div>
</div>`
}

  export {getImagesByQuery, renderCard}