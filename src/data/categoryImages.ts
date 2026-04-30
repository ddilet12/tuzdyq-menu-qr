// Curated Unsplash photo IDs per menu category.
// Rendered as square, high-res, macro food photography crops.
const u = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${w}&q=80`;

export const categoryImages: Record<string, string> = {
  sets: u('1579871494447-9811cf80d66c'),            // sushi & pizza sharing set
  salads: u('1512621776951-a57141f2eefd'),         // fresh gourmet salad
  hot_appetizers: u('1541592106381-b31e9677c0e5'), // crispy cheese sticks
  soups: u('1547592180-85f173990554'),             // hot soup bowl
  kazakh: u('1574484284002-952d92456975'),         // pilaf / oriental
  veal: u('1558030006-450675393462'),              // veal / beef plate
  poultry: u('1532550907401-a500c9a57435'),        // roasted chicken
  sausages: u('1601050690597-df0568f70950'),       // grilled sausages
  pasta: u('1551183053-bf91a1d81141'),             // creamy pasta
  steaks: u('1558030006-450675393462'),            // ribeye steak
  fish: u('1467003909585-2f8a72700288'),           // grilled salmon
  fried_fish: u('1535140728325-a4d3707eee94'),    // fried fish home style
  fish_sets: u('1579584425555-c3ce17fd4351'),     // sushi / fish set
  group: u('1555939594-58d7cb561ad1'),             // sharing platter
  breakfast: u('1533085601906-44470477200d'),         // breakfast spread
  pizza: u('1513104890138-7c749659a591'),          // pizza macro
  rolls: u('1611143669185-af224c5e3252'),          // sushi rolls
  cold_appetizers: u('1546069901-ba9599a7e63c'), // appetizers platter
  bakery: u('1565299543923-37dd37887442'),         // khachapuri / bread
  bread: u('1509440159596-0249088772ff'),          // traditional bread
  sides: u('1518977676601-b53f82aba655'),          // french fries / sides
};

export const fallbackImage = categoryImages.salads;
