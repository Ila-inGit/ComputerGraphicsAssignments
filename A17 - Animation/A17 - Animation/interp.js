// import { Quaternion } from "./lib/quaternion.min";

// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
  tx1,ty1,tz1,rx1,ry1,rz1,tx2,ty2,tz2,rx2,ry2,rz2,a
) {
  // tx1, ty1, tz1	-> Initial position
  // rx1, ry1, rz1	-> Initial rotation (in Euler angles)
  // tx2, ty2, tz2	-> Final position
  // rx2, ry2, rz2	-> Final rotation (in Euler angles)
  // a (in 0..1 range)	-> Interpolation coefficient
  //
  // return the interpolated transform matrix with the given position and rotation

  var q1 = Quaternion.fromEuler(
    utils.degToRad(rz1),
    utils.degToRad(rx1),
    utils.degToRad(ry1)
  );
  var q2 = Quaternion.fromEuler(
    utils.degToRad(rz2),
    utils.degToRad(rx2),
    utils.degToRad(ry2)
  );

  q1 = q1.slerp(q2)(a);

  var matFromQuat = q1.toMatrix4();
  
  //interpolzione tra le posizioni iniziali e finali
  var rx = this.lerp(tx1, tx2, a);
  var ry = this.lerp(ty1, ty2, a);
  var rz = this.lerp(tz1, tz2, a);

  var traslMatrix1 = utils.MakeTranslateMatrix(rx, ry, rz);

  var out = utils.multiplyMatrices(traslMatrix1, matFromQuat);
  return out;
}

function lerp(a, b, alpha) {
  return (1 - alpha) * a + alpha * b;
}
