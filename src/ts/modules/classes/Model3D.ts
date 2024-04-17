import { Matrix } from "./addClasses/Matrix.js";
import { Vector } from "./addClasses/Vector.js";

export class Model3D {
    private vertices: Matrix;
    private edges: Matrix;
    private faces: Matrix;
    private N: number;

    constructor() {
        this.N = 0;
        this.vertices = new Matrix(4, 0);
        this.edges = new Matrix(0, 0);
        this.faces = new Matrix(0, 3);
    }

    get getN() {
        return this.N;
    }

    get getVertices() {
        return this.vertices;
    }

    get getEdges() {
        return this.edges;
    }

    get getFaces() {
        return this.faces;
    }

    addVerticeToModel(coordinates: Vector) {
        this.N++;
        this.vertices.fillByVector(coordinates);

        const empty = new Vector(this.N);
        empty.fillVector(this.N, 0);
        this.edges.addToQuad(empty);
    }

    addEdgeToModel(i: number, j: number) {
        this.edges.fillByElement(i + 1, j + 1, 1);
        this.edges.fillByElement(j + 1, i + 1, 1);
    }

    copyModel(vertices: Matrix, edges: Matrix, faces: Matrix, N: number) {
        this.vertices = vertices;
        this.edges = edges;
        this.faces = faces;
        this.N = N;
    }

    findVertice(coordinates: Vector) {
        for (let j = 0; j < this.N; j++)
            if (this.vertices.getElement(0, j) === coordinates.getElement(0))
                if (this.vertices.getElement(1, j) === coordinates.getElement(1))
                    if (this.vertices.getElement(2, j) === coordinates.getElement(2))
                        return j;
        return -1;
    }

    deleteEdgeByVertices(first: Vector, second: Vector) {
        const i = this.findVertice(first);
        const j = this.findVertice(second);

        this.edges.fillByElement(i + 1, j + 1, 0);
        this.edges.fillByElement(j + 1, i + 1, 0);
    }

    deleteEdgeByVertice(i: number) {
        this.edges.deleteRow(i);
        this.edges.deleteColumn(i);
    }

    deleteVertice(coordinates: Vector) {
        if (this.findVertice(coordinates) > -1) {
            const i = this.findVertice(coordinates);
            this.vertices.deleteColumn(i);
            this.deleteEdgeByVertice(i);
            this.N--;
        }
    }

    deleteModel() {
        this.vertices.deleteCols();
        this.edges.deleteMatrix();
        this.N = 0;
    }

    findEdge(index: number) {
        let k = 0
        for (let i = 0; i < this.N; i++)
            for (let j = i + 1; j < this.N; j++) {
                if (this.edges.getElement(i, j) === 1) k++;
                if (k === index) return [i, j]
            }
    }

    getVertice(index: number) {
        const X = this.vertices.getElement(0, index);
        const Y = this.vertices.getElement(1, index);
        const Z = this.vertices.getElement(2, index);

        return [X, Y, Z]
    }

    countEdges() {
        let k = 0
        for (let i = 0; i < this.N; i++)
            for (let j = i + 1; j < this.N; j++)
                if (this.edges.getElement(i, j) === 1) k++;
        return k;
    }

    W() {
        const W = new Vector(3);

        let X: number = 0, Y: number = 0, Z: number = 0;

        for (let i = 0; i < this.N; i++) {
            X += this.vertices.getElement(0,i);
            Y += this.vertices.getElement(1,i);
            Z += this.vertices.getElement(2,i);
        }

        W.fillVector(1, X/this.N);
        W.fillVector(2, Y/this.N);
        W.fillVector(3, Z/this.N);

        return W;
    }
}
