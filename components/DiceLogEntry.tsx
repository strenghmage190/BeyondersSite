import React from 'react';

interface DiceLogEntryProps {
  roll: {
    character_name: string;
    roll_name: string;
    result: string;
    details: string;
    roll_data?: any;
    created_at: string;
  };
}

const DiceLogEntry: React.FC<DiceLogEntryProps> = ({ roll }) => {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const renderRollDetails = () => {
    if (!roll.roll_data) {
      // Fallback to old format or simple display
      return <>{roll.result}</>;
    }

    const { type, totalSuccesses, soulRolls, assimilationRolls, rolls } = roll.roll_data;

    if (type === 'absorption' || !soulRolls) {
      // Absorption roll
      return (
        <>
          Absorção: {totalSuccesses} sucesso(s) ({(rolls || []).join(', ')})
        </>
      );
    } else {
      // Skill roll
      const soulStr = soulRolls ? `Alma [${soulRolls.join(', ')}]` : '';
      const assimStr = assimilationRolls ? `Assimilação [${assimilationRolls.join(', ')}]` : '';
      const madness = roll.roll_data.madness_triggers > 0 ? ' ⚠️ Intrusão de Loucura' : '';
      return (
        <>
          {roll.roll_name}: {totalSuccesses} sucesso(s) ({soulStr}{soulStr && assimStr ? ', ' : ''}{assimStr}){madness}
        </>
      );
    }
  };

  return (
    <li className="ms-dice-log-entry">
      <div className="dice-log-character">{roll.character_name}</div>
      <div className="dice-log-details">
        {renderRollDetails()}
      </div>
      <div className="dice-log-time">{formatTime(roll.created_at)}</div>
    </li>
  );
};

export default DiceLogEntry;
