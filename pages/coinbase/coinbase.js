angular
  .module('app')
  .component('coinbasePage', {
    templateUrl: 'pages/coinbase/coinbase.html',
    controller: CoinbasePageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CoinbasePageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [{
      number: 1,
      nonce: 24377,
      data: {
        coinbase: {value: 100, to: 'Yawar'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 88212,
      data: {
        coinbase: {value: 100, to: 'Yawar'},
        txs: [{value: 10, from: 'Yawar', to: 'Swati'}]
      }
    }, {
      number: 3,
      nonce: 5954,
      data: {
        txs: [{value: 5, from: 'Swati', to: 'Apurv'}]
      }
    }, {
      number: 4,
      nonce: 17144,
      data: {
        txs: [{value: 20, from: 'Yawar', to: 'Satyam'}, {value: 5, from: 'Yawar', to: 'Apurv'}
        ]
      }
    }, {
      number: 5,
      nonce: 174556,
      data: {
        txs: [{value: 65, from: 'Yawar', to: 'Satyam'}]
      }
    }]
  }, {
    name: 'Peer B',
    blocks: [{
      number: 1,
      nonce: 24549,
      data: {
        coinbase: {value: 100, to: 'Apurv'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 204276,
      data: {
        coinbase: {value: 100, to: 'Apurv'},
        txs: [{value: 10, from: 'Apurv', to: 'Swati'}]
      }
    }, {
      number: 3,
      nonce: 56455,
      data: {
        txs: [{value: 5, from: 'Swati', to: 'Yawar'}]
      }
    }, {
      number: 4,
      nonce: 40379,
      data: {
        txs: [{value: 20, from: 'Apurv', to: 'Satyam'}, {value: 5, from: 'Apurv', to: 'Yawar'}
        ]
      }
    }, {
      number: 5,
      nonce: 5603,
      data: {
        txs: [{value: 65, from: 'Apurv', to: 'Satyam'}]
      }
    }]
  }, {
    name: 'Peer C',
    blocks: [{
      number: 1,
      nonce: 31564,
      data: {
        coinbase: {value: 100, to: 'Satyam'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 15117,
      data: {
        coinbase: {value: 100, to: 'Satyam'},
        txs: [{value: 10, from: 'Satyam', to: 'Apurv'}]
      }
    }, {
      number: 3,
      nonce: 35752,
      data: {
        txs: [{value: 5, from: 'Apurv', to: 'Yawar'}]
      }
    }, {
      number: 4,
      nonce: 13951,
      data: {
        txs: [{value: 20, from: 'Satyam', to: 'Swati'}, {value: 5, from: 'Satyam', to: 'Yawar'}
        ]
      }
    }, {
      number: 5,
      nonce: 49340,
      data: {
        txs: [{value: 65, from: 'Satyam', to: 'Swati'}]
      }
    }]
  }];
}