import React from "react";

const ScheduleList = ({ schedules, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Subject</th>
            {/* <th>Frequency</th>
            <th>Repeat</th> */}
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.title}</td>
              <td>{schedule.description}</td>
              <td>{schedule.subject}</td>
              {/* <td>{schedule.frequency}</td>
              <td>{schedule.repeat}</td> */}
              {/* <td>{schedule.Schedule}</td> */}
              <td>
                {schedule.frequency === "Daily" && schedule.time
                  ? `Daily at ${schedule.time}`
                  : schedule.frequency === "Weekly" &&
                    schedule.time &&
                    schedule.repeat
                  ? `Weekly on ${schedule.repeat} at ${schedule.time}`
                  : schedule.frequency === "Monthly" &&
                    schedule.time &&
                    schedule.repeat === "firstMonday"
                  ? `Monthly on First Monday at ${schedule.time}`
                  : schedule.frequency === "Monthly" &&
                    schedule.time &&
                    schedule.repeat === "lastFriday"
                  ? `Monthly on Last Friday at ${schedule.time}`
                  : "Daily at 10:00AM"}
              </td>
              <td>
                <button onClick={() => onEdit(schedule)}>Edit</button>
                <button onClick={() => onDelete(schedule.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleList;
