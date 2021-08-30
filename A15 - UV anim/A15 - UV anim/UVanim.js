// tutte in funzione dell'istante t in cui viene richiamata la funzione
function Anim1(t) {
  // moving car
  //scale x 1/4 as it is divided by for main blocks
  var A1 = utils.MakeScaleMatrix(0.25);
  var A2 = utils.MakeTranslateMatrix(t, 2, 0);
  var out = utils.multiplyMatrices(A1, A2);

  return out;
}

function Anim2(t) {
  // bumping code
  var B1 = utils.MakeScaleMatrix(0.25);

  if (t < 0.5) {
    var B2 = utils.MakeTranslateMatrix(3, 3 - t, 0);
  } else {
    var B2 = utils.MakeTranslateMatrix(3, 2 + t, 0);
  }

  var out = utils.multiplyMatrices(B1, B2);
  return out;
}

function Anim3(t) {
  // rotating fan

  var C1 = utils.MakeTranslateMatrix(0.62, 0.88, 0);
  var C2 = utils.MakeRotateYMatrix(90);

  var C3 = utils.MakeScaleMatrix(0.25);
  // fattore 3 per aumentare la velocità di rotazione
  var C4 = utils.MakeRotateXMatrix(360 * t * 3);

  var C22 = utils.invertMatrix(C2);
  var C11 = utils.MakeTranslateMatrix(-0.5, -0.5, 0);

  var out = utils.multiplyMatrices(C1, C2);
  out = utils.multiplyMatrices(out, C3);
  out = utils.multiplyMatrices(out, C4);
  out = utils.multiplyMatrices(out, C22);
  out = utils.multiplyMatrices(out, C11);
  return out;
}

function Anim4(t) {
  // buring flame

  var D1 = utils.MakeScaleMatrix(1 / 16);

  var o = Math.floor(32 * t) % 12;
  //più preciso sarà il numero con la virgola e meno approssimazione nella posizione della fiamma ci sarà
  o = 0.01 + o * 0.0833333333333333333333333333;
  var v = Math.floor(24 * t) % 6;
  v = 0.01 + (5 - v) * 0.0833333333333333333333333333;
  var out = utils.MakeTranslateMatrix(o, v, 0);

  out = utils.multiplyMatrices(out, D1);
  return out;
}
