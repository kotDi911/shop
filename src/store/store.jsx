import {create} from 'zustand'
import price from '../prise.json'

export const useCards = create((set, get) => ({
    data: price,
    cards: (chapter) => {
        const {data} = get();
        let cards = []
        for (let name in data) {
            if (name === chapter) {
                cards = data[name]
            }
        }
        return cards
    },

    chapters: Object.keys(price),
    chapter: Object.keys(price)[0],
    setChapter: (name) => {
        set({chapter: name});
    },

    selectedCards: [],
    addToBasket: (card) => {
        const {selectedCards} = get();
        if (!selectedCards.length) {
            set({selectedCards: [...selectedCards, card]});
        } else {
            if (selectedCards.find((el) => el.name === card.name)) {
                set({
                    selectedCards: selectedCards.map((el) => el.name === card.name ? {...el, count: el.count + 1} : el)
                })
            } else {
                set({selectedCards: [...selectedCards, card]});
            }
        }
    },
    minusSelectedCards: (card) => {
        const {selectedCards} = get();
        const item = selectedCards.find((el) => el.name === card.name)
        if ( item.count > 1) {
            set({
                selectedCards: selectedCards.map((el) => el.name === card.name ? {...el, count: el.count - 1} : el)
            })
        } else {
            set({selectedCards: selectedCards.filter((el) => el.name !== card.name)});
        }
    },
    delSelectedCards: (id, chapter) => {
        const {selectedCards} = get();
        set({selectedCards: selectedCards.filter((item) => (item.id + item.chapter) !== (id + chapter))});
    },
    updSelectedCards: () => {
        const {selectedCards} = get();
        const cards = JSON.parse(localStorage.getItem('cards'));
        if(!cards) return;
        if (cards !== selectedCards) {
            set({selectedCards: cards})
        }
    },

    headerBasketCount: 0,
    updHeaderBasketCount: () => {
        set((state) => ({headerBasketCount: state.selectedCards.length}));
    },

    clear: () => {
        localStorage.clear()
        set({selectedCards: []})
    },
    error: null
}));
