query Products {
products{
name
}
}

query Products {
products{
name,
image,
\_\_typename
}
}

query SingleProduct {
product(productId: "2a089dca-d882-4305-9e25-d1dfeb93fd12"){
name,
image

}
}

bext practice

query SingleProduct($productId: ID!) {
product(productId: $productId){
name,
image

}
}

67-5

query Products {
products{
name
}
}

67-6
query Categories($categoryId: ID!) {
category(categoryId: $categoryId){
name
}
}

67.7

query ProductsWithCategory {
products{
name
category{
name
}
}
}

67.8
query CategoryWithProducts {
categories{
name
products{
name
}
}
}

query SingleCat($categoryId: ID!) {
category(categoryId: $categoryId) {
name
products{
name
}
}
}

67.9

query Products {
products {
name
reviews {
review
rating
}
}
}

query SingleProduct($productId: ID!) {
product(productId: $productId) {
name
reviews {
review
rating
}
}
}
