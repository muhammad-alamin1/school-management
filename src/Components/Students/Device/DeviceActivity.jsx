import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function DeviceActivity() {
  const [device, setDevice] = useState("");
  const [os, setOs] = useState("");
  const [platform, setPlatform] = useState("");
  const [client, setClient] = useState("");
  const [version, setVersion] = useState("");
  const [type, setType] = useState("");

  let agent = navigator.userAgent;

  useEffect(() => {
    axiosInstance
      .post("http://localhost:8000/os/detected", {
        agent: agent,
      })
      .then(function (response) {
        console.log(response);
        setDevice(response.data.data.device.type);
        setOs(response.data.data.os.name);
        setPlatform(response.data.data.os.platform);
        setClient(response.data.data.client.name);
        setVersion(response.data.data.client.version);
        setType(response.data.data.client.type);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Device Activity</h2>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Device</th>
              <th scope="col">OS</th>
              <th scope="col">Platform</th>
              <th scope="col">Client</th>
              <th scope="col">Type</th>
              <th scope="col">Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{device.toUpperCase()}</td>
              <td>{os}</td>
              <td>{platform}</td>
              <td>{client}</td>
              <td>{type}</td>
              <td>{version}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
