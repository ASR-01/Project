import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "5fr 1fr" }}
    >
      <div></div>

      <Sidebar />
    </div>
  );
};

export default Dashboard;
