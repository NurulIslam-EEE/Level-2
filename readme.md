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
