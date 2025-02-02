
import './toggleSwitcher.css'
import '../../index.css'


type ToggleSwitcherProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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