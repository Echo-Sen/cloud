var c = () => {
  let w = document.documentElement.clientWidth;
  let n = 10 * (w / 600) > 10 ? 10 + 'px' : 10 * (w / 600) + 'px';
  document.documentElement.style.fontSize = n;
};
window.addEventListener('load', c);
window.addEventListener('resize', c);