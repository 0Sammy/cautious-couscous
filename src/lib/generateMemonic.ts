// Pool of words
const wordPool = [
  "oblivion",
  "resilience",
  "ethereal",
  "labyrinth",
  "mellifluous",
  "paradox",
  "sonder",
  "verdant",
  "insidious",
  "effervescent",
  "panacea",
  "eloquence",
  "nebulous",
  "plethora",
  "quintessential",
  "enigma",
  "nostalgia",
  "ubiquitous",
  "ambivalence",
  "luminous",
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "elephant",
  "giraffe",
  "zebra",
  "lion",
  "tiger",
  "ocean",
  "mountain",
  "forest",
  "desert",
  "river",
  "abstract",
  "serendipity",
  "ephemeral",
  "quixotic",
  "ineffable",
  "Serendipity",
  "Mellifluous",
  "Quixotic",
  "Ephemeral",
  "Ineffable",
  "Resplendent",
  "Obfuscate",
  "Perspicacious",
  "Enigmatic",
  "Mellifluous",
  "Capitulate",
  "Supercilious",
  "Garrulous",
  "Quotidian",
  "Pernicious",
  "Mellifluous",
  "Ebullient",
  "Incandescent",
  "Sycophant",
  "Happy",
  "Bright",
  "Fast",
  "Quiet",
  "Small",
  "Funny",
  "Cold",
  "Smart",
  "Brave",
  "Shiny",
  "Tasty",
  "Quick",
  "Loud",
  "Warm",
  "Big",
  "Kind",
  "Clever",
  "Simple",
  "Sweet",
  "Strong",
];

// Function to generate 12 random words
export function generateRandomWords() {
  const numberOfWords = 12;
  const randomWords = [];

  // Ensure the pool has enough words
  if (wordPool.length < numberOfWords) {
    console.error("Not enough words in the pool.");
    return [];
  }

  // Shuffle the word pool (optional)
  const shuffledPool = wordPool.sort(() => Math.random() - 0.5);

  // Select the first 12 words from the shuffled pool
  for (let i = 0; i < numberOfWords; i++) {
    randomWords.push(shuffledPool[i]);
  }

  // Join the words with spaces
  return randomWords.join(' ');
}

