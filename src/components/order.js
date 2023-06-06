import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Order = () => {
  useEffect(() => {
    const modal = new window.bootstrap.Modal(document.getElementById('myModal'),{
      backdrop: 'static'
    });
    modal.show();

    return () => {
      modal.dispose();
    };
  }, []);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  const flavour = searchParams.get('flavour');

  return (
    <div id="myModal" className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Congratulations</h5>
          </div>
          <div className="modal-body">
            <p>Your order: {flavour} {type} Momo</p>
          </div>
          <div className="modal-footer">
            <Link to={`/thankyou?type=${type}&flavour=${flavour}`}>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Complete Order</button>
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-primary">Make new Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

