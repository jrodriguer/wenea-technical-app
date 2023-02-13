import bodyParser from 'body-parser';
import cors from 'cors';

import app from './app';

export function start() {
  // Use body-parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Use CORS middlewares
  app.use(cors());

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${address.port}`);
  });
}
