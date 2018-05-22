# grubber-sample
1. make sure to use `.env` file in the root
  ```
  #development
  DEV_USERNAME = "Your username"
  DEV_PASSWORD = "Your password"
  DEV_DATABASE = "Your local database" (database_developement by default in the db schema files)
  DEV_HOST =  "127.0.0.1"
  DEV_DIALECT = "mysql"
  ```

2. npm install
3. the database.
    - the sql files are found under db.
    - run the schema.sql file first
    - run the seed.sql second
4. `npm run develop;` for development server and connection to back end
5. `npm start` to compile react and for server to serve the react app and express api.

when the home route mounts it should give back the information in the database.