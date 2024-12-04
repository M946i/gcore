addEventListener('fetch', event => {
    event.respondWith(handleRequest());
});

async function handleRequest() {
    return new Response("ok");
}