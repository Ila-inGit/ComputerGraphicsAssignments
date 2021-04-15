//shpere
const horizontalLines = 24;
const verticalLines = 22;
const radius = 3;
var m, n;
var i, j;
//cilinder
const sectorCount = 5;
const height = 3;
const cilinRadius = 2;

function buildGeometry() {
  // Draws a pyramid --- Already done, just for inspiration
  var vert1 = [
    [0.0, 1.0, 0.0, 0.0, 0.4472, -0.8944],
    [1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944],
    [-1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944],
    [0.0, 1.0, 0.0, 0.8944, 0.4472, 0.0],
    [1.0, -1.0, 1.0, 0.8944, 0.4472, 0.0],
    [1.0, -1.0, -1.0, 0.8944, 0.4472, 0.0],
    [0.0, 1.0, 0.0, 0.0, 0.4472, 0.8944],
    [-1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944],
    [1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944],
    [0.0, 1.0, 0.0, -0.8944, 0.4472, 0.0],
    [-1.0, -1.0, -1.0, -0.8944, 0.4472, 0.0],
    [-1.0, -1.0, 1.0, -0.8944, 0.4472, 0.0],
    [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0],
    [1.0, -1.0, -1.0, 0.0, -1.0, 0.0],
    [1.0, -1.0, 1.0, 0.0, -1.0, 0.0],
    [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0],
  ];
  var ind1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 14, 15];
  var color1 = [0.0, 0.0, 1.0];
  addMesh(vert1, ind1, color1);

  // Draws a cube -- To do for the assignment.
  var vert2 = [
    [-1.0, -1.0, -1.0, -1.0, -1.0, -1.0],
    [1.0, -1.0, -1.0, 1.0, -1.0, -1.0],
    [1.0, 1.0, -1.0, 1.0, 1.0, -1.0],
    [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0],
    [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0],
    [1.0, -1.0, 1.0, 1.0, -1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [-1.0, 1.0, 1.0, -1.0, 1.0, 1.0],
  ];
  var ind2 = [
    0,
    1,
    3,
    3,
    1,
    2,
    1,
    5,
    2,
    2,
    5,
    6,
    5,
    4,
    6,
    6,
    4,
    7,
    4,
    0,
    7,
    7,
    0,
    3,
    3,
    2,
    7,
    7,
    2,
    6,
    4,
    5,
    0,
    0,
    5,
    1,
  ];
  var color2 = [0.0, 1.0, 1.0];
  addMesh(vert2, ind2, color2);

  // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
  var vert3 = [];
  var ind3 = [];
  var color3 = [0.0, 1.0, 1.0];
  var count = 0;

  for (i = 0; i <= 6; i++) {
    for (j = 0; j <= 6; j++) {
      x = i - 3;
      z = j - 3;
      vert3[i * 7 + j] = [
        x,
        Math.cos(z) * Math.sin(x),
        z,
        -Math.sin(z) * Math.sin(x),
        1,
        Math.cos(z) * Math.cos(x),
      ];
      //vert3[i * 7 + j] = [x, 0, z];
    }
  }

  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      ind3[count] = i * 7 + j;
      ind3[count + 1] = (i + 1) * 7 + j;
      ind3[count + 2] = (i + 1) * 7 + j + 1;
      ind3[count + 3] = i * 7 + j;
      ind3[count + 4] = (i + 1) * 7 + j + 1;
      ind3[count + 5] = i * 7 + j + 1;
      count = count + 6;
    }
  }
  addMesh(vert3, ind3, color3);

  // Draws a Cylinder --- To do for the assignment
  var vert4 = [];
  var ind4 = [];
  var color4 = [1.0, 1.0, 0.0];

  let sectorSteps = (2 * Math.PI) / sectorCount;
  let sectorAngle = 0;

  var indexcil = 0;

  vert4[indexcil] = [0, 0, 0, 0, 0, -1];
  indexcil++;
  for (j = 0; j <= 3; j++) {
    for (i = 0; i <= sectorCount; i++) {
      sectorAngle = i * sectorSteps;
      x = Math.cos(sectorAngle) * cilinRadius;
      y = Math.sin(sectorAngle) * cilinRadius;

      if (j == 0) {
        z = 0;
        vert4[indexcil] = [x, y, z, 0, 0, -1];
      } else if (j == 1) {
        z = 0;
        vert4[indexcil] = [
          x,
          y,
          z,
          Math.cos(sectorAngle),
          Math.sin(sectorAngle),
          0,
        ];
      } else if (j == 2) {
        z = height;
        vert4[indexcil] = [
          x,
          y,
          z,
          Math.cos(sectorAngle),
          Math.sin(sectorAngle),
          0,
        ];
      } else {
        z = height;
        vert4[indexcil] = [x, y, z, 0, 0, 1];
      }

      indexcil++;
    }
  }
  vert4[indexcil] = [0, 0, height, 0, 0, 1];

  var indexincides = 0;
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= sectorCount; j++) {
      if (i == 0) {
        ind4[indexincides] = 0;
        ind4[indexincides + 1] = j + 2;
        ind4[indexincides + 2] = j + 1;
        indexincides = indexincides + 3;
      } else if (i == 1) {
        ind4[indexincides] = i * (sectorCount + 1) + j + 1;
        ind4[indexincides + 1] = (i + 1) * (sectorCount + 1) + j + 2;
        ind4[indexincides + 2] = (i + 1) * (sectorCount + 1) + j + 1;
        ind4[indexincides + 3] = i * (sectorCount + 1) + j + 2;
        ind4[indexincides + 4] = (i + 1) * (sectorCount + 1) + j + 2;
        ind4[indexincides + 5] = i * (sectorCount + 1) + j + 1;
        indexincides = indexincides + 6;
      } else {
        ind4[indexincides] = (i + 1) * (sectorCount + 1) + j + 1;
        ind4[indexincides + 1] = (i + 1) * (sectorCount + 1) + j + 2;
        ind4[indexincides + 2] = indexcil;
        indexincides = indexincides + 3;
      }
    }
  }
  addMesh(vert4, ind4, color4);

  // Draws a Sphere --- To do for the assignment.
  var vert5 = [];
  var ind5 = [];
  var index = 0;

  for (m = 0; m <= horizontalLines; m++) {
    for (n = 0; n <= verticalLines; n++) {
      x =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.cos((2 * Math.PI * n) / verticalLines) *
        radius;
      y = Math.cos((Math.PI * m) / horizontalLines) * radius;
      z =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.sin((2 * Math.PI * n) / verticalLines) *
        radius;

      vert5[index] = [
        x,
        y,
        z,
        Math.sin((Math.PI * m) / horizontalLines) *
          Math.cos((2 * Math.PI * n) / verticalLines),
        Math.cos((Math.PI * m) / horizontalLines),
        Math.sin((Math.PI * m) / horizontalLines) *
          Math.sin((2 * Math.PI * n) / verticalLines) *
          0,
      ];
      index++;
    }
  }

  var indexincides = 0;
  for (i = 0; i < horizontalLines; i++) {
    for (j = 0; j < verticalLines; j++) {
      ind5[indexincides] = i * (verticalLines + 1) + j;
      ind5[indexincides + 1] = (i + 1) * (verticalLines + 1) + j;
      ind5[indexincides + 2] = (i + 1) * (verticalLines + 1) + j + 1;
      ind5[indexincides + 3] = i * (verticalLines + 1) + j;
      ind5[indexincides + 4] = (i + 1) * (verticalLines + 1) + j + 1;
      ind5[indexincides + 5] = i * (verticalLines + 1) + j + 1;
      indexincides = indexincides + 6;
    }
  }

  var color5 = [1.0, 0.0, 0.0];
  addMesh(vert5, ind5, color5);
}
