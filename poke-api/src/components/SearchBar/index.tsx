import React from "react";
import { GoSearch } from "react-icons/go";
import { usePoke } from "../../contexts/pokeProvider";
import './searchbar.css'
import slider from '../../images/sliders-horizontal-thin-svgrepo-com (2).svg'



const SearchBar = () => {

    const {count} = usePoke();

    return (
        <div className="search-options">
            <div className="searchbar-content">
                <button className="search-btn">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsFJREFUSEu1lU1IFGEYx//PzOxCZgkV9nGIEulj25ldEqJDCiUkFQUVu2NGHZSgoDoYdOjUqehSiEUZFJRY7oQWBeFJyCjxoLszs22ZEIThoQ+TxK91dp5azWjLnR1Q5/q+7//3/J/3ff5DWOCPFlgfWQE+X2it6KEjIOwlIJAuhEFRAp7DnnxoGK2f3BT3H6C4+OjSRfmTjQQ6kE2AmZlA2ldptHqg+9moEygDsKZkf94KK68LBD8zTxDQwLZVZ5qtH9IisnyoCIJUC+AEEXnB6PJIBaXd3bcns0EyAEpAvQ/CMWb0cwoV8Xjk7WwH/f7DCkliG4FWM+OqqUfO5QTIckgmUTAAtixObUvoLVEn67IcLiORXjBzMikI63ujzQOz7f/jQA6o9UQ4zYzrph454+YC5aDaRECVbfOFuKFddgYEw30EKrbY8if0ljduAFsC4Z0iUTsYLw09UuYIUILhEYDyjNhmEbhouwH4fKFlklf4xsyDpq4tz9Gi8A8iWgLbm28YjSMuAfmSVxgG+IsR0wpztEiNTQ2UjRLDiPS4ASiKuh0COsHcbuhaeS4HV4joPJhvGbp2yhUgqN4DcJyZ601dO+sICATUDTb4HRFSbp6polSWQuCOKVEH1xmDJgfCd4ioGsBHYuzW9cj72aryBUNBkYU2Iqxk5gZT107mHLT0hsyowDjANzklXIvHm/vT679d1hKhBiBpOgC5Mzk2XtHb+3TYsUUzi0UloYLFFjUR0b7s98BDAF0CoxKErWBEBZrYFYs9Gfr3TNa43hSsXOeFXfUr0PYwkQLGGAg9YH4NW7phmg++p+dA9Art03HOMSvJ5YnEo8G/IXP+4UxBPMIrImwC0Ac7ucMwHn+egcwZkBZSlIOFTJ4OItpoM9fEde3uvALSYj5faJXkFVQjFqmb1xblGsh5aZETZMEBPwFMyxoo3GrKbQAAAABJRU5ErkJggg=="/>
                </button>
                <input type="text" placeholder="Name or number"/>
            </div>
                <button className="filter-btn">
                    <img src={slider}/>
                </button>
        </div>
    );
};

export default SearchBar