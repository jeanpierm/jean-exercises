const getImg = async () => {
  try {
    const apiKey = "IkhRRwVVTTHFLyaH08HWpJQ5D6KHSaHM";
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  } catch (err) {
    console.error(err);
  }
};

getImg();
