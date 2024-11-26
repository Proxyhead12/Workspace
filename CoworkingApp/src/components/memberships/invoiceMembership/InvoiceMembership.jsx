import React from "react";
import { useLocation } from "react-router-dom";
import "./InvoiceMembership.css";

export default function invoiceMembership() {
  const location = useLocation();
  const { invoiceData } = location.state || {};

  if (!invoiceData) {
    return <p>Cargando información de la factura...</p>;
  }

  return (
    <div className="invoice-container">
      <h1>Factura</h1>
      <div className="invoice-details">
        <p><strong>Número de factura:</strong> {invoiceData.invoiceNumber}</p>
        <p><strong>Fecha de emisión:</strong> {invoiceData.fecha}</p>
        <p><strong>Fecha de inicio:</strong> {invoiceData.fechaInicio}</p>
        <p><strong>Fecha de fin:</strong> {invoiceData.fechaFin}</p>
        <p><strong>Metodo de pago:</strong> {invoiceData.metodoPago}</p>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Subtotal</th>
            <th>IVA</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Membresía</td>
            <td>${invoiceData.subtotal.toFixed(2)}</td>
            <td>${invoiceData.iva.toFixed(2)}</td>
            <td>${invoiceData.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
