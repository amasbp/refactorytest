new Vue({
  el: "#app",
  data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: '1', rating :4 },
        { title: '2', rating :9 },
        { title: '3', rating :7 },
        { title: '4', rating :5 },
        { title: '5', rating :8 },
        { title: '6', rating :9 },
        { title: '7', rating :3 },
        ],
      filterText:''
    }
  },
  methods: {
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
    }
  },
  computed:{
    filteredFilms() {
      let filter = new RegExp(this.filterText, 'i')
      return this.ratingsInfo.filter(el => el.title.match(filter))
    }
  }
});
