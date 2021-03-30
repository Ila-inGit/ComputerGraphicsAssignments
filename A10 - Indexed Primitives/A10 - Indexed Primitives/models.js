//const horizontalLines = 24;
const horizontalLines = 4;
//const verticalLines = 36;
const verticalLines = 4;
const radius = 10;
var m, n;
var i, j;

function buildGeometry() {

  var index = 0;
  var verticesSphere = [];
  var indSphere = [];
  const colorSphere = [0.0, 0.0, 1.0];

  for (m = 0; m <= horizontalLines; m++) {
    for (n = 0; n < verticalLines; n++) {
      x =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.cos((2 * Math.PI * n) / verticalLines) *
        radius;
      y =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.sin((2 * Math.PI * n) / verticalLines) *
        radius;
      z = Math.cos((Math.PI * m) / horizontalLines) * radius;

      verticesSphere[index] = [x, y, z];
      index++;
    }
  }

  
  var indexincides = 0;
  for (i = 0; i < horizontalLines; i++) {
    for (j = 0; j < verticalLines; j++) {
      indSphere[indexincides] = verticesSphere[i * verticalLines + j];
      indSphere[indexincides + 1] = verticesSphere[i * verticalLines + j + 1];
      indSphere[indexincides + 2] = verticesSphere[(i + 1) * verticalLines + j];
      indSphere[indexincides + 3] = verticesSphere[i * verticalLines + j + 1];
      indSphere[indexincides + 4] = verticesSphere[(i + 1) * verticalLines + j];
      indSphere[indexincides + 5] =
        verticesSphere[(i + 1) * verticalLines + j + 1];
      indexincides = indexincides + 6;
    }
  }

  addMesh(verticesSphere, indSphere, colorSphere);

 // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.

  var verticesFunct = [];
  var indFunct = [];
  const colorFunct = [0.0, 0.0, 1.0];
  var count = 0;

  for (i = 0; i <= 6; i++) {
    for (j = 0; j <= 6; j++) {
      x = i - 3;
      z = j - 3;
      verticesFunct[i*7+j] = [x, Math.cos(z)*Math.sin(x), z];
      //verticesFunct[i * 7 + j] = [x, 0, z];
    }
  }

  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      indFunct[count] = verticesFunct[i * 7 + j];
      indFunct[count + 1] = verticesFunct[(i + 1) * 7 + j];
      indFunct[count + 2] = verticesFunct[(i + 1) * 7 + j + 1];
      indFunct[count + 3] = verticesFunct[i * 7 + j];
      indFunct[count + 4] = verticesFunct[(i + 1) * 7 + j + 1];
      indFunct[count + 5] = verticesFunct[i * 7 + j + 1];
      count = count + 6;
    }
  }
  addMesh(verticesFunct, indFunct, colorFunct);


}