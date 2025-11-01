import type { Product } from './types';

export let mockProducts: Product[] = [
  // =================================================================
  // Sarees - Handpicked
  // =================================================================
  {
    id: 1,
    name: 'Crimson Banarasi Silk Saree',
    category: 'Sarees',
    price: 7999,
    description: 'A luxurious Banarasi silk saree in a rich crimson hue, featuring intricate gold zari work. Perfect for weddings and grand occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1694111382414-f5825a073549?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 152,
  },
  {
    id: 9,
    name: 'Peacock Blue Kanjeevaram',
    category: 'Sarees',
    price: 11500,
    description: 'An authentic Kanjeevaram silk saree with a stunning peacock blue body and a contrasting magenta border with pure zari.',
    imageUrl: 'https://images.unsplash.com/photo-1617653281912-2ba93c164b38?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: 10,
    name: 'Sunshine Yellow Chiffon Saree',
    category: 'Sarees',
    price: 3200,
    description: 'A lightweight and breezy chiffon saree in a vibrant yellow, perfect for summer events and daytime parties.',
    imageUrl: 'https://images.unsplash.com/photo-1610189335843-3c7f2156414b?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviewCount: 76,
  },
   {
    id: 100,
    name: 'Pastel Green Organza Saree',
    category: 'Sarees',
    price: 4800,
    description: 'A dreamy organza saree in pastel green with delicate floral embroidery. It offers a contemporary and ethereal look.',
    imageUrl: 'https://images.unsplash.com/photo-1694111382343-9a3b68f5c88b?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviewCount: 95,
  },
  { 
    id: 101, 
    name: 'Royal Blue Georgette Saree', 
    category: 'Sarees', 
    price: 4200, 
    description: 'Elegant georgette saree with intricate sequin work, perfect for evening receptions.', 
    imageUrl: 'https://images.unsplash.com/photo-1659970177721-9d201a7d65a8?q=80&w=800&auto=format&fit=crop', 
    rating: 4.6, 
    reviewCount: 110 
  },
  { 
    id: 102, 
    name: 'Classic Red Bandhani Saree', 
    category: 'Sarees', 
    price: 5500, 
    description: 'Traditional Bandhani tie-and-dye saree from Gujarat in a vibrant red, a must-have for festive seasons.', 
    imageUrl: 'https://images.unsplash.com/photo-1595164486334-b1a5ef2721d7?q=80&w=800&auto=format&fit=crop', 
    rating: 4.8, 
    reviewCount: 130 
  },
  { 
    id: 103, 
    name: 'Ivory White Chikankari Saree', 
    category: 'Sarees', 
    price: 6800, 
    description: 'Exquisite hand-embroidered Chikankari saree from Lucknow on fine cotton, embodying timeless elegance.', 
    imageUrl: 'https://images.unsplash.com/photo-1617653281987-a7287e1dfa92?q=80&w=800&auto=format&fit=crop', 
    rating: 4.9, 
    reviewCount: 200 
  },
  { 
    id: 104, 
    name: 'Black Sequin Party Saree', 
    category: 'Sarees', 
    price: 4999, 
    description: 'A glamorous black georgette saree adorned with shimmering sequins, designed for cocktail parties and evening events.', 
    imageUrl: 'https://images.unsplash.com/photo-1621029061386-3c0043c72a81?q=80&w=800&auto=format&fit=crop', 
    rating: 4.7, 
    reviewCount: 90 
  },

  // =================================================================
  // Salwar Kameez - Handpicked
  // =================================================================
  {
    id: 2,
    name: 'Azure Anarkali Suit',
    category: 'Salwar Kameez',
    price: 4500,
    description: 'An elegant floor-length Anarkali suit in a calming azure blue. Made from georgette with delicate chikankari embroidery.',
    imageUrl: 'https://images.unsplash.com/photo-1678601231648-52b123259858?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: 7,
    name: 'Pastel Pink Sharara Suit',
    category: 'Salwar Kameez',
    price: 5200,
    description: 'A trendy sharara suit in a delicate pastel pink, embellished with intricate mirror work. Perfect for festive gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1617653281912-2ba93c164b38?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviewCount: 88,
  },
  {
    id: 11,
    name: 'Regal Maroon Patiala Suit',
    category: 'Salwar Kameez',
    price: 3900,
    description: 'A traditional Patiala suit in a rich maroon color with a vibrant phulkari dupatta, offering a classic Punjabi look.',
    imageUrl: 'https://images.unsplash.com/photo-1671579294248-698e6bb45e39?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviewCount: 105,
  },
  { 
    id: 105, 
    name: 'Lavender Straight-Cut Suit', 
    category: 'Salwar Kameez', 
    price: 3600, 
    description: 'A simple and elegant straight-cut suit in a soothing lavender shade, ideal for office wear or small gatherings.', 
    imageUrl: 'https://images.unsplash.com/photo-1678601231648-52b123259858?q=80&w=800&auto=format&fit=crop', 
    rating: 4.4, 
    reviewCount: 65 
  },
  { 
    id: 106, 
    name: 'Mustard Yellow Palazzo Suit', 
    category: 'Salwar Kameez', 
    price: 4100, 
    description: 'A bright and cheerful mustard yellow suit paired with comfortable palazzos, perfect for haldi ceremonies.', 
    imageUrl: 'https://images.unsplash.com/photo-1671579294248-698e6bb45e39?q=80&w=800&auto=format&fit=crop', 
    rating: 4.6, 
    reviewCount: 80 
  },
  
  // =================================================================
  // Lehenga Choli - Handpicked
  // =================================================================
  {
    id: 3,
    name: 'Emerald Green Velvet Lehenga',
    category: 'Lehenga Choli',
    price: 12500,
    description: 'A stunning lehenga choli in emerald green velvet, adorned with sequins and zardozi work. Ideal for a bride or bridesmaid.',
    imageUrl: 'https://images.unsplash.com/photo-1595164486334-b1a5ef2721d7?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 210,
  },
  {
    id: 12,
    name: 'Blush Pink Floral Lehenga',
    category: 'Lehenga Choli',
    price: 8500,
    description: 'A light and flowy organza lehenga with beautiful floral prints in blush pink, perfect for a mehendi function or a summer wedding.',
    imageUrl: 'https://images.unsplash.com/photo-1598429810334-972a9235e054?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 140,
  },
  { 
    id: 107, 
    name: 'Golden Bridal Lehenga', 
    category: 'Lehenga Choli', 
    price: 25000, 
    description: 'An exquisite bridal lehenga in a classic golden hue, featuring heavy and intricate embroidery for a regal look.', 
    imageUrl: 'https://images.unsplash.com/photo-1634548439535-a50d27807775?q=80&w=800&auto=format&fit=crop', 
    rating: 5.0, 
    reviewCount: 50 
  },
  { 
    id: 108, 
    name: 'Navy Blue Sangeet Lehenga', 
    category: 'Lehenga Choli', 
    price: 9500, 
    description: 'A stunning lehenga in navy blue with silver sequin work, designed to sparkle and shine on a sangeet night.', 
    imageUrl: 'https://images.unsplash.com/photo-1631519982467-9b2f69e6b36a?q=80&w=800&auto=format&fit=crop', 
    rating: 4.8, 
    reviewCount: 120 
  },

  // =================================================================
  // Menswear - Handpicked
  // =================================================================
  {
    id: 4,
    name: 'Classic Ivory Sherwani',
    category: 'Menswear',
    price: 9800,
    description: 'A timeless ivory sherwani crafted from raw silk, featuring subtle threadwork and a matching stole. Perfect for grooms.',
    imageUrl: 'https://images.unsplash.com/photo-1613233342689-f53835694a97?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviewCount: 75,
  },
  {
    id: 6,
    name: 'Midnight Blue Nehru Jacket',
    category: 'Menswear',
    price: 2800,
    description: 'A versatile and sophisticated Nehru jacket in a deep midnight blue. Can be paired with kurtas or shirts for a smart look.',
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c67d4c04e5?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviewCount: 112,
  },
  {
    id: 13,
    name: 'Royal Black Jodhpuri Suit',
    category: 'Menswear',
    price: 11200,
    description: 'A majestic Jodhpuri suit in black, tailored to perfection. The bandhgala collar and custom buttons add a touch of royalty.',
    imageUrl: 'https://images.unsplash.com/photo-1622112459020-058a1763557e?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 90,
  },
  { 
    id: 109, 
    name: 'Maroon Velvet Sherwani', 
    category: 'Menswear', 
    price: 15500, 
    description: 'A luxurious velvet sherwani in a deep maroon, perfect for a grand winter wedding and exuding opulence.', 
    imageUrl: 'https://images.unsplash.com/photo-1631163339919-53a906d2d603?q=80&w=800&auto=format&fit=crop', 
    rating: 4.9, 
    reviewCount: 60 
  },
  { 
    id: 110, 
    name: 'Elegant White Pathani Suit', 
    category: 'Menswear', 
    price: 4500, 
    description: 'A comfortable and stylish Pathani suit in crisp white cotton, perfect for festive occasions like Eid.', 
    imageUrl: 'https://images.unsplash.com/photo-1622112458957-c793675f0a6d?q=80&w=800&auto=format&fit=crop', 
    rating: 4.6, 
    reviewCount: 150 
  },
  
  // =================================================================
  // Kurtas - Handpicked
  // =================================================================
  {
    id: 5,
    name: 'Blue Block-Print Kurti',
    category: 'Kurtas',
    price: 1599,
    description: 'A comfortable and stylish daily wear kurti in breathable cotton with a traditional blue block print design.',
    imageUrl: 'https://images.unsplash.com/photo-1617653281987-a7287e1dfa92?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviewCount: 250,
  },
  {
    id: 14,
    name: 'Teal Blue Silk Kurta Set',
    category: 'Kurtas',
    price: 3200,
    description: 'A men\'s kurta set in a beautiful teal blue silk fabric with churidar pants, perfect for pujas and festive family gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1617195852441-a3f2b1d3d9a1?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviewCount: 180,
  },
   {
    id: 15,
    name: 'Bohemian Print Kurti',
    category: 'Kurtas',
    price: 1800,
    description: 'A chic and modern kurti for women with a vibrant bohemian print. Can be paired with jeans or palazzos for a fusion look.',
    imageUrl: 'https://images.unsplash.com/photo-1678601231648-52b123259858?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviewCount: 215,
  },
  { 
    id: 111, 
    name: 'Olive Green Linen Kurta', 
    category: 'Kurtas', 
    price: 2200, 
    description: 'A men\'s kurta made from breathable olive green linen, perfect for a comfortable yet stylish summer look.', 
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c67d4c04e5?q=80&w=800&auto=format&fit=crop', 
    rating: 4.7, 
    reviewCount: 180 
  },
  { 
    id: 112, 
    name: 'Yellow Haldi Kurta for Men', 
    category: 'Kurtas', 
    price: 1900, 
    description: 'A simple yet elegant yellow cotton kurta for men, specifically chosen for Haldi ceremonies.', 
    imageUrl: 'https://images.unsplash.com/photo-1631163339919-53a906d2d603?q=80&w=800&auto=format&fit=crop', 
    rating: 4.5, 
    reviewCount: 200 
  },
  { 
    id: 113, 
    name: 'Red A-Line Kurti', 
    category: 'Kurtas', 
    price: 2100, 
    description: 'A flattering A-line kurti for women in a striking red color, featuring minimal embroidery on the neckline.', 
    imageUrl: 'https://images.unsplash.com/photo-1671579294248-698e6bb45e39?q=80&w=800&auto=format&fit=crop', 
    rating: 4.6, 
    reviewCount: 150 
  },
  
  // =================================================================
  // Accessories - Handpicked
  // =================================================================
  {
    id: 8,
    name: 'Golden Temple Jewellery Set',
    category: 'Accessories',
    price: 3500,
    description: 'An exquisite temple jewellery set with a matte gold finish, featuring intricate carvings of deities. Complements traditional attire perfectly.',
    imageUrl: 'https://images.unsplash.com/photo-1611184913210-9a3b6f8f7f7a?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 180,
  },
  {
    id: 16,
    name: 'Kundan Maang Tikka',
    category: 'Accessories',
    price: 1200,
    description: 'A beautiful Kundan maang tikka with pearl detailing that adds a touch of grace and tradition to any ethnic look.',
    imageUrl: 'https://images.unsplash.com/photo-1629224329242-993d25f3c932?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 95,
  },
  { 
    id: 114, 
    name: 'Silver Oxidised Jhumkas', 
    category: 'Accessories', 
    price: 950, 
    description: 'Trendy silver oxidised jhumkas with intricate patterns, perfect for a bohemian or ethnic look.', 
    imageUrl: 'https://images.unsplash.com/photo-1620292494501-a1282c6a617a?q=80&w=800&auto=format&fit=crop', 
    rating: 4.7, 
    reviewCount: 300 
  },
  { 
    id: 115, 
    name: 'Pearl Choker Necklace', 
    category: 'Accessories', 
    price: 2500, 
    description: 'An elegant multi-strand pearl choker necklace for a classic, sophisticated look with sarees or lehengas.', 
    imageUrl: 'https://images.unsplash.com/photo-1593560534244-a016b81878b2?q=80&w=800&auto=format&fit=crop', 
    rating: 4.8, 
    reviewCount: 120 
  },
  { 
    id: 116, 
    name: 'Embroidered Potli Bag', 
    category: 'Accessories', 
    price: 1500, 
    description: 'A beautiful red potli bag with golden embroidery to complement your ethnic wear and carry essentials in style.', 
    imageUrl: 'https://images.unsplash.com/photo-1591357223683-13c58e734547?q=80&w=800&auto=format&fit=crop', 
    rating: 4.6, 
    reviewCount: 180 
  },
  { 
    id: 117, 
    name: 'Men\'s Silk Dupatta', 
    category: 'Accessories', 
    price: 1800, 
    description: 'A fine silk dupatta for men in a beige color with a simple border, designed to be paired with sherwanis and kurtas.', 
    imageUrl: 'https://images.unsplash.com/photo-1622112459020-058a1763557e?q=80&w=800&auto=format&fit=crop', 
    rating: 4.7, 
    reviewCount: 80 
  },
];

