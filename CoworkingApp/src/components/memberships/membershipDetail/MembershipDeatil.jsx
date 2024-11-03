import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MembershipService from "../../../service/MembershipService";

export default function MembershipDetail() {
    const { id } = useParams();
    const [membership, setMembership] = useState(null);

    useEffect(() => {
        MembershipService.getMembershipById(id)
          .then((response) => {
            setMembership(response.data);
          })
          .catch((error) => {
            console.error("Error al cargar los detalles de la membresía:", error);
          });
      }, [id]);
    
      if (!membership) {
        return <p>Cargando detalles de la membresía...</p>;
      }
    
      return (
        <div>
          <h1>{membership.name}</h1>
          <p>{membership.description}</p>
          <p>Duración: {membership.duration}</p>
          <p>Tipo: {membership.type}</p>
          <p>Precio: ${membership.price}</p>
          <img src={membership.urlImage1} alt={membership.name} />
          <img src={membership.urlImage2} alt={membership.name} />
          <img src={membership.urlImage3} alt={membership.name} />
        </div>
      );
}