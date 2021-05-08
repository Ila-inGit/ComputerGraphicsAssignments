function axonometry() {
  // ASSONOMETRIC PROJECTION
  // Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
  // ISOMETRICA ==> TUTTI GLI ASSI A 120 GRADI TRA LORO

  A1 = makeProjMatr(50, 1.78, 1, 101);
  A2 = utils.MakeRotateXMatrix(35.26);
  A3 = utils.MakeRotateYMatrix(45);

  A1A2 = utils.multiplyMatrices(A1, A2);
  A1A2A3 = utils.multiplyMatrices(A1A2, A3);

  // Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
  //  DIMETRICA ==> GLI ANGOLI X-Y E Z-Y SONO UGUALI TRA LORO MENTRE E' DIVERSO SOLO QUQLLO TRA X-Z

  B1 = makeProjMatr(50, 1.78, 1, 101);
  B2 = utils.MakeRotateXMatrix(20);
  B3 = utils.MakeRotateYMatrix(45);

  B1B2 = utils.multiplyMatrices(B1, B2);
  B1B2B3 = utils.multiplyMatrices(B1B2, B3);

  // Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
  // TRIMETRICA ==> GLI ANGOLI TRA GLI ASSI SONO TUTTI VARIABILI

  C1 = makeProjMatr(50, 1.78, 1, 101);
  C2 = utils.MakeRotateXMatrix(-30);
  C3 = utils.MakeRotateYMatrix(30);

  C1C2 = utils.multiplyMatrices(C1, C2);
  C1C2C3 = utils.multiplyMatrices(C1C2, C3);

  // Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
  // CAVALIERA ==> L'ASSE Z FAI UNO SHEAR E UNA ROTAZIONE CON ALPHA = 45° E RHO = 1

  O1 = makeProjMatr(50, 1.78, 1, 101);
  cos45 = Math.cos(utils.degToRad(45));
  sen45 = Math.sin(utils.degToRad(45));
  O2 = utils.MakeShearZMatrix(-cos45, -sen45);

  O1O2 = utils.multiplyMatrices(O1, O2);

  // Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
  // CABINET ==> L'ASSE Z FAI UNO SHEAR E UNA ROTAZIONE CON ALPHA = 45° E RHO = 0.5
  P1 = makeProjMatr(50, 1.78, 1, 101);
  P2 = utils.MakeShearZMatrix(-0.5 * cos45, -0.5 * sen45);

  P1P2 = utils.multiplyMatrices(P1, P2);

  return [A1A2A3, B1B2B3, C1C2C3, O1O2, P1P2];
}

// FUNZIONE DI SUPPORTO

function makeProjMatr(w, a, n, f) {
  mat = utils.identityMatrix();
  mat[0] = 1 / w;
  mat[5] = a / w;
  mat[10] = -2 / (f - n);
  mat[11] = -(f + n) / (f - n);

  return mat;
}
