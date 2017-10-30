/**
* Test for class CardDeck.
 */
"use strict";

/* global describe it */

const assert = require("assert");
const CardDeck = require("../../src/cardDeck/cardDeck");



/**
 * Compare two integers.
 */
function compareInteger(a, b) {
    return a - b;
}



/**
 * Testsuite
 */
describe("Check CardDeck", function() {
    describe("use default card deck", function() {
        it("should be 104 cards", function() {
            let deck = new CardDeck();
            let numberOfCards = deck.getNumberOfCards();

            assert.equal(numberOfCards, 104);
        });

        it("id should be between 0 and 103", function() {
            let deck = new CardDeck();
            let cards = deck.showAllCardsById();

            assert.equal(cards.length, 104);
            assert.equal(cards[0], 0);
            assert.equal(cards[51], 51);
            assert.equal(cards[52], 0);
            assert.equal(cards[103], 51);
        });

        it("shuffle it", function() {
            let deck = new CardDeck();
            let numberOfCards;

            deck.shuffle();
            numberOfCards = deck.getNumberOfCards();

            assert.equal(numberOfCards, 104);
        });

        it("get all cards, one by one", function() {
            let deck = new CardDeck();
            let allCards = deck.showAllCardsById();
            let cardId;
            let shuffledCards = [];
            let equal;

            deck.shuffle();
            while ((cardId = deck.getCard()) !== undefined) {
                shuffledCards.push(cardId);
            }

            allCards.sort(compareInteger);
            shuffledCards.sort(compareInteger);

            equal = shuffledCards.length == allCards.length &&
                shuffledCards.every((element, index) => {
                    return element === allCards[index];
                });

            assert.equal(equal, true);
        });
    });
});
