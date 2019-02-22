export const UPDATE_GAME = 'UPDATE_GAME'
export const CONCILIATION_WITH_SERVER = "CONCILIATION_WITH_SERVER"

/*
const newGameStarted = game => ({
    type:NEW_GAME,
    game
})

export const newGame = (game) => (dispatch) => {
    dispatch(newGameStarted(game))
}

const gameOverTotal = game => ({
    type:GAME_OVER,
    game
})

export const gameOver = (game) => (dispatch) => {
    dispatch(gameOverTotal(game))
}*/

export const gameCorrected = correction => ({
    type:CONCILIATION_WITH_SERVER,
    correction
})

export const gameCorrection = (correction) => (dispatch) => {
    dispatch(gameCorrected(correction))
}