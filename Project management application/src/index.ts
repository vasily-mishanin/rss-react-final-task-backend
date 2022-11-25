import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

(async () => {
  try {
    //mongodb+srv://<username>:<password>@todocluster.kf4x7.mongodb.net/?retryWrites=true&w=majority
    await mongoose.connect(
      'mongodb+srv://vasily:q5wvsFfhKBiB0rsf@todocluster.kf4x7.mongodb.net/managementApp?retryWrites=true&w=majority'
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
