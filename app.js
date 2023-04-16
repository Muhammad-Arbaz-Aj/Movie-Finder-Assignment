(async function () {
    const response = await fetch('./data.json');
    const movies = await response.json();

    const inputGenre = document.getElementById('Genres');
    const inputYear = document.getElementById('Years');
    const inputLang = document.getElementById('Language');
    const inputRating = document.getElementById('Ratings');
    const btnElem = document.getElementById('search-btn');
    const listElem = document.getElementById('movie-list');

    function displaySearchMovies (results){
        results.forEach(function(movie){
            const li = document.createElement("li");
      const listItem = `
          <h2 class="title">${movie.title}</h2>
          <div class="certification">${movie.certification}</div>
      `;
      li.innerHTML = listItem;
      li.addEventListener("click", function () {
        loadRecipeDetails(movie);
      });
      listElem.appendChild(li);
        })
    }

    function search (){
        let query = [inputGenre.value, inputYear, inputLang, inputRating];
        let iteratorObject = query.values();
        for (let value of iteratorObject){
            const results = movies.filter(function (movie){
                return movie.genres.includes(value) ||
                movie.release_date.includes(value) ||
                movie.original_language.includes(value);
        });
        displaySearchMovies(results);
        }

    }
    btnElem.addEventListener('click', search);

})();