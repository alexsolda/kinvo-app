//***** API Simulada

const api = {
    snapshotByPortfolio: {
        equity: 234562.25,
        valueApplied: 180523.21,
        percentageProfit: 25.3
    },
    snapshotByProduct: [
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 15629.21,
                equity: 234562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '01/06/2019',
                daysUntilExpiration: 5236
            }
        },
        {
            fixedIncome: {
                name: 'PDA Outro tipo de tesouro 1.33%',
                bondType: 'Classe II'
            },
            position: {
                valueApplied: 58968.21,
                equity: 60325.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '22/06/2017',
                daysUntilExpiration: 3258
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 45896.21,
                equity: 56890.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '25/10/2015',
                daysUntilExpiration: 352
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 180525.21,
                equity: 234562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '25/11/2016',
                daysUntilExpiration: 1589
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 256360.21,
                equity: 369852.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 6589
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 895632.21,
                equity: 1025698.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '12/05/2016',
                daysUntilExpiration: 890
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 568952.21,
                equity: 789562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 1258
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 526362.21,
                equity: 652478.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 5698
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 180525.21,
                equity: 234562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 975
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 180525.21,
                equity: 234562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 30
            }
        },
        {
            fixedIncome: {
                name: 'PDA Tesouro 1.33%',
                bondType: 'Tesouro Direto'
            },
            position: {
                valueApplied: 180525.21,
                equity: 234562.25,
                profiability: 20,
                portfolioPercentage: 30,
                percentageOverIndexer: 12,
                indexerValue: 2
            },
            due: {
                date: '20/01/2008',
                daysUntilExpiration: 689
            }
        }
    ]
};

const loadData = async () => {
    // API com consultas limitadas
    
    // const urlApi = 'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData';

    // let req = await fetch(urlApi);
    // let json = await req.json();

    // renderHeader(json.data.snapshotByPortfolio)
    // renderProduct(json.data.snapshotByProduct)


    renderHeader(api.snapshotByPortfolio)
};

const renderHeader = (portfolio) => {
    const equity = document.getElementById('equity'),
        valueApplied = document.getElementById('value-applied'),
        percentageProfit = document.getElementById('percentage-profit')

    equity.innerText = formatNumber(portfolio.equity);
    valueApplied.innerText = formatNumber(portfolio.valueApplied);
    percentageProfit.innerText = `${portfolio.percentageProfit}%`;
};

const formatNumber = value => {
    return new Intl.NumberFormat("de-DE", {

        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)
};

loadData();

//***** Ordenação de resultados
let data = api.snapshotByProduct;

function ordered(type = 'default') {

    if (type == 'default' || type == 'titulo') {
        data.sort((a, b) => {
            if (a.fixedIncome.name < b.fixedIncome.name) {
                return -1
            } else return true
        })
    }

    if (type == 'vencimento') {
        data.sort((a, b) => {
            return a.due.daysUntilExpiration > b.due.daysUntilExpiration
        })
    }

    if (type == 'investimento') {
        data.sort((a, b) => {
            return a.position.valueApplied < b.position.valueApplied
        })
    }

    if (type == 'bruto') {
        data.sort((a, b) => {
            return a.position.equity < b.position.equity
        })
    }
}

ordered();

const selectOptions = document.querySelector('#order');
selectOptions.addEventListener('change', e => {
    ordered(e.target.value);
    update();
})

//***** Filtrar pelo input 
const searchInput = document.getElementById('search-filter');
searchInput.addEventListener('keyup', (e) => {
    const stringSearch = e.target.value.toLowerCase();

    if(stringSearch == '') {
        data = api.snapshotByProduct;
    }

    data = data.filter(({ fixedIncome }) => {
        return (
            fixedIncome.name.toLowerCase().includes(stringSearch) ||
            fixedIncome.bondType.toLocaleLowerCase().includes(stringSearch)
        )
    });

    update();
});

//***** Paginação

let perPage = 5;
const state = {
    page: 1,
    perPage,
    totalPages: Math.ceil(data.length / perPage),
    maxVisibleButtons: 5
};

const html = {
    get(element) {
        return document.querySelector(element)
    }
};

const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPages;
        if (lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--
        if (state.page < 1) {
            state.page++
        }
    },
    goTo(page) {
        if (page < 1) {
            state.page = 1;
        }

        state.page = +page;

        if (page > state.totalPages) {
            state.page = state.totalPages;
        }

    },
    createListeners() {
        html.get('#previous').addEventListener('click', () => {
            controls.prev()
            update()
        })

        html.get('#next').addEventListener('click', () => {
            controls.next()
            update()
        })
    }
};


