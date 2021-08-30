function move() {
  
  // Translate of +1 on the x axis, and -2 on the y axis
  // traslate somma lungo ultima colonna

  var T11 = [
    1.0,    0.0,    0.0,    1.0,
    0.0,    1.0,    0.0,    -2.0,
    0.0,    0.0,    1.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Rotate of 30 degrees on the x axis
  // moltiplicazione dell'angolo lungo l'asse desiderato

  var cos30 = Math.sqrt(3) / 2;

  var R11 = [
    1.0,    0.0,    0.0,    0.0,
    0.0,    cos30,  -0.5,   0.0,
    0.0,    0.5,    cos30,  0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Make the object 2 times bigger
  // moltiplicazione per il fattore lungo l'asse desiderato

  var S11 = [
    2.0,    0.0,    0.0,    0.0,
    0.0,    2.0,    0.0,    0.0,
    0.0,    0.0,    2.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Make the object 2 times longer on the z axis, and half on the other axis

  var S22 = [
    0.5,    0.0,    0.0,    0.0,
    0.0,    0.5,    0.0,    0.0,
    0.0,    0.0,    2.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Mirror over the y axis
  // moltiplicazione per -1 lungo l'asse scelto

  var S33 = [
    -1.0,    0.0,    0.0,    0.0,
    0.0,    1.0,    0.0,    0.0,
    0.0,    0.0,    1.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Flatten over the x axis
  // moltiplicazione per 0

  var S44 = [
    0.0,    0.0,    0.0,    0.0,
    0.0,    1.0,    0.0,    0.0,
    0.0,    0.0,    1.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  // Make a shear along the Y axis, with a factor of 1 along the z axis
  // somma dello shear lungo l'asse voluto per la coordinata voluta

  var H11 = [
    1.0,    0.0,    0.0,    0.0,
    0.0,    1.0,    0.0,    0.0,
    0.0,    1.0,    1.0,    0.0,
    0.0,    0.0,    0.0,    1.0,
  ];

  return [T11, R11, S11, S22, S33, S44, H11];
}