// =================================================================
// Programmatic population for a larger catalog
// =================================================================

const imagePools = {
    Sarees: [
        'https://images.unsplash.com/photo-1659970177721-9d201a7d65a8?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1617653281987-a7287e1dfa92?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1595164486334-b1a5ef2721d7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610189335843-3c7f2156414b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1694111382343-9a3b68f5c88b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1694111382414-f5825a073549?q=80&w=800&auto=format&fit=crop',
    ],
    Kurtas: [
        'https://images.unsplash.com/photo-1671579294248-698e6bb45e39?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1678601231648-52b123259858?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1617195852441-a3f2b1d3d9a1?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596422846543-75c67d4c04e5?q=80&w=800&auto=format&fit=crop',
    ],
    Menswear: [
        'https://images.unsplash.com/photo-1613233342689-f53835694a97?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631163339919-53a906d2d603?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1622112459020-058a1763557e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1622112458957-c793675f0a6d?q=80&w=800&auto=format&fit=crop',
    ],
    'Lehenga Choli': [
        'https://images.unsplash.com/photo-1634548439535-a50d27807775?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598429810334-972a9235e054?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631519982467-9b2f69e6b36a?q=80&w=800&auto=format&fit=crop',
    ],
    'Salwar Kameez': [
        'https://images.unsplash.com/photo-1617653281912-2ba93c164b38?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1678601231648-52b123259858?q=80&w=800&auto=format&fit=crop',
    ],
    Accessories: [
        'https://images.unsplash.com/photo-1629224329242-993d25f3c932?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1620292494501-a1282c6a617a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1593560534244-a016b81878b2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1591357223683-13c58e734547?q=80&w=800&auto=format&fit=crop',
    ],
};

