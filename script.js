document.getElementById('copyZelle')?.addEventListener('click', () => {
  const number = '515-***-3366';
  navigator.clipboard.writeText(number).then(() => {
    alert('Zelle number copied!');
  }).catch(() => {
    alert('Could not copy. Please copy it manually.');
  });
});