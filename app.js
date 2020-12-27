const square = document.getElementById("square")

const generateRandomColor = () => {
  square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    generateRandomColor()
  }, i * 1000);
}
