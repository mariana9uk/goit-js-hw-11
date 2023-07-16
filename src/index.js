import axios from "axios";
import Notiflix from 'notiflix';
import { getImagesByQuery } from "./images-api";

const gallery = document.querySelector(".gallery");
const InutEl = document.querySelector('#searchInput');
const searchButtonEl = document.querySelector("#searchButton");
const query = InutEl.textContent.value.trim()



