// given a list of words, return the length of the shortest path from startWord to endWord
// where each word in the path is only one letter different from the previous
// you cannot reuse words
function wordLadder(startWord: string, endWord: string, wordList: string[]): boolean {
  const queue: string[] = [startWord];
  const visited: string[] = [startWord];
  while (queue.length) {
    const word = queue.shift();
    if (word === endWord) {
      return true;
    }
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
        if (wordList.includes(newWord) && !visited.includes(newWord)) {
          queue.push(newWord);
          visited.push(newWord);
        }
      }
    }
  }
  return false;
}

// does work for true/false I think? doesnt match whats asked
// BFS being used, so shortest path was understood (probably)