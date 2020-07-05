/* eslint-disable no-console */
console.log('lib/fetch');
export default function fetcher(url) { return fetch(url).then((r) => r.json()); }
