import React, { useState } from 'react';
import TicketCard from './TicketCard';
import { useTicket } from '../context/TicketContext';

const TicketList = () => {
  const { tickets } = useTicket();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTickets = tickets.filter(ticket => 
    ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Liste de tickets</h2>
      
      <input
        type="text"
        placeholder="Rechercher par nom ou email"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border rounded w-full"
      />

      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket) => <TicketCard key={ticket._id} ticket={ticket} />)
      ) : (
        <p>Aucun ticket ne correspond à votre recherche.</p>
      )}
    </div>
  );
};

export default TicketList;
