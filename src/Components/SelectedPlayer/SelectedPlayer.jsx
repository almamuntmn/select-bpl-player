import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({selectedPlayers}) => {
    const { name, category, player_img } = selectedPlayers;
    console.log(name, category);

    return (
        <div className="w-full flex items-center justify-between border border-gray-300 mt-4 py-3 px-3 rounded-xl">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 object-cover rounded-lg" src={player_img} alt="" />
                <div className="text-left">
                    <h1 className="font-semibold">{name}</h1>
                    <p className="text-[12px] text-gray-400">{category}</p>
                </div>
            </div>
            <RiDeleteBin6Line className="text-red-500" />
        </div>
    );
};

export default SelectedPlayer;