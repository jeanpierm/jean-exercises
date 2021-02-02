const apiKey = "IkhRRwVVTTHFLyaH08HWpJQ5D6KHSaHM";

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(console.warn);
