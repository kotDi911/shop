import {create} from 'zustand'
import pick1 from '../assets/indesitEWDE.jpg'
import pick2 from '../assets/indesitIWSB.jpg'
import pick3 from '../assets/indesitOMTWE.jpg'
import pick4 from '../assets/indesitIWUB.jpg'

export const useCards = create((set, get) => ({
    cards: [
        {
            id: 1,
            name: 'Indesit EWDE 71280 W EU',
            description: '',
            img: pick1,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 7000,
                unit: 'UA'
            }
        },
        {
            id: 2,
            name: 'Indesit IWSB 51051 UA',
            description: '',
            img: pick2,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 6500,
                unit: 'UA'
            }
        },
        {
            id: 3,
            name: 'Indesit OMTWE 71483 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick3,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
                {
                    name: 'Количество оборотов',
                    value: '1400об./мин'
                },
                {
                    name: 'Класс отжима (остаточное содержание влаги)',
                    value: 'А (меньше 45%)'
                },
                {
                    name: 'Тип двигателя',
                    value: 'инверторный (ременной привод)'
                },
                {
                    name: 'Цвет',
                    value: 'белый'
                },
                {
                    name: 'Уровень шума при стирке',
                    value: '53дБ'
                },
                {
                    name: 'Уровень шума при отжиме',
                    value: '77дБ'
                },
                {
                    name: 'Программы',
                    value: 'Хлопок 40°/60°, Смешанные ткани 40°, Синтетика 30 мин, Шелк 30°, Шерсть 40°, Быстрая стирка 30 мин, Стирка деликатных вещей, 20°C, Полоскание + отжим, Отжим + слив'
                },
            ],
            price: {
                value: 8000,
                unit: 'UA'
            }
        },
        {
            id: 4,
            name: 'Indesit OMTWE 71252 S',
            description: '',
            img: pick4,
            characteristic: [],
            price: {
                value: 8600,
                unit: 'UA'
            }
        },
        {
            id: 5,
            name: 'Indesit OMTWE 71483 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick3,
            characteristic: [],
            price: {
                value: 6800,
                unit: 'UA'
            }
        },
        {
            id: 6,
            name: 'Indesit OMTWE 71252 S',
            description: '',
            img: pick4,
            characteristic: [],
            price: {
                value: 8900,
                unit: 'UA'
            }
        },
        {
            id: 7,
            name: 'Indesit EWDE 71280 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick1,
            characteristic: [],
            price: {
                value: 7300,
                unit: 'UA'
            }
        },
        {
            id: 8,
            name: 'Indesit IWSB 51051 UA',
            description: '',
            img: pick2,
            characteristic: [ ],
            price: {
                value: 8500,
                unit: 'UA'
            }
        },
        {
            id: 9,
            name: 'Indesit EWDE 71280 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick1,
            characteristic: [] ,
            price: {
                value: 7000,
                unit: 'UA'
            }
        },
        {
            id: 10,
            name: 'Indesit IWSB 51051 UA',
            description: [],
            img: pick2,
            characteristic: [
                {
                    name: '',
                    value: ''
                }
            ],
            price: {
                value: 6500,
                unit: 'UA'
            }
        },
        {
            id: 11,
            name: 'Indesit OMTWE 71483 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick3,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 8000,
                unit: 'UA'
            }
        },
        {
            id: 12,
            name: 'Indesit OMTWE 71252 S',
            description: '',
            img: pick4,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 8600,
                unit: 'UA'
            }
        },
        {
            id: 13,
            name: 'Indesit OMTWE 71483 W EU',
            description: 'Характеристики отдельно стоящей стиральной машины Indesit с горизонтальной загрузкой: отличная вместимость 7 кг. Высокая скорость и экономичность отжима 1400 оборотов в минуту. Белый цвет.',
            img: pick3,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 6800,
                unit: 'UA'
            }
        },
        {
            id: 14,
            name: 'Indesit OMTWE 71252 S',
            description: '',
            img: pick4,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 8900,
                unit: 'UA'
            }
        },
        {
            id: 15,
            name: 'Indesit EWDE 71280 W EU',
            description: '',
            img: pick1,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 7300,
                unit: 'UA'
            }
        },
        {
            id: 16,
            name: 'Indesit IWSB 51051 UA',
            description: '',
            img: pick2,
            characteristic: [
                {
                    name: 'Гарантия',
                    value: '12 мес.'
                },
                {
                    name: 'Тип машины',
                    value: 'автоматическая'
                },
                {
                    name: 'Максимальная загрузка',
                    value: '7кг'
                },
                {
                    name: 'Количество программ стирки',
                    value: '16'
                },
            ],
            price: {
                value: 8500,
                unit: 'UA'
            }
        }
    ],
    selectedCards: [],
    count: 0,
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
