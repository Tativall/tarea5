let number = 0;
let data = []; // Variable para almacenar los datos de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video"); // Referencia al iframe

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = request.response; // Guardar la respuesta en la variable `data`
      updateContent(); // Actualizar el contenido con los datos cargados
    }
  };
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number = (number + 1) % data.length; // Incrementar y ciclar el índice
  }
}

function changeVideo() {
  if (data.length === 0) {
    getData(); // Llamar a `getData` si `data` está vacío
  } else {
    updateContent(); // Actualizar el contenido con los datos almacenados
  }
}

window.onload = () => {
  button.addEventListener('click', changeVideo); // Enlazar el clic del botón a `changeVideo`
};

