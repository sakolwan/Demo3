namespace api.Models
{
    public class Product 
    {
        // รหัสสินค้า
        public string Id { get; set; }
        // ชื่อสินค้า
        public string ProductName { get; set; }
        // ราคาต่อหน่วย
        public int Price { get; set; }
        //จำนวน
        public int Amount { get; set; }
    }
}