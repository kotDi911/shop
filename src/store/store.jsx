import {create} from 'zustand'
import price from '../prise.json'

export const useCards = create((set, get) => ({
    data: price,
    filterCards: ()=>{

    },
    selectedCards: [],
    count: 0,
    chapter: 'wash',
    renderCards: [],
    setRenderCards: (card) =>{
        const {renderCards} = get();
        set({renderCards: card});
    },
    // cards : (chapter) =>{
    //     const {data} = get();
    //     let cardM = []
    //     for(let name in data){
    //         if(name === chapter){
    //             cardM = data[name]
    //         }
    //     }
    //     return cardM;
    // },
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
