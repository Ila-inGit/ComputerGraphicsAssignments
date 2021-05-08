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
  const colorSphere = [0.0, 1.0, 0.0];

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
        indSphere[indexincides + 1] = (i + 1) * (verticalLines+1) + j+1;
        indSphere[indexincides + 2] = (i + 1) * (verticalLines+1) + j;
        indSphere[indexincides + 3] = i * (verticalLines+1) + j;
        indSphere[indexincides + 4] =  i* (verticalLines+1) + j + 1;
        indSphere[indexincides + 5] = (i + 1) * (verticalLines+1) + j + 1;
        indexincides = indexincides + 6;
        //
        if ( i == ((horizontalLines) / 2)-1){
          indSphere[indexincides] = (i + 1) * (verticalLines+1) + j+ 1;
          indSphere[indexincides + 1] = index;
          indSphere[indexincides + 2] = (i+1) * (verticalLines+1) + j ;
          indexincides = indexincides + 3;

        }
    }
  }

  addMesh(verticesSphere, indSphere, colorSphere);

  // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.

  var verticesFunct = [];
  var indFunct = [];
  const colorFunct = [0.0, 0.0, 1.0];

  var nPointsPerRow = 100;
  var converter = 0.05;

  for (i = 0; i <= nPointsPerRow; i++) {
    for (j = 0; j <= nPointsPerRow; j++) {
      x = (i - nPointsPerRow/2)* converter;
      z = (j - nPointsPerRow/2)* converter;
      verticesFunct[i * nPointsPerRow + j] = [x, Math.cos(z) * Math.sin(x), z];
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
}
