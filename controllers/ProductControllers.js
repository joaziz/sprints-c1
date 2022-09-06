const {ProductService} = require("../service/ProductService");

class ProductControllers {

    async list(req, res) {
        let service = new ProductService();
// 1 1 10
// 2 11 20
// 3 21 30

// 50 490 500
        res.json({
            list: await service.list(req.user, req.page, 10)
        });
    }

    create(req, res) {
        res.json({
            message: "product created successfully"
        });
    }

    update(req, res) {
        res.json({
            message: "product updated successfully"
        });
    }

    delete(req, res) {
        res.json({
            message: "product deleted successfully"
        });
    }

    changeStatus(req, res) {
        res.json({
            message: "product status changed successfully"
        });
    }
}


module.exports = {
    ProductControllers
}
