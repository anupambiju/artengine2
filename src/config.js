"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "Academic score of a student visualised";
const baseUri = "ipfs://QmX3fjnSv57wA3qSnumYxnRMCznUdECu1nX1myNy8pYe13";

const outputJPEG = false; 
const startIndex = 1;

const format = {
  width: 512,
  height: 512,
  smoothing: false, 
};

const background = {
  generate: true,
  brightness: "80%",
};

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    namePrefix: "AcadScore",
    layersOrder: [
      { name: "Bg/zero",options: {bypassDNA: true,},},
      {name: "Bod/zero",options: {bypassDNA: true,},},
      {name: "cap/zero",options: {bypassDNA: true,},},
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const emptyLayerName = "NONE";


const traitValueOverrides = {
  Helmet: "Space Helmet",
  "gold chain": "GOLDEN NECKLACE",
};


const extraAttributes = () => [];

const hashImages = true;

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const useRootTraitType = true;

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  format,
  hashImages,
  layerConfigurations,
  layersDir,
  outputJPEG,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
