import ThemeToggle from "../../components/ThemeToggle";
import Header from "../../components/dashboard-components/Header";

const Dashboard = () => {
  return (
    <>
      <Header page="Dashboard" pageInfo="Let's check your update today" />
      <ThemeToggle />
    </>
  );
};

export default Dashboard;
