// importing what needs to be imported
import {Hero} from './class.js';

// creating variables for all buttons

// menu buttons
let startGameBtn = document.querySelector('#startGameBtn');
let replayGameBtn = document.querySelector('#replayGameBtn')
let lilithBtn = document.querySelector('#lilithBtn');
let sauronBtn = document.querySelector('#sauronBtn');
let chronosBtn = document.querySelector('#chronosBtn');
let confirmStatsBtn = document.querySelector('#confirmStatsBtn');

// character maker inputs
let heroNameInput = document.querySelector('#heroNameInput')
let heroHealthPointsInput = document.querySelector('#heroHealthPointsBtn')
let heroDamagePointsInput = document.querySelector('#heroDamagePointsInput')



// creating hero objects with Hero class
let warrior = new Hero();
let mage = new Hero();
let archer = new Hero();