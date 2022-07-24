// given an array of words, find the longest common prefix
function longestCommonPrefix(words: string[]): string {
  let prefix = '';
  for (let i = 0; i < words[0].length; i++) {
    let char = words[0][i];
    for (let j = 1; j < words.length; j++) {
      if (words[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

// given an array of words, find the longest common prefix using a trie
function longestCommonPrefixTrie(words: string[]): string {
  let trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }
  return trie.longestCommonPrefix();
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  public insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  public longestCommonPrefix(): string {
    let node = this.root;
    let prefix = '';
    while (node.isWord) {
      prefix += node.char;
      node = node.children[node.char];
    }
    return prefix;
  }
}

class TrieNode {
  public char: string;
  public isWord: boolean;
  public children: { [key: string]: TrieNode };
  constructor(char?: string, isWord?: boolean) {
    this.char = char || '';
    this.isWord = isWord || false;
    this.children = {};
  }
}

// incorrect! Was closer after starting with generating the function rather than starting with the Trie/TrieNode classes