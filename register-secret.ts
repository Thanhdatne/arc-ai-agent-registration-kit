import { registerEntitySecretCiphertext } from "@circle-fin/developer-controlled-wallets";

const response = await registerEntitySecretCiphertext({
  apiKey:
    "****_API_KEY:5bef73***************d000:89a4aa************************b09",
  entitySecret: "ecd4d5e33b8e***************************************c546",
  recoveryFileDownloadPath: "",
});
console.log(response.data?.recoveryFile);
