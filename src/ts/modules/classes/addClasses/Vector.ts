import { Matrix } from "./Matrix.js";

export class Vector {
    private vector: Array<number>;
    private N: number;

    constructor(N: number) {
        this.N = N;

        let A: Array<number> = new Array(this.N);

        for (let i = 0; i < A.length - 1; i++)
            A[i] = 0;
        A[A.length - 1] = 1;

        this.vector = A;
    }

    get getN() {
        return this.N;
    }

    getElement(i: number) {
        return this.vector[i];
    }

    printVector() {
        let str = '';

        for (let i = 0; i < this.N; i++)
            str += this.vector[i] + " ";

        console.log(str);
    }

    fillVector(i: number, value: number) {
        this.vector[i - 1] = value;
    }

    multiplyMatrixVector(A: Matrix, B: Vector) {
        for (let i = 0; i < this.N; i++) {
            this.vector[i] = 0;

            for (let j = 0; j < this.N; j++) {
                this.vector[i] += A.getElement(i, j) * B.getElement(j);
            }
        }
    }

    cross(a: Vector, b: Vector) {
        this.fillVector(1, a.getElement(1) * b.getElement(2) - a.getElement(2) * b.getElement(1));
        this.fillVector(2, a.getElement(2) * b.getElement(0) - a.getElement(0) * b.getElement(2));
        this.fillVector(3, a.getElement(0) * b.getElement(1) - a.getElement(1) * b.getElement(0));
    }

    dot(b: Vector) {
        return this.vector[0] * b.getElement(0) +this.vector[1] * b.getElement(1) + this.vector[2] * b.getElement(2)
    }

    norm() {
        return Math.sqrt(this.getElement(0) * this.getElement(0) + this.getElement(1) * this.getElement(1) + this.getElement(2) * this.getElement(2));
    }

    normalize(a: Vector, p: number) {
        for (let i = 0; i < a.getN; i++)
            this.vector[i] = a.getElement(i) / p;
    }

    sum(a: Vector) {
        for (let i = 0; i < this.N; i++)
            this.vector[i] += a.getElement(i);
    }

    diff(a: Vector, b:Vector) {
        for (let i = 0; i < this.N; i++)
            this.vector[i] = a.getElement(i)-b.getElement(i);
    }

    null() {
        for (let i = 0; i < this.N; i++)
            this.vector[i] = 0;
    }

    getVectorByVertices(A:Vector, B:Vector) {
        for (let i = 0; i < this.N; i++)
            this.vector[i] = A.getElement(i)-B.getElement(i)
    }

    fill(a:number[]) {
        for (let i = 0; i < this.N; i++)
            this.vector[i] = a[i]
    }
}