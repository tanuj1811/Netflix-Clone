import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './player-styles.js'

const PlayerContext = createContext()

const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(true)

  return (
    <PlayerContext.Provider value={[showPlayer, setShowPlayer]}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </Button>
  )
}

export { PlayerContext }
export default Player
