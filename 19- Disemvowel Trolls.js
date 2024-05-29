function disemvowel(str) {
  return str.replaceAll(/[a|i|u|e|o]/gi, "");
}

// referensi
// str.replaceAll(/[aiueo]/gi, "")

console.log(disemvowel("This website is for losers LOL!"));
