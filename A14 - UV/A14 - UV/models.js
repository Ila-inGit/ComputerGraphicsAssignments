const sectorCount = 26;
const height = 8;
const cilinRadius = 2;

function buildGeometry() {
  var i, j;
  // Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
  var vert1 = [
    [0.0, 1.0, 0.0, 0.0, 0.4472, -0.8944, 0.875, 0.5],
    [1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 1, 0.25],
    [-1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 0.75, 0.25],
    [0.0, 1.0, 0.0, 0.8944, 0.4472, 0.0, 0.625, 0.5],
    [1.0, -1.0, 1.0, 0.8944, 0.4472, 0.0, 0.75, 0.25],
    [1.0, -1.0, -1.0, 0.8944, 0.4472, 0.0, 0.5, 0.25],
    [0.0, 1.0, 0.0, 0.0, 0.4472, 0.8944, 0.62, 0.25],
    [-1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944, 0.75, 0.0],
    [1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944, 0.5, 0.0],
    [0.0, 1.0, 0.0, -0.8944, 0.4472, 0.0, 0.622, 0.5],
    [-1.0, -1.0, -1.0, -0.8944, 0.4472, 0.0, 0.75, 0.25],
    [-1.0, -1.0, 1.0, -0.8944, 0.4472, 0.0, 0.5, 0.25],
    [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 1, 0.0],
    [1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.75, 0.0],
    [1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.75, 0.25],
    [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 1, 0.25],
  ];
  var ind1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 14, 15];
  var color1 = [0.0, 0.0, 1.0];

  addMesh(vert1, ind1, color1);

  // Draws a cube -- To do for the assignment.
  var vert2 = [];
  var ind2 = [];
  var color2 = [0.0, 1.0, 1.0];
  var vert2 = [
    //done dietro
    [-1.0, 1.0, -1.0, 0.0, 0.0, -1.0, 0.125, 0.875],
    [1.0, 1.0, -1.0, 0.0, 0.0, -1.0, 0.25, 0.875],
    [1.0, -1.0, -1.0, 0.0, 0.0, -1.0, 0.25, 1],
    [-1.0, -1.0, -1.0, 0.0, 0.0, -1.0, 0.125, 1],
    //done davanti
    [-1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.125, 0.75],
    [-1.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.125, 0.625],
    [1.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.25, 0.625],
    [1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.25, 0.75],
    // done dx
    [1.0, 1.0, -1.0, 1.0, 0.0, 0.0, 0.375, 0.75],
    [1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.25, 0.75],
    [1.0, -1.0, 1.0, 1.0, 0.0, 0.0, 0.25, 0.625],
    [1.0, -1.0, -1.0, 1.0, 0.0, 0.0, 0.375, 0.625],
    // done sx
    [-1.0, 1.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.75],
    [-1.0, -1.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.625],
    [-1.0, -1.0, 1.0, -1.0, 0.0, 0.0, 0.125, 0.625],
    [-1.0, 1.0, 1.0, -1.0, 0.0, 0.0, 0.125, 0.75],
    //done sopra
    [-1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.125, 0.75],
    [1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.25, 0.75],
    [1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.25, 0.875],
    [-1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.125, 0.875],
    //done sotto
    [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.125, 0.625],
    [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.125, 0.5],
    [1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.25, 0.5],
    [1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.25, 0.625],
  ];
  var ind2 = [
    0,
    1,
    2,
    2,
    3,
    0,
    4,
    5,
    7,
    7,
    5,
    6,
    8,
    9,
    11,
    11,
    9,
    10,
    12,
    13,
    15,
    15,
    13,
    14,
    16,
    17,
    19,
    19,
    17,
    18,
    20,
    21,
    23,
    23,
    21,
    22,
  ];

  addMesh(vert2, ind2, color2);

  // Draws a Cylinder --- To do for the assignment
  var vert3 = [];
  var ind3 = [];
  var color3 = [0.0, 1.0, 1.0];

  let sectorSteps = (2 * Math.PI) / sectorCount;
  let sectorAngle = 0;

  var indexcil = 0;

  vert3[indexcil] = [0, 0, -5, 0, 0, -1, 0.875, 0.875];
  indexcil++;
  for (j = 0; j <= 3; j++) {
    for (i = 0; i <= sectorCount; i++) {
      sectorAngle = i * sectorSteps;
      x = Math.cos(sectorAngle) * cilinRadius;
      y = Math.sin(sectorAngle) * cilinRadius;

      if (j == 0) {
        z = -5;
        vert3[indexcil] = [
          x,
          y,
          z,
          0,
          0,
          -1,
          0.875 + Math.cos(sectorAngle) * 0.125,
          0.875 + Math.sin(sectorAngle) * 0.125,
        ];
      } else if (j == 1) {
        z = -5;
        vert3[indexcil] = [
          x,
          y,
          z,
          Math.cos(sectorAngle),
          Math.sin(sectorAngle),
          0,
          0.5 + (0.5 / sectorCount) * i,
          0.5,
        ];
      } else if (j == 2) {
        z = height;
        vert3[indexcil] = [
          x,
          y,
          z,
          Math.cos(sectorAngle),
          Math.sin(sectorAngle),
          0,
          0.5 + (0.5 / sectorCount) * i,
          0.75,
        ];
      } else {
        z = height;
        vert3[indexcil] = [
          x,
          y,
          z,
          0,
          0,
          1,
          0.625 + Math.cos(sectorAngle) * 0.125,
          0.875 + Math.sin(sectorAngle) * 0.125,
        ];
      }

      indexcil++;
    }
  }
  vert3[indexcil] = [0, 0, height, 0, 0, 1, 0.625, 0.875];

  var indexincides = 0;
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= sectorCount; j++) {
      if (i == 0) {
        ind3[indexincides] = 0;
        ind3[indexincides + 1] = j + 2;
        ind3[indexincides + 2] = j + 1;
        indexincides = indexincides + 3;
      } else if (i == 1) {
        ind3[indexincides] = i * (sectorCount + 1) + j + 1;
        ind3[indexincides + 1] = (i + 1) * (sectorCount + 1) + j + 2;
        ind3[indexincides + 2] = (i + 1) * (sectorCount + 1) + j + 1;
        ind3[indexincides + 3] = i * (sectorCount + 1) + j + 2;
        ind3[indexincides + 4] = (i + 1) * (sectorCount + 1) + j + 2;
        ind3[indexincides + 5] = i * (sectorCount + 1) + j + 1;
        indexincides = indexincides + 6;
      } else {
        ind3[indexincides] = (i + 1) * (sectorCount + 1) + j + 1;
        ind3[indexincides + 1] = (i + 1) * (sectorCount + 1) + j + 2;
        ind3[indexincides + 2] = indexcil;
        indexincides = indexincides + 3;
      }
    }
  }

  addMesh(vert3, ind3, color3);
}
