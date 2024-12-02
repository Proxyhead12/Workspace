import React from "react";
import { useLocation } from "react-router-dom";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import "./InvoiceMembership.css";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
  },
});

const InvoicePDF = ({ invoiceData, membershipType }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>Factura de Membresía</Text>
      <View style={styles.section}>
        <Text>Número de factura: {invoiceData.invoiceNumber}</Text>
        <Text>Fecha de emisión: {invoiceData.fecha}</Text>
        <Text>Fecha de inicio: {invoiceData.fechaInicio}</Text>
        <Text>Fecha de fin: {invoiceData.fechaFin}</Text>
        <Text>Método de pago: {invoiceData.metodoPago}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Descripción</Text>
          <Text style={styles.tableCell}>Subtotal</Text>
          <Text style={styles.tableCell}>IVA</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{membershipType} Membresía</Text>
          <Text style={styles.tableCell}>${invoiceData.subtotal.toFixed(2)}</Text>
          <Text style={styles.tableCell}>${invoiceData.iva.toFixed(2)}</Text>
          <Text style={styles.tableCell}>${invoiceData.total.toFixed(2)}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function InvoiceMembership() {
  const location = useLocation();
  const { invoiceData } = location.state || {};

  if (!invoiceData) {
    return <p>Cargando información de la factura...</p>;
  }

  let membershipType = "";
  const tipo = invoiceData.tipo;

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
      console.log("Valor desconocido para tipo:", tipo);
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
        <p><strong>Método de pago:</strong> {invoiceData.metodoPago}</p>
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
            <td>{membershipType} Membresía</td>
            <td>${invoiceData.subtotal.toFixed(2)}</td>
            <td>${invoiceData.iva.toFixed(2)}</td>
            <td>${invoiceData.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <PDFDownloadLink
        document={<InvoicePDF invoiceData={invoiceData} membershipType={membershipType} />}
        fileName={`Factura_${invoiceData.invoiceNumber}.pdf`}
        className="download-pdf-btn"
      >
        {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
      </PDFDownloadLink>
    </div>
  );
}
