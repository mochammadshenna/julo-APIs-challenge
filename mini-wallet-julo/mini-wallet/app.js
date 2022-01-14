// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }

const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const router = require("express").Router()
const WalletController = require("../controllers/wallet");
const { imageKit } = require("../middlewares/imageKit");
const multerUpload = require("../middlewares/multer");
const UserController = require("./controllers/users.js");
const DepositController = require("./controllers/deposit");
const WalletController = require("./controllers/wallet");
const Withdrawals = require("./controllers/withdraw.js")


router.post("/init", UserController.getUser);
router.post("/wallets", WalletController.getWallet);
router.get("/wallets", WalletController.readWallet);
router.post("/wallets/deposit", DepositController.getDeposit);
router.post("/wallets/withdrawals", Withdrawals.getWithdrawal);
router.patch("/wallets", WalletController.updateWallet);

router.listen(PORT, () => { console.log(`listening at http://localhost:${PORT}`) });


module.exports = app;