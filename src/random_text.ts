const texts = [
    'why am i updating this website every 2 weeks',
    'imagine python',
    'imagine',
    'explod',
    'unlock now.',
    'ximi? sounds more like',
    'asdiasododiaho8fp9soffdyfdushijofspdf',
    'ds903orifhpsidfsfsdofdshi',
    'you? me. 93ja9jeoejwe',
    'nyaboom'
];

export default function getRandomText() {
    const index = Math.floor(Math.random() * texts.length);
    return texts[index];
}