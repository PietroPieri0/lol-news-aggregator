$(document).ready(function () {
    const apiKey = a8a907d2296544afb79d915ed352c4ea; // Inserisci qui la tua API key di News API
    const query = 'League of Legends';
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=it&apiKey=${apiKey}`;

    // Funzione per caricare le notizie
    function loadNews() {
        $.get(url, function (data) {
            if (data.status === "ok") {
                displayNews(data.articles);
            } else {
                console.error("Errore nel caricamento delle notizie.");
            }
        });
    }

    // Funzione per visualizzare le notizie
    function displayNews(articles) {
        const newsContainer = $("#news-container");
        newsContainer.empty();

        articles.forEach(article => {
            const newsItem = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary">Leggi di più</a>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.append(newsItem);
        });
    }

    // Carica le notizie al caricamento della pagina
    loadNews();
});
