const Player = ({ player }) => {

    const { player_cover, player_img, name, country, category, price } = player

    return (
        <div className="border border-gray-300 rounded-xl p-4 text-left mt-10">
            <img className="rounded-lg mb-4" src={player_cover} alt="" />
            <div className="">
                <div className="flex items-center gap-3 mb-4">
                    <img className="w-8 h-8 object-cover rounded-full" src={player_img} alt="" />
                    <h1 className="text-lg font-semibold">{name}</h1>
                </div>
                <p className="mb-4">{country}</p>
                <hr className="border border-gray-300" />
            </div>
            <div className="mt-4 font-medium">
                <h3 className="mb-3">Rating</h3>
                <h3 className="mb-3">{category}</h3>
                <div className="flex justify-between">
                    <h3>Price: ${price}</h3>
                    <button className="text-sm border border-gray-300 py-1 px-2 rounded-md font-light">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;