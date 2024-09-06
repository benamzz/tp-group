import React from 'react';
import TicketForm from '../components/TicketForm';

const AddTicket = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ajouter un Ticket</h2>
      <TicketForm />
    </div>
  );
};

export default AddTicket;
