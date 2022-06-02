import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState("");
  useEffect(() => {
    axios
      .post(`/api/payment/${searchParams.get("payment_id")}`)
      .then((res) => {
        setResult(res.data.result.status);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <React.Fragment>
      {result === "SUCCES" && (
        <div>
          <div className="p-4">
            <div className="alert alert-success"> Success Payment</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Success;
