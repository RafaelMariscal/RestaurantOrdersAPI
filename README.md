## NOTES FOR THIS PROJECT

This project is about an API built using <strong>NodeJs</strong>, <strong>Typescript</strong>, <strong>Docker</strong>, <strong>MongoDB</strong>.

## Quickstart

Start by following these terminal commands: 

    $ git clone https://github.com/RafaelMariscal/jackedPlanner
    $ cd api
    $ yarn
  
You can set the both docker and api ports by the constants 'DOCKERPORT' and 'PORT' at index.ts file.

The connection with MongoDB was provided by a docker container, and to make the connection just run theses command lines into terminal:

	docker run --name mongo -p 27017:27017 -d mongo
	yarn add mongoose

The api will only run if it was stablish a conection with MongoDB by <strong>mongoose</strong>

To treat image uploads, it was used a miltiform request format, and it was used <strong>Multer</strong> as well

## Routes

### Categories
    router.get("/categories", listCategories);

    router.post("/categories", createCategory);


### Products
    router.get("/products", listProducts);

    router.post("/products", upload.single("image"), createProduct);

    router.delete("/products/:productId", deleteProduct);


### Products by Categories
    router.get("/categories/:categoryId/products", listProductsByCategory);


### Orders
    router.get("/orders", listOrders);

    router.post("/orders", createOrder);

    router.patch("/orders/:orderId", changeOrderStatus);

    router.delete("/orders/:orderId", cancelOrder);

