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
    public class ShoppingCartController : ControllerBase
    {
        // ค่าเริ่มต้นสินค้า
        public static List<ShoppingCart> ShoppingCart = new List<ShoppingCart>
        {
            
        };
        [HttpGet]
        // เรียกดูรายการสินค้าทั้งหมด
        public List<ShoppingCart> GetAll()
        {
            return ShoppingCart;
        }

        [HttpGet("{id}")]
        public ShoppingCart GetbyId(String id)
        {
            return ShoppingCart.Find(it => it.Id == id);
        }

        [HttpPost]
        public void PostCart([FromBody]ShoppingCart newCart)
        {
            newCart.Id = Guid.NewGuid().ToString();
            ShoppingCart.Add(newCart);
        }

        [HttpPut]
        public void PutCart([FromBody]ShoppingCart newCart)
        {
            var oldCart = ShoppingCart.Find(it => it.Id == newCart.Id);
            ShoppingCart.Remove(oldCart);
            ShoppingCart.Add(newCart);
        }

        [HttpDelete("{id}")]
        public void DeleteCart(String id)
        {
            var cart = ShoppingCart.Find(it => it.Id == id);
            ShoppingCart.Remove(cart);
        }
    }
}
