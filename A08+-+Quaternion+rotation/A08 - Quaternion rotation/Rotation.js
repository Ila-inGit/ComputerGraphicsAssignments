// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

//import { Quaternion } from "./lib/quaternion.min";

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

//parametri globali cambiati di volta in volta dalla funzione this.makeRotQuat()

var Pitch = 0;
var Yaw = 0;
var Roll = 0;
var quat = Quaternion(0, 0, 0, 0);

function updateWorld(rvx, rvy, rvz) {

	this.euToquat(rvz, rvy, rvx);

	//i could only use the rotation matrix as it has no traslation nor scaling 
	// the world matrix == rotation matrix
	var out = utils.MakeWorld(0, 0, 0, Yaw, Pitch, Roll, 1);

	return out;
}

function euToquat(yaw, pitch, roll) {

	// trasformazione in radianti
	yawRad = (Math.PI / 180) * yaw;
	pitchRad = (Math.PI / 180) * pitch;
	rollRad = (Math.PI / 180) * roll;

	cy = Math.cos(yawRad * 0.5);
	sy = Math.sin(yawRad * 0.5);
	cp = Math.cos(pitchRad * 0.5);
	sp = Math.sin(pitchRad * 0.5);
	cr = Math.cos(rollRad * 0.5);
	sr = Math.sin(rollRad * 0.5);


	//new quaternion. i could use quat.mul(yawRad,...)

	// var newquat = Quaternion.fromEuler(yawRad,pitchRad,rollRad, order= "ZXY" );
	// quat = newquat.mul(quat);
	// quat = quat.toMatrix4();

	quat.w = cr * cp * cy - sr * sp * sy;
	quat.x = sr * cp * cy - cr * sp * sy;
	quat.y = cr * sp * cy - sr * cp * sy;
	quat.z = cr * cp * sy - sr * sp * cy;

	this.makeRotQuat();

}

// funzione per ritornare da quaternion a matrice world calcolando Yaw-Pitch-Roll

function makeRotQuat() {
	var rotMatrix = quat.toMatrix4();

	xaxis = [rotMatrix[0], rotMatrix[4], rotMatrix[8]];
	yaxis = [rotMatrix[1], rotMatrix[5], rotMatrix[9]];
	zaxis = [rotMatrix[2], rotMatrix[6], rotMatrix[10]];

	R11 = rotMatrix[10]; R12 = rotMatrix[8]; R13 = rotMatrix[9];
	R21 = rotMatrix[2]; R22 = rotMatrix[0]; R23 = rotMatrix[1];
	R31 = rotMatrix[6]; R32 = rotMatrix[4]; R33 = rotMatrix[5];

	if ((R31 < 1) && (R31 > -1)) {
		theta = -Math.asin(R31);
		phi = Math.atan2(R32 / Math.cos(theta), R33 / Math.cos(theta));
		psi = Math.atan2(R21 / Math.cos(theta), R11 / Math.cos(theta));

	} else {
		phi = 0;
		if (R31 <= -1) {
			theta = Math.PI / 2;
			psi = phi + Math.atan2(R12, R13);
		} else {
			theta = -Math.PI / 2;
			psi = Math.atan2(-R12, -R13) - phi;
		}
	}
	Pitch = Pitch + (theta / Math.PI * 180);
	Roll = Roll + (phi / Math.PI * 180);
	Yaw =  Yaw + (psi / Math.PI * 180);
}
