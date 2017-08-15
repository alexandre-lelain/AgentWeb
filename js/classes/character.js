function Character(type,id){
  this.iden = id;
  this.element = document.createElement(type);
  this.element.setAttribute('id',id);
}
