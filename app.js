const boxes = document.querySelectorAll('.xobox');
const status = document.querySelector('#gamestatus');
const restartButt = document.querySelector('restartgame');
let x="<img src='/workspaces/0-X-X/assets/Xsymbol.png'>";
let o = "<'0img src = /workspaces/0-X-X/assets/Osymbol.png'>";

const winCombo = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];