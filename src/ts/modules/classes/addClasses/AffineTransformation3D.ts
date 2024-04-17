import { Matrix } from "./Matrix.js";

export class AffineTransformation extends Matrix{

    translate(x: number, y: number, z:number) {
        this.fillByElement(1, 4, x);
        this.fillByElement(2, 4, y);
        this.fillByElement(3, 4, z);
    }

    rotateOX(phi: number) {
        this.fillByElement(2, 2, Math.cos(phi* Math.PI / 180));
        this.fillByElement(2, 3, Math.sin(-1 * phi* Math.PI / 180));
        this.fillByElement(3, 2, Math.sin(phi* Math.PI / 180));
        this.fillByElement(3, 3, Math.cos(phi* Math.PI / 180));
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    rotateOY(phi: number) {
        this.fillByElement(1, 1, Math.cos(phi* Math.PI / 180));
        this.fillByElement(1, 3, Math.sin(phi* Math.PI / 180));
        this.fillByElement(3, 1, Math.sin(-1* phi* Math.PI / 180));
        this.fillByElement(3, 3, Math.cos(phi* Math.PI / 180));
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    rotateOZ(phi: number) {
        this.fillByElement(1, 1, Math.cos(phi* Math.PI / 180));
        this.fillByElement(1, 2, Math.sin(-1 * phi* Math.PI / 180));
        this.fillByElement(2, 1, Math.sin(phi* Math.PI / 180));
        this.fillByElement(2, 2, Math.cos(phi* Math.PI / 180));
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    rotateOXdots(sin:number, cos:number) {
        this.fillByElement(2, 2, cos);
        this.fillByElement(2, 3, -1*sin);
        this.fillByElement(3, 2, sin);
        this.fillByElement(3, 3, cos);
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    rotateOYdots(sin:number, cos:number) {
        this.fillByElement(1, 1, cos);
        this.fillByElement(1, 3, sin);
        this.fillByElement(3, 1, -1*sin);
        this.fillByElement(3, 3, cos);
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    rotateOZdots(sin:number, cos:number) {
        this.fillByElement(1, 1, cos);
        this.fillByElement(1, 2, -1*sin);
        this.fillByElement(2, 1, sin);
        this.fillByElement(2, 2, cos);
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 4, 0);
    }

    scale(Kx: number, Ky: number, Kz) {
        this.fillByElement(1, 1, Kx);
        this.fillByElement(2, 2, Ky);
        this.fillByElement(3, 3, Kz);
    }

    mirror(Mx: number, My: number, Mz:number) {
        this.fillByElement(1, 1, Mx);
        this.fillByElement(2, 2, My);
        this.fillByElement(3, 3, Mz);
    }

    reset() {
        this.fillByElement(1, 1, 1);
        this.fillByElement(1, 2, 0);
        this.fillByElement(1, 3, 0);
        this.fillByElement(1, 4, 0);
        this.fillByElement(2, 1, 0);
        this.fillByElement(2, 2, 1);
        this.fillByElement(2, 3, 0);
        this.fillByElement(2, 4, 0);
        this.fillByElement(3, 1, 0);
        this.fillByElement(3, 2, 0);
        this.fillByElement(3, 3, 1);
        this.fillByElement(3, 4, 0);
        this.fillByElement(4, 1, 0);
        this.fillByElement(4, 2, 0);
        this.fillByElement(4, 3, 0);
        this.fillByElement(4, 4, 1);
    }
}
