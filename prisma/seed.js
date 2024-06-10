const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create categories
    const categories = await prisma.category.createMany({
        data: [
            { slug: 'politics', title: 'سياسة', img: 'politics.jpg' },
            { slug: 'economy', title: 'اقتصاد', img: 'economy.jpg' },
            { slug: 'sports', title: 'رياضة', img: 'sports.jpg' },
            { slug: 'technology', title: 'تكنولوجيا', img: 'technology.jpg' },
            { slug: 'health', title: 'صحة', img: 'health.jpg' },
            { slug: 'culture', title: 'ثقافة', img: 'culture.jpg' },
        ],
    });

    // Create users
    const users = await prisma.user.createMany({
        data: [
            { name: 'أحمد محمد', email: 'ahmed@example.com', emailVerified: new Date(), image: 'ahmed.jpg' },
            { name: 'فاطمة بنت أحمد', email: 'fatima@example.com', emailVerified: new Date(), image: 'fatima.jpg' },
            { name: 'محمد ولد علي', email: 'mohamed@example.com', emailVerified: new Date(), image: 'mohamed.jpg' },
        ],
    });

    // Create posts
    const posts = await prisma.post.createMany({
        data: [
            { slug: 'post-1', title: 'عنوان المقال الأول', desc: 'وصف المقال الأول', img: 'post1.jpg', views: 100, catSlug: 'politics', userEmail: 'ahmed@example.com' },
            { slug: 'post-2', title: 'عنوان المقال الثاني', desc: 'وصف المقال الثاني', img: 'post2.jpg', views: 200, catSlug: 'economy', userEmail: 'fatima@example.com' },
            { slug: 'post-3', title: 'عنوان المقال الثالث', desc: 'وصف المقال الثالث', img: 'post3.jpg', views: 300, catSlug: 'sports', userEmail: 'mohamed@example.com' },
            { slug: 'post-4', title: 'عنوان المقال الرابع', desc: 'وصف المقال الرابع', img: 'post4.jpg', views: 400, catSlug: 'technology', userEmail: 'ahmed@example.com' },
            { slug: 'post-5', title: 'عنوان المقال الخامس', desc: 'وصف المقال الخامس', img: 'post5.jpg', views: 500, catSlug: 'health', userEmail: 'fatima@example.com' },
            { slug: 'post-6', title: 'عنوان المقال السادس', desc: 'وصف المقال السادس', img: 'post6.jpg', views: 600, catSlug: 'culture', userEmail: 'mohamed@example.com' },
        ],
    });

    // Create comments
    const comments = await prisma.comment.createMany({
        data: [
            { desc: 'تعليق على المقال الأول', userEmail: 'ahmed@example.com', postSlug: 'post-1' },
            { desc: 'تعليق على المقال الثاني', userEmail: 'fatima@example.com', postSlug: 'post-2' },
            { desc: 'تعليق على المقال الثالث', userEmail: 'mohamed@example.com', postSlug: 'post-3' },
            { desc: 'تعليق على المقال الرابع', userEmail: 'ahmed@example.com', postSlug: 'post-4' },
            { desc: 'تعليق على المقال الخامس', userEmail: 'fatima@example.com', postSlug: 'post-5' },
            { desc: 'تعليق على المقال السادس', userEmail: 'mohamed@example.com', postSlug: 'post-6' },
        ],
    });

    console.log('Seeding finished.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
