import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';


const SelectedPlayer = ({ selectedPlayer, handleRemovePlayer }) => {
    const { name, category, player_img } = selectedPlayer;

        const notify = () => toast.success(`You have removed ${name}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });

    return (
        <div className="w-full flex items-center justify-between border border-gray-300 mt-4 py-3 px-3 rounded-xl">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 object-cover rounded-lg" src={player_img} alt={name} />
                <div className="text-left">
                    <h1 className="font-semibold">{name}</h1>
                    <p className="text-[12px] text-gray-400">{category}</p>
                </div>
            </div>
            <RiDeleteBin6Line className="text-red-500 cursor-pointer" onClick={() => {handleRemovePlayer(selectedPlayer); (notify())}}/>
        </div>
    );
};
export default SelectedPlayer;