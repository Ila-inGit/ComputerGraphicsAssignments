function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	A1 = makePersp(utils.degToRad(70), 1.78, 101, 1);
    

	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
    A2 = makePersp(utils.degToRad(105), 1.78, 101, 1);
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
    A3 = makePersp(utils.degToRad(40), 1.78, 101, 1);

	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

    O1 = makePersp(utils.degToRad(90), 1.333 , 101, 1);

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

   O2 = makePerspSecondVersion(0,-1.2,0.3375,-0.3375,101,1);
	
	return [A1, A2, A3, O1, O2];
}

function makePersp(FOV, a, f, n){
    mat = utils.identityMatrix();

    mat[0] = 1 / (a * Math.tan(FOV/2));
    mat[5] = 1 / ( Math.tan(FOV/2));
    mat[10] = (f+n)/(n-f);
    mat[11] = (2*f*n)/(n-f);
    mat[14] = -1;
    mat[15] = 0;
    return mat;
}

function makePerspSecondVersion(r,l,t,b,f,n){
    mat = utils.identityMatrix();

    mat[0] = 2*n / (r-l);
	mat[2] = (r+l) / (r-l);
    mat[5] = 2*n / (t-b);
	mat[6] = (t+b) / (t-b);
    mat[10] = (f+n)/(n-f);
    mat[11] = (2*f*n)/(n-f);
    mat[14] = -1;
    mat[15] = 0;
    return mat;
}








