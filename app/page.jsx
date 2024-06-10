import Image from "next/image";
import Link from "next/link";
import Featued from "./components/featured/Featued";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import CategoryList from "./components/categoryList/Category";
// import AuthProvider from "./providers/AuthProvider";

const getDataPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}


export default async function Home() {
  const data = await getDataPosts();
  console.log("sss", data);

  return (
    // <AuthProvider>

    <main className="">

      <Featued />
      <CategoryList />
      <div className="flex gap-14 flex-1" >
        <CardList data={data} />
        <Menu />
      </div>
    </main>

    // </AuthProvider>

  );
}
