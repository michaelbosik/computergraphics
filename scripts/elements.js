let drawElements = document.getElementsByClassName('draw');
let meshElements = document.getElementsByClassName('mesh');
let mobileElements = document.getElementsByClassName('mobile');

let showDraw = function() {
    hideMesh();
    hideMobile();
    mainDraw();
    document.getElementById('startDraw').style.display = 'none';
    for (var i = 0; i < drawElements.length; i++)
        drawElements[i].style.display = "inline-block";
}

let showMesh = function() {
    hideDraw();
    hideMobile();
    mainMesh();
    document.getElementById('startMesh').style.display = 'none';
    for (var i = 0; i < meshElements.length; i++)
        meshElements[i].style.display = "inline-block";
}

let showMobile = function() {
    hideDraw();
    hideMesh();
    mainMobile();
    document.getElementById('startMobile').style.display = 'none';
    for (var i = 0; i < mobileElements.length; i++)
        mobileElements[i].style.display = "inline-block";
}

let hideDraw = function() {
    killDraw();
    for (var i = 0; i < drawElements.length; i++)
        drawElements[i].style.display = "none";
    document.getElementById('startDraw').style.display = 'inline-block';
}

let hideMesh = function() {
    killMesh();
    for (var i = 0; i < meshElements.length; i++)
        meshElements[i].style.display = "none";
    document.getElementById('startMesh').style.display = 'inline-block';
}

let hideMobile = function() {
    killMobile();
    for (var i = 0; i < mobileElements.length; i++)
        mobileElements[i].style.display = "none";
    document.getElementById('startMobile').style.display = 'inline-block';
}