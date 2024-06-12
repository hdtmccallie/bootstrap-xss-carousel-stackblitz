str = [
  '#',
  "javascript:alert('XSS data-target')",
  '<script>javascript:alert("XSS data-target")</script>',
  '<<script>javascript:alert("XSS data-target")</script><!--',
  '#myCarousel',
  'https://example.com/asdf/#treyhash#myCarousel',
  'https://example.com/asdf/#myCarousel',
  '#section"&gt;&lt;img src=x onerror="javascript:alert(&#39;XSS&#39;)"&gt;',
  '#myCarousel',
];

sanitizeAttribute = function (selector) {
  let lastHashIndex = selector.lastIndexOf('#');

  if (lastHashIndex !== -1 && selector[lastHashIndex + 1] !== ' ') {
    return selector.slice(lastHashIndex);
  }

  return selector;
};

str.forEach(function (s) {
  selectorA = s;
  selectorB = s;

  selectorA =
    selectorA &&
    // /#[A-Za-z]/.test(selectorA) &&
    selectorA.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7

  // selectorB =
  //   selectorB &&
  //   // /#[A-Za-z]/.test(selectorB) &&
  //   selectorB.substring(0, selectorB.lastIndexOf('#'));

  selectorB =
    selectorB &&
    // /#[A-Za-z]/.test(selectorB) &&
    sanitizeAttribute(selectorB);

  console.table([s, selectorA, selectorB]);
});
