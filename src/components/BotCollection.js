import React, { useEffect } from "react";
import BotCard from "./BotCard";


function BotCollection({bots, armyBots, setBots, setArmyBots}) {

  useEffect(() => {
      fetch('http://localhost:8002/bots') 
          .then((response) => response.json())
          .then((bots) => { setBots(bots) })
  }, [])

  const botList = bots.map((bot) => {
    return <BotCard
      key={bot.id}
      bot={bot}
      bots={bots}
      armyBots={armyBots}
      setBots={setBots}
      setArmyBots={setArmyBots}
      />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {botList}
      </div>
    </div>
  );
}

export default BotCollection;
