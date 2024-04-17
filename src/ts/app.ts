import { AffineTransformation } from "./modules/classes/addClasses/AffineTransformation3D.js";
import { Matrix } from "./modules/classes/addClasses/Matrix.js";
import { Vector } from "./modules/classes/addClasses/Vector.js";
import { Scene } from "./modules/classes/Scene3D.js";

const WIDTH = 800;
const HEIGHT = 500;

const scene = new Scene(WIDTH, HEIGHT);

let helpVertice = new Vector(4);

let affineTranslation = new AffineTransformation(4, 4);

let affineRotation = new AffineTransformation(4, 4);

let affineMirrorOX = new AffineTransformation(4, 4);
affineMirrorOX.mirror(1, -1, -1);

let affineMirrorOY = new AffineTransformation(4, 4);
affineMirrorOY.mirror(-1, 1, -1);

let affineMirrorOZ = new AffineTransformation(4, 4);
affineMirrorOZ.mirror(-1, -1, 1);

let affineMirrorXY = new AffineTransformation(4, 4);
affineMirrorXY.mirror(1, 1, -1);

let affineMirrorYZ = new AffineTransformation(4, 4);
affineMirrorYZ.mirror(-1, 1, 1);

let affineMirrorZX = new AffineTransformation(4, 4);
affineMirrorZX.mirror(1, -1, 1);

let affineMirrorXYZ = new AffineTransformation(4, 4);
affineMirrorXYZ.mirror(-1, -1, -1);

let affineScale = new AffineTransformation(4, 4);

let queue = new Array<AffineTransformation>;

const CUBE = new Matrix(4, 4)
CUBE.cube();

const CUBEEDGES = new Matrix(8, 8)
CUBEEDGES.cubeEdges();

const CUBEFACES = new Matrix(12, 3)
CUBEFACES.cubeFaces()

scene.getModel.copyModel(CUBE, CUBEEDGES, CUBEFACES, 8)
scene.getAffinedModel.copyModel(CUBE, CUBEEDGES, CUBEFACES, 8)

scene.Render(scene.getModel);

const deltaN = new Vector(3);
deltaN.fillVector(3, 0)
const deltaT = new Vector(3);
deltaT.fillVector(3, 0)

