class ColorChanger {
  #refs
  #handle = null
  #colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']
  constructor(selectors) {
    this.#refs = this.#getReference(selectors);
    this.#refs.start.addEventListener('click', this.start.bind(this));
    this.#refs.stop.addEventListener('click', this.stop.bind(this));
  }
  #getReference({ start, stop, parent }) {
    const refs = {}
    refs.start = document.querySelector(start);
    refs.stop = document.querySelector(stop);
    refs.parent = document.querySelector(parent);
    return refs;
  }

  #random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  #changeBgColor() {
    const color = this.#random(0, this.#colors.length - 1,);
    this.#refs.parent.style.backgroundColor = this.#colors[color];
  }
  start() {
    if (this.#handle) return;
    this.#handle = setInterval(
      this.#changeBgColor.bind(this),
      1000,
    );
  }
  stop() {
    clearInterval(this.#handle);
    this.#handle = null;
  }
};

 export default new ColorChanger({
  start: '[data-action="start"]',
  stop: '[data-action="stop"]',
  parent: 'body'
});