import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  const [armyBots, setArmyBots] = useState([])

  return (
    <div>
      <YourBotArmy
        bots={bots}
        armyBots={armyBots}
        setBots={setBots}
        setArmyBots={setArmyBots}
      />
      <BotCollection
        bots={bots}
        armyBots={armyBots}
        setBots={setBots}
        setArmyBots={setArmyBots}
      />
    </div>
  )
}

export default BotsPage;
