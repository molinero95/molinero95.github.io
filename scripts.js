//Meter en un JSON
function getDistricts(){
    let distritos = [];
    let chamberi = [
        {lat: 40.4461822, lng: -3.6913631}, //Castellana con Joaquín Costa
        {lat: 40.4411563, lng: -3.6919231}, //Plz San Juan de la Cruz
        {lat: 40.4377533, lng: -3.6905757}, //Gregorio Marañón
        {lat: 40.4351075, lng: -3.6887196}, //Monumento a Emilio Castelar
        {lat: 40.4330838, lng: -3.6887263}, //Ruben Darío
        {lat: 40.4250743, lng: -3.6903732}, //Colón
        {lat: 40.4277602, lng: -3.6957562}, //Alonso Martinez
        {lat: 40.4288781, lng: -3.7022974}, //Bilbao
        {lat: 40.4294542, lng: -3.7058214}, //San Bernardo
        {lat: 40.4306014, lng: -3.7161096}, //Arguelles
        {lat: 40.4330264, lng: -3.7180536}, //Princesa con Meléndez Valdés
        {lat: 40.4332535, lng: -3.7174267}, //Meléndez Valdés con Arcipreste de Hita
        {lat: 40.4346921, lng: -3.7183339}, //Arcipreste de Hita con Isaac Peral. MEJORAR AQUI
        {lat: 40.4395967, lng: -3.7175963}, //Plaza cristo rey
        {lat: 40.4437752, lng: -3.7196728}, //Plaza Eugenio María de Hostos
        {lat: 40.4449521, lng: -3.7198333}, //Plaza Marqués de comillas
        {lat: 40.4466871, lng: -3.7181462}, //Metropolitano
        {lat: 40.4455946, lng: -3.7146164}, //Moncloa con Reina Victoria
        {lat: 40.4469749, lng: -3.7093029}, //Reina Victoria curva
        {lat: 40.4470462, lng: -3.7083913}, //Hospital Cruz Roja
        {lat: 40.4461822, lng: -3.6913631} //Vuelta
    ];
    distritos.push(chamberi);
    let tetuan = [
        {lat: 40.4462073, lng: -3.6912829}, //Nuevos Ministerios
        {lat: 40.4470462, lng: -3.7083913}, //Hospital Cruz Roja
        {lat: 40.4523766, lng: -3.7117199}, //Jefatura Superior de Policia Nacional
        {lat: 40.4530123, lng: -3.7133721}, //Calle Numancia
        {lat: 40.4538879, lng: -3.7127794}, //Calle Numancia con av Pablo Iglesias
        {lat: 40.4551737, lng: -3.7131683}, //Curva Pablo Iglesias
        {lat: 40.4622533, lng: -3.7083296}, //Ofelia Nieto
        {lat: 40.4642287, lng: -3.7093381}, //Calle Villaamil
        {lat: 40.4656905, lng: -3.7104368}, //Calle Villaamil rotonda
        {lat: 40.4683599, lng: -3.7133185}, //Sinesio Delgado curva
        {lat: 40.4709074, lng: -3.7117574}, //Sinesio Delgado curva
        {lat: 40.4720276, lng: -3.7038315}, //Sinesio Delgado curva
        {lat: 40.4748255, lng: -3.7006464}, //Sinesio Delgado curva
        {lat: 40.4749609, lng: -3.6994624}, //Sinesio Delgado curva
        {lat: 40.4744949, lng: -3.6974073}, //Sinesio Delgado curva
        {lat: 40.4747362, lng: -3.6957706}, //Sinesio Delgado curva
        {lat: 40.4744983, lng: -3.6940098}, //Sinesio Delgado curva
        {lat: 40.4746939, lng: -3.6924514}, //Sinesio Delgado estrechamiento
        {lat: 40.474449, lng: -3.6909414}, //Sinesio Delgado 3 carriles
        {lat: 40.4746582, lng: -3.6892631}, //Sinesio Delgado rotonda
        {lat: 40.4741825, lng: -3.6872829}, //Sinesio Delgado con Castellana
        {lat: 40.4659765, lng: -3.6893288}, //Plaza de Castilla
        {lat: 40.4462073, lng: -3.6912829}, //Nuevos Ministerios
    ];
    distritos.push(tetuan);
    
    let manoteras = [
        {lat: 40.48404, lng: -3.6734187}, //Nudo de Manoteras
        {lat: 40.4909269, lng: -3.6717726}, //A1
        {lat: 40.5039895, lng: -3.6583633}, //A1 via de servicio
        {lat: 40.5110079, lng: -3.6580723}, //A1 giro
        {lat: 40.5135211, lng: -3.655896}, //A1 salida
        {lat: 40.5112442, lng: -3.6522417},//Rotonda camino del cura
        {lat: 40.5103806, lng: -3.6478948}, //Camino del cura
        {lat: 40.5078639, lng: -3.644797}, //Rotonda Camino de la Huerta
        {lat: 40.5081953, lng: -3.6422015}, //Camino de la Huerta
        {lat: 40.5075717, lng: -3.6333396}, //Calle de Agatha Christie
        {lat: 40.5073861, lng: -3.6333255}, //Calle de Agatha Christie
        {lat: 40.5082285, lng: -3.6302971}, //Curva colegio
        {lat: 40.5080849, lng: -3.6283152}, //Curva colegio
        {lat: 40.5091634, lng: -3.6254723}, //Curva colegio
        {lat: 40.5085406, lng: -3.6230203}, //Camino viejo del cura
        {lat: 40.5098617, lng: -3.6208385}, //Curva colegio
        {lat: 40.5097576, lng: -3.6177968}, //Curva colegio
        {lat: 40.5107299, lng: -3.6154616}, //Curva colegio
        {lat: 40.510477, lng: -3.6139978}, //Colegio Escandinavo
        {lat: 40.5012218, lng: -3.6016404}, //M12
        {lat: 40.4724417, lng: -3.6012862}, //Elipa
        {lat: 40.4700992, lng: -3.6024925}, //Ariadna/Elipa 
        {lat: 40.4713994, lng: -3.6066256}, //Calle Ariadna
        {lat: 40.4722702, lng: -3.6232352}, //M11
        {lat: 40.470457, lng: -3.6245469}, //Via Dublín
        {lat: 40.468595, lng: -3.6242277}, //IFEMA
        {lat: 40.4683971, lng: -3.6275209}, //M40 entrada 5
        {lat: 40.4604459, lng: -3.6213954}, //M40 salida 6
        {lat: 40.4550925, lng: -3.6120607}, //M40
        {lat: 40.4527905, lng: -3.6053651}, //M40
        {lat: 40.4533948, lng: -3.6045876}, //Osuna Camping
        {lat: 40.4496326, lng: -3.6038393}, //A2 Av América
        {lat: 40.4492287, lng: -3.6305219}, //A2
        {lat: 40.4484935, lng: -3.6366989}, //A2
        {lat: 40.4497676, lng: -3.6458168}, //A2
        {lat: 40.4493461, lng: -3.6480506}, //Asuna con A2
        {lat: 40.4593258, lng: -3.6562734}, //Asuna
        {lat: 40.4633048, lng: -3.6620066}, //Mesena
        {lat: 40.4764452, lng: -3.6657567}, //Golfo de Salónica
        {lat: 40.4776936, lng: -3.665413}, //Golfo de Salónica
        {lat: 40.4830271, lng: -3.6600191}, //Manuel Azaña
        {lat: 40.48404, lng: -3.6734187}, //Nudo de Manoteras
    ];
    distritos.push(manoteras);

    let chamartin = [
        {lat: 40.48404, lng: -3.6734187}, //Nudo de Manoteras
        {lat: 40.4838292, lng: -3.6790864}, //M11
        {lat: 40.4823998, lng: -3.6851719}, //M30
        {lat: 40.4660212, lng: -3.6893549}, //Plaza Castilla
        {lat: 40.4412055, lng: -3.6916982}, //Plaza de Juan de la Cruz
        {lat: 40.438, lng: -3.6906394}, //Metro Gregorio Marañón
        {lat: 40.43742, lng: -3.6773253}, //Francisco Silvela
        {lat: 40.4388146, lng: -3.6745555}, //Avd America
        {lat: 40.4446709, lng: -3.6604087}, //A2 con M30
        {lat: 40.4508628, lng: -3.6627767}, //M30
        {lat: 40.4568338, lng: -3.6638049}, //M30
        {lat: 40.4601063, lng: -3.6648458}, //Costa Rica
        {lat: 40.4687792, lng: -3.6697395}, //M30
        {lat: 40.4735826, lng: -3.6733964}, //M30
        {lat: 40.4774418, lng: -3.6743166}, //M30

    ];
    distritos.push(chamartin);

    let ciuLin = [
        {lat: 40.48404, lng: -3.6734187}, //Nudo de Manoteras
        {lat: 40.4830271, lng: -3.6600191}, //Manuel Azaña
        {lat: 40.4776936, lng: -3.665413}, //Golfo de Salónica
        {lat: 40.4764452, lng: -3.6657567}, //Golfo de Salónica
        {lat: 40.4633048, lng: -3.6620066}, //Mesena
        {lat: 40.4593258, lng: -3.6562734}, //Asuna
        {lat: 40.4493461, lng: -3.6480506}, //Asuna con A2
        {lat: 40.4476157, lng: -3.6463742}, //Telémaco con Aranaz
        {lat: 40.4445728, lng: -3.6402682}, //Aranaz
        {lat: 40.4440101, lng: -3.6394453}, //Aranaz
        {lat: 40.4385701, lng: -3.6354279}, //Alcalá
        {lat: 40.4378979, lng: -3.6379586}, //Metro Ciu Lin
        {lat: 40.4130562, lng: -3.62034}, //R3
        {lat: 40.4151193, lng: -3.631147}, //R3
        {lat: 40.4143253, lng: -3.6396337}, //M-23
        {lat: 40.4146977, lng: -3.6446668}, //M-23
        {lat: 40.4186463, lng: -3.6586407}, //M-23 con M30
        {lat: 40.4313225, lng: -3.6606819}, //Puente de Ventas
        {lat: 40.4414202, lng: -3.658946}, //M30
        {lat: 40.4446709, lng: -3.6604087}, //A2 con M30
        {lat: 40.4508628, lng: -3.6627767}, //M30
        {lat: 40.4568338, lng: -3.6638049}, //M30
        {lat: 40.4601063, lng: -3.6648458}, //Costa Rica
        {lat: 40.4687792, lng: -3.6697395}, //M30
        {lat: 40.4735826, lng: -3.6733964}, //M30
        {lat: 40.4774418, lng: -3.6743166}, //M30        
    ];
    distritos.push(ciuLin);

    let barrioSal = [
        {lat: 40.4446709, lng: -3.6604087}, //A2 con M30
        {lat: 40.4388146, lng: -3.6745555}, //Avd America
        {lat: 40.43742, lng: -3.6773253}, //Francisco Silvela
        {lat: 40.438, lng: -3.6906394}, //Metro Gregorio Marañón
        {lat: 40.4351075, lng: -3.6887196}, //Monumento a Emilio Castelar
        {lat: 40.4330838, lng: -3.6887263}, //Ruben Darío
        {lat: 40.4250743, lng: -3.6903732}, //Colón
        {lat: 40.4193093, lng: -3.6930897}, //Cibeles
        {lat: 40.4217109, lng: -3.6795324}, //O'Donnell
        {lat: 40.4211297, lng: -3.6688231}, //O'Donnell
        {lat: 40.4186463, lng: -3.6586407}, //M-23 con M30
        {lat: 40.4313225, lng: -3.6606819}, //Puente de Ventas
        {lat: 40.4414202, lng: -3.658946}, //M30
    ];
    distritos.push(barrioSal);

    let sanBlas = [
        {lat: 40.4492287, lng: -3.6305219}, //A2
        {lat: 40.4484935, lng: -3.6366989}, //A2
        {lat: 40.4497676, lng: -3.6458168}, //A2
        {lat: 40.4493461, lng: -3.6480506}, //Asuna con A2
        {lat: 40.4476157, lng: -3.6463742}, //Telémaco con Aranaz
        {lat: 40.4445728, lng: -3.6402682}, //Aranaz
        {lat: 40.4440101, lng: -3.6394453}, //Aranaz
        {lat: 40.4385701, lng: -3.6354279}, //Alcalá
        {lat: 40.4378979, lng: -3.6379586}, //Metro Ciu Lin
        {lat: 40.4130562, lng: -3.62034}, //R3
        {lat: 40.4153125, lng: -3.617932}, //M40
        {lat: 40.4179163, lng: -3.6108356}, //M40
        {lat: 40.4131187, lng: -3.6101569}, //R3
        {lat: 40.4112137, lng: -3.5983727}, //R3
        {lat: 40.408475, lng: -3.5885915}, //R3 con M-214
        {lat: 40.415792, lng: -3.5831243}, //M-214
        {lat: 40.4185114, lng: -3.5827698}, //M-214
        {lat: 40.429429, lng: -3.5762795}, //M-214
        {lat: 40.437622, lng: -3.5656914}, //Exteriores San Blas
        {lat: 40.4380903, lng: -3.5599914}, // ""
        {lat: 40.4421316, lng: -3.5501944}, //""
        {lat: 40.4438101, lng: -3.5410929}, //Camino de las Rejas
        {lat: 40.4446269, lng: -3.5410585}, //Avenida Glorietas
        {lat: 40.4443246, lng: -3.5377698}, //Calle de Antonio Garcia
        {lat: 40.4451017, lng: -3.538106},
        {lat: 40.4446674, lng: -3.5354235},
        {lat: 40.4449297, lng: -3.5348121},
        {lat: 40.4469313, lng: -3.5312754}, //A2
        {lat: 40.4494838, lng: -3.5593996}, //A2
        {lat: 40.4501856, lng: -3.6003753},
        {lat: 40.4496326, lng: -3.6038393}, //A2 Av América
    ];
    distritos.push(sanBlas);

    let centro = [
        {lat: 40.4306014, lng: -3.7161096}, //Arguelles
        {lat: 40.4294542, lng: -3.7058214}, //San Bernardo
        {lat: 40.4288781, lng: -3.7022974}, //Bilbao
        {lat: 40.4277602, lng: -3.6957562}, //Alonso Martinez
        {lat: 40.4250743, lng: -3.6903732}, //Colón
        {lat: 40.4193093, lng: -3.6930897}, //Cibeles
        {lat: 40.4159491, lng: -3.6936636}, //Paseo del Prado
        {lat: 40.4087139, lng: -3.6918902}, //Ronda de Atocha
        {lat: 40.4074275, lng: -3.6935919}, //Plaza Emperador Carlos V
        {lat: 40.4050011, lng: -3.7025703}, //Embajadores
        {lat: 40.4066228, lng: -3.7116118}, //Puerta de Toledo
        {lat: 40.4086596, lng: -3.7166561}, //Ronda de Segovia
        {lat: 40.4110847, lng: -3.7181808}, //Ronda de Segovia con Algeciras
        {lat: 40.413873, lng: -3.7168273}, //Calle de Segovia
        {lat: 40.4139965, lng: -3.7229148}, //Puente de Segovia
        {lat: 40.4188552, lng: -3.7218774}, //Puente del Rey
        {lat: 40.4202194, lng: -3.7203753}, //Puerta de San Vicente
        {lat: 40.4203823, lng: -3.7154629}, //Cuesta San Vicente
        {lat: 40.4233857, lng: -3.7107993}, //Plaza Esp con Princesa
    ];
    distritos.push(centro);

    let retiro = [
        {lat: 40.4193093, lng: -3.6930897}, //Cibeles
        {lat: 40.4217109, lng: -3.6795324}, //O'Donnell
        {lat: 40.4211297, lng: -3.6688231}, //O'Donnell
        {lat: 40.4186463, lng: -3.6586407}, //M-23 con M30
        {lat: 40.4169901, lng: -3.6591449}, //M30
        {lat: 40.4063398, lng: -3.6650495}, //M30 con Av Mediterraneo
        {lat: 40.4038193, lng: -3.6665423}, //M30
        {lat: 40.3995837, lng: -3.6681328}, //M30
        {lat: 40.3965811, lng: -3.6707012}, //M30
        {lat: 40.3943726, lng: -3.6734035}, //M30 pico
        {lat: 40.3968906, lng: -3.6743782},
        {lat: 40.3990653, lng: -3.6766712}, //Dr Esquerdo
        {lat: 40.4032161, lng: -3.684611}, //Antonio Nebrija
        {lat: 40.4069832, lng: -3.6889347}, //Atocha
        {lat: 40.4087139, lng: -3.6918902}, //Ronda de Atocha
        {lat: 40.4159491, lng: -3.6936636}, //Paseo del Prado
    ];
    distritos.push(retiro);
    let moncloaAravaca = [
        {lat: 40.4170576, lng: -3.7222681}, //A5 puente
        {lat: 40.4188552, lng: -3.7218774}, //Puente del Rey
        {lat: 40.4202194, lng: -3.7203753}, //Puerta de San Vicente
        {lat: 40.4203823, lng: -3.7154629}, //Cuesta San Vicente
        {lat: 40.4233857, lng: -3.7107993}, //Plaza Esp con Princesa
        {lat: 40.4306014, lng: -3.7161096}, //Arguelles
        {lat: 40.4330264, lng: -3.7180536}, //Princesa con Meléndez Valdés
        {lat: 40.4332535, lng: -3.7174267}, //Meléndez Valdés con Arcipreste de Hita
        {lat: 40.4346921, lng: -3.7183339}, //Arcipreste de Hita con Isaac Peral. MEJORAR AQUI
        {lat: 40.4395967, lng: -3.7175963}, //Plaza cristo rey
        {lat: 40.4437752, lng: -3.7196728}, //Plaza Eugenio María de Hostos
        {lat: 40.4449521, lng: -3.7198333}, //Plaza Marqués de comillas
        {lat: 40.4466871, lng: -3.7181462}, //Metropolitano
        {lat: 40.4455946, lng: -3.7146164}, //Moncloa con Reina Victoria
        {lat: 40.4469749, lng: -3.7093029}, //Reina Victoria curva
        {lat: 40.4470462, lng: -3.7083913}, //Hospital Cruz Roja
        {lat: 40.4523766, lng: -3.7117199}, //Jefatura Superior de Policia Nacional
        {lat: 40.4530123, lng: -3.7133721}, //Calle Numancia
        {lat: 40.4538879, lng: -3.7127794}, //Calle Numancia con av Pablo Iglesias
        {lat: 40.4551737, lng: -3.7131683}, //Curva Pablo Iglesias
        {lat: 40.4622533, lng: -3.7083296}, //Ofelia Nieto
        {lat: 40.4642287, lng: -3.7093381}, //Calle Villaamil
        {lat: 40.4656905, lng: -3.7104368}, //Calle Villaamil rotonda
        {lat: 40.4683599, lng: -3.7133185}, //Sinesio Delgado curva
        {lat: 40.4694325, lng: -3.7139875},//Independencia de Saconia
        {lat: 40.4728586, lng: -3.7283257}, //Glorieta de Isaac Ravin
        {lat: 40.4725583, lng: -3.7324852}, //Av.de la Ilustración
        {lat: 40.4736286, lng: -3.738002}, //Av.de la Ilustración
        {lat: 40.4743656, lng: -3.741591}, //Av.de la Ilustración
        {lat: 40.4744482, lng: -3.7479863},//Av.de la Ilustración
        {lat: 40.4728465, lng: -3.7504133}, //M30
        {lat: 40.4708969, lng: -3.7504779}, //M30
        {lat: 40.4710457, lng: -3.7506805}, //M30 entrada
        {lat: 40.47535, lng: -3.7517742},
        {lat: 40.4788309, lng: -3.7512567}, //M40
        {lat: 40.4779461, lng: -3.7530119}, //M40
        {lat: 40.4743205, lng: -3.757128}, //M40
        {lat: 40.4783573, lng: -3.7558058}, //rect raro
        {lat: 40.4785551, lng: -3.7576938}, //El Pardo a la playa
        {lat: 40.473512, lng: -3.7580501}, //M40
        {lat: 40.4726378, lng: -3.7627308}, //M40
        {lat: 40.4742813, lng: -3.77016}, //M40
        {lat: 40.4747982, lng: -3.780836}, //M40
        {lat: 40.4694224, lng: -3.7998794}, //Exteriores
        {lat: 40.4794639, lng: -3.8364224}, //Exteriores
        {lat: 40.4755462, lng: -3.8373028},
        {lat: 40.4747898, lng: -3.8361185}, //Av victoria
        {lat: 40.4709503, lng: -3.838051},
        {lat: 40.467747, lng: -3.8381675}, //Arroyo de Valhondillo
        {lat: 40.467747, lng: -3.8381675},
        {lat: 40.467747, lng: -3.8381675},
        {lat: 40.464321, lng: -3.8093719},
        {lat: 40.4629632, lng: -3.8039476}, 
        {lat: 40.4588374, lng: -3.7985389},
        {lat: 40.4423581, lng: -3.7900403}, // Calle Suiza
        {lat: 40.4442708, lng: -3.7842627},
        {lat: 40.4440166, lng: -3.7706996}, //Cerro de las Covatillas
        {lat: 40.429312, lng: -3.7707097},
        {lat: 40.4241409, lng: -3.7790005},
        {lat: 40.4174379, lng: -3.7814003},
        {lat: 40.403925, lng: -3.7763113},
        {lat: 40.4019908, lng: -3.7743216},
        {lat: 40.4001211, lng: -3.774537}, //Anillo verde ciclista
        {lat: 40.3995231, lng: -3.7702676}, //Anillo verde ciclista
        {lat: 40.3989624, lng: -3.7649961}, //Paseo de Extremadura

    ]
    distritos.push(moncloaAravaca);

    let fuencarralPardo = [
        {lat: 40.4794639, lng: -3.8364224}, //Exteriores
        {lat: 40.4694224, lng: -3.7998794}, //Exteriores
        {lat: 40.4747982, lng: -3.780836}, //M40
        {lat: 40.4742813, lng: -3.77016}, //M40
        {lat: 40.4726378, lng: -3.7627308}, //M40
        {lat: 40.473512, lng: -3.7580501}, //M40
        {lat: 40.4785551, lng: -3.7576938}, //El Pardo a la playa
        {lat: 40.4783573, lng: -3.7558058}, //rect raro
        {lat: 40.4743205, lng: -3.757128}, //M40
        {lat: 40.4779461, lng: -3.7530119}, //M40
        {lat: 40.4788309, lng: -3.7512567}, //M40
        {lat: 40.47535, lng: -3.7517742},
        {lat: 40.4710457, lng: -3.7506805}, //M30 entrada
        {lat: 40.4708969, lng: -3.7504779}, //M30
        {lat: 40.4728465, lng: -3.7504133}, //M30
        {lat: 40.4744482, lng: -3.7479863},//Av.de la Ilustración
        {lat: 40.4743656, lng: -3.741591}, //Av.de la Ilustración
        {lat: 40.4736286, lng: -3.738002}, //Av.de la Ilustración
        {lat: 40.4725583, lng: -3.7324852}, //Av.de la Ilustración
        {lat: 40.4728586, lng: -3.7283257}, //Glorieta de Isaac Ravin
        {lat: 40.4694325, lng: -3.7139875},//Independencia de Saconia
        {lat: 40.4683599, lng: -3.7133185}, //Sinesio Delgado curva
        {lat: 40.4709074, lng: -3.7117574}, //Sinesio Delgado curva
        {lat: 40.4720276, lng: -3.7038315}, //Sinesio Delgado curva
        {lat: 40.4748255, lng: -3.7006464}, //Sinesio Delgado curva
        {lat: 40.4749609, lng: -3.6994624}, //Sinesio Delgado curva
        {lat: 40.4744949, lng: -3.6974073}, //Sinesio Delgado curva
        {lat: 40.4747362, lng: -3.6957706}, //Sinesio Delgado curva
        {lat: 40.4744983, lng: -3.6940098}, //Sinesio Delgado curva
        {lat: 40.4746939, lng: -3.6924514}, //Sinesio Delgado estrechamiento
        {lat: 40.474449, lng: -3.6909414}, //Sinesio Delgado 3 carriles
        {lat: 40.4746582, lng: -3.6892631}, //Sinesio Delgado rotonda
        {lat: 40.4741825, lng: -3.6872829}, //Sinesio Delgado con Castellana
        {lat: 40.4823998, lng: -3.6851719}, //M30
        {lat: 40.4838292, lng: -3.6790864}, //M11
        {lat: 40.48404, lng: -3.6734187}, //Nudo de Manoteras
        {lat: 40.4909269, lng: -3.6717726}, //A1
        {lat: 40.5039895, lng: -3.6583633}, //A1 via de servicio
        {lat: 40.5110079, lng: -3.6580723}, //A1 giro
        {lat: 40.5135211, lng: -3.655896}, //A1 salida
    ]
    distritos.push(fuencarralPardo);

    let barajas = [
        {lat: 40.5112392, lng: -3.5537918}, //Arroyo de las Zorreras con carretera
        {lat: 40.5120593, lng: -3.5716665}, //Pistas T4
        {lat: 40.5015537, lng: -3.5928502}, //T4
        {lat: 40.5012218, lng: -3.6016404}, //M12
        {lat: 40.4724417, lng: -3.6012862}, //Elipa
        {lat: 40.4700992, lng: -3.6024925}, //Ariadna/Elipa 
        {lat: 40.4713994, lng: -3.6066256}, //Calle Ariadna
        {lat: 40.4722702, lng: -3.6232352}, //M11
        {lat: 40.470457, lng: -3.6245469}, //Via Dublín
        {lat: 40.468595, lng: -3.6242277}, //IFEMA
        {lat: 40.4683971, lng: -3.6275209}, //M40 entrada 5
        {lat: 40.4604459, lng: -3.6213954}, //M40 salida 6
        {lat: 40.4550925, lng: -3.6120607}, //M40
        {lat: 40.4527905, lng: -3.6053651}, //M40
        {lat: 40.4533948, lng: -3.6045876}, //Osuna Camping
        {lat: 40.4496326, lng: -3.6038393}, //A2 Av América
        {lat: 40.4501856, lng: -3.6003753},
        {lat: 40.4494838, lng: -3.5593996}, //A2
        {lat: 40.4469313, lng: -3.5312754}, //A2
    ]
    distritos.push(barajas);

    let arganzuela = [
        {lat: 40.4121621, lng: -3.7227527}, //Rio Manzanares
        {lat: 40.4085492, lng: -3.7217518}, //Rio Manzanares
        {lat: 40.4057231, lng: -3.72267}, //Rio Manzanares
        {lat: 40.4045835, lng: -3.7226806}, //Rio Manzanares
        {lat: 40.4037784, lng: -3.7225522}, //Puente de San Isidro
        {lat: 40.401107, lng: -3.7218842},  //Rio Manzanares
        {lat: 40.3998901, lng: -3.720011}, //Rio Manzanares
        {lat: 40.3996562, lng: -3.7148796}, //Puente de Toledo
        {lat: 40.3974447, lng: -3.7115179}, //Rio Manzanares
        {lat: 40.3950704, lng: -3.7046156}, //Puente de Praga
        {lat: 40.3933601, lng: -3.7021035}, //Rio Manzanares
        {lat: 40.3890735, lng: -3.6981267}, //Puente de Andalucía
        {lat: 40.3823344, lng: -3.6897331}, //Av Paz salida con Manzanares
        {lat: 40.3827461, lng: -3.6889083}, //Av Paz salida
        {lat: 40.3838507, lng: -3.6840497}, //Av. Paz
        {lat: 40.3846888, lng: -3.6827191}, //Av. Paz
        {lat: 40.3902193, lng: -3.6788056}, //Av. Paz
        {lat: 40.3943726, lng: -3.6734035}, //M30 pico
        {lat: 40.3968906, lng: -3.6743782},
        {lat: 40.3990653, lng: -3.6766712}, //Dr Esquerdo
        {lat: 40.4032161, lng: -3.684611}, //Antonio Nebrija
        {lat: 40.4069832, lng: -3.6889347}, //Atocha
        {lat: 40.4087139, lng: -3.6918902}, //Ronda de Atocha
        {lat: 40.4074275, lng: -3.6935919}, //Plaza Emperador Carlos V
        {lat: 40.4050011, lng: -3.7025703}, //Embajadores
        {lat: 40.4066228, lng: -3.7116118}, //Puerta de Toledo
        {lat: 40.4086596, lng: -3.7166561}, //Ronda de Segovia
        {lat: 40.4110847, lng: -3.7181808}, //Ronda de Segovia con Algeciras
        {lat: 40.413873, lng: -3.7168273}, //Calle de Segovia
        {lat: 40.4139965, lng: -3.7229148}, //Puente de Segovia
    ]
    distritos.push(arganzuela);

    let moratalaz = [
        {lat: 40.4051741, lng: -3.6548846}, //A3
        {lat: 40.3960664, lng: -3.644156}, //A3
        {lat: 40.392552, lng: -3.6297884}, //M40 con A3
        {lat: 40.3971405, lng: -3.6273397}, //M40
        {lat: 40.4016182, lng: -3.6261756}, //M40
        {lat: 40.4130562, lng: -3.62034}, //R3
        {lat: 40.4151193, lng: -3.631147}, //R3
        {lat: 40.4143253, lng: -3.6396337}, //M-23
        {lat: 40.4146977, lng: -3.6446668}, //M-23
        {lat: 40.4186463, lng: -3.6586407}, //M-23 con M30
        {lat: 40.4169901, lng: -3.6591449}, //M30
        {lat: 40.4063398, lng: -3.6650495}, //M30 con Av Mediterraneo
    ]
    distritos.push(moratalaz);

    let usera = [
        {lat: 40.36129, lng: -3.6818348}, //M40 con Manzanares
        {lat: 40.3638366, lng: -3.6891869}, //M40
        {lat: 40.3644697, lng: -3.6939093}, //M40 Av Andalucía
        {lat: 40.363996, lng: -3.6999227}, //M40
        {lat: 40.3635846, lng: -3.7026483}, //M40
        {lat: 40.3647628, lng: -3.7207362}, //A-42 con M40
        {lat: 40.3810079, lng: -3.718837}, //A-42
        {lat: 40.3852207, lng: -3.7175414}, //Plaza Eliptica
        {lat: 40.3889549, lng: -3.7135485}, //A-42 
        {lat: 40.3896934, lng: -3.7125198}, //A-42
        {lat: 40.3905012, lng: -3.7104702}, //A-42
        {lat: 40.3918367, lng: -3.7077214}, //A-42
        {lat: 40.3950704, lng: -3.7046156}, //Puente de Praga
        {lat: 40.3933601, lng: -3.7021035}, //Rio Manzanares
        {lat: 40.3890735, lng: -3.6981267}, //Puente de Andalucía
        {lat: 40.3823344, lng: -3.6897331}, //Av Paz salida con Manzanares
        {lat: 40.3771562, lng: -3.6872846}, //Rio Manzanares
        {lat: 40.3744835, lng: -3.6877568}, //Rio Manzanares
        {lat: 40.3736073, lng: -3.686975}, //Rio Manzanares
        {lat: 40.3719164, lng: -3.6861975}, //Rio Manzanares
        {lat: 40.3707172, lng: -3.6826969}, //Rio Manzanares
        {lat: 40.3663898, lng: -3.6817169}, //Rio Manzanares
        {lat: 40.3657657, lng: -3.6825457},
        {lat: 40.3645829, lng: -3.6830711}, //Rio Manzanares
    ]
    distritos.push(usera);

    let carabanchel = [
        {lat: 40.3647628, lng: -3.7207362}, //A-42 con M40
        {lat: 40.3810079, lng: -3.718837}, //A-42
        {lat: 40.3852207, lng: -3.7175414}, //Plaza Eliptica
        {lat: 40.3889549, lng: -3.7135485}, //A-42 
        {lat: 40.3896934, lng: -3.7125198}, //A-42
        {lat: 40.3905012, lng: -3.7104702}, //A-42
        {lat: 40.3918367, lng: -3.7077214}, //A-42
        {lat: 40.3950704, lng: -3.7046156}, //Puente de Praga
        {lat: 40.3974447, lng: -3.7115179}, //Rio Manzanares
        {lat: 40.3996562, lng: -3.7148796}, //Puente de Toledo
        {lat: 40.3998901, lng: -3.720011}, //Rio Manzanares
        {lat: 40.401107, lng: -3.7218842},  //Rio Manzanares
        {lat: 40.4037784, lng: -3.7225522}, //Puente de San Isidro
        {lat: 40.4045835, lng: -3.7226806}, //Rio Manzanares
        {lat: 40.4045423, lng: -3.7247494}, //Paseo Ermina del Santo
        {lat: 40.4054982, lng: -3.7246172}, //Paseo Ermina del Santo
        {lat: 40.4055094, lng: -3.7252597}, //Via Carpetana
        {lat: 40.3963838, lng: -3.7373963}, //Via Carpetana
        {lat: 40.3945996, lng: -3.7387453}, //Via Carpetana
        {lat: 40.3911788, lng: -3.742905}, //Via Carpetana
        {lat: 40.3879569, lng: -3.7447662}, //Carabanchel
        {lat: 40.3835962, lng: -3.7530807},
        {lat: 40.3839946, lng: -3.7581265}, //Vias de tren
        {lat: 40.3836012, lng: -3.759221}, //Av de los Poblados
        {lat: 40.3788147, lng: -3.7559491}, //Av de los Poblados
        {lat: 40.3755137, lng: -3.7579118}, //Parque
        {lat: 40.3744343, lng: -3.7617552}, //Parque
        {lat: 40.3690172, lng: -3.7628593}, //Calle de Jacobo
        {lat: 40.3669612, lng: -3.7617501}, //rotonda
        {lat: 40.3662213, lng: -3.7638735}, //Av de la Peseta
        {lat: 40.3598987, lng: -3.7709017}, //SurOeste
        {lat: 40.3575469, lng: -3.757537}, //Pico Sur
    ]
    distritos.push(carabanchel);   
    //Continuar
    let latina = [
        {lat: 40.3995231, lng: -3.7702676}, //Anillo verde ciclista
        {lat: 40.4001211, lng: -3.774537}, //Anillo verde ciclista
        {lat: 40.3989624, lng: -3.7649961}, //Paseo de Extremadura
        {lat: 40.4170576, lng: -3.7222681}, //A5 puente
        {lat: 40.4139965, lng: -3.7229148}, //Puente de Segovia
        {lat: 40.4121621, lng: -3.7227527}, //Rio Manzanares
        {lat: 40.4085492, lng: -3.7217518}, //Rio Manzanares
        {lat: 40.4057231, lng: -3.72267}, //Rio Manzanares
        {lat: 40.4045835, lng: -3.7226806}, //Rio Manzanares
        {lat: 40.4045423, lng: -3.7247494}, //Paseo Ermina del Santo
        {lat: 40.4054982, lng: -3.7246172}, //Paseo Ermina del Santo
        {lat: 40.4055094, lng: -3.7252597}, //Via Carpetana
        {lat: 40.3963838, lng: -3.7373963}, //Via Carpetana
        {lat: 40.3945996, lng: -3.7387453}, //Via Carpetana
        {lat: 40.3911788, lng: -3.742905}, //Via Carpetana
        {lat: 40.3879569, lng: -3.7447662}, //Carabanchel
        {lat: 40.3835962, lng: -3.7530807},
        {lat: 40.3839946, lng: -3.7581265}, //Vias de tren
        {lat: 40.3836012, lng: -3.759221}, //Av de los Poblados
        {lat: 40.3788147, lng: -3.7559491}, //Av de los Poblados
        {lat: 40.3755137, lng: -3.7579118}, //Parque
        {lat: 40.3744343, lng: -3.7617552}, //Parque
        {lat: 40.3690172, lng: -3.7628593}, //Calle de Jacobo
        {lat: 40.3669612, lng: -3.7617501}, //rotonda
        {lat: 40.3662213, lng: -3.7638735}, //Av de la Peseta
        {lat: 40.3598987, lng: -3.7709017}, //SurOeste
    ]
    distritos.push(latina);

    console.log(distritos);
    return distritos;
}

function initMap() {
    let distritos = getDistricts();
    var madrid = {lat: 40.416775, lng: -3.703790};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: madrid
    });
    //Antes de pintar calcular los accidentes y establecer color
    new google.maps.Polygon({   //Chamberí
        path: distritos[0],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({ //Tetuan
        path: distritos[1],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({ //Manoteras
        path: distritos[2],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Chamartin
        path: distritos[3],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Ciudad Lineal
        path: distritos[4],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Barrio de Salamanca
        path: distritos[5],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //San Blas
        path: distritos[6],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Centro
        path: distritos[7],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Retiro
        path: distritos[8],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Moncloa Aravaca
        path: distritos[9],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Fuencarral El Pardo
        path: distritos[10],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //barajas
        path: distritos[11],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Arganzuela
        path: distritos[12],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Moratalaz
        path: distritos[13],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Usera
        path: distritos[14],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Carabanchel
        path: distritos[15],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    new google.maps.Polygon({   //Latina
        path: distritos[16],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
}

