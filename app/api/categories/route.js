import Crud from "@/prisma/crud";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await Crud.getAllCategories();
        return Response.json(categories);
    } catch (e) {
        console.error(e);
        return Response.json({ message: "Error fetching categories" }, { status: 500 });
    }
};
