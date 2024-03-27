// src/lib/fsGetter.js
const fs = require("fs");
const { join } = require("path");

const blogsDirectory = join(process.cwd(), "_blogs");
const portfolioDirectory = join(process.cwd(), "_portfolio");
const servicesDirectory = join(process.cwd(), "_services");
const membersDirectory = join(process.cwd(), "_members");

function getBlogSlugs() {
    return fs.readdirSync(blogsDirectory);
}

function getPortfolioSlugs() {
    return fs.readdirSync(portfolioDirectory);
}

function getServiceSlugs() {
    return fs.readdirSync(servicesDirectory);
}

function getMemberSlugs() {
    return fs.readdirSync(membersDirectory);
}

// Exporting functions
module.exports = {
    getBlogSlugs,
    getPortfolioSlugs,
    getServiceSlugs,
    getMemberSlugs,
    blogsDirectory,
    portfolioDirectory,
    servicesDirectory,
    membersDirectory
};
