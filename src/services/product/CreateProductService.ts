import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  desc: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, desc, banner, category_id }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: desc,
        banner: banner,
        category_id: category_id,
      },
    });

    return product;
  }
}

export { CreateProductService };
