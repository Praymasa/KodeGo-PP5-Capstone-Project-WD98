import ReservationList from "./components/ReservationList";

const routes = {
  name: "ReservationLists",
  path: "/reservations",
  element: (
    <ReservationList
      emp_id={0}
      res_id={""}
      client_name={""}
      client_number={""}
      client_detailedAdd={""}
      client_city={""}
      client_province={""}
      emp_name={""}
      service_title={""}
      contract_term={""}
      date={""}
      time={""}
    />
  ),
};

export default routes;
