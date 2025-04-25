# Kinotest PoC
## Starting
Terminal #1
```shell
cd backend
cp env_template .env
npm install
npx prisma migrate dev --name init # Crear base de datos de desenvolvemento e cliente Prisma.
npm run dev
```
Terminal #2
```shell
cd frontend
npm install # Only first time
npx expo start
```
## Backend
It's possible to reset database information:
```shell
npx prisma migrate reset
```

## ToDo
* Read about multi-repo

## References
[Creating an npm package with TypeScript](https://medium.com/@the_nick_morgan/creating-an-npm-package-with-typescript-c38b97a793cf)