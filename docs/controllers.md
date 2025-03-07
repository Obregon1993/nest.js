> Some frameworks like Express.js complain about the usage of slashes. If you don't make the request with the slash "/" as it was declared (beginning or end), it will give you an error. In NestJS, this is not an issue.
> http://localhost:3000/route

```javascript
@Get('test')
newEndpoint() {
  return 'this is a test endpoint';
}

@Get('/route/')
hello() {
  return 'this is a test endpoint';
}
```

> If we have something like this, we will have conflicts, it would be imposible to get to teh secound route: "I am a filter" because the dynamic route wont let the static happens. For this cases is recommended just put the static before the dynamic route.

```javascript
@Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `I am a filter`;
  }
```

### If we have an especific controller for a module we dont need to specified int the root of the route

```javascript
@Controller('products')
export class ProductsController {
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
//we dont have to specify products in the route

 @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
```

> In case on categories we can do something like:

```javascript
@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId') //instead of categories/:id/products/:productId
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} and ${id}`;
  }
}
```
