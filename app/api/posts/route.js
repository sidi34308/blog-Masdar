import Crud from "@/prisma/crud";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const posts = await Crud.getAllPosts();
        return Response.json(posts);
    } catch (e) {
        console.error(e);
        return Response.json({ message: "Error fetching posts" }, { status: 500 });
    }
};
