# modelos_de_proba

Constitue un paquete NPM que permite manter código compartido por varias partes da aplicación (frontend, backend, ferramentas).

## Modificacións

1. Modificamos o código
2. Probamos os cambios (tests)
3. Compilamos
   ```console
   npm run build
   ```
4. Incrementamos a versión
   ```console
   npm version patch|major|minor
   ```
5. Empaquetamos
   ```console
   npm pack ./
   ```
6. Eliminamos os ficheiros `.tgz` das versións obsoletas do paquete.
7. Instalamos a nova versión nos proxectos que o requiram.
   ```console
   cd backend
   npm install ../modelos_de_proba-1.0.0.tgz
   cd ../frontend/proba-node
   npm install ../../modelos_de_proba/modelos_de_proba-1.0.0.tgz
   ```