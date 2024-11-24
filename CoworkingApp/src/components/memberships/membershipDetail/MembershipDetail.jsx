import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MembershipService from "../../../service/MembershipService";
import "./MembershipDetail.css";

export default function MembershipDetail() {
  const { membershipId } = useParams();
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    MembershipService.getMembershipById(membershipId)
      .then((response) => {
        setMembership(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los detalles de la membresía:", error);
      });
  }, [membershipId]);

  if (!membership) {
    return <p>Cargando detalles de la membresía...</p>;
  }

  return (
    <div className="membershipDetail">
      <h1 className="membershipDetail-title">Membresia {membership.name}</h1>
      <p>Una oficina privada 100% tuya y lista para recibir a tu equipo, donde solo compartirás áreas comunes y servicios con otras empresas.</p>
      <h2 className="membershipDetail-title2">Conoce a detalle nuestros espacios</h2>
      <div className="gallery">
        <div className="main-image">
          <img src={membership.urlImage1} alt={membership.name} />
        </div>
        <div className="small-image">
          <img src={membership.urlImage2} alt={membership.name} />
        </div>
        <div className="small-image">
          <img src={membership.urlImage3} alt={membership.name} />
        </div>
      </div>
      <button className="btn btn-primari">Adquirir Membresia</button>
      <div class="detailService">
        <h3>Nuestro servicio todo incluido</h3>
        <div>
          <p>Nos encargamos de todos los servicios de tu oficina en una única factura mensual. Administramos más de 30 mil m2 de oficinas muy bien equipadas, lo cual nos da grandes economías de escala que trasladamos a nuestros clientes.</p>
          <br />
          <p className="priceDet">Precio: ${membership.price}</p>
          <br />
          <p>Dedicated private office, unlimited meeting room usage, high-speed Wi-Fi, coffee and tea included, printing services, 24/7 access</p>
        </div>
      </div>

    </div>
  );
}
