const quotes = [
  'Ako ti se prdi idi u wc pa se izduvaj',
  'Sve ti je to pričam ti priču',
  'Gde ste mačkići',
  'Sve to ide po inerciji',
  'Vaš posao je deco sedeći',
  'Buongiorno, come stai signore. Bene, molto bene',
  'Pa ja vam pričam, a vi kako hoćete'
];

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    const refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', _event => {
      setRandomQuote();
    });

    setRandomQuote();
  }
}

function setRandomQuote() {
  const quoteElement = document.querySelector('#quote');
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomNumber];
}
