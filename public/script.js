const fns = {
	getWeather: async ({ location }) => {
		const apiKey = '0403c5d8e28a489fb11191551250403';
		const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
		const data = await response.json();
		return { success: true, data };
	},

	getCustomerData: async () => {
		const response = [
			{
				idCliente: 299,
				codigo: '100294',
				empresa: 51,
				descripcion: 'João da Silva',
				telefono: '755-017',
				celular: '0981-536353',
				idVendedor: 12,
				ruc: '1083506-7',
				emailContador: null,
				direccion: 'RUTA TRANSCHACO KM 17 - N° 412',
				ciudad: null,
				email: 'agronortepy@hotmail.com',
				emailFirmaDigital: null,
				firmaDigital: null,
				exportador: false,
				clase: 0,
				bloqueo: false,
				bloqueoMotivo: null,
				possuiLocalEntrega: false,
				recibir: null,
				financiero: [
					{
						idCliente: 299,
						total: 604,
						vencimiento: '2025-01-03T00:00:00',
						facturas: [
							{
								idFactura: 15767,
								idPedido: 155736,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-04T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 1,
								cultivo: 'SOJA',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 604,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010015767',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 604,
								descuento: 0,
								vencimento: '2025-01-03T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020236',
										producto: 'CLORFOS ',
										unitario: 18,
										cantidad: 6,
										subtotal: 108,
									},
									{
										idProducto: '1020309',
										producto: 'STRONG 20 EC',
										unitario: 20,
										cantidad: 6,
										subtotal: 120,
									},
									{
										idProducto: '1010033',
										producto: '2,4D AMINA TECNOMYL ',
										unitario: 3.5,
										cantidad: 80,
										subtotal: 280,
									},
									{
										idProducto: '1010090',
										producto: 'TODYM 24 EC ',
										unitario: 8,
										cantidad: 12,
										subtotal: 96,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 320,
						vencimiento: '2025-01-08T00:00:00',
						facturas: [
							{
								idFactura: 15897,
								idPedido: 155736,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-09T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 1,
								cultivo: 'SOJA',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 320,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010015897',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 320,
								descuento: 0,
								vencimento: '2025-01-08T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1010182',
										producto: '2,4D AMINA TECNOMYL',
										unitario: 4,
										cantidad: 80,
										subtotal: 320,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 1530,
						vencimiento: '2025-02-05T00:00:00',
						facturas: [
							{
								idFactura: 16086,
								idPedido: 155823,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-12T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 8,
								cultivo: 'GANADERIA/PASTURAS',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 1530,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016086',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 1530,
								descuento: 0,
								vencimento: '2025-02-05T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020060',
										producto: 'SUPERMYL',
										unitario: 11.5,
										cantidad: 60,
										subtotal: 690,
									},
									{
										idProducto: '1020293',
										producto: 'SUPERMYL',
										unitario: 10.5,
										cantidad: 80,
										subtotal: 840,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 1700,
						vencimiento: '2025-02-10T00:00:00',
						facturas: [
							{
								idFactura: 16087,
								idPedido: 155962,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-12T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 7,
								cultivo: 'HORTALIZAS Y FRUTALES',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 1700,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016087',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 1700,
								descuento: 0,
								vencimento: '2025-02-10T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020552',
										producto: 'OVERTOP 24 SC',
										unitario: 30,
										cantidad: 6,
										subtotal: 180,
									},
									{
										idProducto: '1020551',
										producto: 'OVERTOP 24 SC',
										unitario: 15,
										cantidad: 12,
										subtotal: 180,
									},
									{
										idProducto: '1030221',
										producto: 'GENESIS MAX',
										unitario: 20,
										cantidad: 40,
										subtotal: 800,
									},
									{
										idProducto: '1020482',
										producto: 'ABAMEC 8.4 EC TM',
										unitario: 42,
										cantidad: 6,
										subtotal: 252,
									},
									{
										idProducto: '1020454',
										producto: 'ABAMEC 8.4 EC TM',
										unitario: 24,
										cantidad: 12,
										subtotal: 288,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 1447,
						vencimiento: '2025-02-12T00:00:00',
						facturas: [
							{
								idFactura: 16194,
								idPedido: 156092,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-16T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 7,
								cultivo: 'HORTALIZAS Y FRUTALES',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 1447,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016194',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 1447,
								descuento: 0,
								vencimento: '2025-02-12T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1010031',
										producto: '2,4D AMINA TECNOMYL ',
										unitario: 5,
										cantidad: 24,
										subtotal: 120,
									},
									{
										idProducto: '1010012',
										producto: 'TECNUP ',
										unitario: 5,
										cantidad: 60,
										subtotal: 300,
									},
									{
										idProducto: '1020245',
										producto: 'ACEFATO TM 95% SG',
										unitario: 12,
										cantidad: 10,
										subtotal: 120,
									},
									{
										idProducto: '1020275',
										producto: 'ACEFATO TM 95% SG',
										unitario: 10.5,
										cantidad: 10,
										subtotal: 105,
									},
									{
										idProducto: '1020233',
										producto: 'HURACAN 80 WG',
										unitario: 125,
										cantidad: 6,
										subtotal: 750,
									},
									{
										idProducto: '1010293',
										producto: 'TECNOQUAT SL',
										unitario: 2.6,
										cantidad: 20,
										subtotal: 52,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 792,
						vencimiento: '2025-02-17T00:00:00',
						facturas: [
							{
								idFactura: 16329,
								idPedido: 156281,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2024-12-19T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 7,
								cultivo: 'HORTALIZAS Y FRUTALES',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 792,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016329',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 792,
								descuento: 0,
								vencimento: '2025-02-17T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020309',
										producto: 'STRONG 20 EC',
										unitario: 20,
										cantidad: 6,
										subtotal: 120,
									},
									{
										idProducto: '1030325',
										producto: 'TRICUR 43 SC',
										unitario: 14,
										cantidad: 48,
										subtotal: 672,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 2963.6,
						vencimiento: '2025-03-06T00:00:00',
						facturas: [
							{
								idFactura: 16635,
								idPedido: 156675,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-01-08T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 8,
								cultivo: 'GANADERIA/PASTURAS',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 2189.6,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016635',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 2189.6,
								descuento: 0,
								vencimento: '2025-03-06T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020060',
										producto: 'SUPERMYL',
										unitario: 11.5,
										cantidad: 24,
										subtotal: 276,
									},
									{
										idProducto: '1020097',
										producto: 'CLORFOS ',
										unitario: 11.4,
										cantidad: 24,
										subtotal: 273.6,
									},
									{
										idProducto: '1010106',
										producto: 'TEMIBLE TECNOMYL',
										unitario: 20.5,
										cantidad: 24,
										subtotal: 492,
									},
									{
										idProducto: '1010012',
										producto: 'TECNUP ',
										unitario: 5,
										cantidad: 60,
										subtotal: 300,
									},
									{
										idProducto: '1010014',
										producto: 'TECNUP ',
										unitario: 3.4,
										cantidad: 60,
										subtotal: 204,
									},
									{
										idProducto: '1010305',
										producto: 'TECNUP PREMIUM 2',
										unitario: 4.2,
										cantidad: 60,
										subtotal: 252,
									},
									{
										idProducto: '1010293',
										producto: 'TECNOQUAT SL',
										unitario: 2.6,
										cantidad: 40,
										subtotal: 104,
									},
									{
										idProducto: '1010090',
										producto: 'TODYM 24 EC ',
										unitario: 8,
										cantidad: 36,
										subtotal: 288,
									},
								],
							},
							{
								idFactura: 16636,
								idPedido: 156675,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-01-08T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 8,
								cultivo: 'GANADERIA/PASTURAS',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 774,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010016636',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 774,
								descuento: 0,
								vencimento: '2025-03-06T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1030223',
										producto: 'BELLATOR 6,25% FS',
										unitario: 21,
										cantidad: 24,
										subtotal: 504,
									},
									{
										idProducto: '1020222',
										producto: 'K-FOL',
										unitario: 90,
										cantidad: 1.8,
										subtotal: 162,
									},
									{
										idProducto: '1020236',
										producto: 'CLORFOS ',
										unitario: 18,
										cantidad: 6,
										subtotal: 108,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 8021.5,
						vencimiento: '2025-04-05T00:00:00',
						facturas: [
							{
								idFactura: 17260,
								idPedido: 157712,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-02-10T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 1,
								cultivo: 'SOJA',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 6766,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010017260',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 6766,
								descuento: 0,
								vencimento: '2025-04-05T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020233',
										producto: 'HURACAN 80 WG',
										unitario: 125,
										cantidad: 30,
										subtotal: 3750,
									},
									{
										idProducto: '1020060',
										producto: 'SUPERMYL',
										unitario: 11.5,
										cantidad: 24,
										subtotal: 276,
									},
									{
										idProducto: '1010186',
										producto: 'TECNUP ',
										unitario: 4.5,
										cantidad: 100,
										subtotal: 450,
									},
									{
										idProducto: '1010305',
										producto: 'TECNUP PREMIUM 2',
										unitario: 4.2,
										cantidad: 80,
										subtotal: 336,
									},
									{
										idProducto: '1020309',
										producto: 'STRONG 20 EC',
										unitario: 20,
										cantidad: 12,
										subtotal: 240,
									},
									{
										idProducto: '1010182',
										producto: '2,4D AMINA TECNOMYL',
										unitario: 4,
										cantidad: 100,
										subtotal: 400,
									},
									{
										idProducto: '1010033',
										producto: '2,4D AMINA TECNOMYL ',
										unitario: 3.5,
										cantidad: 20,
										subtotal: 70,
									},
									{
										idProducto: '1010318',
										producto: '2,4D TM ZERO',
										unitario: 3.5,
										cantidad: 40,
										subtotal: 140,
									},
									{
										idProducto: '1020060',
										producto: 'SUPERMYL',
										unitario: 11.5,
										cantidad: 96,
										subtotal: 1104,
									},
								],
							},
							{
								idFactura: 17261,
								idPedido: 157814,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-02-10T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 7,
								cultivo: 'HORTALIZAS Y FRUTALES',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 240,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010017261',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 240,
								descuento: 0,
								vencimento: '2025-04-05T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1010012',
										producto: 'TECNUP ',
										unitario: 5,
										cantidad: 48,
										subtotal: 240,
									},
								],
							},
							{
								idFactura: 17262,
								idPedido: 157785,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-02-10T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 3,
								cultivo: 'MAIZ ZAFRINHA',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 1015.5,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010017262',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 1015.5,
								descuento: 0,
								vencimento: '2025-04-05T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1020275',
										producto: 'ACEFATO TM 95% SG',
										unitario: 10.75,
										cantidad: 90,
										subtotal: 967.5,
									},
									{
										idProducto: '1020245',
										producto: 'ACEFATO TM 95% SG',
										unitario: 12,
										cantidad: 4,
										subtotal: 48,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 2338,
						vencimiento: '2025-04-15T00:00:00',
						facturas: [
							{
								idFactura: 17616,
								idPedido: 158290,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-02-21T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 8,
								cultivo: 'GANADERIA/PASTURAS',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 2338,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010017616',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 2338,
								descuento: 0,
								vencimento: '2025-04-15T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1010106',
										producto: 'TEMIBLE TECNOMYL',
										unitario: 20.5,
										cantidad: 36,
										subtotal: 738,
									},
									{
										idProducto: '1010108',
										producto: 'TEMIBLE TECNOMYL',
										unitario: 16,
										cantidad: 20,
										subtotal: 320,
									},
									{
										idProducto: '1010108',
										producto: 'TEMIBLE TECNOMYL',
										unitario: 16,
										cantidad: 80,
										subtotal: 1280,
									},
								],
							},
						],
					},
					{
						idCliente: 299,
						total: 993.5,
						vencimiento: '2025-04-28T00:00:00',
						facturas: [
							{
								idFactura: 17736,
								idPedido: 158747,
								lanzamiento: null,
								idEmpresa: 0,
								idCliente: 299,
								cliente: 'João da Silva',
								empresa: null,
								fecha: '2025-02-28T00:00:00',
								idMoneda: null,
								idZafra: 24,
								zafra: 'ZAFRA 2024/2025',
								idCultivo: 8,
								cultivo: 'GANADERIA/PASTURAS',
								idCarpeta: 1,
								carpeta: 'VENTA NORMAL',
								idVendedor: 12,
								vendedor: 'MARCOS ESTEBAN FLORENTIN ORTEGA',
								valor: 993.5,
								pago: 0,
								vencimiento: '0001-01-01T00:00:00',
								devuelto: 0,
								nota: '0020010017736',
								liquidacion: 0,
								fechaFactura: '0001-01-01T00:00:00',
								saldoAtualizado: null,
								saldo: 993.5,
								descuento: 0,
								vencimento: '2025-04-28T00:00:00',
								tablasMovimentadas: null,
								facturaCreconProducto: [
									{
										idProducto: '1010293',
										producto: 'TECNOQUAT SL',
										unitario: 2.6,
										cantidad: 60,
										subtotal: 156,
									},
									{
										idProducto: '1020275',
										producto: 'ACEFATO TM 95% SG',
										unitario: 10.75,
										cantidad: 50,
										subtotal: 537.5,
									},
									{
										idProducto: '1010012',
										producto: 'TECNUP ',
										unitario: 5,
										cantidad: 60,
										subtotal: 300,
									},
								],
							},
						],
					},
				],
				lineaCredito: {
					idLineaCredito: 21061,
					idUnidad: 1,
					idCliente: 299,
					idVendedor: 12,
					fechaInicio: '2024-10-01T00:00:00',
					fechaFin: '2025-09-30T00:00:00',
					monto: 25000,
					deudaActual: 20709.6,
					pedidoPendiente: 592.2,
					saldoDisponible: 4290.4000000000015,
					adicional: 0,
				},
				dacsDTO: null,
				totalDeudas: 20709.6,
				totalDeudasEmAtraso: 9356.6,
			},
		];
		const data = response;
		return { success: true, data };
	},
};
// Create a WebRTC Agent
const peerConnection = new RTCPeerConnection();
let audioStream = null;
let audioElement = null;
let isPlaying = false;

// On inbound audio add to page
peerConnection.ontrack = (event) => {
	audioStream = event.streams[0];

	// Create audio element dynamically
	audioElement = document.createElement('audio');
	audioElement.srcObject = audioStream;
	audioElement.autoplay = false; // Disable autoplay initially
	audioElement.controls = false; // Hide default controls
};

// Button for audio control
const audioButton = document.getElementById('audio-button');
const icon = audioButton.querySelector('.icon');

audioButton.addEventListener('click', () => {
	if (!audioStream) {
		alert('No audio stream available.');
		return;
	}

	if (!isPlaying) {
		audioElement.play();
		isPlaying = true;
		icon.textContent = '||'; // Change to pause icon
		audioButton.classList.add('playing');
	} else {
		audioElement.pause();
		isPlaying = false;
		icon.textContent = '▶'; // Change to play icon
		audioButton.classList.remove('playing');
	}
});

const dataChannel = peerConnection.createDataChannel('oai-events');

function configureData() {
	console.log('Configuring data channel');
	const event = {
		type: 'session.update',
		session: {
			modalities: ['text', 'audio'],
			tools: [
				{
					type: 'function',
					name: 'getWeather',
					description: 'Obtém a previsão do tempo para uma localização específica',
					parameters: {
						type: 'object',
						properties: {
							location: { type: 'string', description: 'Nome da cidade ou coordenadas geográficas' },
						},
					},
				},
				{
					type: 'function',
					name: 'getCustomerData',
					description: 'Obtém os dados do cliente e responda perguntas sobre eles',
					parameters: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'Nome do cliente' },
						},
					},
				},
			],
		},
	};
	dataChannel.send(JSON.stringify(event));
}

dataChannel.addEventListener('open', () => {
	console.log('Opening data channel');
	configureData();
});

dataChannel.addEventListener('message', async (ev) => {
	console.log('Message received', ev.data);
	const msg = JSON.parse(ev.data);

	if (msg.type === 'response.function_call_arguments.done') {
		const fn = fns[msg.name];
		if (fn) {
			console.log(`Calling local function ${msg.name} with ${msg.arguments}`);
			const args = JSON.parse(msg.arguments);
			const result = await fn(args);
			console.log('result', result);

			const event = {
				type: 'conversation.item.create',
				item: {
					type: 'function_call_output',
					call_id: msg.call_id,
					output: JSON.stringify(result),
				},
			};
			dataChannel.send(JSON.stringify(event));
			dataChannel.send(JSON.stringify({ type: 'response.create' }));
		}
	}
});

// Capture microphone
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
	stream.getTracks().forEach((track) => peerConnection.addTransceiver(track, { direction: 'sendrecv' }));

	peerConnection.createOffer().then((offer) => {
		peerConnection.setLocalDescription(offer);
		fetch('/session')
			.then((tokenResponse) => tokenResponse.json())
			.then((data) => {
				const EPHEMERAL_KEY = data.result.client_secret.value;
				const baseUrl = 'https://api.openai.com/v1/realtime';
				const model = 'gpt-4o-realtime-preview-2024-12-17';

				fetch(`${baseUrl}?model=${model}`, {
					method: 'POST',
					body: offer.sdp,
					headers: {
						Authorization: `Bearer ${EPHEMERAL_KEY}`,
						'Content-Type': 'application/sdp',
					},
				})
					.then((r) => r.text())
					.then((answer) => {
						peerConnection.setRemoteDescription({
							sdp: answer,
							type: 'answer',
						});
					});
			});
	});
});
