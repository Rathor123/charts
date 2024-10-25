import { leadsData } from "../data/dummydata";

export default function Leads() {
  return (
    <div className="m-10">
      <h2 className="text-xl font-bold mb-4">Lead Management</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map((lead) => (
            <tr key={lead.id}>
              <td className="border p-2">{lead.name}</td>
              <td className="border p-2">{lead.email}</td>
              <td className="border p-2">{lead.status}</td>
              <td className="border p-2">{lead.lastActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
