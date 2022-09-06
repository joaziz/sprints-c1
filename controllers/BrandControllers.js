class BrandControllers {

    list(req, res) {
        res.json({
            list: [{name: "p1"}]
        });
    }

    create(req, res) {
        res.json({
            message: "brand created successfully"
        });
    }

    update(req, res) {
        res.json({
            message: "brand updated successfully"
        });
    }

    delete(req, res) {
        res.json({
            message: "brand deleted successfully"
        });
    }
    
}


module.exports = {
    BrandControllers
}
