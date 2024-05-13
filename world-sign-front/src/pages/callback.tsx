import { useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";

function CallbackPage() {
  const location = useLocation();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // code= 파라미터 추출
    console.log("Received code:", code);
  }, [location]);

  const token = async () => {
    const codeId = new URLSearchParams(location.search).get("code");

    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getToken`,{
        codeId
    })

    console.log(result.data);
    
  };
  return (
    <div>
      Redirected here with token: {"token"}
      <button onClick={token}></button>
    </div>
  );
}

export default CallbackPage;
