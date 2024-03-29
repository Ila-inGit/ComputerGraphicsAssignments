// “T” for triangles lists
// “S” for triangles strips
// “F” for triangles fans
// “L” for lines lists
// “P” for lines strips
// “O” for line loops

function buildGeometry() {
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[0.0,-4.0,0.0], [3.0,-4.0,0.0], [3.0,0.0,0.0], [5.0,0.0,0.0], 
				 [5.0,2.0,0.0], [3.0,2.0,0.0], [3.0,3.0,0.0], [5.0,3.0,0.0],
				 [5.0,5.0,0.0], [0.0,5.0,0.0]];

	addMesh(vert1, "O", [1.0, 0.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[0.0,-2.0,0.0], [0.0,-5.0, 0.0], [3.0,-2.0,0.0], [5.0,-5.0,0.0],
				 [3.0,0.0,0.0], [5.0, 2.0,0.0],[0.0,0.0,0.0], [2.0,2.0,0.0], [0.0,5.0,0.0],
				 [2.0,3.0,0.0], [5.0,5.0,0.0], [5.0,3.0,0.0],];

	addMesh(vert2, "S", [0.5, 0.0, 1.0]);

	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 = [[0.0,0.0,0.0], [3.0,-4.0, 0.0], [-3.0,-4.0,0.0], [-4.5, 1.5, 0.0], [0.0,5.0,0.0], [4.5,1.5,0.0],
				 [3.0,-4.0, 0.0]];

	addMesh(vert3, "F", [0.95, 1.0, 0.0]);
}