# hr-server
Instalar dependencias
npm install

Crear un archivo .env para las variables de entorno.
DB_HOST=localhost
DB_USER=aminrx
DB_PASS=123456
DB_NAME=runahr

TOKEN_KEY=G13qJwug7NSNuJcplNXUzzx7EVBLp1Um
instalar de forma de global sequelize cli.
npm install -g sequelize-cli

Crear la base de datos con:
sequelize db:create

Hacer una migracion de la base de datos con:
sequelize db:migrate

Correr el servidor con:
npm run dev
