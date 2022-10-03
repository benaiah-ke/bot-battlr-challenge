import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, bots, armyBots, setBots, setArmyBots }) {
  function toggleArmy(event){
    event.stopPropagation()

    // Check if bot is in army
    var exists = false;

    armyBots.forEach((armyBot) => {
      if(armyBot.id === bot.id) {
        exists = true;
      }
    })

    if(!exists){
      // Add
      setArmyBots([...armyBots, bot]);
    }else{
      // Remove
      setArmyBots(
        armyBots.filter((armyBot) => {
          return armyBot.id !== bot.id;
        })
      )
    }

  }

  function deleteBot(botToRemove){
    // Remove
    fetch('http://localhost:8002/bots/'+botToRemove.id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setBots(
          bots.filter((bot) => {
            return bot.id !== botToRemove.id;
          })
        )
      })
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={toggleArmy}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => { deleteBot(bot) }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
