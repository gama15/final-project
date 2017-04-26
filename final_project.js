var namespace = "https://www.w3.org/2000/svg"
makeImage("test.jpg", 50, 50, 50, 50)
makeImage("https://thebestten.files.wordpress.com/2009/11/michael-jordan-first-trophy.jpg", 10, 10, 10, 10)


function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
