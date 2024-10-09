import { useState } from 'react';
import './toggleSwitcher.css'


  type ToggleSwitcherProps = {
    onChange: (e: any) => void
  }

const ToggleSwitcher = ({onChange}: ToggleSwitcherProps) => {


    return (
        <label className="switch">
            <input type="checkbox" onChange={onChange}/> 
            <span className="slider round"></span>
        </label>
    );
};

export default ToggleSwitcher