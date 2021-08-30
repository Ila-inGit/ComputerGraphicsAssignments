function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	
    A1 = utils.MakeTranslateMatrix(0,0,-3);
    A2 = utils.MakeRotateYMatrix(90);
    
    A1A2 = utils.multiplyMatrices(A1,A2);

    
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	B1 = utils.MakeTranslateMatrix(0,2,0);
    B2 = utils.MakeRotateXMatrix(60);
    B3 = utils.MakeScaleMatrix(0.1);

    B1B2 = utils.multiplyMatrices(B1,B2);
    B1B2B3 = utils.multiplyMatrices(B1B2,B3);
               

	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45

    C1 = utils.MakeRotateYMatrix(30);
    C2 = utils.MakeRotateZMatrix(45);
    C1C2 = utils.multiplyMatrices(C1,C2);           

	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider

    D1 = utils.MakeTranslateMatrix(2,0,2);
    D2 = utils.MakeRotateYMatrix(180);
    D3 = utils.MakeScaleNuMatrix(2,1,1)

    D1D2 = utils.multiplyMatrices(D1,D2);
    D1D2D3 = utils.multiplyMatrices(D1D2,D3);

    // Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)

    E1 = utils.MakeTranslateMatrix(1,-1,2.5);
    E2 = utils.MakeRotateYMatrix(-30);
    E3 = utils.MakeRotateXMatrix(45);
    E4 = utils.MakeRotateZMatrix(-15);
    E5 = utils.MakeScaleNuMatrix(0.8,0.75,1.2);

    FINAL = utils.multiplyMatrices(
                utils.multiplyMatrices(
                    utils.multiplyMatrices(
                        utils.multiplyMatrices(E1,E2), E3), E4), E5);    

	return [A1A2, B1B2B3, C1C2, D1D2D3, FINAL];
}