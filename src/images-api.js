import axios from "axios";
const API_KEY = "7728721-8f567dd07946de7960dce4801"
const BASE_URL = "https://pixabay.com/api/"


const getImagesByQuery = (query) => {
    const params = new URLSearchParams({
        per_page: limit,
        // Change the group number here
        page: pageNumber
      })
    
    axios.get(`${BASE_URL}/?${params}${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
}
// fetch()
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })

function renderCards(recievedData){
    const markup = recievedData.map(({webformatURL, largeImageURL, tags, 
        likes,
        views,
        comments,
        downloads})=>{ return `<li class="photo-card">
        <a class="gallery__link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
             <b>${likes}Likes</b>
          </p>
          <p class="info-item">
            <b>${views}Views</b>
          </p>
          <p class="info-item">
            <b>${comments}Comments</b>
          </p>
          <p class="info-item">
            <b>${downloads}Downloads</b>
          </p>
        </div>
        </a>
        </li>`})  
    .join("")
    galleryEl.innerHTML=markup;

}

// function renderPosts(posts) {
    //   const markup = posts
    //     .map(({ id, title, body, userId }) => {
    //       return `<li>
    //           <h2 class="post-title">${title.slice(0, 30)}</h2>
    //           <p><b>Post id</b>: ${id}</p>
    //           <p><b>Author id</b>: ${userId}</p>
    //           <p class="post-body">${body}</p>
    //         </li>`;
    //     })
    //     .join("");
    //   userList.insertAdjacentHTML("beforeend", markup);
    // }

  export {getImagesByQuery, renderCards}