// Product Database - 150+ Products
const products = [
    // Men's Fashion (60 products)
    { id: 1, name: "Classic Denim Jacket", price: 2999, category: "men", image: "images/shoppinga.webp", rating: 4.5, badge: "Bestseller" },
    { id: 2, name: "Cotton Casual Shirt", price: 1599, category: "men", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 3, name: "Slim Fit Chinos", price: 2299, category: "men", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 4, name: "Leather Bomber Jacket", price: 4999, category: "men", image: "images/shoppinga.webp", rating: 4.7, badge: "Premium" },
    { id: 5, name: "Polo T-Shirt", price: 1299, category: "men", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 6, name: "Formal Blazer", price: 3999, category: "men", image: "images/clothes.jpg", rating: 4.6, badge: "" },
    { id: 7, name: "Cargo Pants", price: 1899, category: "men", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 8, name: "Hooded Sweatshirt", price: 2199, category: "men", image: "images/shoppingb.jpg", rating: 4.4, badge: "New" },
    { id: 9, name: "Track Suit", price: 3299, category: "men", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 10, name: "Denim Shirt", price: 1799, category: "men", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 11, name: "Winter Coat", price: 5999, category: "men", image: "images/shoppingb.jpg", rating: 4.8, badge: "Premium" },
    { id: 12, name: "Sports Jersey", price: 1699, category: "men", image: "images/clothes.jpg", rating: 4.1, badge: "" },
    { id: 13, name: "Formal Trousers", price: 2499, category: "men", image: "images/shoppinga.webp", rating: 4.4, badge: "" },
    { id: 14, name: "Casual Shorts", price: 999, category: "men", image: "images/shoppingb.jpg", rating: 3.9, badge: "" },
    { id: 15, name: "Turtleneck Sweater", price: 2799, category: "men", image: "images/clothes.jpg", rating: 4.5, badge: "" },
    { id: 16, name: "Military Jacket", price: 3799, category: "men", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 17, name: "Henley Shirt", price: 1399, category: "men", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 18, name: "Joggers", price: 1799, category: "men", image: "images/clothes.jpg", rating: 4.0, badge: "" },
    { id: 19, name: "Quilted Vest", price: 2399, category: "men", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 20, name: "Business Shirt", price: 1999, category: "men", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 21, name: "Leather Pants", price: 4499, category: "men", image: "images/clothes.jpg", rating: 4.6, badge: "Exclusive" },
    { id: 22, name: "Graphic Tee", price: 899, category: "men", image: "images/shoppinga.webp", rating: 3.8, badge: "" },
    { id: 23, name: "Windbreaker", price: 2699, category: "men", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 24, name: "Oxford Shirt", price: 2199, category: "men", image: "images/clothes.jpg", rating: 4.5, badge: "" },
    { id: 25, name: "Thermal Wear", price: 1599, category: "men", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 26, name: "Puffer Jacket", price: 4299, category: "men", image: "images/shoppingb.jpg", rating: 4.7, badge: "Bestseller" },
    { id: 27, name: "Flannel Shirt", price: 1899, category: "men", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 28, name: "Swim Shorts", price: 1299, category: "men", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 29, name: "Peacoat", price: 5499, category: "men", image: "images/shoppingb.jpg", rating: 4.8, badge: "Premium" },
    { id: 30, name: "Tank Top", price: 699, category: "men", image: "images/clothes.jpg", rating: 3.7, badge: "" },
    { id: 31, name: "Corduroy Pants", price: 2899, category: "men", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 32, name: "Band Collar Shirt", price: 1799, category: "men", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 33, name: "Knit Cardigan", price: 3199, category: "men", image: "images/clothes.jpg", rating: 4.4, badge: "" },
    { id: 34, name: "Board Shorts", price: 1599, category: "men", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 35, name: "Varsity Jacket", price: 3599, category: "men", image: "images/shoppingb.jpg", rating: 4.5, badge: "" },
    { id: 36, name: "Linen Shirt", price: 2299, category: "men", image: "images/clothes.jpg", rating: 4.3, badge: "Summer" },
    { id: 37, name: "Compression Wear", price: 1999, category: "men", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 38, name: "Duffle Coat", price: 6299, category: "men", image: "images/shoppingb.jpg", rating: 4.9, badge: "Luxury" },
    { id: 39, name: "Muscle Tee", price: 899, category: "men", image: "images/clothes.jpg", rating: 3.8, badge: "" },
    { id: 40, name: "Straight Jeans", price: 2599, category: "men", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 41, name: "Pullover Hoodie", price: 2499, category: "men", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 42, name: "Dress Pants", price: 2999, category: "men", image: "images/clothes.jpg", rating: 4.4, badge: "" },
    { id: 43, name: "Baseball Cap Tee", price: 1099, category: "men", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 44, name: "Bomber Vest", price: 2199, category: "men", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 45, name: "Pleated Trousers", price: 3299, category: "men", image: "images/clothes.jpg", rating: 4.5, badge: "Formal" },
    { id: 46, name: "Rugby Shirt", price: 1799, category: "men", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 47, name: "Wool Overcoat", price: 7999, category: "men", image: "images/shoppingb.jpg", rating: 4.9, badge: "Luxury" },
    { id: 48, name: "Chambray Shirt", price: 1999, category: "men", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 49, name: "Athletic Shorts", price: 1299, category: "men", image: "images/shoppinga.webp", rating: 3.8, badge: "" },
    { id: 50, name: "Zip Hoodie", price: 2699, category: "men", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 51, name: "Trench Coat", price: 5799, category: "men", image: "images/clothes.jpg", rating: 4.7, badge: "Classic" },
    { id: 52, name: "V-Neck Tee", price: 799, category: "men", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 53, name: "Cargo Shorts", price: 1499, category: "men", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 54, name: "Work Shirt", price: 1899, category: "men", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 55, name: "Parka Jacket", price: 4599, category: "men", image: "images/shoppinga.webp", rating: 4.6, badge: "Winter" },
    { id: 56, name: "Crew Sweatshirt", price: 1999, category: "men", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 57, name: "Tuxedo Shirt", price: 2799, category: "men", image: "images/clothes.jpg", rating: 4.5, badge: "Formal" },
    { id: 58, name: "Board Jacket", price: 3999, category: "men", image: "images/shoppinga.webp", rating: 4.4, badge: "" },
    { id: 59, name: "Mock Neck Tee", price: 1199, category: "men", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 60, name: "Designer Jeans", price: 4999, category: "men", image: "images/clothes.jpg", rating: 4.8, badge: "Designer" },

    // Women's Fashion (70 products)
    { id: 61, name: "Floral Summer Dress", price: 2499, category: "women", image: "images/shoppingb.jpg", rating: 4.6, badge: "Summer" },
    { id: 62, name: "Leather Handbag", price: 3999, category: "women", image: "images/a.webp", rating: 4.7, badge: "Bestseller" },
    { id: 63, name: "Silk Blouse", price: 2199, category: "women", image: "images/clothes.jpg", rating: 4.5, badge: "" },
    { id: 64, name: "High Waist Jeans", price: 2799, category: "women", image: "images/shoppinga.webp", rating: 4.4, badge: "" },
    { id: 65, name: "Cashmere Sweater", price: 4599, category: "women", image: "images/shoppingb.jpg", rating: 4.8, badge: "Premium" },
    { id: 66, name: "Maxi Dress", price: 2999, category: "women", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 67, name: "Blazer Jacket", price: 3499, category: "women", image: "images/a.webp", rating: 4.5, badge: "" },
    { id: 68, name: "Ankle Boots", price: 3299, category: "women", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 69, name: "Wrap Dress", price: 2399, category: "women", image: "images/shoppingb.jpg", rating: 4.4, badge: "New" },
    { id: 70, name: "Denim Skirt", price: 1799, category: "women", image: "images/clothes.jpg", rating: 4.1, badge: "" },
    { id: 71, name: "Cropped Jacket", price: 2899, category: "women", image: "images/a.webp", rating: 4.3, badge: "" },
    { id: 72, name: "Palazzo Pants", price: 2199, category: "women", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 73, name: "Sequin Top", price: 1899, category: "women", image: "images/shoppingb.jpg", rating: 4.2, badge: "Party" },
    { id: 74, name: "Pencil Skirt", price: 1999, category: "women", image: "images/clothes.jpg", rating: 4.4, badge: "" },
    { id: 75, name: "Trench Coat", price: 4999, category: "women", image: "images/a.webp", rating: 4.6, badge: "Classic" },
    { id: 76, name: "Bodysuit", price: 1599, category: "women", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 77, name: "Kimono Cardigan", price: 2799, category: "women", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 78, name: "Wide Leg Pants", price: 2599, category: "women", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 79, name: "Off Shoulder Top", price: 1699, category: "women", image: "images/a.webp", rating: 4.0, badge: "" },
    { id: 80, name: "Midi Skirt", price: 2199, category: "women", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 81, name: "Puffer Coat", price: 4299, category: "women", image: "images/shoppingb.jpg", rating: 4.5, badge: "Winter" },
    { id: 82, name: "Tank Top", price: 899, category: "women", image: "images/clothes.jpg", rating: 3.9, badge: "" },
    { id: 83, name: "Pleated Dress", price: 2699, category: "women", image: "images/a.webp", rating: 4.4, badge: "" },
    { id: 84, name: "Leggings", price: 1299, category: "women", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 85, name: "Cardigan Sweater", price: 2399, category: "women", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 86, name: "A-Line Dress", price: 2199, category: "women", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 87, name: "Leather Jacket", price: 5999, category: "women", image: "images/a.webp", rating: 4.7, badge: "Edgy" },
    { id: 88, name: "Camisole", price: 1199, category: "women", image: "images/shoppinga.webp", rating: 3.8, badge: "" },
    { id: 89, name: "Formal Pants", price: 2499, category: "women", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 90, name: "Shift Dress", price: 2299, category: "women", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 91, name: "Bomber Jacket", price: 3199, category: "women", image: "images/a.webp", rating: 4.4, badge: "" },
    { id: 92, name: "Joggers", price: 1799, category: "women", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 93, name: "Halter Top", price: 1399, category: "women", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 94, name: "Tunic Dress", price: 1999, category: "women", image: "images/clothes.jpg", rating: 4.1, badge: "" },
    { id: 95, name: "Wool Coat", price: 6499, category: "women", image: "images/a.webp", rating: 4.8, badge: "Luxury" },
    { id: 96, name: "Sports Bra", price: 999, category: "women", image: "images/shoppinga.webp", rating: 3.7, badge: "" },
    { id: 97, name: "Culotte Pants", price: 2299, category: "women", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 98, name: "Peasant Blouse", price: 1799, category: "women", image: "images/clothes.jpg", rating: 4.0, badge: "" },
    { id: 99, name: "Moto Jacket", price: 4799, category: "women", image: "images/a.webp", rating: 4.6, badge: "Trendy" },
    { id: 100, name: "Yoga Pants", price: 1599, category: "women", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 101, name: "Bell Sleeve Top", price: 1899, category: "women", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 102, name: "Slip Dress", price: 2499, category: "women", image: "images/clothes.jpg", rating: 4.4, badge: "Elegant" },
    { id: 103, name: "Duster Coat", price: 3799, category: "women", image: "images/a.webp", rating: 4.2, badge: "" },
    { id: 104, name: "Crop Top", price: 1099, category: "women", image: "images/shoppinga.webp", rating: 3.8, badge: "" },
    { id: 105, name: "Straight Skirt", price: 1999, category: "women", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 106, name: "Chiffon Blouse", price: 2199, category: "women", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 107, name: "Pea Coat", price: 4599, category: "women", image: "images/a.webp", rating: 4.5, badge: "Classic" },
    { id: 108, name: "Shorts", price: 1199, category: "women", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 109, name: "Sweater Dress", price: 2899, category: "women", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 110, name: "Button-Up Shirt", price: 1799, category: "women", image: "images/clothes.jpg", rating: 4.0, badge: "" },
    { id: 111, name: "Faux Fur Coat", price: 5299, category: "women", image: "images/a.webp", rating: 4.6, badge: "Glamorous" },
    { id: 112, name: "High-Low Dress", price: 2599, category: "women", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 113, name: "Oversized Sweater", price: 2399, category: "women", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 114, name: "Capri Pants", price: 1899, category: "women", image: "images/clothes.jpg", rating: 3.9, badge: "" },
    { id: 115, name: "Statement Necklace", price: 1299, category: "women", image: "images/a.webp", rating: 4.3, badge: "" },
    { id: 116, name: "Vintage Dress", price: 3299, category: "women", image: "images/shoppinga.webp", rating: 4.5, badge: "Vintage" },
    { id: 117, name: "Fleece Jacket", price: 2199, category: "women", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 118, name: "Turtleneck Top", price: 1599, category: "women", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 119, name: "Cocktail Dress", price: 3999, category: "women", image: "images/a.webp", rating: 4.7, badge: "Evening" },
    { id: 120, name: "Sweatshirt", price: 1999, category: "women", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 121, name: "Midi Coat", price: 4199, category: "women", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 122, name: "Racerback Tank", price: 899, category: "women", image: "images/clothes.jpg", rating: 3.8, badge: "" },
    { id: 123, name: "Blazer Dress", price: 3199, category: "women", image: "images/a.webp", rating: 4.5, badge: "Professional" },
    { id: 124, name: "Skinny Jeans", price: 2399, category: "women", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 125, name: "Peplum Top", price: 1699, category: "women", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 126, name: "Maxi Coat", price: 5699, category: "women", image: "images/clothes.jpg", rating: 4.6, badge: "Statement" },
    { id: 127, name: "Tube Top", price: 799, category: "women", image: "images/a.webp", rating: 3.7, badge: "" },
    { id: 128, name: "Cargo Pants", price: 2299, category: "women", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 129, name: "Wrap Blouse", price: 1899, category: "women", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 130, name: "Evening Gown", price: 7999, category: "women", image: "images/clothes.jpg", rating: 4.9, badge: "Luxury" },

    // Accessories (100 products - expanded)
    { id: 131, name: "Leather Belt", price: 1299, category: "accessories", image: "images/a.webp", rating: 4.2, badge: "" },
    { id: 132, name: "Designer Sunglasses", price: 2499, category: "accessories", image: "images/shoppinga.webp", rating: 4.5, badge: "Designer" },
    { id: 133, name: "Silk Scarf", price: 899, category: "accessories", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 134, name: "Leather Wallet", price: 1899, category: "accessories", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 135, name: "Baseball Cap", price: 699, category: "accessories", image: "images/a.webp", rating: 3.9, badge: "" },
    { id: 136, name: "Premium Watch", price: 4999, category: "accessories", image: "images/shoppinga.webp", rating: 4.7, badge: "Premium" },
    { id: 137, name: "Crossbody Bag", price: 2199, category: "accessories", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 138, name: "Beanie Hat", price: 499, category: "accessories", image: "images/clothes.jpg", rating: 3.8, badge: "" },
    { id: 139, name: "Statement Earrings", price: 1599, category: "accessories", image: "images/a.webp", rating: 4.4, badge: "" },
    { id: 140, name: "Travel Backpack", price: 2999, category: "accessories", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 141, name: "Fedora Hat", price: 1299, category: "accessories", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 142, name: "Gold Chain Necklace", price: 2799, category: "accessories", image: "images/clothes.jpg", rating: 4.5, badge: "" },
    { id: 143, name: "Canvas Tote Bag", price: 1799, category: "accessories", image: "images/a.webp", rating: 4.1, badge: "" },
    { id: 144, name: "Leather Gloves", price: 799, category: "accessories", image: "images/shoppinga.webp", rating: 3.9, badge: "" },
    { id: 145, name: "Diamond Ring Set", price: 1999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 146, name: "Laptop Messenger Bag", price: 2399, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 147, name: "Bucket Hat", price: 899, category: "accessories", image: "images/a.webp", rating: 3.8, badge: "" },
    { id: 148, name: "Silver Bracelet", price: 1199, category: "accessories", image: "images/shoppinga.webp", rating: 4.0, badge: "" },
    { id: 149, name: "Evening Clutch Bag", price: 1599, category: "accessories", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 150, name: "Silk Tie", price: 699, category: "accessories", image: "images/clothes.jpg", rating: 4.1, badge: "" },
    { id: 151, name: "Smart Watch", price: 8999, category: "accessories", image: "images/a.webp", rating: 4.6, badge: "Tech" },
    { id: 152, name: "Aviator Sunglasses", price: 1899, category: "accessories", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 153, name: "Wool Scarf", price: 1299, category: "accessories", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 154, name: "RFID Wallet", price: 2199, category: "accessories", image: "images/clothes.jpg", rating: 4.4, badge: "Secure" },
    { id: 155, name: "Snapback Cap", price: 899, category: "accessories", image: "images/a.webp", rating: 4.0, badge: "" },
    { id: 156, name: "Luxury Watch", price: 12999, category: "accessories", image: "images/shoppinga.webp", rating: 4.8, badge: "Luxury" },
    { id: 157, name: "Shoulder Bag", price: 2499, category: "accessories", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 158, name: "Winter Beanie", price: 699, category: "accessories", image: "images/clothes.jpg", rating: 3.9, badge: "" },
    { id: 159, name: "Pearl Earrings", price: 2299, category: "accessories", image: "images/a.webp", rating: 4.5, badge: "Elegant" },
    { id: 160, name: "Hiking Backpack", price: 3999, category: "accessories", image: "images/shoppinga.webp", rating: 4.4, badge: "" },
    { id: 161, name: "Panama Hat", price: 1599, category: "accessories", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 162, name: "Tennis Necklace", price: 3499, category: "accessories", image: "images/clothes.jpg", rating: 4.6, badge: "Premium" },
    { id: 163, name: "Beach Bag", price: 1199, category: "accessories", image: "images/a.webp", rating: 3.8, badge: "" },
    { id: 164, name: "Driving Gloves", price: 1299, category: "accessories", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 165, name: "Engagement Ring", price: 5999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.7, badge: "Special" },
    { id: 166, name: "Business Briefcase", price: 4599, category: "accessories", image: "images/clothes.jpg", rating: 4.3, badge: "Professional" },
    { id: 167, name: "Sun Hat", price: 1099, category: "accessories", image: "images/a.webp", rating: 3.9, badge: "" },
    { id: 168, name: "Charm Bracelet", price: 1699, category: "accessories", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 169, name: "Party Clutch", price: 1999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 170, name: "Bow Tie", price: 899, category: "accessories", image: "images/clothes.jpg", rating: 4.0, badge: "" },
    { id: 171, name: "Fitness Watch", price: 6999, category: "accessories", image: "images/a.webp", rating: 4.5, badge: "Sport" },
    { id: 172, name: "Cat Eye Sunglasses", price: 1799, category: "accessories", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 173, name: "Cashmere Scarf", price: 2899, category: "accessories", image: "images/shoppingb.jpg", rating: 4.6, badge: "Luxury" },
    { id: 174, name: "Money Clip Wallet", price: 1599, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 175, name: "Trucker Cap", price: 799, category: "accessories", image: "images/a.webp", rating: 3.8, badge: "" },
    { id: 176, name: "Chronograph Watch", price: 9999, category: "accessories", image: "images/shoppinga.webp", rating: 4.7, badge: "Premium" },
    { id: 177, name: "Hobo Bag", price: 2799, category: "accessories", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 178, name: "Knit Beanie", price: 599, category: "accessories", image: "images/clothes.jpg", rating: 3.9, badge: "" },
    { id: 179, name: "Hoop Earrings", price: 1299, category: "accessories", image: "images/a.webp", rating: 4.1, badge: "" },
    { id: 180, name: "Camera Backpack", price: 3599, category: "accessories", image: "images/shoppinga.webp", rating: 4.4, badge: "Pro" },
    { id: 181, name: "Beret Hat", price: 999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 182, name: "Pendant Necklace", price: 2199, category: "accessories", image: "images/clothes.jpg", rating: 4.3, badge: "" },
    { id: 183, name: "Gym Bag", price: 1899, category: "accessories", image: "images/a.webp", rating: 4.1, badge: "" },
    { id: 184, name: "Touchscreen Gloves", price: 899, category: "accessories", image: "images/shoppinga.webp", rating: 4.0, badge: "Tech" },
    { id: 185, name: "Cocktail Ring", price: 2799, category: "accessories", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 186, name: "Laptop Bag", price: 2999, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 187, name: "Newsboy Cap", price: 1199, category: "accessories", image: "images/a.webp", rating: 3.9, badge: "" },
    { id: 188, name: "Link Bracelet", price: 1799, category: "accessories", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 189, name: "Wristlet Bag", price: 1399, category: "accessories", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 190, name: "Pocket Square", price: 599, category: "accessories", image: "images/clothes.jpg", rating: 4.0, badge: "" },
    { id: 191, name: "Dive Watch", price: 11999, category: "accessories", image: "images/a.webp", rating: 4.8, badge: "Professional" },
    { id: 192, name: "Round Sunglasses", price: 1599, category: "accessories", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 193, name: "Infinity Scarf", price: 999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 194, name: "Cardholder Wallet", price: 1199, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "Slim" },
    { id: 195, name: "Visor Cap", price: 699, category: "accessories", image: "images/a.webp", rating: 3.8, badge: "" },
    { id: 196, name: "Dress Watch", price: 7999, category: "accessories", image: "images/shoppinga.webp", rating: 4.6, badge: "Elegant" },
    { id: 197, name: "Satchel Bag", price: 3299, category: "accessories", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 198, name: "Pom Pom Beanie", price: 799, category: "accessories", image: "images/clothes.jpg", rating: 3.9, badge: "" },
    { id: 199, name: "Drop Earrings", price: 1899, category: "accessories", image: "images/a.webp", rating: 4.3, badge: "" },
    { id: 200, name: "Duffel Bag", price: 2599, category: "accessories", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 201, name: "Cowboy Hat", price: 1999, category: "accessories", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 202, name: "Choker Necklace", price: 1399, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "Trendy" },
    { id: 203, name: "Crossbody Sling", price: 1799, category: "accessories", image: "images/a.webp", rating: 4.0, badge: "" },
    { id: 204, name: "Fingerless Gloves", price: 699, category: "accessories", image: "images/shoppinga.webp", rating: 3.8, badge: "" },
    { id: 205, name: "Stackable Rings", price: 1599, category: "accessories", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 206, name: "Rolling Bag", price: 4999, category: "accessories", image: "images/clothes.jpg", rating: 4.4, badge: "Travel" },
    { id: 207, name: "Flat Cap", price: 1299, category: "accessories", image: "images/a.webp", rating: 4.0, badge: "" },
    { id: 208, name: "Tennis Bracelet", price: 2999, category: "accessories", image: "images/shoppinga.webp", rating: 4.5, badge: "Premium" },
    { id: 209, name: "Pochette Bag", price: 1699, category: "accessories", image: "images/shoppingb.jpg", rating: 4.1, badge: "" },
    { id: 210, name: "Cufflinks", price: 899, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 211, name: "Field Watch", price: 5999, category: "accessories", image: "images/a.webp", rating: 4.4, badge: "Tactical" },
    { id: 212, name: "Oversized Sunglasses", price: 2199, category: "accessories", image: "images/shoppinga.webp", rating: 4.2, badge: "" },
    { id: 213, name: "Plaid Scarf", price: 1199, category: "accessories", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 214, name: "Zip Wallet", price: 1799, category: "accessories", image: "images/clothes.jpg", rating: 4.1, badge: "" },
    { id: 215, name: "Cycling Cap", price: 799, category: "accessories", image: "images/a.webp", rating: 3.9, badge: "Sport" },
    { id: 216, name: "Pilot Watch", price: 13999, category: "accessories", image: "images/shoppinga.webp", rating: 4.9, badge: "Aviation" },
    { id: 217, name: "Frame Bag", price: 2399, category: "accessories", image: "images/shoppingb.jpg", rating: 4.2, badge: "" },
    { id: 218, name: "Slouch Beanie", price: 699, category: "accessories", image: "images/clothes.jpg", rating: 3.8, badge: "" },
    { id: 219, name: "Stud Earrings", price: 999, category: "accessories", image: "images/a.webp", rating: 4.1, badge: "" },
    { id: 220, name: "Weekender Bag", price: 3499, category: "accessories", image: "images/shoppinga.webp", rating: 4.3, badge: "" },
    { id: 221, name: "Boater Hat", price: 1599, category: "accessories", image: "images/shoppingb.jpg", rating: 4.0, badge: "" },
    { id: 222, name: "Layered Necklace", price: 1899, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "" },
    { id: 223, name: "Belt Bag", price: 1399, category: "accessories", image: "images/a.webp", rating: 4.0, badge: "" },
    { id: 224, name: "Opera Gloves", price: 1299, category: "accessories", image: "images/shoppinga.webp", rating: 4.1, badge: "Formal" },
    { id: 225, name: "Promise Ring", price: 2199, category: "accessories", image: "images/shoppingb.jpg", rating: 4.4, badge: "" },
    { id: 226, name: "Garment Bag", price: 2799, category: "accessories", image: "images/clothes.jpg", rating: 4.2, badge: "Travel" },
    { id: 227, name: "Cloche Hat", price: 1199, category: "accessories", image: "images/a.webp", rating: 3.9, badge: "Vintage" },
    { id: 228, name: "Cuff Bracelet", price: 1599, category: "accessories", image: "images/shoppinga.webp", rating: 4.1, badge: "" },
    { id: 229, name: "Evening Bag", price: 2299, category: "accessories", image: "images/shoppingb.jpg", rating: 4.3, badge: "" },
    { id: 230, name: "Ascot Tie", price: 799, category: "accessories", image: "images/clothes.jpg", rating: 4.0, badge: "Classic" }
];

// Get featured products (first 8)
function getFeaturedProducts() {
    return products.slice(0, 8);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

// Search products
function searchProducts(query) {
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Filter products by price range
function filterByPriceRange(min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

// Sort products
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

// Get random products
function getRandomProducts(count = 4) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.products = products;
    window.getFeaturedProducts = getFeaturedProducts;
    window.getProductsByCategory = getProductsByCategory;
    window.searchProducts = searchProducts;
    window.getProductById = getProductById;
    window.filterByPriceRange = filterByPriceRange;
    window.sortProducts = sortProducts;
    window.getRandomProducts = getRandomProducts;
}
