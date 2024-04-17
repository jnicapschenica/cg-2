import { Matrix } from "./addClasses/Matrix.js";
import { Vector } from "./addClasses/Vector.js";

export class Camera3D {
    private X0s: number;
    private Y0s: number;
    private X0v: number;
    private Y0v: number;
    private Z0v: number;
    private W: number;
    private H: number;
    private p: number;
    private N: Vector;
    private T: Vector;
    private F: number;
    private D: number;

    constructor(W: number, H: number) {
        this.X0v = 0;
        this.Y0v = 0;
        this.Z0v = 0;

        this.W = W;
        this.H = H;
        this.p = 100;

        this.X0s = this.normalizedToScreen(this.X0v, this.Y0v)[0];
        this.Y0s = this.normalizedToScreen(this.X0v, this.Y0v)[1];

        this.N = new Vector(3);
        this.N.fillVector(1, 0.1);
        this.N.fillVector(2, 0.7);
        this.N.fillVector(3, 1);

        this.T = new Vector(3);
        this.T.fillVector(1, 0);
        this.T.fillVector(2, 1);
        this.T.fillVector(3, 0);

        this.F = 10;

        this.D = 20;

        const obj = document.getElementById("c1") as HTMLCanvasElement;
        obj.width = W;
        obj.height = H;

        //this.drawCells()
        this.drawAxes();
        // this.drawArrows();
    }

    get getN() {
        return this.N
    }

    get getBorders() {
        const X = new Matrix(4, 0);
        const x = new Vector(4);
        x.fillVector(1, 2000)
        X.fillByVector(x)
        X.multiplyMatrixMatrix(this.worldToNormalized(), X)

        const Y = new Matrix(4, 0);
        const y = new Vector(4);
        y.fillVector(2, 2000)
        Y.fillByVector(y)
        Y.multiplyMatrixMatrix(this.worldToNormalized(), Y)

        const Z = new Matrix(4, 0);
        const z = new Vector(4);
        z.fillVector(3, 2000)
        Z.fillByVector(z)
        Z.multiplyMatrixMatrix(this.worldToNormalized(), Z)

        return [X, Y, Z]
    }

    get getBackBorders() {
        const X = new Matrix(4, 0);
        const x = new Vector(4);
        x.fillVector(1, -2000)
        X.fillByVector(x)
        X.multiplyMatrixMatrix(this.worldToNormalized(), X)

        const Y = new Matrix(4, 0);
        const y = new Vector(4);
        y.fillVector(2, -2000)
        Y.fillByVector(y)
        Y.multiplyMatrixMatrix(this.worldToNormalized(), Y)

        const Z = new Matrix(4, 0);
        const z = new Vector(4);
        z.fillVector(3, -2000)
        Z.fillByVector(z)
        Z.multiplyMatrixMatrix(this.worldToNormalized(), Z)

        return [X, Y, Z]
    }

    drawAxes() {
        this.drawAxisX();
        this.drawAxisY();
        this.drawAxisZ();

        this.drawAxis_X();
        this.drawAxis_Y();
        this.drawAxis_Z();
    }

