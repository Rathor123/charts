import React from "react";

export default function WidgetSelector({ onAddWidget }) {
  return (
    <div className="widget-selector">
      <button onClick={() => onAddWidget("chart", "New Chart")}>
        Add Chart
      </button>
      <button onClick={() => onAddWidget("stats", "New Stats")}>
        Add Stats
      </button>
    </div>
  );
}
