function getArrayDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = 0;

  for (const item of arr) {
    const depth = getArrayDepth(item);
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  }

  return maxDepth + 1;
}


