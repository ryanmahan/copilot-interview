// given a list of words and a input term
// return the top 3 search terms that are closest to the input as it's typed letter by letter
function searchTerms(words: string[], term: string): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    let distance = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== term[i]) {
        distance++;
      }
    }
    map.set(word, distance);
  }
  const result: string[] = [];
  for (const [word, distance] of map) {
    if (distance === 0) {
      result.push(word);
    } else {
      result.push(word);
    }
  }
  return result.slice(0, 3);
}

// weird bit of code, especially the second loop starting on 15