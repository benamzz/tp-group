import React from 'react';
import TicketList from '../components/TicketList';

const TicketListPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liste de tickets</h2>
      <TicketList />
    </div>
  );
};

export default TicketListPage;
