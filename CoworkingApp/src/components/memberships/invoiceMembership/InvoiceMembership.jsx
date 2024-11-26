import React from "react";
import { useLocation } from "react-router-dom";
import "./InvoiceMembership.css";

export default function InvoiceMembership() {
  const location = useLocation();
  const { invoiceData } = location.state || {};

  if (!invoiceData) {
    return <p>Cargando información de la factura...</p>;
  }

  // Comprobamos y asignamos el tipo de membresía
  let membershipType = "";
  const tipo = invoiceData.tipo;  // El tipo ya es un número, no necesitamos parsearlo

  switch (tipo) {
    case 1:
      membershipType = "Basic";
      break;
    case 2:
      membershipType = "Pro";
      break;
    case 3:
      membershipType = "Enterprise";
      break;
    default:
      console.log("Valor desconocido para tipo:", tipo);  // Para debug
      membershipType = "Desconocido";
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
            <td>{membershipType} Membresía</td> {/* Aquí mostramos el tipo de membresía */}
            <td>${invoiceData.subtotal.toFixed(2)}</td>
            <td>${invoiceData.iva.toFixed(2)}</td>
            <td>${invoiceData.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
