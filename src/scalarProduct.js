export function scalarProduct(y1, y2, sens, incrementForSpeed) {
  // sens = 1; crude scalar product
  // sens =-1: flip spectrum first
  let v11 = 0;
  let v22 = 0;
  let v12 = 0;
  if (sens > 0) {
    for (let index = 0; index < y1.length; index += incrementForSpeed) {
      v12 += y1[index] * y2[index];
      v11 += y1[index] * y1[index];
      v22 += y2[index] * y2[index];
    }
  } else {
    // Here as if flip left/right array
    for (let index = 0; index < y1.length; index += incrementForSpeed) {
      v12 += y1[index] * y2[y1.length - index - 1];
      v11 += y1[index] * y1[index];
      v22 += y2[index] * y2[index];
    }
  }
  return v12 / Math.sqrt(v11 * v22);
}
