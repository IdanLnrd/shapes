
const SHAPES_COUNT = 9;
const DEFAULT_SIZE = 300;
const DEFAULT_SCALE = 1;
const DEFAULT_OPACITY = 0.3;
const ANIM_DELAY = 10000;

const getShape = (n: number = -1) => {
    if( 0 <= n && n <= (SHAPES_COUNT - 1) ) {
        return `/shapes/${n}.svg`;
    }
    return `/shapes/base.svg`;
}

const getRandomShape = () => {
    const n = Math.floor(Math.random() * SHAPES_COUNT);
    return getShape(n);
}

const getRandomOffset = (n: number) => {
    const x = Math.floor(Math.random() * n * 2) - n;
    const y = Math.floor(Math.random() * n * 2) - n;
    return [x, y];
}

const transform = () => {
    const [x, y] = getRandomOffset(0); 
    return `translate(${x}px, ${y}px)`;
};

const schema: any = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "motion": {
                "type": "boolean"
            },
            "opacity": {
                "type": "number"
            },
            "scale": {
                "type": "number"
            },
            "label": {
                "type": "string"
            },
            "shape": {
                "type": "integer",
                "minimum": 0,
                "maximum": 8
            }
        }
    }
};

export {
    SHAPES_COUNT,
    DEFAULT_SIZE,
    DEFAULT_SCALE,
    DEFAULT_OPACITY,
    ANIM_DELAY,
    transform,
    getRandomShape,
    getShape,
    getRandomOffset,
    schema
}