const list = {
    update() {
        html.get('.data__container').innerHTML = ''
        let htmlProducts = '';

        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage;
        const paginatedItems = data.slice(start, end);

        paginatedItems.map((item) => htmlProducts += `
    <div class="data__content">
    <div class="data__card">
        <div class="data__card-title">
            <span class="data__title">TÍTULO</span>
            <i class="fas fa-info-circle data__icon"></i>
        </div>
        <div class="data__card-infos">
            <div class="data__description">
                <p>${item.fixedIncome.name}</p>
            </div>
            <div class="data__specs">
                <span class="data__specs-title">CLASSE</span>
                <p class="data__specs-value primary">${item.fixedIncome.bondType}</p>
            </div>
        </div>
    </div>

    <div class="data__card">
        <div class="data__card-title">
            <span class="data__title">MINHA POSIÇÃO</span>
            <i class="fas fa-info-circle data__icon"></i>
        </div>
        <div class="data__card-infos">
            <div class="data__specs">
                <span class="data__specs-title">VALOR INVES.</span>
                <p class="data__specs-value secondary">${formatNumber(item.position.valueApplied)}</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">SALDO BRUTO</span>
                <p class="data__specs-value secondary">${formatNumber(item.position.equity)}</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">RENT.</span>
                <p class="data__specs-value secondary">${item.position.profiability}%</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">% DA CART.</span>
                <p class="data__specs-value secondary">${item.position.portfolioPercentage}%</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">CDI</span>
                <p class="data__specs-value secondary">${item.position.percentageOverIndexer}%</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">SOBRE CDI</span>
                <p class="data__specs-value secondary">${item.position.indexerValue}</p>
            </div>
        </div>
    </div>

    <div class="data__card">
        <div class="data__card-title">
            <span class="data__title">VENCIMENTO</span>
            <i class="fas fa-info-circle data__icon"></i>
        </div>
        <div class="data__card-infos">
            <div class="data__specs">
                <span class="data__specs-title">DATA VENC.</span>
                <p class="data__specs-value third">${item.due.date}</p>
            </div>

            <div class="data__specs">
                <span class="data__specs-title">DIAS ATÉ VENC.</span>
                <p class="data__specs-value third">${item.due.daysUntilExpiration}</p>
            </div>
        </div>
    </div>
</div>`
        )

        html.get('.data__container').innerHTML = htmlProducts
    }
};

const buttons = {
    create(number) {
        const button = document.createElement('div');
        button.classList.add('pagination__number')

        button.innerText = number;

        if (state.page == number) {
            button.classList.add('pagination__number-active')
        }

        button.addEventListener('click', (e) => {
            const page = e.target.innerText;

            controls.goTo(page)
            update()
        })

        html.get('.pagination__numbers').appendChild(button)
    },
    update() {
        html.get('.pagination__numbers').innerHTML = ''

        const { maxLeft, maxRight } = buttons.calculateMaxVisible();

        for (let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page)
        }

    },
    calculateMaxVisible() {
        const { maxVisibleButtons } = state;
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }

        if (maxRight > state.totalPages) {
            maxLeft = state.totalPages - (maxVisibleButtons - 1);
            maxRight = state.totalPages;

            if (maxLeft < 1) maxLeft = 1
        }

        return { maxLeft, maxRight }

    }
};

function update() {
    list.update();
    buttons.update()
}

function init() {
    update();
    controls.createListeners();
}

init();




