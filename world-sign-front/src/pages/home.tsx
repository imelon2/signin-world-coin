function Home() {
    return (
        <>
        <span>You are not signed in</span>
        <br/>
        <span>Please </span>
        <a
          href={`https://id.worldcoin.org/authorize?redirect_uri=http://localhost:3000/api/auth/callback/worldcoin&response_type=code&scope=openid+profile+email&client_id=${process.env.REACT_APP_WLD_CLIENT_ID}`}
        >
          Sign in
        </a>
      </>
    )
}

export default Home;
