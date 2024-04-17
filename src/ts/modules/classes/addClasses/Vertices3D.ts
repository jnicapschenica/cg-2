import { Homogeneous3D } from "./HomogeneousCoordinates3D";

export class Vertice3D {
    protected X: number;
    protected Y: number;
    protected Z: number;

    constructor(X:number, Y:number, Z:number) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }

    homogeneousTo3D(vector:Homogeneous3D) {
        this.X = vector.getX/vector.getU;

    }
}
