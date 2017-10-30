/**
 * A module for a deck of cards.
 *
 * @module
 */
"use strict";

//const Card = require("../card/card");

class CardDeck {
    /**
     * @constructor
     *
     * @param {object} options - Configure by sending options.
     */
    constructor(options = {}) {
        this.numberOfDecks = options.numberOfDecks || 2;
        this.numberOfCards = options.numberOfCards || 52;
        this.decks = [];
        for (let i = 0; i < this.numberOfDecks * 52; i++) {
            this.decks.push(i % this.numberOfCards);
        }
    }



    /**
     * Get number of cards in deck.
     *
     * @returns {integer} The amount of cards in the deck.
     */
    getNumberOfCards() {
        return (this.decks.length);
    }



    /**
     * Show all cards by their id.
     *
     * @returns {array} With all cards.
     */
    showAllCardsById() {
        return (this.decks.slice());
    }



    /**
     * Shuffle the deck.
     *
     * @returns {void}
     */
    shuffle() {
        for (let i = this.decks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.decks[i], this.decks[j]] = [this.decks[j], this.decks[i]];
        }
    }



    /**
     * Get a card from the deck, remove it from the deck.
     *
     * @returns {integer} As card id.
     */
    getCard() {
        return (this.decks.pop());
    }
}

module.exports = CardDeck;
