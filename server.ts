import { createServer} from "http"
// const {createServer} = require("http");

const connectToMongoose = require("./src/database/Mongoose");
const {Config} = require("./src/config/config");

const {app} = require("./index");

const startExpressServer = async (port: number) => {
    const isDatabaseConnected = await connectToMongoose(Config.DATABASE_CONNECTION_STRING);

    if (!isDatabaseConnected) {
        return;
    }

    const expressServer = createServer(app);

    expressServer.listen(port, () => {
        console.log(`
        ################################################
        🛡️  Server listening on port: ${port} in ${Config.ENVIRONMENT} environment🛡️
        ################################################
      `);
    });
};

startExpressServer(Config.PORT);