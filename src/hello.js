import HelloWorld from "./helloWorld";
import logger from "./logger";

const message = ({ time, ...rest }) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay)`);
    }, time * 1000)
  );

const hello = async (event, context, callback) => {
  const helloWorld = new HelloWorld("world");

  logger.error(`exception Bar`);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: ` ${helloWorld.hello()} ${await message({
        time: 1,
        copy: "Your function executed successfully!"
      })}`
    })
  };

  callback(null, response);
};

export default hello;
