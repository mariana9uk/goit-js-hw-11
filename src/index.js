import axios from "axios";
import Notiflix from 'notiflix';
import {PixabayAPI, renderCards} from "./images-api";
const searchFormEl=document.querySelector(".search-form")
const galleryEl = document.querySelector(".gallery");
const InutEl = searchFormEl.firstElementChild;
const searchButtonEl = document.querySelector("#searchButton");
const loadMoreButton = document.querySelector("load-more")
const erMessage=document.querySelector(".error") 

let isLoaderActive=false;
let isAlertVisible = false;
let limit=40;
let pageNumber=1;

const pixabaIstance = new PixabayAPI()

console.log(searchButtonEl)

const handleSubmit = async event =>{
    event.preventDefault();
    const searchQuery = InutEl.value.trim();
      if (!searchQuery) {
      return  
    } 
        pixabaIstance.query=searchQuery;
        console.log(searchQuery)

    try{
  const {recievedData} = await pixabaIstance
.fetchPhotos();
console.log(recievedData)
// if (!recievedData.results.length) {
//     Notiflix.Notify.failure('Images not found');
//     return 
// }
// renderCards(recievedData)}
    }
catch(err){
    console.log(err)
erMessage.classList.remove("is-hidden")
}
// toggleLoader()
// getImagesByQuery(searchQuery)

    // fetch
   
}

searchFormEl.addEventListener("submit", handleSubmit)
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
 