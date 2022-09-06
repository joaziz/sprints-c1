class ProductService {


    async list(user, page, limit) {

        if (!user || user == "guest")
            return [{name: "only 1 "}]



        return [
            {name: "p1"},
            {name: "p2"},
            {name: "p3"}
        ]
    }
}


module.exports = {
    ProductService
}
