# hr-server

## Node Version
v10.16.0

## Installation
Instalar los node modules.
```bash
$ npm install
```

Instalar sequelize cli global.
```bash
$ npm install -g sequelize-cli
```

### ENV
Crear un archivo .env con estas variables en root.
```
DB_HOST=localhost
DB_USER=aminrx
DB_PASS=123456
DB_NAME=runahr
TOKEN_KEY=G13qJwug7NSNuJcplNXUzzx7EVBLp1Um
```
### Database
Crear la base de datos.
```bash
$ sequelize db:create
```

Migrar la base de datos.
```bash
$ sequelize db:migrate
```
### Admin
Crear un usuario administrador
```bash
$ node createAdmin.js
```

### run the server

Correr el servidor con 
```bash
$ npm run dev
```

