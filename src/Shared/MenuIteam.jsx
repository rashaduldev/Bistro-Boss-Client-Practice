

const MenuIteam = ({item}) => {
    const {name,image,category,price,recipe}=item;
    return (
        <div className="flex flex-col md:flex-row space-x-4 gap-4 ">
            <img className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuIteam;