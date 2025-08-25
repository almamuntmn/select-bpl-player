import { useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from 'react-toastify';

const Players = ({ players, coin, setCoin }) => {

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState("available");


    const handledAddSelectedPlayers = (player) => {
        if (selectedPlayers.length >= 7) {
            toast.error("You can’t select more than 7 players!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
            });
            return;
        }

        if (coin < player.price) {
            toast.error("You don't have enough coins to add this player!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
            });
            return;
        }

        if (!selectedPlayers.includes(player)) {
            toast.success("Your Player Added", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            setSelectedPlayers([...selectedPlayers, player]);
            setCoin(coin - player.price);
        }
    };

    const handleRemovePlayer = (playerToRemove) => {
        setSelectedPlayers(
            selectedPlayers.filter(player => player.name !== playerToRemove.name)
        );
        setCoin(coin + playerToRemove.price);
    };

    const availablePlayers = players.filter(
        player => !selectedPlayers.includes(player)
    );


    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-medium">
                    {activeTab === "available" ? "Available Players" : "Selected Players"}
                </h1>
                <div className="flex border border-gray-400 rounded-md overflow-hidden">
                    <button
                        className={activeTab === "available" ? "font-semibold bg-amber-300 py-2 px-3 sm:px-4" : "py-2 px-3 sm:px-4"}
                        onClick={() => setActiveTab("available")}
                    >
                        Available ({availablePlayers.length})
                    </button>
                    <button
                        className={activeTab === "selected" ? "font-semibold bg-amber-300 py-2 px-3 sm:px-4" : "py-2 px-3 sm:px-4"}
                        onClick={() => setActiveTab("selected")}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-6 mt-6">
                    {activeTab === "available" &&
                        availablePlayers.map((player, idx) => <Player
                            key={idx}
                            player={player}
                            handledAddSelectedPlayers={handledAddSelectedPlayers}
                        ></Player>)
                    }
                </div>

                <div className="mt-6">
                    {activeTab === "selected" &&
                        <SelectedPlayers selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} setActiveTab={setActiveTab} />
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Players;
