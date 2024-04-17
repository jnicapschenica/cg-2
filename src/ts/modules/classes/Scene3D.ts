import { Camera3D } from "./Camera3D.js";
import { Model3D } from "./Model3D.js";
import { AffineTransformation } from "./addClasses/AffineTransformation3D.js";
import { Matrix } from "./addClasses/Matrix.js";
import { Vector } from "./addClasses/Vector.js";

export class Scene {
    private Camera: Camera3D;
    private Model: Model3D;
    private AffinedModel: Model3D;
    private AccumulatedAffine: AffineTransformation;

    constructor(width: number, height: number) {
        this.Camera = new Camera3D(width, height);
        this.Model = new Model3D();
        this.AffinedModel = new Model3D();
        this.AccumulatedAffine = new AffineTransformation(4, 4);
    }

    get getCameraMethods() {
        return this.Camera;
    }

    get getModel() {
        return this.Model;
    }

    get getAffinedModel() {
        return this.AffinedModel;
    }

    get getAccumulatedAffine() {
        return this.AccumulatedAffine;
    }

    Render(model: Model3D, k: number = -1, l: number = -1) {
        const normalizedModel = this.normalizeModel(model);

        this.Camera.clearCanvas();

        for (let m = 0; m < model.getFaces.getRows; m++) {
            const first = new Vector(3);
            first.fill(normalizedModel.getVertice(normalizedModel.getFaces.getElement(m, 0) - 1))
            const second = new Vector(3);
            second.fill(normalizedModel.getVertice(normalizedModel.getFaces.getElement(m, 1) - 1))
            const third = new Vector(3);
            third.fill(normalizedModel.getVertice(normalizedModel.getFaces.getElement(m, 2) - 1))

            if (this.Camera.normal(first, second, third).getElement(2) > 0) {
                for (let i = 0; i < model.getFaces.getCols; i++)
                    for (let j = i + 1; j < model.getFaces.getCols; j++) {
                        const first_local = model.getFaces.getElement(m, i) - 1
                        const second_local = model.getFaces.getElement(m, j) - 1

                        if (model.getEdges.getElement(first_local, second_local) === 1)
                            if (first_local === k && second_local === l)
                                this.Camera.drawEdge(normalizedModel.getVertices.getElement(0, first_local), normalizedModel.getVertices.getElement(1, first_local), normalizedModel.getVertices.getElement(0, second_local), normalizedModel.getVertices.getElement(1, second_local), "red");
                            else this.Camera.drawEdge(normalizedModel.getVertices.getElement(0, first_local), normalizedModel.getVertices.getElement(1, first_local), normalizedModel.getVertices.getElement(0, second_local), normalizedModel.getVertices.getElement(1, second_local), "black");

                        this.Camera.drawFace(first.getElement(0), first.getElement(1), second.getElement(0), second.getElement(1), third.getElement(0), third.getElement(1))

                        this.Camera.drawDot(normalizedModel.getVertices.getElement(0, first_local), normalizedModel.getVertices.getElement(1, first_local));
                        this.Camera.drawDot(normalizedModel.getVertices.getElement(0, second_local), normalizedModel.getVertices.getElement(1, second_local));
                    }
            }
        }
    }

    normalizeModel(model: Model3D) {
        const normalizedModel = new Model3D()
        const normalizedVertices = new Matrix(4, model.getN)

        normalizedVertices.multiplyMatrixMatrix(this.getCameraMethods.worldToNormalized(), model.getVertices);
        normalizedVertices.normalize()

        normalizedModel.copyModel(normalizedVertices, model.getEdges, model.getFaces, model.getN)
        return normalizedModel;
    }
}