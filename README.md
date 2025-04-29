# Kinotest PoC
## Starting
Terminal #1 - Backend
```shell
cd backend
cp env_template .env
npm install
npx prisma migrate dev # Crear base de datos de desenvolvemento e cliente Prisma.
npm run dev
```
Terminal #2 - Frontend
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

## References
[Creating an npm package with TypeScript](https://medium.com/@the_nick_morgan/creating-an-npm-package-with-typescript-c38b97a793cf)
[Localization](https://medium.com/@adherentxu/i18n-in-your-react-native-or-expo-apps-eb92a1a8b1b5)