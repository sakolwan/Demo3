using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Models;

namespace apiShoppingCart.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShoppingMallController : ControllerBase
    {
        // ค่าเริ่มต้นสินค้า
        public static List<Product> Product = new List<Product>
        {
            new Product
            {
                Id = Guid.NewGuid().ToString(),
                ProductName = "ดินสอ",
                Price = 10,
                Amount = 0
            },
            new Product
            {
                Id = Guid.NewGuid().ToString(),
                ProductName = "ยางลบ",
                Price = 5,
                Amount = 0
            },
            new Product
            {
                Id = Guid.NewGuid().ToString(),
                ProductName = "ไม้บรรทัด",
                Price = 15,
                Amount = 0
            }
        };
        [HttpGet]
        // เรียกดูรายการสินค้าทั้งหมด
        public List<Product> GetAll()
        {
            return Product;
        }

        [HttpGet("{id}")]
        public Product GetbyId(String id)
        {
            return Product.Find(it => it.Id == id);
        }

        [HttpPost]
        public void CreateProduct([FromBody]Product newProduct)
        {
            newProduct.Id = Guid.NewGuid().ToString();
            Product.Add(newProduct);
        }

        [HttpPut]
        public void PutProduct([FromBody]Product newProduct)
        {
            var oldProduct = Product.Find(it => it.Id == newProduct.Id);
            Product.Remove(oldProduct);
            Product.Add(newProduct);
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(String id)
        {
            var product = Product.Find(it => it.Id == id);
            Product.Remove(product);
        }
    }
}
