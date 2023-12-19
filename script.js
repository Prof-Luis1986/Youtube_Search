// Configuración de la API de YouTube
const apiKey = 'AIzaSyCyaCCtkfMWvTR4-uVrvgmC6sq5aYNGa3c'; // Reemplaza con tu propia clave de API de YouTube
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';

function searchVideos() {
    const searchInput = document.getElementById('searchInput').value;

    // Realizar la solicitud a la API de YouTube
    fetch(`${apiUrl}?part=snippet&q=${searchInput}&type=video&key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(error => console.error('Error al buscar videos:', error));
}

function displayResults(videos) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    videos.forEach(video => {
        const videoTitle = video.snippet.title;
        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.default.url;

        // Crear elementos HTML para mostrar los resultados
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
            <h3>${videoTitle}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        `;

        resultsContainer.appendChild(resultItem);
    });
}
