/*
    Assume that the body of the request has form:
        { player: name, game: code }

    This controller should:
        - Get the pending game with the correct code from the pendingGameStore
        - Add a new player to the pending game with the correct name
        - Redirect the user to lobby.html with the name and game code as query parameters
        - Log a message to the console to record that a new player was added to this game
*/
export const enterNameController = (req, res) => {

}