const productos = [
    //placas de video
    {
        id: 1,
        title: "Dynamo",
        description: "Los bloques de construcción para la GPU más rápida y eficiente del mundo, el nuevo Ampere SM ofrece el doble de rendimiento FP32 y una eficiencia energética mejorada. Experimenta el doble de rendimiento que los RT Cores de primera generación, además de RT y sombreado simultáneos para un nivel completamente nuevo de rendimiento de trazado de rayos.",
        stock: 15,
        type: "disco de vinilo",
        imageProduct: {
            firstImage: "https://i.discogs.com/K2sXkkQwR6tkcS2xaSVqbIyoUfyGZgdbvL-OORKv1vA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNjI1/Ny0xMTUxMTY2NzM3/LmpwZWc.jpeg",
            secondImage: "https://media.ldlc.com/r1600/ld/products/00/05/74/25/LD0005742587_1_0005869333.jpg"
        },
        price: 32000,
    },

    {
        id: 2,
        title: "Cancion Animal",
        description: "La última versión de la icónica serie GAMING de MSI ofrece una vez más el rendimiento, la eficiencia con bajo nivel de ruido y la estética que los jugadores incondicionales reconocen y confían. Ahora usted también puede disfrutar de todos sus juegos favoritos con una potente tarjeta gráfica que se mantiene fría y silenciosa. Justo como te gusta.",
        stock: 7,
        type: "placa de video",
        imageProduct: {
            firstImage: "https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9",
            secondImage: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3050-8gb-msi-gaming-x-2.jpg"
        },
        price: 40000,
    },

    {
        id: 3,
        title: "Funda Soda Stereo",
        description: "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero",
        stock: 20,
        type: "accesorio",
        imageProduct: {
            firstImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/516/856/products/iphone31-e5770c8e936be4034716783980216736-640-0.jpg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_859399-MLA49924537069_052022-O.webp"
        },
        price: 300000,
    },

    //procesadores
    {
        id: 4,
        title: "Remera Ahi vamos",
        description: "Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino. Los procesadores de PC más avanzados del mundo1 para jugadores y creadores amplían el liderazgo de rendimiento de AMD para potenciar tu PC.",
        stock: 6,
        type: "accesorio",
        imageProduct: {
            firstImage: "https://http2.mlstatic.com/D_NQ_NP_781861-MLA71691850076_092023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_642030-MLU47593199220_092021-O.webp"
        },
        price: 12000,      
    },

    {
        id: 5,
        title: "Guitarra Jackson",
        description: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo.",
        stock: 6,
        type: "Instrumento",
        imageProduct: {
            firstImage: "https://www.rainbowguitars.com/imagesproduct/fe/fe2811001370-xl-02.jpg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_970575-MLA42767646612_072020-O.webp",
        },
        price: 700000,      
    },

    //mother
    {
        id: 6,
        title: "Marco de Gustavo Cerati",
        description: "Las tarjetas madre de la serie ROG Strix B550 Gaming ofrecen buena parte de las características que puedes encontrar en la serie de gama alta ROG Strix X570 Gaming, como por ejemplo PCIe® 4.0. Con un suministro de energía potente y una refrigeración eficaz, la serie ROG Strix B550 Gaming está optimizada para las CPU AMD Ryzen™ de 3.ª Gen. Con una estética futurista y el intuitivo software ROG, la ROG Strix B550-F Gaming (Wi-Fi) es la plataforma ideal para montar el equipo de tus sueños.",
        stock: 3,
        type: "Cerati",
        imageProduct: {
            firstImage: "https://http2.mlstatic.com/D_NQ_NP_779804-MLA49142538263_022022-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_985217-MLA43783495710_102020-W.jpg"
        },
        price: 54000,      
    },

    {
        id: 7,
        title: "Nada Personal",
        description: "Placa base AMD B550 AORUS con diseño digital de energía doble de 12 + 2 fases, disipadores de calor de superficie agrandados, PCIe dual 4.0 / 3.0 x4 M.2 con protectores térmicos duales, Intel® WiFi 6802.11ax, LAN de 2.5GbE, USB frontal Type-C ™, RGB FUSION 2.0, Q-Flash Plus",
        stock: 1,
        type: "disco de vinilo",
        imageProduct: {
            firstImage: "https://upload.wikimedia.org/wikipedia/en/f/fd/Nada_Personal_%28album%29.jpg"
        },
        price: 36000,      
    },

    //fuentes
    {
        id: 8,
        title: "Ahi Vamos",
        description: "Con la fuente de alimentación Corsair RM750x podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento. ",
        stock: 5,
        type: "disco de vinilo",
        imageProduct: {
            firstImage: "https://i.scdn.co/image/ab67616d0000b273d543f7c7de880da5370922c0",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_789796-MLA45978850170_052021-O.webp"
        },
        price: 41000,      
    },

    {
        id: 9,
        title: "Collar de Gustavo Cerati",
        description: "Con la fuente de alimentación Corsair RM750x podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento.",
        stock: 7,
        type: "accesorio",
        imageProduct: {
            firstImage: "https://i.pinimg.com/originals/82/0d/7a/820d7a33ee7ebac090c99cadfbd918a2.jpg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_980467-MLA45653376464_042021-O.webp"
        },
        price: 6000,      
    },

    {
        id: 10,
        title: "Doble Vida",
        description:"Con la fuente de alimentación XPG 850 podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. Además, con su potencia de 850 W tendrás la energía suficiente para jugar y mirar tus series y videos favoritos por horas con un alto rendimiento",
        stock: 7,
        type: "disco de vinilo",
        imageProduct: {
            firstImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Doble_vida_cover_sodastereo.jpg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_952421-MLA45686583993_042021-O.webp"
        },
        price: 27000,      
    },
]

export default productos;