const endpoint = 'http://localhost:3000/api/bundles-detailed';
let currentPage = 1;
const limit = 10;
let isLoading = false;
let totalPages = 1;

async function fetchBundles(page = 1) {
    if (isLoading) return;
    isLoading = true;
    try {
        const response = await fetch(`${endpoint}?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayBundles(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    } finally {
        isLoading = false;
    }
}

function displayBundles(data) {
    const bundlesDiv = document.getElementById('bundles');
    data.bundles.forEach(bundle => {
        const bundleDiv = document.createElement('div');
        bundleDiv.classList.add('card');
        bundleDiv.innerHTML = `
            <img src="${bundle.header_image}" alt="${bundle.Nome}">
            <div class="card-content">
                <h3>${bundle.Nome}</h3>
                <p>${bundle.description}</p>
                <a href="${bundle.Link}">Link</a>
            </div>
        `;
        bundlesDiv.appendChild(bundleDiv);
    });

    
    currentPage = data.page;
    totalPages = data.totalPages;
}

function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
        if (currentPage < totalPages) {
            setTimeout(() => {
                fetchBundles(currentPage + 1);
            }, 500); // delay de 500ms
        }
    }
}

fetchBundles();

window.addEventListener('scroll', handleScroll);