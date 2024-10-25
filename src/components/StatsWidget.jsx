export default function StatsWidget() {
  const statsData = {
    totalSales: 500,
    newLeads: 20,
    activeUsers: 120,
  };

  return (
    <div className="stats-widget p-4 rounded-md bg-gray-100 shadow">
      <h3 className="font-bold text-lg mb-2">Today's Stats</h3>
      <ul>
        <li>Total Sales: {statsData.totalSales}</li>
        <li>New Leads: {statsData.newLeads}</li>
        <li>Active Users: {statsData.activeUsers}</li>
      </ul>
    </div>
  );
}
