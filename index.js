function redactContent() {
    const originalText = document.getElementById('originalText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');
    const customReplacement = '*';

    let redactedText = originalText;
    let redactedCount = 0;

    for (let i = 0; i < wordsToRedact.length; i++) {
        const word = wordsToRedact[i];
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        redactedText = redactedText.replace(regex, customReplacement.repeat(word.length));
        redactedCount++;
    }

  
    document.getElementById('redactedText').textContent = redactedText;
  
    const stats = `Words scanned: ${originalText.split(' ').length}, Words matched: ${redactedCount}, Characters redacted: ${redactedText.length}`;
    document.getElementById('stats').textContent = stats;
  }
  