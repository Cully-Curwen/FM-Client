import React from 'react';

function AccountMenu(props) {
  return (
    <div className="account-menu">
      <button onClick={() => localStorage.clear()} >Log Out</button>
    </div>
  );
};

export default AccountMenu;
