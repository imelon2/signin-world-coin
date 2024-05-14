## Start App
### Back-end (Node.ts)
```bash
cd ./back
npm install

ts-node app.ts
```
> [INFO] 디렉토리에 `.env`를 저장한 후, `ts-node app.ts`를 실행합니다.

### Front-end (React)
```bash
cd ./world-sign-front
npm install

npm start
```
> [INFO] 디렉토리에 `.env`를 저장한 후, `npm start`를 실행합니다.
> [WARN] World SignIn의 리다이렉트 URL은 `http://localhost:3000/api/auth/callback/worldcoin`로 설정되어 있습니다.

## Guide
<img src="./img/1.png"  width="700" height="370">


## Reference
- world sign in Docs : https://docs.worldcoin.org/sign-in
- world sign in API : https://docs.worldcoin.org/reference/sign-in
- WorldCoin Simulator : https://simulator.worldcoin.org