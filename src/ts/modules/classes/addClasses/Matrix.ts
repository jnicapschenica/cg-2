import { Vector } from "./Vector.js";

export class Matrix {
    private matrix: Array<Array<number>>;
    private rows: number;
    private columns: number;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.columns = cols;

        const A: Array<Array<number>> = new Array(this.rows);

        for (let i = 0; i < this.rows; i++) {
            A[i] = new Array(this.columns);
        }

        for (let i = 0; i < A.length; i++)
            for (let j = 0; j < A[i].length; j++)
                if (i === j) A[i][j] = 1;
                else A[i][j] = 0;

        this.matrix = A;
    }

    getElement(i: number, j: number) {
        return this.matrix[i][j];
    }

    get getRows() {
        return this.rows
    }

    get getCols() {
        return this.columns
    }

    printMatrix() {
        let str = '';

        for (let i = 0; i < this.rows; i++) {
            str = '';

            for (let j = 0; j < this.columns; j++)
                str += this.matrix[i][j] + " ";

            console.log(str);
        }
    }

    fillByElement(i: number, j: number, value: number) {
        this.matrix[i - 1][j - 1] = value;
    }

    fillByVector(vector: Vector) {
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i].push(vector.getElement(i));
        }
        this.columns++;
    }

    addRow(vector: Vector) {
        const help: Array<number> = [];

        for (let i = 0; i < vector.getN; i++) {
            help.push(vector.getElement(i));
        }
        this.matrix.push(help)
        this.rows++;
    }

    addToQuad(vector: Vector) {
        this.addRow(vector);
        this.fillByVector(vector);
        this.fillByElement(this.rows, this.columns, 1);
    }

    multiplyMatrixMatrix(A: Matrix, B: Matrix) {
        const C: Array<Array<number>> = new Array(A.getRows);

        for (let i = 0; i < A.getRows; i++) {
            C[i] = new Array(B.getCols);
        }

        for (let i = 0; i < A.getRows; i++) {
            for (let j = 0; j < B.getCols; j++) {
                C[i][j] = 0;

                for (let k = 0; k < this.rows; k++) {
                    C[i][j] += A.getElement(i, k) * B.getElement(k, j);
                }
            }
        }

        for (let i = 0; i < A.getRows; i++) {
            for (let j = 0; j < B.getCols; j++) {
                this.fillByElement(i + 1, j + 1, C[i][j]);
            }
        }
    }

    deleteColumn(j: number) {
        for (let i = 0; i < this.rows; i++)
            this.matrix[i].splice(j, 1);

        this.columns--;
    }

    deleteRow(i: number) {
        this.matrix.splice(i, 1);
        this.rows--;
    }

    deleteMatrix() {
        this.matrix.splice(0, this.rows);
        this.rows = 0;
        this.columns = 0;
    }

    deleteCols() {
        for (let i = 0; i < this.rows; i++)
            this.matrix[i].splice(0, this.columns);
        this.columns = 0;
    }

    clearMatrix() {
        const A: Array<Array<number>> = new Array(this.rows);

        for (let i = 0; i < this.rows; i++) {
            A[i] = new Array(this.columns);
        }

        for (let i = 0; i < A.length; i++)
            for (let j = 0; j < A[i].length; j++)
                if (i === j) A[i][j] = 1;
                else A[i][j] = 0;

        this.matrix = A;
    }

    cube() {
        const A: Array<Array<number>> = new Array(4);
        for (let i = 0; i < 4; i++) {
            A[i] = new Array(8);
        }

        for (let i = 0; i < 8; i++)
            A[3][i] = 1;

        A[0][0] = 0
        A[0][1] = 0
        A[0][2] = 0
        A[0][3] = 0
        A[0][4] = 1
        A[0][5] = 1
        A[0][6] = 1
        A[0][7] = 1

        A[1][0] = 0
        A[1][1] = 0
        A[1][2] = 1
        A[1][3] = 1
        A[1][4] = 0
        A[1][5] = 0
        A[1][6] = 1
        A[1][7] = 1

        A[2][0] = 0
        A[2][1] = 1
        A[2][2] = 0
        A[2][3] = 1
        A[2][4] = 0
        A[2][5] = 1
        A[2][6] = 0
        A[2][7] = 1

        this.matrix = A;
        this.rows = 4;
        this.columns = 8
    }

    cubeEdges() {
        const A: Array<Array<number>> = new Array(8);
        for (let i = 0; i < 8; i++) {
            A[i] = new Array(8);
        }

        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++)
                A[i][j] = 0
        for (let i = 0; i < 8; i++)
            A[i][i] = 1;

        A[0][1] = A[1][0] = A[0][2] = A[2][0] = A[0][4] = A[4][0] = 1;
        A[7][5] = A[5][7] = A[7][6] = A[6][7] = A[5][4] = A[4][5] = 1;
        A[6][4] = A[4][6] = A[1][3] = A[3][1] = A[3][7] = A[7][3] = 1
        A[6][2] = A[2][6] = A[2][3] = A[3][2] = A[1][5] = A[5][1] = 1
        A[0][6] = A[6][0] = 1
        A[4][7] = A[7][4] = 1
        A[5][3] = A[3][5] = 1
        A[1][2] = A[2][1] = 1
        A[2][7] = A[7][2] = 1
        A[1][4] = A[4][1] = 1

        this.matrix = A;
        this.rows = 8;
        this.columns = 8
    }

    cubeFaces() {
        const A: Array<Array<number>> = new Array(8);
        for (let i = 0; i < 12; i++) {
            A[i] = new Array(3);
        }

        A[0] = [1, 3,7]
        A[1] = [1, 7,5]
        A[2] = [5,7,8]
        A[3] = [5,8,6]
        A[4] = [6,8,4]
        A[5] = [6,4,2]
        A[6] = [2,4,3]
        A[7] = [2,3,1]
        A[8] = [3,8,7]
        A[9] = [3,4,8]
        A[10] = [2,1,5]
        A[11] = [2,5,6]

        this.matrix = A;
        this.rows = 12;
        this.columns = 3;
    }

    normalize() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.columns; j++)
                this.matrix[i][j] /= this.matrix[this.rows - 1][j]
    }
}
