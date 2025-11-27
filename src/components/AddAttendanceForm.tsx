import React, { useState } from 'react';
import { Attendance } from '../types';

interface AddAttendanceFormProps {
  onTicketCreate: (name: string, attendance: Attendance) => void;
}

const AddAttendanceForm: React.FC<AddAttendanceFormProps> = ({ onTicketCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTicketCreate('', {} as Attendance);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter ticket title"
      />
      <button type="submit">Add Attendance</button>
    </form>
  );
};

export default AddAttendanceForm;
