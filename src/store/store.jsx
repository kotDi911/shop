import {create} from 'zustand'
import price from '../prise.json'
import pick1 from '../assets/indesitEWDE.jpg'
import pick2 from '../assets/indesitIWSB.jpg'
import pick3 from '../assets/indesitOMTWE.jpg'
import pick4 from '../assets/indesitIWUB.jpg'

export const useCards = create((set, get) => ({
    cards: price,
    selectedCards: [],
    count: 0,
    chapter: null,
    renderCards : (chapter) =>{
        const {cards} = get();
        let cardM = []
        for(let name in cards){
            if(name === chapter){
                cardM = cards[name]
            }
        }
        return cardM;
    },
    setChapter: (name) =>{
        const {chapter} = get();
        set({chapter: name});
    },
    updCounter: () => {
        set((state) => ({count: state.selectedCards.length}));
    },
    addToBasket: (card) => {
        const {selectedCards} = get();
        if (selectedCards.filter((item) => item === card).length === 0 || selectedCards.length === 0)
            set({selectedCards: [...selectedCards, card]});
    },
    delSelectedCards: (id) => {
        const {selectedCards} = get();
        set({selectedCards: selectedCards.filter((item) => item.id !== id)});
    },
    updSelectedCards: () => {
        const cards = JSON.parse(localStorage.getItem('cards'));
        if (cards) {
            set({selectedCards: cards})
        }
    },
    clear: ()=>{
        set({selectedCards: []})
    },
    error: null
}));