const productNouns = ['Elegance', 'Radiance', 'Heritage', 'Aura', 'Splendor', 'Grace', 'Charm'];
const productAdjectives = ['Embroidered', 'Printed', 'Woven', 'Classic', 'Modern', 'Festive', 'Royal'];

const additionalProducts: Product[] = [];
const categories = Object.keys(imagePools);

for (let i = 0; i < 80; i++) {
    const category = categories[i % categories.length];
    const categoryImages = imagePools[category as keyof typeof imagePools];
    const imageUrl = categoryImages[i % categoryImages.length];
    
    const noun = productNouns[i % productNouns.length];
    const adj = productAdjectives[i % productAdjectives.length];
    const name = `${adj} ${noun} ${category.slice(0, -1)}`;

    additionalProducts.push({
        id: 200 + i,
        name: name,
        category: category,
        price: Math.floor(Math.random() * 8000) + 1500,
        description: `A beautifully crafted piece from our ${category} collection, embodying the spirit of ${noun.toLowerCase()}.`,
        imageUrl: imageUrl,
        rating: Math.round((Math.random() * 0.8 + 4.2) * 10) / 10,
        reviewCount: Math.floor(Math.random() * 200) + 20,
    });
}

mockProducts.push(...additionalProducts);
// Shuffle the array to mix handpicked and generated products
mockProducts = mockProducts.sort(() => Math.random() - 0.5);