import Image from "next/image";
import Link from "next/link";
import Featued from "./components/featured/Featued";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import CategoryList from "./components/categoryList/Category";


export default function Home() {
  return (
    <main className="">

      <Featued />
      <CategoryList />
      <div className="flex gap-14 flex-1" >
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
