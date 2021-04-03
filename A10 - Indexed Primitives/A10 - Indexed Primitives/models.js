//mod 2 to construct a half sphere
const horizontalLines = 24 ;
const verticalLines = 36;
const radius = 3;
var m, n;
var i, j;

function buildGeometry() {
  var index = 0;
  var verticesSphere = [];
  var indSphere = [];
  const colorSphere = [0.0, 0.0, 1.0];

  for (m = 0; m <= ((horizontalLines) / 2); m++) {
    for (n = 0; n <= verticalLines ; n++) {
      x =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.cos((2 * Math.PI * n) / verticalLines) *
        radius;
      y = Math.cos((Math.PI * m) / horizontalLines) * radius;
      z =
        Math.sin((Math.PI * m) / horizontalLines) *
        Math.sin((2 * Math.PI * n) / verticalLines) *
        radius;

      verticesSphere[index] = [x, y, z];
      index++;
    }
  }
  verticesSphere[index] = [0, 0, 0];

  var indexincides = 0;
  for (i = 0; i < ((horizontalLines) / 2) ; i++) {
    for (j = 0; j < verticalLines; j++) {
    
        indSphere[indexincides] = i * (verticalLines+1) + j;
        indSphere[indexincides + 1] = (i + 1) * (verticalLines+1) + j;
        indSphere[indexincides + 2] = (i + 1) * (verticalLines+1) + j + 1;
        indSphere[indexincides + 3] = i * (verticalLines+1) + j;
        indSphere[indexincides + 4] = (i + 1) * (verticalLines+1) + j + 1;
        indSphere[indexincides + 5] = i * (verticalLines+1) + j + 1;
        indexincides = indexincides + 6;
        if ( i == ((horizontalLines) / 2)-1){
          indSphere[indexincides] = (i + 1) * (verticalLines+1) + j;
          indSphere[indexincides + 1] = index;
          indSphere[indexincides + 2] = (i+1) * (verticalLines+1) + j + 1;
          indexincides = indexincides + 3;

        }
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
      verticesFunct[i * 7 + j] = [x, Math.cos(z) * Math.sin(x), z];
      //verticesFunct[i * 7 + j] = [x, 0, z];
    }
  }

  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      indFunct[count] = i * 7 + j;
      indFunct[count + 1] = (i + 1) * 7 + j;
      indFunct[count + 2] = (i + 1) * 7 + j + 1;
      indFunct[count + 3] = i * 7 + j;
      indFunct[count + 4] = (i + 1) * 7 + j + 1;
      indFunct[count + 5] = i * 7 + j + 1;
      count = count + 6;
    }
  }
  addMesh(verticesFunct, indFunct, colorFunct);
}
