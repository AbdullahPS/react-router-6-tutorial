const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      {<h2>{user?.user} is logged in</h2>}
    </section>
  )
}
export default Dashboard
