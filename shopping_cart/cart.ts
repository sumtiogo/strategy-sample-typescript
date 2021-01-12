export class Product {
    private readonly _length;
    private readonly _width;
    private readonly _height;
    private readonly _weight;

    get length() {
        return this._length;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get weight() {
        return this._weight;
    }

    constructor(length: number, width: number, height: number, weight: number) {
        this._length = length;
        this._width = width;
        this._height = height;
        this._weight = weight;
    }
}

export class Cart {

    shippingFee(shipper: string, product: Product): number {
        if (shipper === "black cat") {
            if (product.weight > 20) {
                return 500;
            } else {
                return 100 + product.weight * 10;
            }
        } else if (shipper === "hsin chu") {
            let size: number;
            size = product.length * product.width * product.height;
            if (product.length > 100 || product.width > 100 || product.height > 100) {
                return size * 0.00002 * 1100 + 500;
            } else {
                return size * 0.00002 * 1200;
            }
        } else if (shipper === "post office") {
            let feeByWeight, size, feeBySize: number;
            feeByWeight = 80 + product.weight * 10;
            size = product.length * product.width * product.height;
            feeBySize = size * 0.00002 * 1100;
            return Math.min(feeBySize, feeByWeight);
        } else {
            throw new Error("shipper not exist");

        }
    }
}
