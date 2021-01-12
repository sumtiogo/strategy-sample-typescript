export class Cart {

    shippingFee(shipper: string, length: number, width: number, height: number, weight: number): number {
        if (shipper === "black cat") {
            if (weight > 20) {
                return 500;
            } else {
                return 100 + weight * 10;
            }
        } else if (shipper === "hsin chu") {
            let size: number;
            size = length * width * height;
            if (length > 100 || width > 100 || height > 100) {
                return size * 0.00002 * 1100 + 500;
            } else {
                return size * 0.00002 * 1200;
            }
        } else if (shipper === "post office") {
            let feeByWeight, size, feeBySize: number;
            feeByWeight = 80 + weight * 10;
            size = length * width * height;
            feeBySize = size * 0.00002 * 1100;
            return Math.min(feeBySize,feeByWeight);
        } else {
            throw new Error("shipper not exist");

        }
    }
}
