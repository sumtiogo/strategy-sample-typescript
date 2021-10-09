export class Product {
  constructor(
    public readonly length: number,
    public readonly width: number,
    public readonly height: number,
    public readonly weight: number,
  ) {}

  public get size() {
    return this.length * this.width * this.height;
  }
}

enum Shipper {
  BlackCat = 'black cat',
  HsinChu = 'hsin chu',
  PostOffice = 'post office',
}
type CalFeeFunc = (p: Product) => number;

export class Cart {
  private static readonly shipperFeeDictionary: Record<Shipper, CalFeeFunc> = {
    [Shipper.BlackCat]: Cart.calculateFeeByBlackCat,
    [Shipper.HsinChu]: Cart.calculateFeeByHsinChu,
    [Shipper.PostOffice]: Cart.calculateFeeByPostOffice,
  };

  static shippingFee(shipper: Shipper, product: Product): number {
    if (shipper in Cart.shipperFeeDictionary) {
      return Cart.shipperFeeDictionary[shipper](product);
    }
    throw new Error('shipper not exist');
  }

  private static calculateFeeByPostOffice(product: Product) {
    const feeByWeight = 80 + product.weight * 10;
    const feeBySize: number = product.size * 0.00002 * 1100;
    return Math.min(feeBySize, feeByWeight);
  }

  private static calculateFeeByHsinChu(product: Product) {
    if (product.length > 100 || product.width > 100 || product.height > 100) {
      return product.size * 0.00002 * 1100 + 500;
    } else {
      return product.size * 0.00002 * 1200;
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
