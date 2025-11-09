// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AyudaChain {
    
    struct Campana {
        uint id;
        address payable creador;
        string titulo;
        string descripcion;
        uint metaFondos;        // Cuánto necesita recaudar
        uint fondosRecaudados;   // Cuánto lleva recaudado
        uint fechaLimite;        // Timestamp de finalización
        bool activa;
        bool fondosRetirados;
    }
    
    address public administrador;
    uint public totalCampanas;
    uint public comisionPlataforma = 2; // 2% de comisión
    
    mapping(uint => Campana) public campanas;
    mapping(uint => mapping(address => uint)) public donaciones; // campanaId => donante => cantidad
    mapping(uint => address[]) public donantes; // Lista de donantes por campaña
    
    event CampanaCreada(uint id, address creador, string titulo, uint meta, uint deadline);
    event DonacionRecibida(uint campanaId, address donante, uint cantidad);
    event FondosRetirados(uint campanaId, address creador, uint cantidad);
    
    // Modifier para validar que solo el administrador puede hacer ciertas acciones
    modifier soloAdmin() {
        require(msg.sender == administrador, "Solo el administrador puede hacer esto");
        _;
    }
    
    // Modifier para validar que solo el creador de la campaña puede retirar
    modifier soloCreador(uint _campanaId) {
        require(msg.sender == campanas[_campanaId].creador, "Solo el creador puede retirar fondos");
        _;
    }
    
    constructor() {
        administrador = msg.sender;
    }
    
    // Crear una nueva campaña (cualquier usuario puede crear)
    function crearCampana(
        string memory _titulo,
        string memory _descripcion,
        uint _metaFondos,
        uint _duracionDias
    ) public {
        require(_metaFondos > 0, "La meta debe ser mayor a 0");
        require(_duracionDias > 0, "La duracion debe ser mayor a 0");
        require(bytes(_titulo).length > 0, "El titulo no puede estar vacio");
        
        totalCampanas++;
        uint fechaLimite = block.timestamp + (_duracionDias * 1 days);
        
        campanas[totalCampanas] = Campana({
            id: totalCampanas,
            creador: payable(msg.sender),
            titulo: _titulo,
            descripcion: _descripcion,
            metaFondos: _metaFondos,
            fondosRecaudados: 0,
            fechaLimite: fechaLimite,
            activa: true,
            fondosRetirados: false
        });
        
        emit CampanaCreada(totalCampanas, msg.sender, _titulo, _metaFondos, fechaLimite);
    }
    
    // FUNCIÓN PAYABLE: Donar a una campaña
    function donar(uint _campanaId) public payable {
        require(_campanaId > 0 && _campanaId <= totalCampanas, "Campana no existe");
        Campana storage campana = campanas[_campanaId];
        
        require(campana.activa, "La campana no esta activa");
        require(block.timestamp < campana.fechaLimite, "La campana ya termino");
        require(msg.value > 0, "Debes enviar algo de ETH");
        
        // Registrar donación
        if(donaciones[_campanaId][msg.sender] == 0) {
            donantes[_campanaId].push(msg.sender);
        }
        donaciones[_campanaId][msg.sender] += msg.value;
        campana.fondosRecaudados += msg.value;
        
        emit DonacionRecibida(_campanaId, msg.sender, msg.value);
    }
    
    // El creador retira los fondos de su campaña
    function retirarFondos(uint _campanaId) public soloCreador(_campanaId) {
        Campana storage campana = campanas[_campanaId];
        
        require(campana.activa, "La campana no esta activa");
        require(block.timestamp >= campana.fechaLimite, "La campana aun no termina");
        require(!campana.fondosRetirados, "Los fondos ya fueron retirados");
        require(campana.fondosRecaudados > 0, "No hay fondos para retirar");
        
        campana.fondosRetirados = true;
        campana.activa = false;
        
        // Calcular comisión
        uint comision = (campana.fondosRecaudados * comisionPlataforma) / 100;
        uint montoFinal = campana.fondosRecaudados - comision;
        
        // Transferir fondos
        campana.creador.transfer(montoFinal);
        payable(administrador).transfer(comision);
        
        emit FondosRetirados(_campanaId, campana.creador, montoFinal);
    }
    
    // Cancelar campaña (solo admin en casos especiales)
    function cancelarCampana(uint _campanaId) public soloAdmin {
        require(_campanaId > 0 && _campanaId <= totalCampanas, "Campana no existe");
        campanas[_campanaId].activa = false;
    }
    
    // Ver mis donaciones en una campaña
    function obtenerMiDonacion(uint _campanaId) public view returns(uint) {
        return donaciones[_campanaId][msg.sender];
    }
    
    // Ver cuántos donantes tiene una campaña
    function obtenerTotalDonantes(uint _campanaId) public view returns(uint) {
        return donantes[_campanaId].length;
    }
    
    // Ver el balance del contrato
    function obtenerBalance() public view returns(uint) {
        return address(this).balance;
    }
}
