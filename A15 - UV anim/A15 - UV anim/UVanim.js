function Anim1(t) {
  // buring flame

  var D1 = utils.MakeScaleMatrix(0.0625);

  var o = 1 + (Math.floor(12 * t) % 12);
  var v = 1 + (Math.floor(6 * t) % 6);
  var out = utils.MakeTranslateMatrix(o, v, 0);

  out = utils.multiplyMatrices(out, D1);
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
  //var C1 = utils.MakeScaleMatrix(0.25);
  //var C2 = utils.MakeTranslateMatrix(2, 3, 0);

  var C1 = utils.MakeTranslateMatrix(0.62, 0.88, 0);
  var C2 = utils.MakeRotateYMatrix(90);

  var C3 = utils.MakeScaleMatrix(0.25);
  var C4 = utils.MakeRotateXMatrix(360 * t);

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
  // moving car
  //scale x 1/4 as it is divided by for main blocks
  var A1 = utils.MakeScaleMatrix(0.25);
  var A2 = utils.MakeTranslateMatrix(t, 2, 0);
  var out = utils.multiplyMatrices(A1, A2);
  return out;
}
