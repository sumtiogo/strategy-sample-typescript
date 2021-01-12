import {Cart, Product} from "./cart";

describe('Case', function () {
    let blackCat, hsinChu, postOffice: string;
    let cart: Cart;
    let shippingFee: number;
    beforeEach(() => {
        blackCat = 'black cat';
        hsinChu = 'hsin chu';
        postOffice = 'post office';
        cart = new Cart();
    });

    function feeShouldBe(expected: number, actualFee: number) {
        expect(actualFee).toEqual(expected);
    }

    it('test black cat with light weight', function () {
        shippingFee = cart.shippingFee(blackCat, new Product(30, 20, 10, 5));
        feeShouldBe(150, shippingFee);
    });

    it('test black cat with heavy weight', function () {
        shippingFee = cart.shippingFee(blackCat, new Product(30, 20, 10, 50));
        feeShouldBe(500, shippingFee);
    });

    it('test hsin chu with small size', function () {
        shippingFee = cart.shippingFee(hsinChu, new Product(30, 20, 10, 50));
        feeShouldBe(144, shippingFee);
    });

    it('test hsin chu with huge size', function () {
        shippingFee = cart.shippingFee(hsinChu, new Product(100, 20, 10, 50));
        feeShouldBe(480, shippingFee);
    });

    it('test post office by weight', function () {
        shippingFee = cart.shippingFee(postOffice, new Product(100, 20, 10, 3));
        feeShouldBe(110, shippingFee);
    });

    it('test post office by size', function () {
        shippingFee = cart.shippingFee(postOffice, new Product(100, 20, 10, 300));
        feeShouldBe(440, shippingFee);
    });


});
