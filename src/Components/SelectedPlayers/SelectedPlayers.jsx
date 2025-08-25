
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer"


const SelectedPlayers = ({ selectedPlayers }) => {

    return (
        <>
            <SelectedPlayer selectedPlayers={selectedPlayers}></SelectedPlayer>


            <button>Add More Player</button>
        </>


    );
};

export default SelectedPlayers;