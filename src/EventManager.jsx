import React, { useState, useMemo } from 'react';

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Date");

  const handleAddEvent = () => {
    if (!eventName || !eventDate) return;
    setEvents([
      ...events,
      {
        id: Date.now(),
        name: eventName,
        date: new Date(eventDate)
      }
    ]);
    setEventName('');
    setEventDate('');
  };

  const filteredEvents = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return events
      .filter(event => {
        if (filter === "All") return true;
        const eventDay = event.date.toDateString();
        if (filter === "Today's Events") return eventDay === today.toDateString();
        if (filter === "Tomorrow's Events") return eventDay === tomorrow.toDateString();
        return true;
      })
      .sort((a, b) => {
        if (sortOrder === "Date") return new Date(a.date) - new Date(b.date);
        return a.name.localeCompare(b.name);
      });
  }, [events, filter, sortOrder]);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded space-y-6">
      <h2 className="text-2xl font-bold mb-4">📅 Event Manager</h2>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
          className="flex-1 border p-2 rounded text-sm"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border p-2 rounded text-sm"
        />
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Event
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded text-sm"
        >
          <option value="All">All Events</option>
          <option value="Today's Events">Today's Events</option>
          <option value="Tomorrow's Events">Tomorrow's Events</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded text-sm"
        >
          <option value="Date">Sort by Date</option>
          <option value="Name">Sort by Name</option>
        </select>
      </div>

      <div className="mt-4 space-y-3">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 text-center">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="border p-3 rounded shadow-sm">
              <h3 className="font-semibold">{event.name}</h3>
              <p className="text-sm text-gray-500">
                {event.date.toDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventManager;
