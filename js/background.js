const images = ["Screenshot (27).png", "Screenshot (38).png", "Screenshot (71).png"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`
document.body.appendChild(bgImage)