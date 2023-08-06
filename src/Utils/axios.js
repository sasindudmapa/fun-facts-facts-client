import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://long-erin-mussel-tutu.cyclic.app/",
});

export default baseUrl;

const factsUrl = axios.create({
  baseURL: "https://sparkling-jade-dragonfly.cyclic.app/",
});

export { factsUrl };
