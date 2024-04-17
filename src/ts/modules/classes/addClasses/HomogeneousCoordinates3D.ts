import { Vertice3D } from "./Vertices3D";

export class Homogeneous3D extends Vertice3D {
    private U: number;

    constructor(X: number, Y: number, Z: number, U: number) {
        super(X, Y, Z);
        this.U = U;
    }

    get getU() {
        return this.U;
    }

    get getX() {
        return this.X;
    }

    get getY() {
        return this.Y;
    }

    get getZ() {
        return this.Z;
    }
}
