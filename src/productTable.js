export const PRODUCT_CATEGORIES = [
  "Smart Wearables",
  "Smart Office",
  "Smart Peripherals",
];

// Product catalog table. Update these rows when product naming, model, category,
// image, or showcase badge changes; pages derive their product cards from here.
export const PRODUCT_ROWS = [
  {
    category: "Smart Wearables",
    name: "AI Glasses",
    model: "M08",
    image: "products/multifunction-ai-glasses/main.png",
    badge: "HOT",
    externalUrl: "",
  },
  {
    category: "Smart Wearables",
    name: "Smart Watch",
    model: "QX11",
    image: "products/smartwatch/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Wearables",
    name: "Smart Ring",
    model: "R7",
    image: "products/smart-ring/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Wearables",
    name: "AI Translation Earphone",
    model: "BY16",
    image: "products/real-time-translation-earbuds/main.png",
    badge: "HOT",
    externalUrl: "",
  },
  {
    category: "Smart Wearables",
    name: "Fans",
    model: "F01",
    image: "products/fans/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "AI Translation Machine",
    model: "Z6",
    image: "products/solar-aroma-diffuser/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "Meeting Camera",
    model: "C03",
    image: "products/drone-gimbal-ai-camera/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "Smart Guider Tour",
    model: "TS10",
    image: "products/portable-ai-voice-recorder/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "Recorder",
    model: "K2",
    image: "products/hd-desktop-webcam-mic/main.png",
    badge: "HOT",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "Drone",
    model: "H20",
    image: "products/drone/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Office",
    name: "Electric Suitcase",
    model: "FE01",
    image: "products/electric-suitcase/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Peripherals",
    name: "Keyboard",
    model: "K68",
    image: "products/keyboard/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Peripherals",
    name: "Mouse",
    model: "MS01",
    image: "products/mouse/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Peripherals",
    name: "Smart Power Bank",
    model: "P01",
    image: "products/powerbank/main.png",
    badge: "NEW",
    externalUrl: "",
  },
  {
    category: "Smart Peripherals",
    name: "Cooler for Cell Phone",
    model: "K563",
    image: "products/cooler/main.png",
    badge: "NEW",
    externalUrl: "",
  },
];

export function getProductDisplayName(product) {
  return `${product.name} - ${product.model}`;
}

export function getProductGroups() {
  return PRODUCT_CATEGORIES.map((category) => [
    category,
    PRODUCT_ROWS.filter((product) => product.category === category),
  ]);
}
