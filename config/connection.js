// Connect to database
import pg from 'pg';

const { Pool } = pg
const client = new Pool({
  host: 'localhost',
  user: 'root',
  password: 'postgrespassword',
  database: 'employeeDB',
});

client.connect();

export default client;
