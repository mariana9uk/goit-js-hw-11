import axios from "axios";


export class PixabayAPI{
    query = null;
    page = 1;
    per_page = 40;
    async fetchPhotos(){
  return await axios.get(`https://pixabay.com/api/`, {
   params: {
    key: '7728721-8f567dd07946de7960dce4801',
    q: this.query,
    page: this.page, 
    per_page: this.per_page,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true}})}
}

export function renderCards(dataArr){
 return  dataArr.map(({webformatURL, largeImageURL, tags, 
        likes,
        views,
        comments,
        downloads})=>{return `<li class="photo-card">
        <a class="gallery__link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery-img" />
        </a>
        <div class="info">
          <p class="info-item">
             <b>Likes</b>${likes}
          </p>
          <p class="info-item">
            <b>Views</b>${views}
          </p>
          <p class="info-item">
            <b>Comments</b>${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>${downloads}
          </p>
        </div>
        
        </li>`})  
    .join("")
    // galleryEl.innerHTML=markup;

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

 