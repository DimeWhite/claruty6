function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
    console.log(def, val, matrix, i)
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});


function ellipse(){
    var baseX = 82; // x координата центра окружности
    var baseY = 8; // y координата центра окружности

    var radius = 109;
    var arrow = document.querySelector("#ellipse");
    var vx =  Math.cos(currentAngle) * radius;
    var vy = 110.5 + Math.sin(currentAngle) * radius;

    arrow.style.marginTop =  baseY + vy + "px";
    arrow.style.marginLeft = baseX + vx + "px";
    currentAngle += 0.1;
}

setInterval(function (){
    ellipse()

}, 35);