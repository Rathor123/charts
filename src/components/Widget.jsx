import ChartWidget from "./ChartWidget";
import StatsWidget from "./StatsWidget";

export default function Widget({ widget, onRemove }) {
  return (
    <div className="widget bg-white shadow-md p-4 rounded-md relative">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500"
      >
        Remove
      </button>
      <h3 className="font-bold mb-2">{widget.title}</h3>
      {widget.type === "chart" && <ChartWidget />}
      {widget.type === "stats" && <StatsWidget />}
    </div>
  );
}
