/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
<<<<<<< HEAD

//esto se puso
import {Platform} from 'react-native';

=======
import 'babel-polyfill';
>>>>>>> 971d573a34940b45f3caed8c5dc3cdbef89212a7
AppRegistry.registerComponent(appName, () => App);

global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');


// esto es para el slidebar
// if (Platform.OS === 'android') {
//     if (typeof Symbol === 'undefined') {
//         if (Array.prototype['@@iterator'] === undefined) {
//             Array.prototype['@@iterator'] = function () {
//                 let i = 0;
//                 return {
//                     next: () => ({
//                         done: i >= this.length,
//                         value: this[i++],
//                     }),
//                 };
//              };
//         }
//     }
// }