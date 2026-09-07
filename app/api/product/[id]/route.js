// Mock product data, keyed by id.
const PRODUCTS = {
  1: { name: "Mechanical keyboard", price: 129.0 },
  2: { name: "Ergonomic mouse", price: 59.5 },
  3: { name: "27-inch monitor", price: 349.0 },
};

export async function GET(request, { params }) {
  // In Next.js 16 `params` is a promise and has to be awaited.
  const { id } = await params;
  const product = PRODUCTS[id];

  if (!product) {
    return Response.json(
      { error: `No product found with id ${id}` },
      { status: 404 }
    );
  }

  return Response.json({
    id,
    name: product.name,
    price: product.price,
    description: `A ${product.name.toLowerCase()} from the mock catalogue.`,
  });
}
