function formatString(string, maxLength = 40) {
  const dots = "...";

  return string.length >= maxLength
    ? string.slice(0, maxLength).concat(dots)
    : string;

  // Write code under this line
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// ("Curabitur ligula sapien, tincidunt non.");

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
