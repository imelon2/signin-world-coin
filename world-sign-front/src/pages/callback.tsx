import { useLocation } from "react-router-dom";
import axios from "axios";

function CallbackPage() {
  const location = useLocation();
  const token = async () => {
    const codeId = new URLSearchParams(location.search).get("code"); // code= 파라미터 추출

    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getToken`,{
        codeId
    })

    console.log(result.data);
    
  };
  return (
    <div>
      Redirected here with token: {"token"}
      <button onClick={token}>Wolrd ID 검증하기</button>
    </div>
  );
}

export default CallbackPage;
