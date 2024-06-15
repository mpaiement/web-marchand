// qrcode.jsx
import React from 'react';

const QRCodeModal = ({ qrCode, closePaymentModal }) => {
    return (
        <div className="payment-modal">
            <div className="payment-modal-content">
                <img src={qrCode} alt="QR Code" />
                <button onClick={closePaymentModal}>Close</button>
            </div>
        </div>
    );
};

export default QRCodeModal;
