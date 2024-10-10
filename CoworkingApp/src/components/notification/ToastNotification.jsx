// src/components/notification/ToastNotification.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Función para mostrar notificaciones
const notify = (message, type = 'default') => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            toast(message);
    }
};

// Componente que contiene el contenedor de las notificaciones
const ToastNotification = () => {
    return (
        <ToastContainer
            position="top-right" 
            autoClose={3000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export { notify, ToastNotification };
