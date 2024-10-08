import React from 'react';

const SliderControls = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
  return (
    <div className="slider-controls">
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        className="slider-button prev"
      >
        &lt; {/* This represents the '<' icon */}
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="slider-button next"
      >
        &gt; {/* This represents the '>' icon */}
      </button>
    </div>
  );
};

export default SliderControls;
