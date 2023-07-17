import axios from "axios";
import Notiflix from 'notiflix';

import {PixabayAPI, renderCards} from "./images-api";
const searchFormEl=document.querySelector(".search-form")
const galleryEl = document.querySelector(".gallery");
const inutEl = searchFormEl.firstElementChild;
const searchButtonEl = document.querySelector("#searchButton");
const loadMoreButton = document.querySelector(".load-more")
const erMessage=document.querySelector(".error") 
const biggerImageLink=document.querySelector(".gallery__link")


const pixabaIstance = new PixabayAPI()

console.log(searchButtonEl)

const handleSubmit = async event =>{
    event.preventDefault();
    const searchQuery = inutEl.value.trim();
    pixabaIstance.query=searchQuery;
    pixabaIstance.page=1;
        console.log(searchQuery)
    //   if (!searchQuery) {
    //   return  
    // } 
        try {
            const { data } = await pixabaIstance.fetchPhotos();
        console.log(data)
            if (!data.hits.length) {
              console.log('Images not found!');
              throw new Error();
            }
            erMessage.classList.add("is-hidden")
            const markup = renderCards(data.hits);
            galleryEl.innerHTML =markup;
        
            loadMoreButton.classList.remove('is-hidden');
            
    }
catch(err){
    console.log(err)
erMessage.classList.remove("is-hidden")
loadMoreButton.classList.add('is-hidden')
galleryEl.innerHTML="";
}

}
 const handleLoadMore= async () => {
  pixabaIstance.page += 1;

  try {const { data } = await pixabaIstance.fetchPhotos();
const totalPages = data.totalHits/pixabaIstance.per_page
console.log(totalPages)
    if (pixabaIstance.page === totalPages||pixabaIstance.page >totalPages) {
      console.log("The end!")
      loadMoreButton.classList.add('is-hidden')
    } 
    console.log(pixabaIstance.page)
    console.log(data.totalHits)
   const markup = renderCards(data.hits);
   galleryEl.insertAdjacentHTML(
    'beforeend', markup );
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`) 
    console.log(data);
  } catch (error) {
    console.log("Woops!")
    Notiflix.Notify.failure('❌Помилка');
  }
}


console.log(galleryItems)
searchFormEl.addEventListener("submit", handleSubmit)
console.log(biggerImageLink)
loadMoreButton.addEventListener("click", handleLoadMore)

// function toggleLoader() {
//     if (isLoaderActive) {
      
//     //   selectorEl.classList.add("is-hidden")
//     //   loaderEl.classList.remove("is-hidden");
//     //   catInfoWrapEl.classList.add("is-hidden");
//       Notiflix.Loading.dots()
//     } else {
//     //   selectorEl.classList.remove("is-hidden");
//     //   loaderEl.classList.add("is-hidden");
//     //        catInfoWrapEl.classList.remove("is-hidden");
//            Notiflix.Loading.remove()
//     }
    
//   }
// //   let page = 1;
// // Controls the number of items in the group
// let limit = 5;
// // In our case total number of pages is calculated on frontend
// const totalPages = 100 / limit;

// fetchPostsBtn.addEventListener("click", () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return toggleAlertPopup();
//   }

//   fetchPosts()
//     .then((posts) => {
//       renderPosts(posts);
//       // Increase the group number
//       page += 1;

//       // Replace button text after first request
//       if (page > 1) {
//         fetchPostsBtn.textContent = "Fetch more posts";
//       }
//     })
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

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

// function toggleAlertPopup() {
//   if (isAlertVisible) {
//     return;
//   }
//   isAlertVisible = true;
//   alertPopup.classList.add("is-visible");
//   setTimeout(() => {
//     alertPopup.classList.remove("is-visible");
//     isAlertVisible = false;
//   }, 3000);
// }
 