Este proyecto es una Aplicación Descentralizada (DApp) de crowdfunding (similar a GoFundMe o Kickstarter) construida sobre la blockchain. Permite a los usuarios crear campañas de recaudación de fondos y recibir donaciones en ETH de forma transparente y segura.

El proyecto está construido con un Smart Contract de Solidity y un frontend de JavaScript vainilla con Ethers.js.

## Tecnologías Utilizadas

- **Smart Contract:** Solidity
- **Entorno de Desarrollo:** Hardhat
- **Conexión a Blockchain:** Ethers.js
- **Wallet:** MetaMask
- **Servidor Local:** `http-server`

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- `npm` (se instala con Node.js)
- Un navegador web (como Chrome o Firefox)
- La extensión de [MetaMask](https://metamask.io/) en tu navegador.

## Guía de Instalación y Ejecución (Local)

Esta es la forma más estándar de correr el proyecto, asumiendo que todo se ejecuta en la misma máquina (`localhost`).

### 1. Instalación
Descomprime el proyecto, y desde la carpeta raíz (`ayudachain/`), instala las dependencias:

Bash

```bash
npm install
```

### 2. Configuración de MetaMask

Abre tu extensión de MetaMask y configura la red local de Hardhat:

1. Haz clic en el selector de redes (arriba a la izquierda) y selecciona **"Añadir red"**.
2. Elige **"Añadir una red manualmente"**.
3. Llena los campos con esta información:
	* Nombre de la red: `Hardhat Local`
	* Nueva URL de RPC:`http://127.0.0.1:8545`
	* ID de cadena:`31337`
	* Símbolo de moneda: `ETH`
4. Haz clic en **"Guardar"**.

### 3. Ejecución del Proyecto (3 Terminales)

Necesitarás tener **3 terminales** abiertas en la carpeta del proyecto.
#### Terminal 1: Iniciar la Blockchain

Este comando inicia tu nodo de blockchain local. Déjalo corriendo. _(Nota: El archivo `hardhat.config.js` está configurado para escuchar en `hostname: "127.0.0.1"` para compatibilidad)._

Bash

```bash
npx hardhat node
```

- **¡Importante!** Copia una de las "Private Keys" que aparecen en esta terminal.
- En MetaMask, ve al selector de cuentas (el círculo) y haz clic en **"Importar cuenta"**. Pega la clave privada para tener una cuenta con 10000 ETH de prueba.

#### Terminal 2: Desplegar el Contrato
Con el nodo corriendo, despliega tu Smart Contract en la red.

Bash

```bash
npx hardhat run scripts/deploy.js --network localhost
```

- **¡Importante!** Este comando te dará la dirección del contrato desplegado (ej: `0x71C...`).
- Es la que dice AyudaChain desplegado en:
- Abre el archivo `frontend/app.js`  y asegúrate de que la variable `CONTRATO_ADDRESS` (línea 1) coincida **exactamente** con esta dirección.
#### Terminal 3: Iniciar el Frontend
Finalmente, inicia el servidor web que servirá tu `index.html` y `app.js`.
Bash

```bash
# El -c-1 deshabilita la caché para evitar errores de sincronización
npx http-server frontend -p 8000 -c-1
```

---

## Cómo Usar la Aplicación

1. Abre tu navegador web y ve a: **`http://localhost:8000`**
2. **Conectar:** Haz clic en el botón "Conectar MetaMask".
3. **Crear Campaña:** Llena el formulario con un título, descripción, meta (en ETH) y duración (en días). Aprueba la transacción en MetaMask.
4. **Donar:** Haz clic en "Donar" en cualquier campaña activa. Ingresa un monto y aprueba la transacción.
5. **Retirar Fondos:** Si eres el creador de una campaña y sus "días restantes" son 0, aparecerá el botón "Retirar Fondos".

### Cómo Probar el Retiro (Viaje en el Tiempo)
Como no puedes esperar días reales, puedes "viajar en el tiempo" en la blockchain de Hardhat.
1. Crea una campaña con una duración de `2` días.
2. Dona a esa campaña.
3. En tu **Terminal 2**, corre este script para avanzar 3 días en el tiempo:
```bash
npx hardhat run scripts/avanzarTiempo.js --network localhost
```
4. **Recarga** la página web (`Ctrl+Shift+R`). Ahora la campaña dirá "0 días restantes" y el botón "Retirar Fondos" estará visible y funcionará

## Nota para Desarrollo en VM (Con Túnel SSH)

Si estás corriendo este proyecto en una VM (Servidor) y accediendo desde tu PC (Host), la configuración de `localhost` no funcionará directamente.
El proyecto está configurado para usar un **Túnel SSH** por seguridad.

1. **Configuración de Hardhat:** `hardhat.config.js` está configurado con `hostname: "127.0.0.1"`.
2. **Configuración de MetaMask:** Debe estar en `http://127.0.0.1:8545`.
3. **Comando del Túnel (Correr en la PC Host):** Deberás correr una 4ta terminal en tu PC (no en la VM) con este comando para crear el puente:
  ```bash
     ssh -L 8545:localhost:8545 -L 8000:localhost:8000 tu_usuario@<IP_DE_LA_VM>
  ```
   
