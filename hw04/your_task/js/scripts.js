const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    //1. build the URL:
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=' + term;
    //2. issue the fetch command:
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            const artist = data[0];
            const template = `
                <section class="artist-card" id="${artist.id}">
                    <div>
                        <img src="${artist.image_url}">
                        <h3>${artist.name}</h3>
                        <div class="footer">
                            <a href="${artist.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
            document.querySelector('#artist').innerHTML = template;
        });
    
};


const doSearch = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    if (ev.keyCode === 13) {
        console.log('Enter key has been pressed!');
        ev.preventDefault();
        search();
    }
};

document.querySelector('#search').onkeyup = doSearch;