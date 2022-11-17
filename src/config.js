const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Esqueletrons";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "LC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  //Gris
  { 
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "BgGIF" },
      { name: "Skeleton1"},
      { name: "Pants" },
      { name: "Shoes" },
      { name: "TShirt" },
      { name: "HipAccesories" },
      { name: "Craneo1" },
      { name: "Brillo" },
      { name: "Headtop" },      
    ],
  },
  //Verde
  // {
  //   growEditionSizeTo: 11,
  //   layersOrder: [
  //     { name: "BgGIF" },
  //     { name: "Skeleton2"},
  //     { name: "Pants" },
  //     { name: "Shoes" },
  //     { name: "TShirt" },
  //     { name: "HipAccesories" },
  //     { name: "Craneo2" },
  //     { name: "Brillo" },
  //     { name: "Headtop" },      
  //   ],
  // },
  // //Azul
  // {
  //   growEditionSizeTo: 10,
  //   layersOrder: [
  //     { name: "BgGIF" },
  //     { name: "Skeleton3"},
  //     { name: "Pants" },
  //     { name: "Shoes" },
  //     { name: "TShirt" },
  //     { name: "HipAccesories" },
  //     { name: "Craneo3" },
  //     { name: "Brillo" },
  //     { name: "Headtop" },      
  //   ],
  // },
  // //Blanco Gris
  // {
  //   growEditionSizeTo: 3,
  //   layersOrder: [
  //     { name: "BgGIF" },
  //     { name: "Skeleton4"},
  //     { name: "Pants" },
  //     { name: "Shoes" },
  //     { name: "TShirt" },
  //     { name: "HipAccesories" },
  //     { name: "Craneo4" },
  //     { name: "Brillo" },
  //     { name: "Headtop" },      
  //   ],
  // },
  // //Dorado
  // {
  //   growEditionSizeTo: 1,
  //   layersOrder: [
  //     { name: "BgGIF" },
  //     { name: "Skeleton5"},
  //     { name: "Pants" },
  //     { name: "Shoes" },
  //     { name: "TShirt" },
  //     { name: "HipAccesories" },
  //     { name: "Craneo5" },
  //     { name: "Brillo" },
  //     { name: "Headtop" },      
  //   ],
  // },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1920,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 10 / 256,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
