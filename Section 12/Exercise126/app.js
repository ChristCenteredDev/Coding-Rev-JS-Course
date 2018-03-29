// We have a list of channels and we want to create a new array only with the premium channels.

const channel = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];

const resultsPremium = channel.filter(function (channel) {
    return channel.premium === true;
});

const resultsNonPremium = channel.filter(function (channel) {
    return channel.premium !== true;
});

// Filters Exercise 2
// We will use the same channels example, but this time we have a user object, with some settings.

// So we need to get the NOT premium channels and the PREMIUM CHANNELS whenever we call the methods.See  the USER object below.

const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function () {
        resultsPremium();    // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
    },
    channels: function () {
        resultsNonPremium()    // GET THE NON-PREMIUM CHANNELS
    }
}
console.log(user.premiumChannels())
// brings HBO and MAX
console.log(user.channels())
// GET THE NON-PREMIUM CHANNELS