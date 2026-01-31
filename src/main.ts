import express from 'express';
import { createUserRoutes } from './infra/routes/UserRoutes';

const app = express();

app.use(express.json());

app.use('/api/v1/users', createUserRoutes());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});