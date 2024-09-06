import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useTicket } from '../context/TicketContext';

const TicketCard = ({ ticket }) => {
  const { fetchTickets } = useTicket();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(ticket.name);
  const [email, setEmail] = useState(ticket.email);
  const [typeTicket, setTypeTicket] = useState(ticket.typeTicket);
  const [status, setStatus] = useState(ticket.status);

  const deleteTicket = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tickets/${ticket._id}`);
      fetchTickets();
    } catch (error) {
      console.error('Error deleting ticket', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/tickets/${ticket._id}`, { name, email, typeTicket, status });
      fetchTickets();
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating ticket', error);
    }
  };

  return (
    <div className="mb-4 p-4 border-b border-gray-200">
      {isEditing ? (
        <div>
          <h3 className="text-lg font-bold">Edit Ticket</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ticket Type</label>
              <select
                value={typeTicket}
                onChange={(e) => setTypeTicket(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="vip">VIP</option>
                <option value="standard">Standard</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
              <input
                type="checkbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /> Active
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Ticket
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">{ticket.name}</h3>
          <p>Email: {ticket.email}</p>
          <p>Type: {ticket.typeTicket}</p>
          <p>Status: {status ? 'Active' : 'Inactive'}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2"
          >
            Edit
          </button>
          <button
            onClick={deleteTicket}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mt-2 ml-2"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketCard;
