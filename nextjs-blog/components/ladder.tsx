// https://kena0ki.github.io/adima/classes/default.html
import React, { useState, useEffect } from 'react'
import Adima from 'adima'

export default function Ladder({
  _adimaOpt = {
    _height: 270,
    _width: 240,
    _headerHeight: 30,
    _footerHeight: 30,
    _numVLines: 6,
    _numHLines: 10,
    _color: [
      'RED',
      'TEAL',
      'OLIVE',
      'LIME',
      'ORANGE',
      'FUCHSIA',
      'MAROON',
      'AQUA',
      'BLUE',
      'PINK',
      'GREEN',
      'NAVY',
      'PURPLE',
      'GRAY',
    ]
  }
}: {
  _adimaOpt?: {
    _height?: number
    _width?: number
    _headerHeight?: number
    _footerHeight?: number
    _numVLines?: number
    _numHLines?: number
    _color?: string[]
  }
}) {
  const [vLine, setVLine] = useState(_adimaOpt._numVLines)

  // Mouse Controller
  const DEFAULTCTXMENUHANDLERS = {
    'Start': async (evt, adima) => {
      if (adima.isPlaying) return;
      adima.setPlaying();
      if (adima.data.players[0].path.length > 0) adima.clearPath(); // In case already paths have bean rendered
      await adima.startAdima();
      adima.unsetPlaying();
    },
    'Add a virtical line': (evt, adima) => {
      adima.addVLine();
    },
    'Add a horizontal line': (evt, adima) => {
      const menuElm = document.getElementById('adima-menu') as HTMLElement;
      const position = {
        x: menuElm.getBoundingClientRect().left - (document.getElementById('adima-vline0') as Element).getBoundingClientRect().left,
        y: menuElm.getBoundingClientRect().top - (document.getElementById('adima-main-container') as Element).getBoundingClientRect().top,
      };
      adima.addHLine(position);
    },
    'Remove a virtical line': (evt, adima) => {
      if (adima.isPlaying || adima.isShuffling) return;
      if (adima.data.players[0].path.length > 0) adima.clearPath(); // In case already paths have bean rendered
      adima.removeVLine();
    },
    'Clear': (evt, adima) => adima.clearPath(),
    'Shuffle goals': async (evt, adima) => {
      if (adima.isShuffling) return;
      adima.setShuffling();
      if (adima.data.players[0].path.length > 0 && !adima.isPlaying) adima.clearPath(); // In case already paths have bean rendered
      adima.hideGoals();
      await adima.shuffleGoals();
      adima.unsetShuffling();
    },
  }

  useEffect(() => {
    const stage = document.getElementById('ghost-leg-container')
    const adima = new Adima(stage)
    
    adima.init({
      height: _adimaOpt._height,
      width: _adimaOpt._width,
      headerHeight: _adimaOpt._headerHeight,
      footerHeight: _adimaOpt._footerHeight,
      numVLines: vLine,
      numHLines: Math.floor((vLine * 6) / 2),
      colors: _adimaOpt._color,
      ctxMenuHandlers: {},
    })
  }, [vLine])

  function reRenderVLine(_vLine) {
    setVLine(_vLine)
  }

  return (
    <>
      <div id="ghost-leg-container"></div>
      <button onClick={() => reRenderVLine(2)}>
        Change Player
      </button>
    </>
  )
}