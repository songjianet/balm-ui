export default {
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    menuSelector: String
  },
  data() {
    return {
      $drawer: null
    };
  },
  watch: {
    open(val) {
      this.$drawer.open = val;
    }
  },
  methods: {
    init() {
      if (document.querySelector(this.menuSelector)) {
        document
          .querySelector(this.menuSelector)
          .addEventListener('click', () => {
            this.$drawer.open = !this.$drawer.open;
          });
      }
    }
  }
};
