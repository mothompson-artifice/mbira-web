const notes = {
    'll7': { x: 1, y: 9, colour: 'brown' },
    'll6': { x: 3, y: 7, colour: 'blue' },
    'll5': { x: 5, y: 6, colour: 'green' },
    'll4': { x: 7, y: 5, colour: 'yellow' },
    'll3': { x: 9, y: 4, colour: 'orange' },
    'll2': { x: 11, y: 3, colour: 'red' },
    'll1': { x: 13, y: 1, colour: 'purple' },
    'ul1': { x: 12, y: 8, colour: 'purple' },
    'ul2': { x: 10, y: 12, colour: 'yellow' },
    'ul3': { x: 8, y: 11, colour: 'orange' },
    'ul4': { x: 6, y: 13, colour: 'green' },
    'ul5': { x: 4, y: 14, colour: 'blue' },
    'ul6': { x: 2, y: 15, colour: 'purple' },
    'rt1': { x: 14, y: 10, colour: 'red' },
    'rt2': { x: 15, y: 15, colour: 'purple' },
    'rt3': { x: 16, y: 16, colour: 'brown' },
    'ri4': { x: 17, y: 17, colour: 'red' },
    'ri5': { x: 18, y: 18, colour: 'orange' },
    'ri6': { x: 19, y: 19, colour: 'yellow' },
    'ri7': { x: 20, y: 20, colour: 'green' },
    'ri8': { x: 21, y: 21, colour: 'blue' },
    'ri9': { x: 22, y: 22, colour: 'purple' },
};

const karigamombe = [
    ['rt2', 'ul1'],
    [],
    ['ri6', 'ul2'],
    [],
    ['ri5', 'rt2', 'ul3'],
    [],
    ['ri5', 'rt2', 'ul3'],
    [],
    ['ri5', 'rt2', 'ul3'],
    [],
    ['ri4', 'rt1', 'ul4'],
    [],
    ['ri4', 'rt1', 'ul4'],
    [],

    ['rt3', 'll7'],
    [],
    ['ri7', 'ul4'],
    [],
    ['ri5', 'rt2', 'ul3'],
    [],
    ['ri5', 'rt2', 'ul3'],
    [],
    ['ri4', 'rt1', 'ul4'],
    [],
    ['ri4', 'rt1', 'ul4'],
];

let pos = 0;

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    for (const [name, coords] of Object.entries(notes)) {
        const {x, y, colour} = coords;

        const el = document.createElement('span');
        el.style.top = `${(22 - y) * 1}em`;
        el.style.left = `${x * 3}em`;
        el.style.backgroundColor = colour;
        el.dataset.note = name;

        el.innerText = name;

        body.appendChild(el);
    }
});

setInterval(function() {
    const thisNotes = karigamombe[pos];
    for (const el of document.querySelectorAll('span')) {
        el.classList.toggle('active', thisNotes.includes(el.dataset.note));
    }

    if (++pos >= karigamombe.length)
        pos = 0;
}, 500);