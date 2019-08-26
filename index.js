require('dotenv').config();

const LineUs = require('@beardicus/line-us');

const { LINE_US_NAME } = process.env;

const options = {};
if (LINE_US_NAME) {
  options.url = `ws://${LINE_US_NAME}.local`;
}

async function drawOutline(bot) {
  const xOffset = 150;
  await bot.moveTo({
    x: xOffset,
    y: 0
  });

  await bot.lineTo({
    x: xOffset + 1000,
    y: 0
  });

  await bot.lineTo({
    x: xOffset + 1000,
    y: 1000
  });

  await bot.lineTo({
    x: xOffset,
    y: 1000
  });

  await bot.lineTo({
    x: xOffset,
    y: 0
  });

  await bot.penUp();
}

async function printDebug(bot) {
  const { info } = bot;
  console.log(info);

  const capabilities = await bot.getCapabilities();
  console.log(capabilities);

  const diagnostics = await bot.getDiagnostics();
  console.log(diagnostics);
}

async function main() {
  const bot = new LineUs(options);

  bot.on('coordinates', coords => {
    console.log('coordinates', coords);
  });

  bot.on('error', error => {
    console.error('ERROR', error);
  });

  try {
    await printDebug(bot);
    await drawOutline(bot);

    bot.disconnect();
  } catch (e) {
    console.error(e);
  }
}

main();
