import React from 'react';

const SliderControls = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
  return (
    <div className="slider-controls">
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        className="slider-button prev"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="slider-button next"
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderControls;
