const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User CRUD
async function createUser(data) {
    return await prisma.user.create({ data });
}

async function getUser(id) {
    return await prisma.user.findUnique({ where: { id } });
}

async function getAllUsers() {
    return await prisma.user.findMany();
}

async function updateUser(id, data) {
    return await prisma.user.update({ where: { id }, data });
}

async function deleteUser(id) {
    return await prisma.user.delete({ where: { id } });
}

// Post CRUD
async function createPost(data) {
    return await prisma.post.create({ data });
}

async function getPost(id) {
    return await prisma.post.findUnique({ where: { id } });
}

async function getAllPosts() {
    return await prisma.post.findMany();
}

async function updatePost(id, data) {
    return await prisma.post.update({ where: { id }, data });
}

async function deletePost(id) {
    return await prisma.post.delete({ where: { id } });
}

// Comment CRUD
async function createComment(data) {
    return await prisma.comment.create({ data });
}

async function getComment(id) {
    return await prisma.comment.findUnique({ where: { id } });
}

async function getAllComments() {
    return await prisma.comment.findMany();
}

async function updateComment(id, data) {
    return await prisma.comment.update({ where: { id }, data });
}

async function deleteComment(id) {
    return await prisma.comment.delete({ where: { id } });
}

// Category CRUD
async function createCategory(data) {
    return await prisma.category.create({ data });
}

async function getCategory(id) {
    return await prisma.category.findUnique({ where: { id } });
}

async function getAllCategories() {
    return await prisma.category.findMany();
}

async function updateCategory(id, data) {
    return await prisma.category.update({ where: { id }, data });
}

async function deleteCategory(id) {
    return await prisma.category.delete({ where: { id } });
}

// Exporting CRUD functions
module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    createPost,
    getPost,
    getAllPosts,
    updatePost,
    deletePost,
    createComment,
    getComment,
    getAllComments,
    updateComment,
    deleteComment,
    createCategory,
    getCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
};