    drawAxisX() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, this.X0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'red';

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBorders[0].getElement(0, 0), this.getBorders[0].getElement(1, 0))[0], this.normalizedToScreen(this.getBorders[0].getElement(0, 0), this.getBorders[0].getElement(1, 0))[1]);
            ctx.stroke();

        }
    }

    drawAxisY() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, 0);
        help.fillByElement(2, 1, this.Y0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'green';

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBorders[1].getElement(0, 0), this.getBorders[1].getElement(1, 0))[0], this.normalizedToScreen(this.getBorders[1].getElement(0, 0), this.getBorders[1].getElement(1, 0))[1]);

            ctx.stroke();

        }
    }

    drawAxisZ() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, 0);
        help.fillByElement(3, 1, this.Z0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'blue';

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBorders[2].getElement(0, 0), this.getBorders[2].getElement(1, 0))[0], this.normalizedToScreen(this.getBorders[2].getElement(0, 0), this.getBorders[2].getElement(1, 0))[1]);

            ctx.stroke();

        }
    }

    drawAxis_X() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, this.X0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'red';
            ctx.setLineDash([5, 3]);

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBackBorders[0].getElement(0, 0), this.getBackBorders[0].getElement(1, 0))[0], this.normalizedToScreen(this.getBackBorders[0].getElement(0, 0), this.getBackBorders[0].getElement(1, 0))[1]);
            ctx.stroke();

        }
    }

    drawAxis_Y() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, 0);
        help.fillByElement(2, 1, this.Y0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'green';

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBackBorders[1].getElement(0, 0), this.getBackBorders[1].getElement(1, 0))[0], this.normalizedToScreen(this.getBackBorders[1].getElement(0, 0), this.getBackBorders[1].getElement(1, 0))[1]);

            ctx.stroke();

        }
    }

    drawAxis_Z() {
        const help = new Matrix(4, 1);
        help.fillByElement(1, 1, 0);
        help.fillByElement(3, 1, this.Z0v);
        help.fillByElement(4, 1, 1);
        help.multiplyMatrixMatrix(this.worldToNormalized(), help)
        help.normalize()

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = 'blue';

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
            ctx.lineTo(this.normalizedToScreen(this.getBackBorders[2].getElement(0, 0), this.getBackBorders[2].getElement(1, 0))[0], this.normalizedToScreen(this.getBackBorders[2].getElement(0, 0), this.getBackBorders[2].getElement(1, 0))[1]);

            ctx.stroke();

            ctx.setLineDash([]);
        }
    }

    drawCellsXY() {
        const help = new Matrix(4, 1);

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = '#DDDDDD';

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, i);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, 2000);
                help.fillByElement(2, 1, i);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, i);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, i);
                help.fillByElement(2, 1, 2000);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }
        }
    }

    drawCellsXZ() {
        const help = new Matrix(4, 1);

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = '#DDDDDD';

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, i);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, 2000);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, i);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, i);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, i);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, 2000);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }
        }
    }

    drawCellsYZ() {
        const help = new Matrix(4, 1);

        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = '#DDDDDD';

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, 0);
                help.fillByElement(3, 1, i);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, 2000);
                help.fillByElement(3, 1, i);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }

            for (let i = 1; i < 2000; i++) {
                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, i);
                help.fillByElement(3, 1, 0);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)

                ctx.beginPath();
                ctx.moveTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);

                help.fillByElement(1, 1, 0);
                help.fillByElement(2, 1, i);
                help.fillByElement(3, 1, 2000);
                help.fillByElement(4, 1, 1);

                help.multiplyMatrixMatrix(this.worldToNormalized(), help)
                ctx.lineTo(this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[0], this.normalizedToScreen(help.getElement(0, 0), help.getElement(1, 0))[1]);
                ctx.stroke()
            }
        }
    }

    drawCells() {
        this.drawCellsXY();
        this.drawCellsYZ();
        this.drawCellsXZ();
    }

    drawDot(x: number, y: number) {
        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = "black";
            ctx.fillStyle = "black";

            ctx.beginPath();
            ctx.ellipse(this.normalizedToScreen(x, y)[0],
                this.normalizedToScreen(x, y)[1],
                2, 2, 0, 0, 2 * Math.PI)

            ctx.fill();
        }
    }

    drawEdge(x1: number, y1: number, x2: number, y2: number, color: string) {
        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(x1, y1)[0], this.normalizedToScreen(x1, y1)[1]);
            ctx.lineTo(this.normalizedToScreen(x2, y2)[0], this.normalizedToScreen(x2, y2)[1]);
            ctx.stroke();
        }
    }

    drawFace(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.fillStyle = "white";

            ctx.beginPath();
            ctx.moveTo(this.normalizedToScreen(x1, y1)[0], this.normalizedToScreen(x1, y1)[1]);
            ctx.lineTo(this.normalizedToScreen(x2, y2)[0], this.normalizedToScreen(x2, y2)[1]);
            ctx.lineTo(this.normalizedToScreen(x3, y3)[0], this.normalizedToScreen(x3, y3)[1]);
            ctx.closePath()

            ctx.fill();
        }
    }

    screenToWorld_2D(x_screen: number, y_screen: number) {
        let x_world: number;
        let y_world: number;

        x_world = (x_screen - this.X0s + 0.5) / this.p;
        y_world = -(y_screen - this.Y0s + 0.5) / this.p;

        return [x_world, y_world];
    }

    clearCanvas() {
        const obj = document.getElementById("c1") as HTMLCanvasElement;

        if (obj.getContext) {
            const ctx: CanvasRenderingContext2D = obj.getContext("2d");

            ctx.clearRect(0, 0, this.W, this.H);
        }

        //this.drawCells();
        this.drawAxes();
        // this.drawArrows();
    }

    reset() {
        this.X0v = 0;
        this.Y0v = 0;
        this.Z0v = 0;

        this.X0s = this.W / 2;
        this.Y0s = this.H / 2;

        this.N.fillVector(1, 0.1);
        this.N.fillVector(2, 0.7);
        this.N.fillVector(3, 1);

        this.T.fillVector(1, 0);
        this.T.fillVector(2, 1);
        this.T.fillVector(3, 0);

        this.F = 10;
        this.D = 20;
    }

    basis() {
        const i = new Vector(3);
        const j = new Vector(3);
        const k = new Vector(3);

        k.normalize(this.N, this.N.norm());

        const TN = new Vector(3);
        TN.cross(this.T, this.N);

        i.normalize(TN, TN.norm());

        j.cross(k, i);

        return [i, j, k];
    }

    worldToView() {
        const [i, j, k] = this.basis()

        //let x0 = 0, y0 = 0, z0 = 0;

        const S = new Matrix(4, 4);

        S.fillByElement(1, 1, i.getElement(0));
        S.fillByElement(1, 2, i.getElement(1));
        S.fillByElement(1, 3, i.getElement(2));
        S.fillByElement(2, 1, j.getElement(0));
        S.fillByElement(2, 2, j.getElement(1));
        S.fillByElement(2, 3, j.getElement(2));
        S.fillByElement(3, 1, k.getElement(0));
        S.fillByElement(3, 2, k.getElement(1));
        S.fillByElement(3, 3, k.getElement(2));
        // S.fillByElement(1, 4, -(i.getElement(0) * x0 + i.getElement(1) * y0 + i.getElement(2) * z0));
        // S.fillByElement(2, 4, -(j.getElement(0) * x0 + j.getElement(1) * y0 + j.getElement(2) * z0));
        // S.fillByElement(3, 4, -(k.getElement(0) * x0 + k.getElement(1) * y0 + k.getElement(2) * z0));
        S.fillByElement(1, 4, -(i.getElement(0) * this.X0v + i.getElement(1) * this.Y0v + i.getElement(2) * this.Z0v));
        S.fillByElement(2, 4, -(j.getElement(0) * this.X0v + j.getElement(1) * this.Y0v + j.getElement(2) * this.Z0v));
        S.fillByElement(3, 4, -(k.getElement(0) * this.X0v + k.getElement(1) * this.Y0v + k.getElement(2) * this.Z0v));

        return S;
    }

    viewToNormalized(L: number, R: number, B: number, T: number) {
        const S = new Matrix(4, 4);

        S.fillByElement(1, 1, 2 / (R - L));
        S.fillByElement(1, 3, (L + R) / (R - L) / this.F);
        S.fillByElement(1, 4, -(L + R) / (R - L));
        S.fillByElement(2, 2, 2 / (T - B));
        S.fillByElement(2, 3, (B + T) / (T - B) / this.F);
        S.fillByElement(2, 4, -(B + T) / (T - B));
        S.fillByElement(3, 3, -(2 * this.F + this.D) / this.D / this.F);
        S.fillByElement(3, 4, -1);
        S.fillByElement(4, 3, -1 / this.F);

        return S;
    }

    normalizedToScreen(x_norm: number, y_norm: number) {
        let x_screen: number;
        let y_screen: number;

        x_screen = (1 + x_norm) * this.W / 2
        y_screen = (1 - y_norm) * this.H / 2

        return [x_screen, y_screen];
    }

    worldToNormalized() {
        const [L, R, B, T] = this.XYtoLRBT();

        const S = new Matrix(4, 4)
        S.multiplyMatrixMatrix(this.viewToNormalized(L, R, B, T), this.worldToView());

        return S;
    }

    XYtoLRBT() {
        const L = this.screenToWorld_2D(0, this.Y0s)[0]
        const R = this.screenToWorld_2D(this.W, this.Y0s)[0]
        const B = this.screenToWorld_2D(this.X0s, this.H)[1]
        const T = this.screenToWorld_2D(this.X0s, 0)[1]

        return [L, R, B, T]
    }

    changeView(deltaN: Vector, deltaT: Vector, deltaF: number) {
        this.N.sum(deltaN);
        this.T.sum(deltaT);
        if (this.F + 2 * deltaF > 0) this.F += deltaF;
    }

    projectView(N: Vector, T: Vector, F: number) {
        this.N = N;
        this.T = T;
        this.F = F;
    }

    scale(k: number) {
        if (this.p + k * 5 > 0)
            this.p += k * 5;
    }

    translate(deltaX: number, deltaY: number, deltaZ: number) {
        this.X0v += deltaX;
        this.Y0v += deltaY;
        this.Z0v += deltaZ;

        // let O = new Matrix(4,1)
        // O.fillByElement(1,1,this.X0v)
        // O.fillByElement(2,1,this.Y0v)
        // O.fillByElement(3,1,this.Z0v)
        // O.fillByElement(4,1,1)

        // O.multiplyMatrixMatrix(this.worldToNormalized(),O)

        // this.X0s = this.normalizedToScreen(O.getElement(0,0), O.getElement(1,0))[0];
        // this.Y0s = this.normalizedToScreen(O.getElement(0,0), O.getElement(1,0))[1];
    }

    normal(first: Vector, second: Vector, third: Vector) {
        const v1 = new Vector(3)
        const v2 = new Vector(3)

        v1.fillVector(1, second.getElement(0) - first.getElement(0))
        v1.fillVector(2, second.getElement(1) - first.getElement(1))
        v1.fillVector(3, 0)

        v2.fillVector(1, third.getElement(0) - first.getElement(0))
        v2.fillVector(2, third.getElement(1) - first.getElement(1))
        v2.fillVector(3, 0)

        const normal = new Vector(3)
        normal.cross(v1, v2)

        let len:number
        len=normal.norm()
        
        const normalized = new Vector(3)
        normalized.normalize(normal, len)

        return normalized
        //return (normal)
    }
}

