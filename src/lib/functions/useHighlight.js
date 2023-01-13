export default function (string) {
  return string
    .join()
    .split(" ")
    .map(
      (word, i, all) => `<span class="useHighlight">${word}${i < all.length - 1 ? " " : ""}</span>`
    )
    .join("");
}
