

function enlargeImage(event) {
    const clickedImage = event.target;
    clickedImage.classList.toggle('enlarged');
}


fetch('https://api.artic.edu/api/v1/artworks')
    .then(response => response.json())
    .then(data => {

        const artworks = data.data;
        const gallery = document.querySelector('.gallery');

        artworks.forEach(artwork => {
            const artworkElement = document.createElement('div');
            artworkElement.classList.add('artwork');

            
            const title = artwork.title.toLowerCase().replace(/\s/g, '_');
            const imagePath = `images/${title}.jpg`;

            artworkElement.innerHTML = `
                <img src="${imagePath}" alt="${artwork.title}" onclick="enlargeImage(event)">
                <h2>${artwork.title}</h2>
                <p>${artwork.artist_title}</p>
            `;

            gallery.appendChild(artworkElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
