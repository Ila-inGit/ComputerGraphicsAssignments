function drawSceneTree(S) {
  var i;
  // disegno il palmo della mano
  var mat0 = calc(S, 0);
  draw(0, mat0);
  // ciclo per tutte le dita
  for (i = 1; i < 6; i++) {
    var mat = calc(S, i);
    // collego le prime falangi al palmo
    mat = utils.multiplyMatrices(mat0, mat);
    draw(i, mat);
    //collego le seconde falangi alle prime
    res = utils.multiplyMatrices(mat, calc(S, S[i][6]));
    draw(S[i][6], res);
    // controllo che non sia il pollice e che abbia un altra falange e nel caso la collego
    if (S[S[i][6]][6] != -1) {
      res = utils.multiplyMatrices(res, calc(S, S[S[i][6]][6]));
      draw(S[S[i][6]][6], res);
    }
  }
}

function calc(S, i) {
  return utils.multiplyMatrices(
    utils.multiplyMatrices(
      utils.multiplyMatrices(
        utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
        utils.MakeRotateZMatrix(S[i][5])
      ),
      utils.MakeRotateXMatrix(S[i][3])
    ),
    utils.MakeRotateYMatrix(S[i][4])
  );
}
