function render(apisToShow) {
        document.getElementById('grid').innerHTML = apisToShow.map(api => `
            <div class="card-hover bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 class="text-xl font-bold mb-2">${api.name}</h3>
                <p class="text-gray-300 mb-4">${api.desc}</p>
                <div class="flex gap-2 mb-4 text-xs">
                    <span class="px-2 py-1 bg-blue-500/20 rounded-full">${api.domain}</span>
                    <span class="px-2 py-1 bg-green-500/20 rounded-full">${api.auth}</span>
                    <span class="px-2 py-1 bg-yellow-500/20 rounded-full">${api.price}</span>
                </div>
                <a href="${api.docs}" target="_blank" class="block w-full bg-blue-500 hover:bg-blue-600 text-center py-3 rounded-xl font-medium transition-all">📖 Docs</a>
            </div>
        `).join('');
    }

    function filter(domain) {
        const filtered = domain === 'all' ? apis : apis.filter(api => api.domain === domain);
        render(filtered);
    }

    document.getElementById('search').addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        const filtered = apis.filter(api => 
            api.name.toLowerCase().includes(term) || 
            api.desc.toLowerCase().includes(term) ||
            api.domain.toLowerCase().includes(term)
        );
        render(filtered);
    });

    // Initial render
    render(apis);