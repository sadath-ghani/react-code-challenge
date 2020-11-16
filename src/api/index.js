function apiFetch(url, options) {
    return fetch(url, { ...options }).then(res => res.json()).catch(e => console.error(e));
}

export default {
    fetchPlanets: async cb => {
        const resp = await apiFetch('http://swapi.dev/api/planets');
        cb(resp.results);
    }
}