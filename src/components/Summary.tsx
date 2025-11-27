import React from 'react';
import { Attendance, PersonSummary } from '../types';
import AddAttendanceForm from './AddAttendanceForm';

interface BoardProps {
  summaries: PersonSummary[];
  onAttendanceCreate: (name: string, attendance: Attendance) => void;
  onBack: () => void;
  onAttendanceDelete: (attendanceId: string) => void;
}

const Board: React.FC<BoardProps> = ({ summaries, onAttendanceCreate, onBack, onAttendanceDelete }) => {
  return (
    <div className="board">
    <button>
        <AddAttendanceForm onAttendanceCreate={(name: string, attendance: Attendance) => onAttendanceCreate(column.id, title)} />
    </button>
    This Week At Wicker:
    {summaries.map((summary) => {
        return <div>
                Attendee: {summary.name}
                <div className="week">
                    monday: {summary.attendance.monday}
                    tuesday: {summary.attendance.tuesday}
                    wednesday: {summary.attendance.wednesday}
                    thursday: {summary.attendance.thursday}
                    friday: {summary.attendance.friday}
                </div>
            </div>
    })}
    </div>
  );
};

export default Board;
