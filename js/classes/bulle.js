function Bulle(type,id){
  this.iden = id;
  this.element = document.createElement(type);
  this.element.setAttribute("id",id);
  this.timeBulle = 0;
}

Bulle.prototype.resetBulle = function() {
    clearTimeout(this.timeBulle);
    var that = this.element;
    this.timeBulle = setTimeout(function() {
        $(that).text("");
        $(that).css({
            background: "none",
            border: "0px"
        });
    }, 5000);
}
