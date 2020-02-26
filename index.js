function resize(newSize, defaultValue) {
  let newArr = [];

  for (let i = 0; i < newSize; i++) {
    newArr[i] = defaultValue;
  }

  return newArr;
}

function buildSquareMatrix(orderN) {
  const resized = resize(orderN, 0);

  for (i = 0; i < orderN; i++) {
    resized[i] = resize(orderN, 0);
  }

  return resized;
}

function buildResidueMatrix(orderN) {
  const p = orderN - 1;
  const residues = resize(2 * p, 0);

  for (i = 0; i < p; i++) {
    residues[i] = -1;
  }
  for (i = 1; i <= (p - 1) / 2; i++) {
    residues[(i * i) % p] = 1;
  }
  for (i = p; i < 2 * p; i++) {
    residues[i] = residues[i - p];
  }

  return residues;
}

function buildHadamardMatrix(orderN, result) {
  const squareMatrix = buildSquareMatrix(orderN, result);
  const residueMatrix = buildResidueMatrix(orderN, result);

  for (j = 0; j < orderN; j++) {
    squareMatrix[0][j] = 1;
  }
  for (i = 1; i < orderN; i++) {
    squareMatrix[i][0] = 1;
  }
  for (i = 1; i < orderN; i++) {
    for (j = 1; j < orderN; j++) {
      squareMatrix[i][j] = residueMatrix[j - i + (orderN - 1)];
    }
  }

  return squareMatrix;
}

module.exports = buildHadamardMatrix;
