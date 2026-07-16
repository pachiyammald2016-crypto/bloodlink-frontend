const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const matches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
matches.forEach((m, i) => {
    try {
        new Function(m[1]);
        console.log('Script ' + i + ' is valid.');
    } catch (e) {
        console.error('Script ' + i + ' Error:', e);
    }
});
