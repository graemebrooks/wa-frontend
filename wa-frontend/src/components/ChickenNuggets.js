import React, { useRef } from 'react';

const ChickenNuggets = () => {
  const audioRef = useRef(null);

  return (
    <>
      <button onClick={() => audioRef.current.play()}>
        Click here for chicken nuggets!
      </button>
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/animals/crow_call.ogg" />
    </>
  );
};

export default ChickenNuggets;