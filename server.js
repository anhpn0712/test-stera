// server.js
const io = require('socket.io')(3002, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', socket => {
  console.log('New connection');
  const dataSteraCancle = {
    status: 400,
    type: 1000,
    target: "stera",
    UUID: "1715",
    json: {
      ResultCode: "2",
      ErrorCode: "",
      Result: 2,
      Tax: 0,
      CreditCardMaskedPAN: "",
      PaymentType: "01",
      SlipNumber: "9611",
      TransactionType: "1",
      CurrencyCode: "",
      CreditCardBrand: "",
      Amount: 3000
    }
  };
  const dataSteraSuccess = {
    status: 200,
    type: 1000,
    target: "stera",
    UUID: "1715",
    json: {
      ResultCode: "0",
      ErrorCode: "",
      Result: 0,
      Tax: 0,
      CreditCardMaskedPAN: "",
      PaymentType: "01",
      SlipNumber: "900611",
      TransactionType: "1",
      CurrencyCode: "",
      CreditCardBrand: "",
      Amount: 3000
    }
  }
  socket.on('/medipo-terminal/send-message', message => {
    console.log(message);

    const uuid = message.message.uuid;
    const amount = message.message.json.Amount;
    const uuids = ['1696', '1698', '1700', '1702', '1704', '1706', '1708', '1710', '1712'];

    dataSteraCancle.UUID = uuid;
    dataSteraCancle.json.Amount = amount;
    dataSteraSuccess.UUID = uuid;
    dataSteraSuccess.json.Amount = amount;
    setTimeout(() => {
      if (uuids.includes(message.message.uuid)) {
        socket.emit('/medipo-terminal/receive-message', JSON.stringify(dataSteraSuccess));
      } else {
        socket.emit('/medipo-terminal/receive-message', JSON.stringify(dataSteraCancle));
      }
    }, 5000);
  });
});
