// Full Deck of cards
Deck = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
        '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
        '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS',
        '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',]


function drawCard(){
    card1 = Math.floor(Math.random() * Deck.length) // Generates random index in list Deck
    console.log("card drawn: " + Deck[card1])
    show_image(Deck[card1])
    Deck.splice(card1, 1)
    console.log(Deck)
}        

function show_image(card) {
    var img = document.createElement("img");
    img.src = "deck/" + card + ".png"; //cards are saved into folder deck with names matching the list Deck.
    img.height = 100;
    img.width = 100;
    document.getElementById('cards').appendChild(img);
}