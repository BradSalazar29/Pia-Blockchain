const CONTRATO_ADDRESS = "0x8464135c8f25da09e49bc8782676a84730c318bc";
const HARDHAT_RPC_URL = "http://127.0.0.1:8545";

const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creador",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "titulo",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "meta",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "CampanaCreada",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "campanaId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "donante",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cantidad",
        "type": "uint256"
      }
    ],
    "name": "DonacionRecibida",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "campanaId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creador",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cantidad",
        "type": "uint256"
      }
    ],
    "name": "FondosRetirados",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "administrador",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "campanas",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "creador",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "titulo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "descripcion",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "metaFondos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fondosRecaudados",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fechaLimite",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "activa",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "fondosRetirados",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campanaId",
        "type": "uint256"
      }
    ],
    "name": "cancelarCampana",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "comisionPlataforma",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_titulo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_descripcion",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_metaFondos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_duracionDias",
        "type": "uint256"
      }
    ],
    "name": "crearCampana",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "donaciones",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donantes",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campanaId",
        "type": "uint256"
      }
    ],
    "name": "donar",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "obtenerBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campanaId",
        "type": "uint256"
      }
    ],
    "name": "obtenerMiDonacion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campanaId",
        "type": "uint256"
      }
    ],
    "name": "obtenerTotalDonantes",
    "outputs": [
      {
        "internalType":"uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campanaId",
        "type": "uint256"
      }
    ],
    "name": "retirarFondos",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCampanas",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let readOnlyProvider;
let readOnlyContrato;
let signer;
let cuentaActual;
let modalConfirmCallback = null;

