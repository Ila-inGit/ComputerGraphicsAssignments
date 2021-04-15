function shaders() {
  // The shader can find the required informations in the following variables:

  //vec3 fs_pos;		// Position of the point in 3D space
  //
  //float SpecShine;		// specular coefficient for both Blinn and Phong
  //float DToonTh;		// Threshold for diffuse in a toon shader
  //float SToonTh;		// Threshold for specular in a toon shader
  //
  //vec4 diffColor;		// diffuse color
  //vec4 ambColor;		// material ambient color
  //vec4 specularColor;	// specular color
  //vec4 emit;			// emitted color
  //
  //vec3 normalVec;		// direction of the normal vecotr to the surface
  //vec3 eyedirVec;		// looking direction
  //
  //
  // Lighr directions can be found into:
  //vec3 lightDirA;
  //vec3 lightDirB;
  //vec3 lightDirC;
  //
  //and intensity is returned into:
  //
  //vec4 lightColorA;
  //vec4 lightColorB;
  //vec4 lightColorC;
  //
  // ambient light color contribution is returned into
  //
  // vec4 ambientLight;
  //
  // The final color computed from the shader should be inserted into variable
  //
  // vec4 out_color;

  // Lambert diffuse and Ambient material. No specular or emisssion.
  var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

  // Lambert diffuse and Blinn specular. No ambient and emission.
  //DONE
  var S2 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;

	vec4 BspecA = pow(clamp(dot(normalVec, normalize(lightDirA + eyedirVec) ), 0.0, 1.0),SpecShine) * lightColorA;
	vec4 BspecB = pow(clamp(dot(normalVec, normalize(lightDirB + eyedirVec) ), 0.0, 1.0),SpecShine) * lightColorB;
	vec4 BspecC = pow(clamp(dot(normalVec, normalize(lightDirC + eyedirVec) ), 0.0, 1.0),SpecShine) * lightColorC;


	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + 
							specularColor *(BspecA + BspecB + BspecC) , 0.0, 1.0);
`;

  // Ambient and Phong specular. No emssion and no diffuse.
  // non funziona l'ambient...
  var S3 = `

	vec4 PspecA = pow(clamp(dot(eyedirVec, -reflect(lightDirA, normalVec) ), 0.0, 1.0),SpecShine) * lightColorA;
	vec4 PspecB = pow(clamp(dot(eyedirVec, -reflect(lightDirB, normalVec) ), 0.0, 1.0),SpecShine) * lightColorB;
	vec4 PspecC = pow(clamp(dot(eyedirVec, -reflect(lightDirC, normalVec) ), 0.0, 1.0),SpecShine) * lightColorC;

	
	out_color = clamp( specularColor * (PspecA + PspecB + PspecC) + ambientLight * ambColor , 0.0, 1.0);
`;

  // Diffuse, ambient, emission and Phong specular.
  var S4 = `

	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;


	vec4 PspecA = pow(clamp(dot(eyedirVec, -reflect(lightDirA, normalVec) ), 0.0, 1.0),SpecShine) * lightColorA;
	vec4 PspecB = pow(clamp(dot(eyedirVec, -reflect(lightDirB, normalVec) ), 0.0, 1.0),SpecShine) * lightColorB;
	vec4 PspecC = pow(clamp(dot(eyedirVec, -reflect(lightDirC, normalVec) ), 0.0, 1.0),SpecShine) * lightColorC;
	
	out_color = clamp( specularColor * (PspecA + PspecB + PspecC) + diffColor * (LAcontr + LBcontr + LCcontr) + 
							ambientLight * ambColor + emit , 0.0, 1.0);
`;

  // Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
  //float DToonTh;		// Threshold for diffuse in a toon shader
  //float SToonTh;		// Threshold for specular in a toon shader
  var S5 = `
	
	vec4 LAcontr = lightColorA * clamp( sign( dot( lightDirA, normalVec ) - DToonTh ),0.0,1.0);
	vec4 LBcontr = lightColorB * clamp( sign( dot( lightDirB, normalVec ) - DToonTh ),0.0,1.0);
	vec4 LCcontr = lightColorC * clamp( sign( dot( lightDirC, normalVec ) - DToonTh ),0.0,1.0);
	
	vec4 BspecA = lightColorA * 
		clamp( sign ( dot( normalVec, normalize(lightDirA + eyedirVec) ) - SToonTh ), 0.0, 1.0);
				
	vec4 BspecB = lightColorB * 
		clamp( sign ( dot( normalVec, normalize(lightDirB + eyedirVec) ) - SToonTh ), 0.0, 1.0);

	vec4 BspecC = lightColorC *
		clamp( sign ( dot( normalVec, normalize(lightDirC + eyedirVec) ) - SToonTh ), 0.0, 1.0);


	out_color = clamp( specularColor * (BspecA + BspecB + BspecC) + 
			diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor , 0.0, 1.0);
`;

  return [S1, S2, S3, S4, S5];
}
