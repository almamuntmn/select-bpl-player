import Player from "../Player/Player";

const Players = ({ players }) => {
    return (
        <div className="">
            <div className="flex justify-between mt-15 items-center">
                <h1 className="text-2xl font-medium">Available Players</h1>
                <div className="border border-gray-400 rounded-md">
                    <button className="py-2 px-4">Available</button>
                    <button className="py-2 px-4">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    players.map((player, idx) => <Player key={idx} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;