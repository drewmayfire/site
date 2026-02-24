document.querySelectorAll('pre code').forEach(block => {
  const lines = block.textContent.split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indent = Math.min(
    ...lines.filter(l => l.trim()).map(l => l.match(/^[\t ]*/)[0].length)
  );
  block.textContent = lines.map(l => l.slice(indent)).join('\n');
});
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.code-block').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy', 1600);
    });
  });
});
