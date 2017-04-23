import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components'

export function TrippyBars({width, height, cursorPosition, children}) {
  const numBars = width > 1000 ? 50 : width > 500 ? 50 : 10;
  const barWidth = width / numBars;
  // const barHeight = (i) => Math.sqrt(height * (Math.abs(((i * barWidth) + barWidth / 2) - cursorPosition.x)) * 3);
  const barHeight = (i) => height / Math.sqrt(Math.abs(((i * barWidth) + barWidth / 2) - cursorPosition.x)) * 5;
  const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: ${height}px;
    width: ${width}px;
    display: flex;
    justify-content: center;
  `;
  return (
    <section className="trippy bars">
      <svg width={width} height={height} style={{marginBottom: '-5px'}}>
        {
          [...Array(numBars).keys()].map(i => (
            <rect
              key={i}
              x={i * barWidth}
              y={height - barHeight(i)}
              width={barWidth}
              height={barHeight(i)}
              fill="tomato"
            />
          ))
        }
      </svg>
      <Overlay>
        {children}
      </Overlay>
    </section>
  );
}

TrippyBars.propTypes = {
  width:  propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  cursorPosition: propTypes.object,
  children: propTypes.node,
};
