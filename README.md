# Kinotest PoC
## Starting
Terminal #1 - Backend
```shell
cd backend
cp env_template .env
npm install
npx prisma migrate dev
npm run dev
```
Terminal #2 - Frontend
```shell
cd frontend
npm install
npx expo start
```
## After every pull of changes
We need to update environment variables, NPM modules and database migrations 
Terminal #1 - Backend
```shell
cd backend
diff .env env_template # Linux
diff (cat .env) (cat env_template) # Powershell
# Make modifications in your .env basis env_template new proposes, if any.
npm install
npx prisma migrate
```
Terminal #2 - Frontend
```shell
cd frontend
npm install
```

## Backend
It's possible to reset local development database information:
```shell
npx prisma migrate reset
```

## Git

### Create a working branch

```shell
git switch develop
git pull
# See previous documentation point. Update environment variables, NPM modules and database migrations.
git switch -c type/work-item-id_description # Type must be <feature|bug>
git push -u origin type/work-item-id_description
# Create a pull request pointing to develop branch
```

### Create a hot fix branch
```shell
git switch main
git pull
# See previous documentation point. Update environment variables, NPM modules and database migrations.
git switch -c hotfix/work-item-id_description
git push -u origin hotfix/work-item-id_description
# Create a pull request pointing to main branch.
```

Remote workign branches and remote hot fix branches are removed on pull request merge.


## References
[Creating an npm package with TypeScript](https://medium.com/@the_nick_morgan/creating-an-npm-package-with-typescript-c38b97a793cf)
[Localization](https://medium.com/@adherentxu/i18n-in-your-react-native-or-expo-apps-eb92a1a8b1b5)