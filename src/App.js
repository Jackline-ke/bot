import React, {useEffect, useState}from "react";
import BotArmy from "./components/BotArmy";
import BotList from "./components/BotList";

function App() {

  const [bots, setBots] = useState([])
  const [yourBots, setYourBots] = useState([])

  useEffect(() => {
    fetch("https://api.npoint.io/34e96a5f4423d0be7fc1/bots/")
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }, []);

  const addBot = (bot) => {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot])
    }
  }

  const removeBot = (bot) => {
    setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
  }

  return (
    <div>
      <BotArmy bots={yourBots} removeBot={removeBot}/>
      <BotList bots={bots} botFunction={addBot}/>
    </div>
  )
}

export default App;