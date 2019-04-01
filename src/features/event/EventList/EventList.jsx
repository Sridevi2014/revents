import React, { Component } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h2>Event List </h2>
        {events.map(event => (
          <EventListItems
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}
export default EventList;