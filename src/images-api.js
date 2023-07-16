import axios from "axios";


export class PixabayAPI{

  // #BASE_URL = "https://pixabay.com/api/"
    // const params = new URLSearchParams({
    //     per_page: limit,
    //     // Change the group number here
    //     page: pageNumber
    query=null;
    page=1;
    fetchPhotos(){
   return axios.get(`https://pixabay.com/api/?key=7728721-8f567dd07946de7960dce4801&q=${this.query}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`)}
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

  export {renderCards}