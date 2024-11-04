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
        <p>Duración: {membership.duration}</p>
        <p>Precio: ${membership.price}</p>
        <p>{membership.description}</p>
    </div>
    );
}
