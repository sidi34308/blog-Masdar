import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";



const page = () => {


    return (

        <div>
            <h1 className="text-black bg-black "> sport</h1>
            <div className="flex gap-14 flex-1" >
                <CardList />
                <Menu />
            </div>
        </div>
    );
};

export default page;
