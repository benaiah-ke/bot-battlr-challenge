import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, armyBots, setBots, setArmyBots }) {

  const botList = armyBots.map((bot) => {
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
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botList}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
