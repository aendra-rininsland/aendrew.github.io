import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.css';

function TrippyBars({width, height, children, currX}) {
  const numBars = width > 1000 ? 50 : width > 500 ? 50 : 10;
  const barWidth = width / numBars;
  const barHeight = (i) => height / Math.sqrt(Math.abs(((i * barWidth) + barWidth / 2) - currX)) * 5;

  return (
    <section className="trippy bars">
      <svg width={width} height={height} style={{marginBottom: '-5px'}}>
        {
          [...Array(numBars).keys()].map(i => (
            <rect
              key={i}
              x={i * barWidth}
              y={!~[-Infinity, Infinity].indexOf(barHeight(i)) ? height - barHeight(i): 0}
              width={barWidth}
              height={!~[-Infinity, Infinity].indexOf(barHeight(i)) ? barHeight(i) : height}
              fill="tomato"
              stroke="black"
            />
          ))
        }
      </svg>
      <div className={styles.overlay} style={{width: `${width}px`, height: `${height}px`}}>
        {children}
      </div>
    </section>
  );
}

TrippyBars.propTypes = {
  width:  propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  children: propTypes.node,
  currX: propTypes.number,
};

export default connect((state) => {
  return {
    currX: state.mouseMove.x,
  };
})(TrippyBars);
