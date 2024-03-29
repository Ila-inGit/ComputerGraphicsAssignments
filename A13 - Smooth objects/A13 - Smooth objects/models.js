//shpere
const horizontalLines = 24;
const verticalLines = 22;
const radius = 3;
var m, n;
var i, j;
//cilinder
const sectorCount = 26;
const height = 4;
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

  // Draws a cube
  var vert2 = [
    
    // faccia dietro
    [-1.0, 1.0, -1.0, 0.0, 0.0, -1.0],
    [1.0, 1.0, -1.0, 0.0, 0.0, -1.0],
    [1.0, -1.0, -1.0, 0.0, 0.0, -1.0],
    [-1.0, -1.0, -1.0, 0.0, 0.0, -1.0],
    // faccia davanti
    [-1.0, 1.0, 1.0, 0.0, 0.0, 1.0],
    [-1.0, -1.0, 1.0, 0.0, 0.0, 1.0],
    [1.0, -1.0, 1.0, 0.0, 0.0, 1.0],
    [1.0, 1.0, 1.0, 0.0, 0.0, 1.0],
    // faccia a dx
    [1.0, 1.0, -1.0, 1.0, 0.0, 0.0],
    [1.0, 1.0, 1.0, 1.0, 0.0, 0.0],
    [1.0, -1.0, 1.0, 1.0, 0.0, 0.0],
    [1.0, -1.0, -1.0, 1.0, 0.0, 0.0],
    // faccia a sx
    [-1.0, 1.0, -1.0, -1.0, 0.0, 0.0],
    [-1.0, -1.0, -1.0, -1.0, 0.0, 0.0],
    [-1.0, -1.0, 1.0, -1.0, 0.0, 0.0],
    [-1.0, 1.0, 1.0, -1.0, 0.0, 0.0],
    // faccia sopra
    [-1.0, 1.0, 1.0, 0.0, 1.0, 0.0],
    [1.0, 1.0, 1.0, 0.0, 1.0, 0.0],
    [1.0, 1.0, -1.0, 0.0, 1.0, 0.0],
    [-1.0, 1.0, -1.0, 0.0, 1.0, 0.0],
    // faccia sotto
    [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0],
    [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0],
    [1.0, -1.0, -1.0, 0.0, -1.0, 0.0],
    [1.0, -1.0, 1.0, 0.0, -1.0, 0.0],
  ];
 
  var ind2 = [
    0,1,2,2,3,0,4,5,7,7,5,6,8,9,11,11,9,10,12,13,15,15,13,14,16,17,19,19,17,18,20,21,23,23,21,22,
  ];

  var color2 = [0.0, 1.0, 1.0];
  addMesh(vert2, ind2, color2);

  // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.

  var verticesFunct = [];
  var indFunct = [];
  const colorFunct = [0.0, 0.0, 1.0];

  var nPointsPerRow = 50;
  var converter = 1/(nPointsPerRow/2) * 3;

  for (i = 0; i < nPointsPerRow; i++) {
    for (j = 0; j < nPointsPerRow; j++) {
      x = (i - nPointsPerRow/2)* converter;
      z = (j - nPointsPerRow/2)* converter;
      verticesFunct[i * nPointsPerRow + j] = [
        x,
        Math.cos(z) * Math.sin(x),
        z,
        -Math.sin(z) * Math.sin(x),
        1,
        Math.cos(z) * Math.cos(x)];
    }
  }

  for (i = 0; i < nPointsPerRow-1; i++) {
    for (j = 0; j < nPointsPerRow-1; j++) {
      indFunct[6*(i * nPointsPerRow + j)] = i * nPointsPerRow + j;
      indFunct[6*(i * nPointsPerRow + j) + 1] = (i + 1) * nPointsPerRow + j+ 1;
      indFunct[6*(i * nPointsPerRow + j) + 2] = (i + 1) * nPointsPerRow + j ;
      indFunct[6*(i * nPointsPerRow + j) + 3] = i * nPointsPerRow + j;
      indFunct[6*(i * nPointsPerRow + j) + 4] = i * nPointsPerRow + j + 1;
      indFunct[6*(i * nPointsPerRow + j) + 5] = (i + 1) * nPointsPerRow + j + 1;
      
    }
  }
  addMesh(verticesFunct, indFunct, colorFunct);

  // Draws a Cylinder
  var vert4 = [];
  var ind4 = [];
  var color4 = [1.0, 1.0, 0.0];

  //variabili per rendere personalizzabile il cilindro
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
          x,y,z,
          Math.cos(sectorAngle),
          Math.sin(sectorAngle),
          0,
        ];
      } else if (j == 2) {
        z = height;
        vert4[indexcil] = [
          x,y,z,
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
        x,y,z,
        Math.sin((Math.PI * m) / horizontalLines) * Math.cos((2 * Math.PI * n) / verticalLines),
        Math.cos((Math.PI * m) / horizontalLines),
        Math.sin((Math.PI * m) / horizontalLines) * Math.sin((2 * Math.PI * n) / verticalLines),
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
