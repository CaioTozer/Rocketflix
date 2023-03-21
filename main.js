const post = document.getElementById('posterMovie')

function getMovie() {
    const id = Math.floor(Math.random() *1000)


const url = `https://api.themoviedb.org/3/movie/${id}?api_key=8b302f711f5dc9340c495259bd23572c&language=pt-BR`
function getMovies() {
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        if (post.className !== "") {
            post.className = ""
        }
        titleMovie.textContent = data.title
        descriptionMovie.textContent = data.overview
        posterMovie.src = 'https://image.tmdb.org/t/p/w500' + data.poster_path
     })
     .catch(error => {
        titleMovie.textContent = "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
        posterMovie.src = "./poster.png"
     })

    

}
getMovies()
}

