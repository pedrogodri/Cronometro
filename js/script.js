"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cronometro;

function start() {
    cronometro = setInterval(timer, tempo);
}

function pause() {

}

function stop() {

}

function timer() {
    document.getElementById('counter').innerText = 'tESTE'
}