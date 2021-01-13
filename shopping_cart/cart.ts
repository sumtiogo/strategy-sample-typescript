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

    size(product: Product) {
        return product.length * product.width * product.height;
    }

}

export class Cart {

    private readonly shipperFeeDictionary = {
        "black cat": Cart.calculateFeeByBlackCat,
        "hsin chu": Cart.calculateFeeByHsinChu,
        "post office": Cart.calculateFeeByPostOffice
    }

    shippingFee(shipper: string, product: Product): number {
        if (shipper in this.shipperFeeDictionary) {
            return this.shipperFeeDictionary[shipper](product);
        }
        throw new Error("shipper not exist");
    }

    private static calculateFeeByPostOffice(product: Product) {
        let feeByWeight, feeBySize: number;
        feeByWeight = 80 + product.weight * 10;
        feeBySize = product.size(product) * 0.00002 * 1100;
        return Math.min(feeBySize, feeByWeight);
    }

    private static calculateFeeByHsinChu(product: Product) {
        if (product.length > 100 || product.width > 100 || product.height > 100) {
            return product.size(product) * 0.00002 * 1100 + 500;
        } else {
            return product.size(product) * 0.00002 * 1200;
        }
    }

    private static calculateFeeByBlackCat(product: Product) {
        if (product.weight > 20) {
            return 500;
        } else {
            return 100 + product.weight * 10;
        }
    }
}
