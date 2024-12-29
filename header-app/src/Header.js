import React from 'react'; // Must be imported for webpack to work

function Header() {
  return (
    <div className="HeaderApp">
      <h4 className='logo'>Logo</h4>
      <div className='menu'>Menu</div>
    </div>
  );
}

export default Header;
