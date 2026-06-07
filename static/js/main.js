// Search page logic is embedded in the search layout, but we add vote buttons logic here.
document.addEventListener('DOMContentLoaded', () => {
    // Vote buttons handling with localStorage
    const voteContainer = document.getElementById('vote-buttons');
    if (voteContainer) {
        const hash = voteContainer.dataset.hash;
        const upBtn = voteContainer.querySelector('.vote-up');
        const downBtn = voteContainer.querySelector('.vote-down');
        const upSpan = document.getElementById('up-count');
        const downSpan = document.getElementById('down-count');
        let up = parseInt(localStorage.getItem(`up_${hash}`) || '0');
        let down = parseInt(localStorage.getItem(`down_${hash}`) || '0');
        let userVote = localStorage.getItem(`vote_${hash}`);
        upSpan.innerText = up;
        downSpan.innerText = down;
        function updateUI() {
            upSpan.innerText = up;
            downSpan.innerText = down;
            if (userVote === 'up') upBtn.classList.add('bg-emerald-500/20', 'text-emerald-400');
            else upBtn.classList.remove('bg-emerald-500/20', 'text-emerald-400');
            if (userVote === 'down') downBtn.classList.add('bg-rose-500/20', 'text-rose-400');
            else downBtn.classList.remove('bg-rose-500/20', 'text-rose-400');
        }
        updateUI();
        upBtn.addEventListener('click', () => {
            if (userVote === 'up') {
                up--;
                userVote = null;
            } else {
                if (userVote === 'down') down--;
                up++;
                userVote = 'up';
            }
            localStorage.setItem(`up_${hash}`, up);
            localStorage.setItem(`down_${hash}`, down);
            localStorage.setItem(`vote_${hash}`, userVote || '');
            updateUI();
            // Optionally send to server via fetch
        });
        downBtn.addEventListener('click', () => {
            if (userVote === 'down') {
                down--;
                userVote = null;
            } else {
                if (userVote === 'up') up--;
                down++;
                userVote = 'down';
            }
            localStorage.setItem(`up_${hash}`, up);
            localStorage.setItem(`down_${hash}`, down);
            localStorage.setItem(`vote_${hash}`, userVote || '');
            updateUI();
        });
    }
    // Home page search
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const q = searchInput.value.trim();
            if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`;
        });
        searchInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') searchBtn.click(); });
    }
});