function showToast(message, isError = false) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : 'success'}`;
    
    const icon = isError ? 'fas fa-times-circle' : 'fas fa-check-circle';
    toast.innerHTML = `<i class="${icon}"></i> ${message}`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('slide-out');
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function showModal(title, text, showInput = false, confirmText = "Confirmar") {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal-confirm').innerText = confirmText;
    
    const input = document.getElementById('modal-input');
    input.style.display = showInput ? 'block' : 'none';
    input.value = '';

    document.getElementById('modal-overlay').style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    if (modalConfirmCallback) {
        modalConfirmCallback = null;
    }
}

async function updateNetworkStatus(providerInstance) {
    try {
        const network = await providerInstance.getNetwork();
        const networkNameEl = document.getElementById('network-name');
        const chainIdEl = document.getElementById('network-chainid');
        
        if (network.chainId === 31337) {
            networkNameEl.innerHTML = '<span id="network-status-dot"></span> Hardhat Local';
        } else {
            networkNameEl.innerHTML = `<span id="network-status-dot" style="background-color: #dc3545;"></span> ${network.name || 'Desconocida'}`;
        }
        chainIdEl.innerText = network.chainId;
    } catch (error) {
        console.error("Error obteniendo estado de la red:", error);
        document.getElementById('network-name').innerText = "Error";
        document.getElementById('network-chainid').innerText = "N/A";
    }
}

async function initReadOnly() {
    try {
        readOnlyProvider = new ethers.providers.JsonRpcProvider(HARDHAT_RPC_URL);
        readOnlyContrato = new ethers.Contract(CONTRATO_ADDRESS, ABI, readOnlyProvider);
        
        await updateNetworkStatus(readOnlyProvider);
        await cargarCampanas();
        console.log("Modo 'solo lectura' inicializado.");
    } catch (error) {
        console.error("Error al iniciar en modo 'solo lectura'. ¿Está corriendo el nodo Hardhat?", error);
        
        const networkNameEl = document.getElementById('network-name');
        networkNameEl.innerHTML = '<span id="network-status-dot" style="background-color: #dc3545;"></span> Desconectado';
        document.getElementById('network-chainid').innerText = "N/A";
        
        document.getElementById('alertaSinWallet').innerHTML = '<strong>Error: No se puede conectar a la blockchain.</strong> Verifica que el nodo Hardhat y el túnel SSH estén corriendo.';
    }
}

async function conectarWallet() {
    if (typeof window.ethereum === 'undefined') {
        return showToast('Por favor instala MetaMask primero', true);
    }

    try {
        const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
        await metamaskProvider.send("eth_requestAccounts", []);
        signer = metamaskProvider.getSigner();
        cuentaActual = await signer.getAddress();

        document.getElementById('alertaSinWallet').style.display = 'none';
        document.getElementById('infoWallet').style.display = 'block';
        document.getElementById('formCrearCampana').style.display = 'block';
        document.getElementById('direccion').innerText = cuentaActual.substring(0, 6) + '...' + cuentaActual.substring(38);

        const balance = await signer.getBalance();
        document.getElementById('balance').innerText = ethers.utils.formatEther(balance);

        await updateNetworkStatus(metamaskProvider);
        await cargarCampanas();

        console.log('Wallet conectada:', cuentaActual);
    } catch (error) {
        console.error('Error conectando:', error);
        showToast('Usuario rechazó la conexión', true);
    }
}

function desconectarWallet() {
    cuentaActual = undefined;
    signer = undefined;
    
    document.getElementById('alertaSinWallet').style.display = 'block';
    document.getElementById('infoWallet').style.display = 'none';
    document.getElementById('formCrearCampana').style.display = 'none';
    
    updateNetworkStatus(readOnlyProvider);
    cargarCampanas();
    console.log('Wallet desconectada. Volviendo a modo "solo lectura".');
}

async function crearCampana() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const meta = document.getElementById('meta').value;
    const duracion = document.getElementById('duracion').value;

    if (!titulo || !descripcion || !meta || !duracion) {
        return showToast('Por favor llena todos los campos', true);
    }

    if (!signer) {
        return showToast('Por favor, conecta tu wallet primero', true);
    }
    
    try {
        const writeContrato = new ethers.Contract(CONTRATO_ADDRESS, ABI, signer);
        const metaWei = ethers.utils.parseEther(meta);
        const tx = await writeContrato.crearCampana(titulo, descripcion, metaWei, duracion);
        
        showToast('Creando campaña... espera la confirmación');
        await tx.wait();
        showToast('¡Campaña creada exitosamente!', false);

        document.getElementById('titulo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('meta').value = '';
        document.getElementById('duracion').value = '';

        await cargarCampanas();
    } catch (error) {
        console.error('Error:', error);
        showToast(error.message || 'Error al crear campaña', true);
    }
}

async function cargarCampanas() {
    let totalDonado = 0;
    
    try {
        const totalBigNum = await readOnlyContrato.totalCampanas();
        const total = totalBigNum.toNumber();

        const latestBlock = await readOnlyProvider.getBlock("latest");
        const ahora = latestBlock.timestamp;

        let promesas = [];
        for (let i = 1; i <= total; i++) {
            promesas.push(readOnlyContrato.campanas(i));
        }

        const campanas = await Promise.all(promesas);
        let html = '';

        for (const campana of campanas) {
            
            const fondosETH = ethers.utils.formatEther(campana.fondosRecaudados);
            const metaETH = ethers.utils.formatEther(campana.metaFondos);
            
            totalDonado += parseFloat(fondosETH);

            let progreso = 0;
            if (parseFloat(metaETH) > 0) {
                 progreso = (parseFloat(fondosETH) * 100) / parseFloat(metaETH);
            }

            const fechaLimiteNum = campana.fechaLimite.toNumber();
            const diasRestantes = Math.max(0, Math.floor((fechaLimiteNum - ahora) / 86400));
            
            const isOwner = cuentaActual && (campana.creador.toLowerCase() === cuentaActual.toLowerCase());
            const canWithdraw = isOwner && diasRestantes === 0 && campana.activa && campana.fondosRecaudados > 0;
            const hasWithdrawn = isOwner && campana.fondosRetirados;

            html += `
                <div class="campana-card">
                    <div class="card-image-placeholder"></div>
                    <div class="campana-content">
                        <div class="campana-header">
                            <div class="campana-titulo">${campana.titulo}</div>
                            <small>Por: ${campana.creador.substring(0, 6)}...${campana.creador.substring(38)}</small>
                        </div>

                        <p>${campana.descripcion}</p>

                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(progreso, 100)}%"></div>
                        </div>

                        <div class="campana-stats-grid">
                            <div>
                                <span>Recaudado</span>
                                <strong>${fondosETH} ETH</strong>
                            </div>
                            <div>
                                <span>Meta</span>
                                <strong>${metaETH} ETH</strong>
                            </div>
                            <div>
                                <span>Restante</span>
                                <strong>${diasRestantes} ${diasRestantes === 1 ? 'día' : 'días'}</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div class="campana-footer">
                        <button onclick="donarACampana(${campana.id})" ${!campana.activa ? 'disabled' : ''}>
                            ${campana.activa ? 'Donar a esta campaña' : 'Campaña Finalizada'}
                        </button>

                        ${ isOwner ?
                            `<button onclick="retirarFondos(${campana.id})" class="btn-secondary" ${!canWithdraw ? 'disabled' : ''}>
                                ${hasWithdrawn ? 'Fondos Retirados' : (canWithdraw ? 'Retirar Fondos' : (campana.activa ? `Retirar en ${diasRestantes} ${diasRestantes === 1 ? 'día' : 'días'}` : 'No hay fondos'))}
                            </button>` : ''
                        }
                    </div>
                </div>
            `;
        }

        document.getElementById('campanas').innerHTML = html || '<p>No hay campañas activas aún. ¡Sé el primero en crear una!</p>';
        
        document.getElementById('stat-total-campanas').innerText = total;
        document.getElementById('stat-total-donado').innerText = `${totalDonado.toFixed(4)} ETH`;
    
    } catch (error) {
        console.error('Error cargando campañas:', error);
        document.getElementById('campanas').innerHTML = '<p>Error al cargar campañas.</p>';
    }
}

async function donarACampana(campanaId) {
    if (!signer) {
        return showToast('Conecta tu wallet para donar', true);
    }

    showModal('Donar a Campaña', '¿Cuánto quieres donar? (en ETH)', true, 'Donar');
    
    modalConfirmCallback = async () => {
        const cantidad = document.getElementById('modal-input').value;
        if (!cantidad || cantidad <= 0) {
            hideModal();
            return showToast('Ingresa un monto válido', true);
        }
        
        hideModal();

        try {
            const writeContrato = new ethers.Contract(CONTRATO_ADDRESS, ABI, signer);
            const cantidadWei = ethers.utils.parseEther(cantidad);
            const tx = await writeContrato.donar(campanaId, { value: cantidadWei });
            showToast('Procesando donación...');
            await tx.wait();
            showToast('¡Gracias por tu donación!', false);
            await cargarCampanas();
        } catch (error) {
            console.error('Error:', error);
            showToast(error.message || 'Error al donar', true);
        }
    }
}

async function retirarFondos(campanaId) {
    if (!confirm('¿Estás seguro de retirar los fondos de esta campaña?')) return;
    
    if (!signer) {
        return showToast('Por favor, conecta tu wallet primero', true);
    }
    
    try {
        const writeContrato = new ethers.Contract(CONTRATO_ADDRESS, ABI, signer);
        const tx = await writeContrato.retirarFondos(campanaId);
        showToast('Retirando fondos...');
        await tx.wait();
        showToast('¡Fondos retirados exitosamente!', false);
        await cargarCampanas();
    } catch (error) {
        console.error('Error:', error);
        showToast(error.message || 'Error al retirar', true);
    }
}

window.addEventListener('load', () => {
    initReadOnly();
    
    document.getElementById('modal-cancel').onclick = hideModal;
    document.getElementById('modal-overlay').onclick = (e) => {
        if (e.target.id === 'modal-overlay') {
            hideModal();
        }
    };
    
    document.getElementById('modal-confirm').onclick = () => {
        if (modalConfirmCallback) {
            modalConfirmCallback();
        }
    };
});
