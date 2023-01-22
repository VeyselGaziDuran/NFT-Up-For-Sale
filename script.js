const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const FormData = require("form-data");

const API_KEY = "your_api_key"; // OpenSea API anahtarınızı buraya yazın
const imageFolder = "img"; // Resimlerin yer aldığı klasörün adı
const baseName = "MyNFT"; // NFTlerin adlarının başlangıç kısmı
const description = "My first NFT"; // NFTlerin açıklaması
const external_link = "https://example.com/nft"; // NFTlere ait dış bağlantı
const price = "1000000000000000000"; // NFTlerin satış fiyatı (wei cinsinden)

let i = 1; // NFTlerin adlarını saymak için kullanılan sayaç

const uploadImage = async (image, name) => {
    const form = new FormData();
    form.append("image", fs.createReadStream(image));
    form.append("name", name);
    form.append("description", description);
    form.append("external_link", external_link);
    form.append("price", price);
    const headers = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${API_KEY}`
    };
    const response = await fetch("https://api.opensea.io/v1/assets", {
        method: "POST",
        body: form,
        headers: headers
    });
    return response.json();
};

const uploadImages = async () => {
    const imagePaths = fs
        .readdirSync(imageFolder)
        .filter(file => path.extname(file) === ".png" || path.extname(file) === ".jpg");
    const promises = imagePaths.map(imagePath => {
        const image = path.join(imageFolder, imagePath);
        const name = `${baseName}${i}`;
        i++;
        return uploadImage(image, name);
    });
    const results = await Promise.all(promises);
    console.log(results);
};

uploadImages();