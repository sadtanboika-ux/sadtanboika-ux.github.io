window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const price = params.get("price");
  const img = params.get("img");
  const type = params.get("type");

  // ชื่อสินค้า
  if (name) document.getElementById("product-name").textContent = name;

  // ราคา
  if (price) {
    document.getElementById("product-price").textContent =
      price === "-" ? "Coming Soon" : `฿ ${price}`;
  }

  // รูปภาพหลัก
  if (img) document.getElementById("product-img-main").src = `img/${img}`;

  // อ้างอิงตำแหน่ง DOM
  const desc = document.getElementById("product-description");
  const gallery = document.querySelector(".image-gallery");
  const sizeChart = document.querySelector(".size-chart table");

  // แสดงข้อมูลตามประเภทสินค้า
  if (type === "Runningshirt") {
    desc.innerHTML = `
      เสื้อวิ่งพิมพ์ลายสีดำ ระบายอากาศดี เเห้งเร็วด้วยเนื้อผ้า Ultra Light<br>
      น้ำหนักเพียง 90 กรัม ใส่วิ่งกลางคืนไม่ต้องกลัวรถชน<br>
      เพราะมี Reflective Flex 05:30 ใครโสดให้ใส่เสื้อดำออกมาวิ่ง!
    `;

    // ✅ รูปภาพเพิ่มเติม
    gallery.innerHTML = `
      <img id="product-img-main" src="img/Product1.png" alt="สินค้าหลัก">
      <img src="img/Product1.1.png" alt="ด้านหลัง">
      
    `;

    // ✅ ตารางไซต์
    sizeChart.innerHTML = `
      <tr><th>ขนาด</th><th>รอบอก (นิ้ว)</th><th>ความยาว (นิ้ว)</th></tr>
      <tr><td>S</td><td>36</td><td>26</td></tr>
      <tr><td>M</td><td>38</td><td>27</td></tr>
      <tr><td>L</td><td>40</td><td>28</td></tr>
      <tr><td>XL</td><td>42</td><td>29</td></tr>
    `;
  } else if (type === "TOversize") {
    desc.innerHTML = `
      เสื้อ Oversize Cotton 100% C20 นุ่ม ใส่สบาย เสื้ออยู่ทรง<br>
      สกิน DFT หน้าหลัง ไว้ใส่ไปออกกำลังกาย ใส่ไปกินกาเเฟเเบบเเกงค์แกงค์    `;

    gallery.innerHTML = `
      <img id="product-img-main" src="img/P3.PNG" alt="สินค้าหลัก">
      <img src="img/P3.1.PNG" alt="ด้านหลัง">
      
    `;

    sizeChart.innerHTML = `
      <tr><th>ขนาด</th><th>รอบอก (นิ้ว)</th><th>ความยาว (นิ้ว)</th></tr>
      <tr><td>M</td><td>44</td><td>27</td></tr>
      <tr><td>L</td><td>48</td><td>29</td></tr>
      <tr><td>XL</td><td>52</td><td>31</td></tr>
    `;
  } else {
    desc.innerHTML = `ไม่พบรายละเอียดสินค้า`;
    gallery.innerHTML = `<img id="product-img-main" src="img/default.png" alt="สินค้าหลัก">`;
    sizeChart.innerHTML = `<tr><td colspan="3">ไม่มีข้อมูลไซต์</td></tr>`;
  }

  // ปุ่มสั่งซื้อ
  const buyBtn = document.getElementById("buy-button");
  buyBtn.href = `checkout.html?name=${encodeURIComponent(name)}&price=${price}&img=${img}`;
});