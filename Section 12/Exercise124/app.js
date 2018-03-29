// We have a list of channels and we want to create a new array only with the premium channels.

const channel = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];

const results = channel.filter(function (channel) {
    return channel.premium === true;
});

console.log(results);