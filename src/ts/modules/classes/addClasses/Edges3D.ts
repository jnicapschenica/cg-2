import { Vertice3D } from "./Vertices3D.js";

export class Edge2D {
    private first: Vertice3D;
    private second: Vertice3D;
    private third: Vertice3D;
    private edge:number;

    constructor(first:Vertice3D, second:Vertice3D, third:Vertice3D, flag:number) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.edge = flag;
    }
}
