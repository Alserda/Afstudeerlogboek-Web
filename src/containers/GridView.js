import React from 'react';

export default class GridView extends React.Component {
  render() {
    const gridStyle = {
      padding: '.8em 1em',
      marginBottom: '1em',
      background: '#03a9f4',
      border: '1px solid #2196f3',
      borderRadius: '3px',
      textAlign: 'center',
      color: '#ffffff',
    };

    return (
      <div>
        <div className='container'>
          <div className='grid grid--full'>
            <div className='grid__cell'><div style={gridStyle}>1</div></div>
          </div>

          <div className='grid grid--gutters grid--1of2'>
            <div className='grid__cell'><div style={gridStyle}>1</div></div>
            <div className='grid__cell'><div style={gridStyle}>2</div></div>
          </div>

          <div className='grid grid--gutters grid--1of4'>
            <div className='grid__cell'><div style={gridStyle}>1</div></div>
            <div className='grid__cell'><div style={gridStyle}>2</div></div>
            <div className='grid__cell'><div style={gridStyle}>3</div></div>
            <div className='grid__cell'><div style={gridStyle}>4</div></div>
          </div>

          <div className='grid grid--gutters grid--1of6'>
            <div className='grid__cell'><div style={gridStyle}>1</div></div>
            <div className='grid__cell'><div style={gridStyle}>2</div></div>
            <div className='grid__cell'><div style={gridStyle}>3</div></div>
            <div className='grid__cell'><div style={gridStyle}>4</div></div>
            <div className='grid__cell'><div style={gridStyle}>5</div></div>
            <div className='grid__cell'><div style={gridStyle}>6</div></div>
          </div>

          <div className='grid grid--gutters grid--1of12'>
            <div className='grid__cell'><div style={gridStyle}>1</div></div>
            <div className='grid__cell'><div style={gridStyle}>2</div></div>
            <div className='grid__cell'><div style={gridStyle}>3</div></div>
            <div className='grid__cell'><div style={gridStyle}>4</div></div>
            <div className='grid__cell'><div style={gridStyle}>5</div></div>
            <div className='grid__cell'><div style={gridStyle}>6</div></div>
            <div className='grid__cell'><div style={gridStyle}>7</div></div>
            <div className='grid__cell'><div style={gridStyle}>8</div></div>
            <div className='grid__cell'><div style={gridStyle}>9</div></div>
            <div className='grid__cell'><div style={gridStyle}>10</div></div>
            <div className='grid__cell'><div style={gridStyle}>11</div></div>
            <div className='grid__cell'><div style={gridStyle}>12</div></div>
          </div>
        </div>
      </div>
    );
  }
}
