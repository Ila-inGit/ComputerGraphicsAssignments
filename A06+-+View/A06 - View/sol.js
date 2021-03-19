function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
    A1 =utils.MakeTranslateMatrix(5,2.5,0);
    A2 = utils.MakeRotateYMatrix(90);
    A3 = utils.MakeRotateXMatrix(-30);
    
    A1A2 = utils.multiplyMatrices(A1,A2);
    A1A2A3 = utils.multiplyMatrices(A1A2,A3);

    A3A2A1 = utils.invertMatrix(A1A2A3);


	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var B2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
    
    B1 =utils.MakeTranslateMatrix(0,-1,-5);
    B2 = utils.MakeRotateYMatrix(170);
    B3 = utils.MakeRotateXMatrix(15);
    B4 = utils.MakeRotateZMatrix(45);
    
    B1B2 = utils.multiplyMatrices(B1,B2);
    B1B2B3 = utils.multiplyMatrices(B1B2,B3);
    B1B2B3B4 = utils.multiplyMatrices(B1B2B3,B4);

    B4B3B2B1 = utils.invertMatrix(B1B2B3B4);           
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var C3 =[1.0,		0.0,		0.0,		0.0,
                0.0,		1.0,		0.0,		0.0,
                0.0,		0.0,		1.0,		0.0,
                0.0,		0.0,		0.0,		1.0];
	 var vc =  [-4, 2, -4] ;
     var va =  [0,0.5,0.5] ;
     var vup =  [0,1,0] ;
    C3 = makeLookAtMatrix(vc,va,vup); 
    C3 = utils.invertMatrix(C3);    
    
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var D4 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
    
    var vc =  [2.57, 0, 0] ;
    var va =  [2.8,0,-1] ;
    var vup =  [1,0,0] ;
    D4 = makeLookAtMatrix(vc,va,vup); 
    D4 = utils.invertMatrix(D4); 


	return [A3A2A1, B4B3B2B1, C3, D4];
}

function makeLookAtMatrix(c, a, up){
    
    vz = utils.normalizeVector3([c[0]-a[0], c[1]-a[1], c[2]-a[2]]);
    vx_temp = utils.crossVector(utils.normalizeVector3(up), vz);
    vx = utils.normalizeVector3(vx_temp);
    vy = utils.crossVector(vz,vx);

    mat =  [vx[0], vy[0], vz[0], c[0],
            vx[1], vy[1], vz[1], c[1], 
            vx[2], vy[2], vz[2], c[2],
            0.0,   0.0,   0.0,  1.0]

    return mat;
}