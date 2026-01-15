fetch('assets/data/playlists.json')
    .then(res => res.json())
    .then(playlists => {
        const container = document.getElementById('community-playlists');

        playlists.forEach(item => {
            const initial = item.nombre.charAt(0).toUpperCase();

            const card = document.createElement('div');
            card.className = 'playlist-card';

            card.innerHTML = `
                <div class="playlist-avatar">
                    <img src="assets/img/logo/cdls_redondo.png" alt="">
                    <div class="playlist-initial">${initial}</div>
                </div>
                <div class="playlist-name">${item.nombre}</div>
            `;

            card.addEventListener('click', () => {
                window.open(item.playlist, '_blank');
            });

            container.appendChild(card);
        });
    });
