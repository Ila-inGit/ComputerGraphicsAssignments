// import { Quaternion } from "./lib/quaternion.min";

// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
  tx1,
  ty1,
  tz1,
  rx1,
  ry1,
  rz1,
  tx2,
  ty2,
  tz2,
  rx2,
  ry2,
  rz2,
  a
) {
  // tx1, ty1, tz1	-> Initial position
  // rx1, ry1, rz1	-> Initial rotation (in Euler angles)
  // tx2, ty2, tz2	-> Final position
  // rx2, ry2, rz2	-> Final rotation (in Euler angles)
  // a (in 0..1 range)	-> Interpolation coefficient
  //
  // return the interpolated transform matrix with the given position and rotation

  var q1 = Quaternion.fromEuler(rx1, ry1, rz1);
  var q2 = Quaternion.fromEuler(rx2, ry2, rz2);

  q1 = q1.slerp(q2)(a);

  var matFromQuat = q1.toMatrix4();

  var scaleMatrix = utils.MakeScaleMatrix(1);
  var traslMatrix1 = utils.MakeTranslateMatrix(tx1 - tx2, ty1 - ty2, tz1 - tz2);

  var out = this.multiplyMatrices(matFromQuat, scaleMatrix);
  out = this.multiplyMatrices(traslMatrix1, out);
  return out;
}
