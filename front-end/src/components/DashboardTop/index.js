import React from "react";
import Iframe from "react-iframe";

function DashboardTop() {
  return (
    <Iframe
      src="http://203.246.112.139:15601/app/dashboards#/view/641fd5c0-dae4-11ed-8952-470f17d5498f?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
      height="650"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
}

export default DashboardTop;