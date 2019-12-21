export default function(numStr) {
  if (numStr[0] === "0") {
    return parseInt(numStr[1], 10);
  } else {
    return parseInt(numStr, 10);
  }
}