document.getElementById("increase_button_X").onclick = function () {
    deltaN.fillVector(1, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("decrease_button_X").onclick = function () {
    deltaN.fillVector(1, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("increase_button_Y").onclick = function () {
    deltaN.fillVector(2, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("decrease_button_Y").onclick = function () {
    deltaN.fillVector(2, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("increase_button_Z").onclick = function () {
    deltaN.fillVector(3, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("decrease_button_Z").onclick = function () {
    deltaN.fillVector(3, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaN.null()
}

document.getElementById("increase_button_OX").onclick = function () {
    deltaT.fillVector(1, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("decrease_button_OX").onclick = function () {
    deltaT.fillVector(1, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("increase_button_OY").onclick = function () {
    deltaT.fillVector(2, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("decrease_button_OY").onclick = function () {
    deltaT.fillVector(2, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("increase_button_OZ").onclick = function () {
    deltaT.fillVector(3, 0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("decrease_button_OZ").onclick = function () {
    deltaT.fillVector(3, -0.05)

    scene.getCameraMethods.changeView(deltaN, deltaT, 0)
    scene.Render(scene.getAffinedModel);

    deltaT.null()
}

document.getElementById("increase_button_F").onclick = function () {
    scene.getCameraMethods.changeView(deltaN, deltaT, -0.5)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("decrease_button_F").onclick = function () {
    scene.getCameraMethods.changeView(deltaN, deltaT, 0.5)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("increase_button_s").onclick = function () {
    scene.getCameraMethods.scale(1)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("decrease_button_s").onclick = function () {
    scene.getCameraMethods.scale(-1)
    scene.Render(scene.getAffinedModel);
}

const N = new Vector(3);
N.fillVector(3, 0)
const T = new Vector(3);
T.fillVector(3, 0)

document.getElementById("project_button_x").onclick = function () {
    N.fillVector(1, 1)
    N.fillVector(2, 0)
    N.fillVector(3, 0)

    T.fillVector(1, 0)
    T.fillVector(2, 1)
    T.fillVector(3, 0)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("project_button_-x").onclick = function () {
    N.fillVector(1, -1)
    N.fillVector(2, 0)
    N.fillVector(3, 0)

    T.fillVector(1, 0)
    T.fillVector(2, 1)
    T.fillVector(3, 0)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("project_button_y").onclick = function () {
    N.fillVector(1, 0)
    N.fillVector(2, 1)
    N.fillVector(3, 0)

    T.fillVector(1, 0)
    T.fillVector(2, 0)
    T.fillVector(3, -1)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("project_button_-y").onclick = function () {
    N.fillVector(1, 0)
    N.fillVector(2, -1)
    N.fillVector(3, 0)

    T.fillVector(1, 0)
    T.fillVector(2, 0)
    T.fillVector(3, -1)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("project_button_z").onclick = function () {
    N.fillVector(1, 0)
    N.fillVector(2, 0)
    N.fillVector(3, 1)

    T.fillVector(1, 0)
    T.fillVector(2, 1)
    T.fillVector(3, 0)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("project_button_-z").onclick = function () {
    N.fillVector(1, 0)
    N.fillVector(2, 0)
    N.fillVector(3, -1)

    T.fillVector(1, 0)
    T.fillVector(2, 1)
    T.fillVector(3, 0)

    scene.getCameraMethods.projectView(N, T, 10000)
    scene.Render(scene.getAffinedModel);
}

document.getElementById("push_button").onclick = function () {
    let X = document.getElementById("push_X") as HTMLInputElement;
    helpVertice.fillVector(1, +X.value);
    let Y = document.getElementById("push_Y") as HTMLInputElement;
    helpVertice.fillVector(2, +Y.value);
    let Z = document.getElementById("push_Z") as HTMLInputElement;
    helpVertice.fillVector(3, +Z.value);

    let flag: boolean = false;

    for (let j = 0; j < scene.getModel.getVertices.getCols; j++)
        if (scene.getModel.getVertices.getElement(0, j) === +X.value)
            if (scene.getModel.getVertices.getElement(1, j) === +Y.value)
                if (scene.getModel.getVertices.getElement(2, j) === +Z.value)
                    flag = true;
    if (!flag) {
        scene.getModel.addVerticeToModel(helpVertice);
        scene.getAffinedModel.addVerticeToModel(helpVertice);
    }

    let form = document.getElementById('push_form') as HTMLFormElement;
    form.reset();

    scene.Render(scene.getModel);
}

document.getElementById("pop_button").onclick = function () {
    let X = document.getElementById("push_X") as HTMLInputElement;
    helpVertice.fillVector(1, +X.value);
    let Y = document.getElementById("push_Y") as HTMLInputElement;
    helpVertice.fillVector(2, +Y.value);
    let Z = document.getElementById("push_Z") as HTMLInputElement;
    helpVertice.fillVector(3, +Z.value);

    const oldC = scene.getModel.countEdges();

    let flag: boolean = false;

    for (let j = 0; j < scene.getModel.getVertices.getCols; j++)
        if (scene.getModel.getVertices.getElement(0, j) === +X.value)
            if (scene.getModel.getVertices.getElement(1, j) === +Y.value)
                if (scene.getModel.getVertices.getElement(2, j) === +Z.value)
                    flag = true;
    if (flag) {
        scene.getModel.deleteVertice(helpVertice);
        scene.getAffinedModel.copyModel(scene.getModel.getVertices, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);
    }

    let form = document.getElementById('push_form') as HTMLFormElement;
    form.reset();

    const newC = scene.getModel.countEdges();

    let options = document.querySelectorAll("#rotate_edge_select option")
    for (let i = 0; i < oldC - newC; i++) {
        rotate_edge_select.removeChild(options[options.length - 1]);
        options = document.querySelectorAll("#rotate_edge_select option")
    }

    scene.Render(scene.getModel);
}

document.getElementById("connect_button").onclick = function () {
    let first = new Vector(4);
    let second = new Vector(4);

    let first_index: number;
    let second_index: number;

    let first_flag: boolean = false;
    let second_flag: boolean = false;

    let X_1 = document.getElementById("connect_X_1") as HTMLInputElement;
    first.fillVector(1, +X_1.value);
    let Y_1 = document.getElementById("connect_Y_1") as HTMLInputElement;
    first.fillVector(2, +Y_1.value);
    let Z_1 = document.getElementById("connect_Z_1") as HTMLInputElement;
    first.fillVector(3, +Z_1.value);

    let X_2 = document.getElementById("connect_X_2") as HTMLInputElement;
    second.fillVector(1, +X_2.value);
    let Y_2 = document.getElementById("connect_Y_2") as HTMLInputElement;
    second.fillVector(2, +Y_2.value);
    let Z_2 = document.getElementById("connect_Z_2") as HTMLInputElement;
    second.fillVector(3, +Z_2.value);


    for (let j = 0; j < scene.getModel.getVertices.getCols; j++)
        if (scene.getModel.getVertices.getElement(0, j) === +X_1.value)
            if (scene.getModel.getVertices.getElement(1, j) === +Y_1.value)
                if (scene.getModel.getVertices.getElement(2, j) === +Z_1.value) {
                    first_index = j;
                    first_flag = true;
                }
    if (!first_flag) {
        scene.getModel.addVerticeToModel(first);
        first_index = scene.getModel.getN - 1;
    }

    for (let j = 0; j < scene.getModel.getVertices.getCols; j++)
        if (scene.getModel.getVertices.getElement(0, j) === +X_2.value)
            if (scene.getModel.getVertices.getElement(1, j) === +Y_2.value)
                if (scene.getModel.getVertices.getElement(2, j) === +Z_2.value) {
                    second_index = j;
                    second_flag = true;
                }
    if (!second_flag) {
        scene.getModel.addVerticeToModel(second);
        second_index = scene.getModel.getN - 1;
    }

    scene.getModel.addEdgeToModel(first_index, second_index);
    scene.getAffinedModel.copyModel(scene.getModel.getVertices, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    const option = document.createElement("option")
    option.innerHTML = "" + scene.getAffinedModel.countEdges()
    rotate_edge_select.appendChild(option)

    let form = document.getElementById('connect_form') as HTMLFormElement;
    form.reset();

    scene.Render(scene.getAffinedModel);
}

document.getElementById("disconnect_button").onclick = function () {
    let first = new Vector(4);
    let second = new Vector(4);

    let X_1 = document.getElementById("connect_X_1") as HTMLInputElement;
    first.fillVector(1, +X_1.value);
    let Y_1 = document.getElementById("connect_Y_1") as HTMLInputElement;
    first.fillVector(2, +Y_1.value);
    let Z_1 = document.getElementById("connect_Z_1") as HTMLInputElement;
    first.fillVector(3, +Z_1.value);

    let X_2 = document.getElementById("connect_X_2") as HTMLInputElement;
    second.fillVector(1, +X_2.value);
    let Y_2 = document.getElementById("connect_Y_2") as HTMLInputElement;
    second.fillVector(2, +Y_2.value);
    let Z_2 = document.getElementById("connect_Z_2") as HTMLInputElement;
    second.fillVector(3, +Z_2.value);

    scene.getModel.deleteEdgeByVertices(first, second);
    scene.getAffinedModel.copyModel(scene.getModel.getVertices, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    const options = document.querySelectorAll("#rotate_edge_select option")
    rotate_edge_select.removeChild(options[options.length - 1]);

    let form = document.getElementById('connect_form') as HTMLFormElement;
    form.reset();

    scene.Render(scene.getAffinedModel);
}

document.getElementById("clear_button").onclick = function () {
    scene.getModel.deleteModel();
    scene.getAffinedModel.deleteModel();
    scene.getAccumulatedAffine.reset();

    const options = document.querySelectorAll("#rotate_edge_select option")
    for (let option of options)
        rotate_edge_select.removeChild(option);

    scene.Render(scene.getAffinedModel);
}

document.getElementById("reset_affine_button").onclick = function () {
    scene.getAffinedModel.copyModel(scene.getModel.getVertices, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);
    scene.getAccumulatedAffine.reset();
    scene.Render(scene.getAffinedModel);
}

document.getElementById("reset_button").onclick = function () {
    scene.getCameraMethods.reset();
    scene.Render(scene.getAffinedModel);
}

document.getElementById("translation").onchange = function () {
    let translation = document.getElementById("translation") as HTMLInputElement;
    if (translation.checked) {
        let X = document.getElementById("translation_X") as HTMLInputElement;
        let Y = document.getElementById("translation_Y") as HTMLInputElement;
        let Z = document.getElementById("translation_Z") as HTMLInputElement;

        affineTranslation.translate(+X.value, +Y.value, +Z.value);

        queue.unshift(affineTranslation);
    }
    else queue.splice(queue.indexOf(affineTranslation), 1);
}

document.getElementById("scale").onchange = function () {
    let scale = document.getElementById("scale") as HTMLInputElement;
    if (scale.checked) {
        let Kx = document.getElementById("scale_X") as HTMLInputElement;
        let Ky = document.getElementById("scale_Y") as HTMLInputElement;
        let Kz = document.getElementById("scale_Z") as HTMLInputElement;

        let kX: number;
        let kY: number;
        let kZ: number;

        if (+Kx.value === 0) kX = 1; else kX = +Kx.value;
        if (+Ky.value === 0) kY = 1; else kY = +Ky.value;
        if (+Kz.value === 0) kZ = 1; else kZ = +Kz.value;

        affineScale.scale(kX, kY, kZ);

        queue.unshift(affineScale);
    }
    else queue.splice(queue.indexOf(affineScale), 1);
}

const rotate_OX = document.getElementById("rotate_OX") as HTMLInputElement;
const rotate_OY = document.getElementById("rotate_OY") as HTMLInputElement;
const rotate_OZ = document.getElementById("rotate_OZ") as HTMLInputElement;
const rotate_edge = document.getElementById("rotate_edge") as HTMLInputElement;

let rotate: string;

rotate_OX.addEventListener('change', function () {
    if (rotate_OX.checked) {
        rotate_OY.checked = false;
        rotate_OY.disabled = true;
        rotate_OZ.checked = false;
        rotate_OZ.disabled = true;
        rotate_edge.checked = false;
        rotate_edge.disabled = true;
        rotate = "OX";
    } else {
        rotate_OY.disabled = false;
        rotate_OZ.disabled = false;
        rotate_edge.disabled = false;
    }
})

rotate_OY.addEventListener('change', function () {
    if (rotate_OY.checked) {
        rotate_OX.checked = false;
        rotate_OX.disabled = true;
        rotate_OZ.checked = false;
        rotate_OZ.disabled = true;
        rotate_edge.checked = false;
        rotate_edge.disabled = true;
        rotate = "OY";
    } else {
        rotate_OX.disabled = false;
        rotate_OZ.disabled = false;
        rotate_edge.disabled = false;
    }
})

rotate_OZ.addEventListener('change', function () {
    if (rotate_OZ.checked) {
        rotate_OY.checked = false;
        rotate_OY.disabled = true;
        rotate_OX.checked = false;
        rotate_OX.disabled = true;
        rotate_edge.checked = false;
        rotate_edge.disabled = true;
        rotate = "OZ";
    } else {
        rotate_OY.disabled = false;
        rotate_OX.disabled = false;
        rotate_edge.disabled = false;
    }
})

let edge: number;
const rotate_edge_select = document.getElementById("rotate_edge_select") as HTMLSelectElement;

function findEdge() {
    edge = +rotate_edge_select.value;
    const [first, second] = scene.getAffinedModel.findEdge(edge)
    return [first, second]
}

function colorEdge() {
    scene.Render(scene.getAffinedModel, ...findEdge())
}

rotate_edge.addEventListener('change', function () {
    if (rotate_edge.checked) {
        colorEdge()
        rotate_edge_select.addEventListener('change', colorEdge)

        rotate_OY.checked = false;
        rotate_OY.disabled = true;
        rotate_OX.checked = false;
        rotate_OX.disabled = true;
        rotate_OZ.checked = false;
        rotate_OZ.disabled = true;
        rotate = "edge";
    } else {
        rotate_edge_select.removeEventListener('change', colorEdge)
        scene.Render(scene.getAffinedModel)
        rotate_OY.disabled = false;
        rotate_OX.disabled = false;
        rotate_OZ.disabled = false;
    }
})

function complicatedRotation(phi: number) {
    const [X1, Y1, Z1] = scene.getAffinedModel.getVertice(findEdge()[0])
    const [X2, Y2, Z2] = scene.getAffinedModel.getVertice(findEdge()[1])

    const help = new Vector(4);
    help.fillVector(1, X2 - X1)
    help.fillVector(2, Y2 - Y1)
    help.fillVector(3, Z2 - Z1)
    help.fillVector(4, 1)

    const space = new Matrix(4, 0);
    space.fillByVector(help)
    //space.fillByElement(4,4,1)

    help.fillVector(3, 0)

    let length = help.norm()

    //if (isNaN(length)) length=0;

    let cosY: number;
    let sinY: number;

    if (length === 0) {
        cosY = Math.cos(0);
        sinY = Math.sin(0)
    }
    else {
        sinY = help.getElement(0) / length;
        cosY = help.getElement(1) / length;
    }

    let R1 = new AffineTransformation(4, 4);
    let _R1 = new AffineTransformation(4, 4);

    R1.rotateOZdots(sinY, cosY)
    _R1.rotateOZdots(-1 * sinY, cosY)

    space.multiplyMatrixMatrix(R1, space)

    help.fillVector(1, space.getElement(0, 0))
    help.fillVector(2, space.getElement(1, 0))
    help.fillVector(3, space.getElement(2, 0))

    length = help.norm()

    //if (isNaN(length)) length=0;

    let cosZ: number;
    let sinZ: number;

    if (length === 0) {
        cosZ = Math.cos(0);
        sinZ = Math.sin(0)
    }
    else {
        cosZ = help.getElement(1) / length;
        sinZ = help.getElement(2) / length;
    }

    let R2 = new AffineTransformation(4, 4);
    let _R2 = new AffineTransformation(4, 4);

    R2.rotateOXdots(sinZ, cosZ)
    _R2.rotateOXdots(-1 * sinZ, cosZ)

    let R = new AffineTransformation(4, 4);
    R.rotateOY(phi);

    let _TR = new AffineTransformation(4, 4);
    let TR = new AffineTransformation(4, 4);

    TR.translate(X1, Y1, Z1);
    _TR.translate(-1 * X1, -1 * Y1, -1 * Z1);

    const complicatedRotation = new AffineTransformation(4, 4)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, TR)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, R1)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, R2)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, R)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, _R2)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, _R1)

    complicatedRotation.multiplyMatrixMatrix(complicatedRotation, _TR)

    return complicatedRotation
}

document.getElementById("rotate").onchange = function () {
    let rotation = document.getElementById("rotate") as HTMLInputElement;
    if (rotation.checked) {
        let phi = document.getElementById("rotate_phi") as HTMLInputElement;

        switch (rotate) {
            case "OX":
                affineRotation.rotateOX(+phi.value);
                break;
            case "OY":
                affineRotation.rotateOY(+phi.value);
                break;
            case "OZ":
                affineRotation.rotateOZ(+phi.value);
                break;
            case "edge":
                affineRotation = complicatedRotation(+phi.value)
                break;
            default:
                console.log("error:(");
        }

        queue.unshift(affineRotation);
    }
    
    else queue.splice(queue.indexOf(affineRotation), 1);
}

document.getElementById("mirror_OX").onchange = function () {
    let mirror = document.getElementById("mirror_OX") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorOX);
    else queue.splice(queue.indexOf(affineMirrorOX), 1);
}

document.getElementById("mirror_OY").onchange = function () {
    let mirror = document.getElementById("mirror_OY") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorOY);
    else queue.splice(queue.indexOf(affineMirrorOY), 1);
}

document.getElementById("mirror_OZ").onchange = function () {
    let mirror = document.getElementById("mirror_OZ") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorOZ);
    else queue.splice(queue.indexOf(affineMirrorOZ), 1);
}

document.getElementById("mirror_XY").onchange = function () {
    let mirror = document.getElementById("mirror_XY") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorXY);
    else queue.splice(queue.indexOf(affineMirrorXY), 1);
}

document.getElementById("mirror_YZ").onchange = function () {
    let mirror = document.getElementById("mirror_YZ") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorYZ);
    else queue.splice(queue.indexOf(affineMirrorYZ), 1);
}

document.getElementById("mirror_ZX").onchange = function () {
    let mirror = document.getElementById("mirror_ZX") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorZX);
    else queue.splice(queue.indexOf(affineMirrorZX), 1);
}

document.getElementById("mirror_XYZ").onchange = function () {
    let mirror = document.getElementById("mirror_XYZ") as HTMLInputElement;
    if (mirror.checked)
        queue.unshift(affineMirrorXYZ);
    else queue.splice(queue.indexOf(affineMirrorXYZ), 1);
}

document.getElementById("affine_button").onclick = function () {
    let help = new Matrix(4, 4);

    queue.forEach(transformation => {
        help.multiplyMatrixMatrix(help, transformation);
    })

    scene.getAccumulatedAffine.multiplyMatrixMatrix(help, scene.getAccumulatedAffine)

    let help1 = new Matrix(4, scene.getAffinedModel.getN);

    help1.multiplyMatrixMatrix(scene.getAccumulatedAffine, scene.getModel.getVertices);

    scene.getAffinedModel.copyModel(help1, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    queue.splice(0, queue.length);

    let forms = document.querySelectorAll('form') as NodeListOf<HTMLFormElement>;
    forms.forEach(form => form.reset());

    rotate_OX.disabled = false;
    rotate_OY.disabled = false;
    rotate_OZ.disabled = false;
    rotate_edge.disabled = false;

    affineRotation.reset()

    scene.Render(scene.getAffinedModel);
}

document.getElementById("translation_button").onclick = function () {
    let X = document.getElementById("translation_X") as HTMLInputElement;
    let Y = document.getElementById("translation_Y") as HTMLInputElement;
    let Z = document.getElementById("translation_Z") as HTMLInputElement;

    affineTranslation.translate(+X.value, +Y.value, +Z.value);

    scene.getAccumulatedAffine.multiplyMatrixMatrix(affineTranslation, scene.getAccumulatedAffine)

    let help1 = new Matrix(4, scene.getAffinedModel.getN);

    help1.multiplyMatrixMatrix(scene.getAccumulatedAffine, scene.getModel.getVertices);

    scene.getAffinedModel.copyModel(help1, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    affineRotation.reset()

    scene.Render(scene.getAffinedModel);
}

document.getElementById("scale_button").onclick = function () {
    let Kx = document.getElementById("scale_X") as HTMLInputElement;
    let Ky = document.getElementById("scale_Y") as HTMLInputElement;
    let Kz = document.getElementById("scale_Z") as HTMLInputElement;

    let kX: number;
    let kY: number;
    let kZ: number;

    if (+Kx.value === 0) kX = 1; else kX = +Kx.value;
    if (+Ky.value === 0) kY = 1; else kY = +Ky.value;
    if (+Kz.value === 0) kZ = 1; else kZ = +Kz.value;

    affineScale.scale(kX, kY, kZ);

    scene.getAccumulatedAffine.multiplyMatrixMatrix(affineScale, scene.getAccumulatedAffine)

    let help1 = new Matrix(4, scene.getAffinedModel.getN);

    help1.multiplyMatrixMatrix(scene.getAccumulatedAffine, scene.getModel.getVertices);

    scene.getAffinedModel.copyModel(help1, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    affineRotation.reset()

    scene.Render(scene.getAffinedModel);
}

document.getElementById("rotate_button").onclick = function () {
    let phi = document.getElementById("rotate_phi") as HTMLInputElement;

    switch (rotate) {
        case "OX":
            affineRotation.rotateOX(+phi.value);
            break;
        case "OY":
            affineRotation.rotateOY(+phi.value);
            break;
        case "OZ":
            affineRotation.rotateOZ(+phi.value);
            break;
        case "edge":
            affineRotation = complicatedRotation(+phi.value)
            affineRotation.printMatrix()
            break;
        default:
            console.log("error:(");
    }

    scene.getAccumulatedAffine.multiplyMatrixMatrix(affineRotation, scene.getAccumulatedAffine)

    let help1 = new Matrix(4, scene.getModel.getN);

    help1.multiplyMatrixMatrix(scene.getAccumulatedAffine, scene.getModel.getVertices);

    scene.getAffinedModel.copyModel(help1, scene.getModel.getEdges, scene.getModel.getFaces, scene.getModel.getN);

    affineRotation.reset()

    scene.Render(scene.getAffinedModel);
}