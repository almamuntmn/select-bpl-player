import { useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ players }) => {

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState("available");

    const handledAddSelectedPlayers = (player) => {
        if (!selectedPlayers.includes(player))
            console.log('Player added')
        setSelectedPlayers([...selectedPlayers, player]);

    };

    // Filter available players
    const availablePlayers = players.filter(
        player => !selectedPlayers.includes(player)
    );


    return (
        <div className="">
            <div className="flex justify-between mt-15 items-center">
                <h1 className="text-2xl font-medium">
                    {activeTab === "available" ? "Available Players" : "Selected Players"}
                </h1>
                <div className="border border-gray-400 rounded-md">
                    <button
                        className={activeTab === "available" ? "font-semibold bg-amber-300 py-2 px-4" : "py-2 px-4"}
                        onClick={() => setActiveTab("available")}
                    >
                        Available ({availablePlayers.length})
                    </button>
                    <button
                        className={activeTab === "selected" ? "font-semibold bg-amber-300 py-2 px-4" : "py-2 px-4"}
                        onClick={() => setActiveTab("selected")}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-6">
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
                        selectedPlayers.map((selectedPlayers, idx) => (<SelectedPlayers
                            key={idx}
                            selectedPlayers={selectedPlayers}
                        ></SelectedPlayers>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Players;