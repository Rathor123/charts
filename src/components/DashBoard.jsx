import { Link } from "react-router-dom";
import React, { useState } from "react";
import Widget from "./Widget";
import WidgetSelector from "./WidgetSelector"; // Sidebar or dropdown for adding widgets

export default function DashBoard() {
  const [widgets, setWidgets] = useState([
    { id: 1, type: "chart", title: "Sales Chart" },
    { id: 2, type: "stats", title: "Daily Stats" },
  ]);

  // Add a new widget
  const addWidget = (type, title) => {
    setWidgets([...widgets, { id: widgets.length + 1, type, title }]);
  };

  // Remove a widget
  const removeWidget = (id) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };
  return (
    <div className="bg-blue-500 h-screen flex-col flex items-center pr-20 pt-5 pl-20 gap-20 ">
      <Link to="/" className="text-2xl text-blue-950 font-bold">
        DashBoard
      </Link>
      <div className="grid grid-flow-row gap-10 justify-center p-5">
        <Link to="/reports">Reports</Link>
        <Link to="/leads">Leads</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
      <div className="dashboard">
        <WidgetSelector onAddWidget={addWidget} />
        <div className="widget-container grid grid-cols-3 gap-4">
          {widgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              onRemove={() => removeWidget(widget.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
