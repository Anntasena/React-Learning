import styled from "styled-components";

//= Styles ==============================
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

//= Component ============================
function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>statistic</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
