$(document).ready(function () {
    var plane = document.getElementById('element1');
    var rocket = document.getElementById('element2');
    plane.homePos = { x: plane.offsetLeft, y: plane.offsetTop };
    rocket.homePos = { x: rocket.offsetLeft, y: rocket.offsetTop };
    
    $('#wrapper').mousemove(function (e) {
        parallax(e, plane, 20);
        parallax(e, rocket, 29);
    });
});

function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
};