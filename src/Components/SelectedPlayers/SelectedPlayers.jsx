import { ToastContainer } from "react-toastify";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer"

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer, setActiveTab }) => {

    return (
        <>
            {
                selectedPlayers.map((player, index) => (
                    <SelectedPlayer key={index} selectedPlayer={player}
                        handleRemovePlayer={handleRemovePlayer} />
                ))
            }

            <button
                onClick={() => setActiveTab("available")} 
                disabled={selectedPlayers.length >= 7}
                className={`mt-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-amber-300 ${selectedPlayers.length >= 7
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-300 text-black"
                    }`}
            >
                Add More Player
            </button>
            <ToastContainer />
        </>
    );
};


export default SelectedPlayers;