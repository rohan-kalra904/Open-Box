import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { useStateContext } from "./context";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import Spinner from "./pages/Spinner.js";
import Sharebtn from "./components/Sharebtn.js";
const App = () => {
  // const [SearchParams] = useSearchParams();
  // const b_id = SearchParams.get("Bill-Id").split("_");
  // const price = b_id[0];
  // const prid = b_id[1];
  const [ll, ss] = useState(false);
  const [SearchParams] = useSearchParams();
  const { setBillId } = useStateContext();
  let b_id = "";
  useEffect(() => {
    ss(true);
    setTimeout(() => {
      ss(false);
    }, 2000);
    if (SearchParams.get("Bill-Id")) {
      b_id = SearchParams.get("Bill-Id").split("_");
      const price = b_id[0];
      const prid = b_id[1];
      setBillId(b_id);
    }
  }, [b_id]);
  console.log(ll);
  if (ll) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wev" element={<Sharebtn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route
            path="/campaign-details/:id"
            price="0"
            element={<CampaignDetails />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
