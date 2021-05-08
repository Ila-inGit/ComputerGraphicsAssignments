function move() {
  // Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.

  R1 = utils.MakeRotateZMatrix(45);
  R2 = utils.MakeRotateYMatrix(15);
  R3 = utils.MakeRotateXMatrix(60);
  R4 = utils.MakeTranslateMatrix(0, 1, -1);

  R11 = utils.invertMatrix(R1);
  R22 = utils.invertMatrix(R2);
  R44 = utils.invertMatrix(R4);

  R4R2 = utils.multiplyMatrices(R4, R2);
  R4R2R1 = utils.multiplyMatrices(R4R2, R1);
  R4R2R1R3 = utils.multiplyMatrices(R4R2R1, R3);

  R4R2R1R3R11 = utils.multiplyMatrices(R4R2R1R3, R11);
  R4R2R1R3R11R22 = utils.multiplyMatrices(R4R2R1R3R11, R22);
  ROTATE = utils.multiplyMatrices(R4R2R1R3R11R22, R44);

  // Half the size of the object along a line that bisects the positive x and y axes on the xy-plane.

  S1 = utils.MakeRotateZMatrix(45);
  S3 = utils.MakeScaleNuMatrix(0.5, 1, 1);

  S11 = utils.invertMatrix(S1);

  S1S3 = utils.multiplyMatrices(S1, S3);
  DIVIDE = utils.multiplyMatrices(S1S3, S11);

  // Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane

  M1 = utils.MakeTranslateMatrix(1, 1, 1);
  M2 = utils.MakeRotateXMatrix(15);

  M3 = utils.MakeScaleNuMatrix(1, -1, 1);

  M11 = utils.invertMatrix(M1);
  M22 = utils.invertMatrix(M2);

  M1M2 = utils.multiplyMatrices(M1, M2);
  M1M2M3 = utils.multiplyMatrices(M1M2, M3);
  M1M2M3M22 = utils.multiplyMatrices(M1M2M3, M22);
  MIRROR = utils.multiplyMatrices(M1M2M3M22, M11);

  // Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.

  I1 = utils.MakeRotateYMatrix(30);
  I2 = utils.MakeTranslateMatrix(0, 0, 5);
  I3 = utils.MakeScaleMatrix(3);

  I3I2 = utils.multiplyMatrices(I3, I2);
  I3I2I1 = utils.multiplyMatrices(I3I2, I1);
  INVERSE = utils.invertMatrix(I3I2I1);

  return [ROTATE, DIVIDE, MIRROR, INVERSE];
}
