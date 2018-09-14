Vue.component('dynamic-grid', {
  template: '#grid-template',
  props: {
    rowCount: Number,
    columnCount: Number
  }
})

var mainGrid = new Vue({
  el: '#mainGrid',
  data: {
    numberOfRows: 15,
    numberOfColumns: 15
  }
})