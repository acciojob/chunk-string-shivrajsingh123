function stringChop(str, size) {
  if (!str) return []; // Handle null or empty string
  size = Number(size); // Convert size to a number
  if (isNaN(size) || size <= 0) return []; // Handle invalid chunk sizes

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size));
  }
  
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size))); // Convert array to string for alert
