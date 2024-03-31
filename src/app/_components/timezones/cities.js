const cities = [
    {
        "label": "Qal eh-ye Now, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Chaghcharan, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Lashkar Gah, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Zaranj, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Tarin Kowt, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Zareh Sharan, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Asadabad, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Taloqan, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Mahmud-E Eraqi, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Mehtar Lam, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Baraki Barak, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Aybak, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Mayda Shahr, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Karokh, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Sheberghan, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Pol-e Khomri, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Balkh, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Meymaneh, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Andkhvoy, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Qalat, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Ghazni, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Feyzabad, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Kondoz, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Jalalabad, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Charikar, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Gardiz, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Bamian, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Baghlan, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Farah, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Herat, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Mazar-e Sharif, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Kandahar, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Kabul, Afghanistan",
        "value": "Asia/Kabul"
    },
    {
        "label": "Mariehamn, Aland",
        "value": "Europe/Mariehamn"
    },
    {
        "label": "Kruje, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Fier, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Lushnje, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Puke, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Bajram Curri, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Kukes, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Sarande, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Erseke, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Pogradec, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Korce, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Berat, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Corovode, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Gramsh, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Librazhd, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Tepelene, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Permet, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Gjirokaster, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Peshkopi, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Burrel, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Lezhe, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Rreshen, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Vlore, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Elbasan, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Durres, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Shkoder, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Tirana, Albania",
        "value": "Europe/Tirane"
    },
    {
        "label": "Jijel, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tizi-Ouzou, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Bordj Bou Arreridj, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "M'sila, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Guelma, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Oum el Bouaghi, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Timimoun, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Sidi bel Abbes, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tlimcen, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Beni Ounif, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Abadla, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Sefra, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Skikda, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Djanet, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "I-n-Amenas, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "In Amguel, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "El Bayadh, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "El Oued, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Hassi Messaoud, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Chlef, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Mascara, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Mostaganem, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Saida, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tiarat, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Bejaia, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Blida, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Bouira, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Medea, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Souk Ahras, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tebessa, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Adrar, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Reggane, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Bechar, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tindouf, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Illizi, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Arak, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "I-n-Salah, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "El Golea, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Laghouat, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Touggourt, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Ouargla, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Biskra, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Djelfa, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Setif, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Batna, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Annaba, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Constantine, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Oran, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Tamanrasset, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Ghardaia, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Algiers, Algeria",
        "value": "Africa/Algiers"
    },
    {
        "label": "Pago Pago, American Samoa",
        "value": "Pacific/Pago_Pago"
    },
    {
        "label": "Andorra, Andorra",
        "value": "Europe/Andorra"
    },
    {
        "label": "Mucusso, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Lucapa, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Capenda-Camulemba, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Saurimo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Muconda, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cacolo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Caxito, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Camabatela, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Ndalatando, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Quibala, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Calulo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Waku Kungo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Songo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Mbanza-Congo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Nzeto, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Soyo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cabinda, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Calucinga, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Camacupa, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cubal, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Mavinga, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cuito Caunavale, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Luiana, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Ondjiva, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Chitado, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Chibemba, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Chibia, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Quipungo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Luau, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cangamba, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Lumbala Nguimbo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Cazombo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Dundo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Ambriz, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Dondo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Sumbe, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Uige, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Kuito, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Lobito, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Xangongo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Luena, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Tômbua, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Malanje, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Benguela, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Lubango, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Namibe, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Menongue, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Huambo, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Luanda, Angola",
        "value": "Africa/Luanda"
    },
    {
        "label": "Artigas Base, Antarctica",
        "value": null
    },
    {
        "label": "Capitan Arturo Prat Station, Antarctica",
        "value": null
    },
    {
        "label": "Marambio Station, Antarctica",
        "value": null
    },
    {
        "label": "Zucchelli Station, Antarctica",
        "value": null
    },
    {
        "label": "Rothera Station, Antarctica",
        "value": null
    },
    {
        "label": "Palmer Station, Antarctica",
        "value": null
    },
    {
        "label": "Base Presidente Montalva, Antarctica",
        "value": null
    },
    {
        "label": "Carlini Station, Antarctica",
        "value": null
    },
    {
        "label": "King Sejong Station, Antarctica",
        "value": null
    },
    {
        "label": "Great Wall Station, Antarctica",
        "value": null
    },
    {
        "label": "Escudero Base, Antarctica",
        "value": null
    },
    {
        "label": "Elephant Island, Antarctica",
        "value": null
    },
    {
        "label": "Scott Base, Antarctica",
        "value": null
    },
    {
        "label": "McMurdo Station, Antarctica",
        "value": null
    },
    {
        "label": "Zhongshan Station, Antarctica",
        "value": null
    },
    {
        "label": "Vostok, Antarctica",
        "value": null
    },
    {
        "label": "Peter I Island, Antarctica",
        "value": null
    },
    {
        "label": "Mirny Station, Antarctica",
        "value": null
    },
    {
        "label": "Mawson Station, Antarctica",
        "value": null
    },
    {
        "label": "Davis Station, Antarctica",
        "value": null
    },
    {
        "label": "Concordia Research Station, Antarctica",
        "value": null
    },
    {
        "label": "Casey Station, Antarctica",
        "value": null
    },
    {
        "label": "Amundsen–Scott South Pole Station, Antarctica",
        "value": null
    },
    {
        "label": "Wasa Station, Antarctica",
        "value": null
    },
    {
        "label": "Troll Station, Antarctica",
        "value": null
    },
    {
        "label": "Svea Station, Antarctica",
        "value": null
    },
    {
        "label": "Novolazarevskaya Station, Antarctica",
        "value": null
    },
    {
        "label": "Neumayer Station III, Antarctica",
        "value": null
    },
    {
        "label": "Maitri Station, Antarctica",
        "value": null
    },
    {
        "label": "Halley Station, Antarctica",
        "value": null
    },
    {
        "label": "Belgrano Station, Antarctica",
        "value": null
    },
    {
        "label": "Camp Sobral, Antarctica",
        "value": null
    },
    {
        "label": "Aboa Station, Antarctica",
        "value": null
    },
    {
        "label": "San Martín Station, Antarctica",
        "value": null
    },
    {
        "label": "Gen. O'Higgins Station, Antarctica",
        "value": null
    },
    {
        "label": "Esperanza Station, Antarctica",
        "value": null
    },
    {
        "label": "Orcadas Station, Antarctica",
        "value": null
    },
    {
        "label": "Signy Research Station, Antarctica",
        "value": null
    },
    {
        "label": "Dumont d'Urville Station, Antarctica",
        "value": null
    },
    {
        "label": "Showa Station, Antarctica",
        "value": null
    },
    {
        "label": "Saint John's, Antigua and Barbuda",
        "value": "America/Antigua"
    },
    {
        "label": "28 de Noviembre, Argentina",
        "value": "America/Santiago"
    },
    {
        "label": "Gobernador Gregores, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Comondante Luis Piedrabuena, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Paso Rio Mayo, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Alto Rio Sanguer, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "El Maiten, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Puerto Madryn, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Trelew, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Las Heras, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "San Martin, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Uspallata, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Cutral Co, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Punta Alta, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "San Nicolas, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Campana, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Chacabuco, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Mercedes, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Lincoln, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Chivilcoy, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Veinticinco de Mayo, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Nueve de Julio, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Dolores, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Pedro Luro, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Tres Arroyos, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Coronel Suarez, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Balcarce, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "25 de Mayo, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "General Roca, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Comallo, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Ingeniero Jacobacci, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "General Conesa, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Choele Choel, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "San Francisco, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Alta Gracia, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Villa Maria, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Bell Ville, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Villa Rumipal, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Villa Carlos Paz, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Chumbicha, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Tinogasta, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Abra Pampa, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "Humahuaca, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "Susques, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "Chepes, Argentina",
        "value": "America/Argentina/La_Rioja"
    },
    {
        "label": "Yacuiba, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Tartagal, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Joaquin V. Gonzalez, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "General Guemes, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Trancas, Argentina",
        "value": "America/Argentina/Tucuman"
    },
    {
        "label": "Presidencia Roque Saenz Pena, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Pampa del Infierno, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Villa Angela, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Ingeniero Guillermo N. Juarez, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Comandante Fontana, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Doctor Pedro P. Pena, Argentina",
        "value": "America/Asuncion"
    },
    {
        "label": "San Lorenzo, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Corrientes, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Concepcion del Uruguay, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Victoria, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Gualeguay, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Parana, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Villa Constitucion, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Rafaela, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Eldorado, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Rodeo, Argentina",
        "value": "America/Argentina/San_Juan"
    },
    {
        "label": "Las Plumas, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Gastre, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Telsen, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Malargue, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Tunuyan, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "La Paz, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Chos Malal, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Las Lajas, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Zarate, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Carhue, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Darregueira, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Juarez, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Mar de Ajo, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Lobos, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Chascomus, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Junin, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "La Plata, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Pergamino, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Lujan, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Azul, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Villalonga, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Victorica, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "General Pico, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "San Antonio Oeste, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Sierra Colorado, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Mercedes, Argentina",
        "value": "America/Argentina/San_Luis"
    },
    {
        "label": "Rio Tercero, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Belen, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Rinconada, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "San Pedro, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "Libertador General San Martin, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "Chilecito, Argentina",
        "value": null
    },
    {
        "label": "Chamical, Argentina",
        "value": "America/Argentina/La_Rioja"
    },
    {
        "label": "Los Blancos, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Cafayate, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Cerrillos, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "San Antonio de los Cobres, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Anatuya, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Frias, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Monte Quemado, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Juan Jose Castelli, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Charata, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Las Lomitas, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Mercedes, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Concordia, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Sunchales, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "San Justo, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Vera, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Reconquista, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Venado Tuerto, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Esquel, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Zapala, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Olavarria, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Tandil, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Viedma, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "San Luis, Argentina",
        "value": "America/Argentina/San_Luis"
    },
    {
        "label": "Rio Cuarto, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "San Salvador de Jujuy, Argentina",
        "value": "America/Argentina/Jujuy"
    },
    {
        "label": "San Ramon de la Nueva Oran, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Goya, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Puerto San Julian, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Perito Moreno, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Rio Grande, Argentina",
        "value": "America/Argentina/Ushuaia"
    },
    {
        "label": "Ushuaia, Argentina",
        "value": "America/Argentina/Ushuaia"
    },
    {
        "label": "Sarmiento, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "San Rafael, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Necochea, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Rio Colorado, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Catamarca, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "La Rioja, Argentina",
        "value": "America/Argentina/La_Rioja"
    },
    {
        "label": "Santiago del Estero, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Resistencia, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Gualeguaychu, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "El Calafate, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "San Juan, Argentina",
        "value": "America/Argentina/San_Juan"
    },
    {
        "label": "Rawson, Argentina",
        "value": "America/Argentina/Catamarca"
    },
    {
        "label": "Neuquen, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Santa Rosa, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "San Carlos de Bariloche, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Salta, Argentina",
        "value": "America/Argentina/Salta"
    },
    {
        "label": "Tucumán, Argentina",
        "value": "America/Argentina/Tucuman"
    },
    {
        "label": "Formosa, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Santa Fe, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Rosario, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Puerto Deseado, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Rio Gallegos, Argentina",
        "value": "America/Argentina/Rio_Gallegos"
    },
    {
        "label": "Comodoro Rivadavia, Argentina",
        "value": null
    },
    {
        "label": "Mendoza, Argentina",
        "value": "America/Argentina/Mendoza"
    },
    {
        "label": "Bahia Blanca, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Mar del Plata, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Córdoba, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Posadas, Argentina",
        "value": "America/Argentina/Cordoba"
    },
    {
        "label": "Buenos Aires, Argentina",
        "value": "America/Argentina/Buenos_Aires"
    },
    {
        "label": "Ashtarak, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Ijevan, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Artashat, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Gavarr, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Yeghegnadzor, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Gyumri, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Vanadzor, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Yerevan, Armenia",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Oranjestad, Aruba",
        "value": "America/Aruba"
    },
    {
        "label": "Central Coast, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Sunshine Coast, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Bourke, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Pine Creek, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Adelaide River, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "McMinns Lagoon, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Newcastle Waters, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Ravensthorpe, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Wagin, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Roebourne, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Pannawonica, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Tom Price, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Kalbarri, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Mount Magnet, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Morawa, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Port Denison, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Merredin, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Mount Barker, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Katanning, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Narrogin, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Gingin, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Bunbury, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Kwinana, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Southern Cross, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Kaltukatjara, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Queanbeyan, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Tweed Heads, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Ivanhoe, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Wilcannia, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Merimbula, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Echuca, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Deniliquin, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Nowra, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Ulladulla, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Batemans Bay, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Cooma, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Tumut, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Leeton, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Young, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Cowra, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Forbes, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Goulburn, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Kiama, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Katoomba, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Richmond, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Lithgow, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Parkes, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Bathurst, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Maitland, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Singleton, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Mudgee, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Muswellbrook, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Taree, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Kempsey, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Gunnedah, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Coffs Harbour, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Narrabri, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Inverell, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Yamba, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Ballina, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Wagga Wagga, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Scone, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Byron Bay, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Berri, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Peterborough, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Wallaroo, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Clare, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Meningie, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Kingston South East, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Bordertown, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Penola, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Kingoonya, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Kimba, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Streaky Bay, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Cowell, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Tumby Bay, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Andamooka, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Woomera, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Port Pirie, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Gawler, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Murray Bridge, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Victor Harbor, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Hamilton, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Ouyen, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Colac, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Stawell, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Horsham, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Ararat, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Maryborough, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Bairnsdale, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Sale, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Traralgon, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Wonthaggi, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Cranbourne, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Ballarat, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Melton, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Seymour, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Shepparton, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Cobram, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Swan Hill, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Sunbury, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Proserpine, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Theodore, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Eidsvold, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Barcaldine, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Winton, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Longreach, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Caboolture, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Warwick, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Kingaroy, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Dalby, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Bongaree, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Gympie, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Ingham, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Birdsville, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Bedourie, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Boulia, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Richmond, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Burketown, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Hervey Bay, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Biloela, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Yeppoon, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Emerald, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Moranbah, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Charters Towers, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Ayr, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Atherton, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Port Douglas, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Smithton, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Scottsdale, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Bicheno, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Oatlands, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Queenstown, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Kingston, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Tennant Creek, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Yulara, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Erldunda, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Norseman, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Halls Creek, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Kununurra, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Derby, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Onslow, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Exmouth, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Carnarvon, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Newman, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Meekatharra, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Three Springs, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Manjimup, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Northam, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Esperance, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Leonara, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Laverton, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Wyndham, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Albury, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Forster-Tuncurry, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Port Macquarie, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Tamworth, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Grafton, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Moree, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Goondiwindi, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Lismore, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Wollongong, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Ceduna, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Mount Gambier, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Port Augusta, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Warrnambool, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Mildura, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Geelong, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Camooweal, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Quilpie, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Charleville, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Hughenden, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Caloundra, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Roma, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Toowoomba, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Georgetown, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Thargomindah, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Weipa, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Karumba, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Cloncurry, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Maryborough, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Bundaberg, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Gladstone, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Bowen, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Innisfail, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Mackay, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Burnie, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Launceston, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Katherine, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Busselton, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Mandurah, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Broome, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Kalgoorlie, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Albany, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Port Hedland, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Karratha, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Geraldton, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Griffith, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Orange, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Dubbo, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Armidale, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Broken Hill, Australia",
        "value": "Australia/Broken_Hill"
    },
    {
        "label": "Port Lincoln, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Whyalla, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Portland, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Bendigo, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Wangaratta, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Windorah, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Mount Isa, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Rockhampton, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Cairns, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Gold Coast, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Devonport, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Darwin, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Alice Springs, Australia",
        "value": "Australia/Darwin"
    },
    {
        "label": "Canberra, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Newcastle, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Adelaide, Australia",
        "value": "Australia/Adelaide"
    },
    {
        "label": "Townsville, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Brisbane, Australia",
        "value": "Australia/Brisbane"
    },
    {
        "label": "Hobart, Australia",
        "value": "Australia/Hobart"
    },
    {
        "label": "Perth, Australia",
        "value": "Australia/Perth"
    },
    {
        "label": "Melbourne, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Sydney, Australia",
        "value": "Australia/Sydney"
    },
    {
        "label": "Bregenz, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Eisenstadt, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Wiener Neustadt, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Graz, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Klagenfurt, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Linz, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Passau, Austria",
        "value": "Europe/Berlin"
    },
    {
        "label": "Salzburg, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Innsbruck, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Vienna, Austria",
        "value": "Europe/Vienna"
    },
    {
        "label": "Gadabay, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Goranboy, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Tovuz, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Agdam, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Qabala, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Oguz, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Ganca, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Yevlax, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Sumqayt, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Ali Bayramli, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Goycay, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Lankaran, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Saki, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Stepanakert, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Kapan, Azerbaijan",
        "value": "Asia/Yerevan"
    },
    {
        "label": "Naxcivan, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Baku, Azerbaijan",
        "value": "Asia/Baku"
    },
    {
        "label": "Manama, Bahrain",
        "value": "Asia/Bahrain"
    },
    {
        "label": "Tangail, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Sylhet, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Mymensingh, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Jamalpur, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Narayanganj, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Jessore, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Barisal, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Comilla, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Pabna, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Nawabganj, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Saidpur, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Rangpur, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Khulna, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Rajshahi, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Dhaka, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Chittagong, Bangladesh",
        "value": "Asia/Dhaka"
    },
    {
        "label": "Bridgetown, Barbados",
        "value": "America/Barbados"
    },
    {
        "label": "Baranavichy, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Polatsk, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Maladzyechna, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Pinsk, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Mazyr, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Mahilyow, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Babruysk, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Orsha, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Lida, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Hrodna, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Barysaw, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Homyel, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Vitsyebsk, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Brest, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Minsk, Belarus",
        "value": "Europe/Minsk"
    },
    {
        "label": "Mons, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Hasselt, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Arlon, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Gent, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Liege, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Brugge, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Namur, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Charleroi, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Antwerpen, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "Brussels, Belgium",
        "value": "Europe/Brussels"
    },
    {
        "label": "El Cayo, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Corozal, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Dangriga, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Belize City, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Orange Walk, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Punta Gorda, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Belmopan, Belize",
        "value": "America/Belize"
    },
    {
        "label": "Lokossa, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Kandi, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Ouidah, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Abomey, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Natitingou, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Djougou, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Parakou, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Porto-Novo, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Cotonou, Benin",
        "value": "Africa/Porto-Novo"
    },
    {
        "label": "Hamilton, Bermuda",
        "value": "Atlantic/Bermuda"
    },
    {
        "label": "Paro, Bhutan",
        "value": "Asia/Thimphu"
    },
    {
        "label": "Punakha, Bhutan",
        "value": "Asia/Thimphu"
    },
    {
        "label": "Wangdue Prodrang, Bhutan",
        "value": "Asia/Thimphu"
    },
    {
        "label": "Thimphu, Bhutan",
        "value": "Asia/Thimphu"
    },
    {
        "label": "Punata, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Cliza, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Quillacollo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Puerto Villarroel, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Tarabuco, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Guayaramerin, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Santa Ana, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Baures, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Sica Sica, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Rurrenabaque, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Sorata, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Achacachi, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Viacha, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Quime, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Llallagua, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Uncia, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Uyuni, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Villa Martin, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Betanzos, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Portachuelo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Samaipata, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Cuevo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Carlos, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Lorenzo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Entre Rios, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Aiquile, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Padilla, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Camargo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Reyes, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Borja, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Magdalena, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Ramon, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Puerto Heath, Bolivia",
        "value": "America/Lima"
    },
    {
        "label": "Charana, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Puerto Acosta, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Apolo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Coroico, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Coro Coro, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Sabaya, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Challapata, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Llica, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Potosi, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Villazon, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Tupiza, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Montero, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Piso Firme, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Robore, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Puerto Quijarro, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Ignacio, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Ascension, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Javier, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San Rafael, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Vallegrande, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Puerto Suarez, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Charagua, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Villamontes, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Bermejo, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Cochabamba, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Oruro, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Camiri, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Cobija, Bolivia",
        "value": "America/Rio_Branco"
    },
    {
        "label": "San Matias, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "San José, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Trinidad, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Tarija, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Sucre, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Riberalta, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "La Paz, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Santa Cruz, Bolivia",
        "value": "America/La_Paz"
    },
    {
        "label": "Zenica, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Mostar, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Tuzla, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Prijedor, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Banja Luka, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Sarajevo, Bosnia and Herzegovina",
        "value": "Europe/Sarajevo"
    },
    {
        "label": "Mochudi, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Ghanzi, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Lokhwabe, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Lehututu, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Tshabong, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Tsau, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Nokaneng, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Mohembo, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Maun, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Kasane, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Nata, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Mopipi, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Palapye, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Lobatse, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Kanye, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Molepolole, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Francistown, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Mahalapye, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Serowe, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Gaborone, Botswana",
        "value": "Africa/Gaborone"
    },
    {
        "label": "Grajau, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Presidente Dutra, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Itapecuru Mirim, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Sao Jose de Ribamar, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Santa Ines, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Rosario, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Timon, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Capanema, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Portel, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Itupiranga, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Pimenta Bueno, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Ponta Pora, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Maracaju, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Jardim, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Tres Lagoas, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Guanhaes, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Leopoldina, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Nova Lima, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pouso Alegre, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itauna, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Caratinga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Diamantina, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Nanuque, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Barbacena, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pocos de Caldas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Guaxupe, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Joao del Rei, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Muriae, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Passos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Conselheiro Lafaiete, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Formiga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Frutal, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Iturama, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ituiutaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Araguari, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Almenara, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Varzea Grande, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Cáceres, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Santana do Livramento, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Canoas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Quarai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santa Vitoria do Palmar, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Lourenco do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Canela, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Gabriel, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Rosario do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Cachoeira do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Osorio, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santa Cruz do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Luiz Gonzaga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santo Angelo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Carazinho, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Erechim, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Guaira, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Palmas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Arapongas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Paranagua, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Jose dos Pinhais, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Guarapuava, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Rio Negro, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Apucarana, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Lapa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Irati, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Castro, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Telemaco Borba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jacarezinho, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Concordia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Blumenau, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Brusque, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ararangua, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jaragua do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Tubarao, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Laguna, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Joacaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Cacador, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Canoinhas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Camocim, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Russas, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Sobral, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Iguatu, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Quixada, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Caninde, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Campo Maior, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Barras, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Rio Largo, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Palmeira dos Indios, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Santa Cruz Cabralia, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Paulo Afonso, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Brumado, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Jaguaquara, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Itapetinga, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Ubaitaba, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Cachoeiro de Itapemirim, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Barra Mansa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Nova Iguacu, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Duque de Caxias, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Niteroi, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Cabo Frio, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Macae, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Miracema, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Apodi, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Santa Cruz, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Morrinhos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ceres, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Catalao, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Cristalina, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Trindade, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ipora, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Inhumas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itaberai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santo Andre, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pindamonhangaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Rio Claro, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ourinhos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itanhaem, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jaboticabal, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Braganca Paulista, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jundiai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Jose dos Campos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Guaratingueta, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pirassununga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Americana, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Piracicaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Joao da Boa Vista, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Carlos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Tupa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Penapolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Presidente Prudente, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Registro, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Tatui, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Avare, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Garca, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Catanduva, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Batatais, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Barretos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Marilia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itu, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itapetininga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jaboatao, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Olinda, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Cabo de Santo Agostinho, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Carpina, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Arcoverde, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Manacapuru, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Maues, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Pedreiras, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Codo, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Coroata, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Chapadinha, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Pinheiro, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Barra do Corda, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Viana, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Colinas, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Viseu, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Capitao Poco, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Castanhal, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Salinopolis, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Alenquer, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Oriximina, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Xinguara, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Jacundá, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Uruara, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Altamira, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Paragominas, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Cameta, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Rolim de Moura, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Ariquemes, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Abuna, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Tocantinopolis, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Gurupi, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Aquidauana, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Paranaiba, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Sete Lagoas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Divinopolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ipatinga, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Araxa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Lavras, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Uba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Campo Belo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ponte Nova, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Curvelo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Paracatu, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Bocaiuva, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Aracuai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Janauba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Juina, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Barra do Garcas, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Pontes e Lacerda, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Barra do Bugres, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Rondonopolis, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Uruguaiana, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Borja, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Novo Hamburgo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Rio Grande, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Camaqua, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Bento Goncalves, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Vacaria, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ijui, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santa Rosa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Maringa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Cascavel, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Campo Murao, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Foz do Iguacu, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Francisco do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Porto Uniao, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itajai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Imbituba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Lajes, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Granja, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Crato, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Itapipoca, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Paracuru, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Acarau, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Taua, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Crateus, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Baturite, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Ipu, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Floriano, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Piripiri, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Penedo, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Itabuna, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Itamaraju, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Guanambi, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Porto Seguro, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Valenca, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Serrinha, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Tucano, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Senhor do Bonfim, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Remanso, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Itambe, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Bom Jesus da Lapa, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Itaberaba, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Sao Mateus, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Patos, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Volta Redonda, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Petropolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Nova Cruz, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Caico, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Acu, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Estancia, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Caracarai, Brazil",
        "value": "America/Boa_Vista"
    },
    {
        "label": "Porto Santana, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Rio Verde, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pires do Rio, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Anapolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Goianesia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Niquelandia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itumbiara, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jatai, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Mineiros, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Formosa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Jose do Rio Preto, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Limeira, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Taubate, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Jau, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Assis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Itapeva, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Botucatu, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Novo Horizonte, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Andradina, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Fernandopolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Barreiros, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Salgueiro, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Goiana, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Timbauba, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Bacabal, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Braganca, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Obidos, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Guajara-Miram, Brazil",
        "value": "America/La_Paz"
    },
    {
        "label": "Porto Nacional, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Dourados, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Governador Valadares, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Pirapora, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Juiz de Fora, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Santa Maria, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Passo Fundo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Xapeco, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Joinville, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Juazeiro do Norte, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Nova Vicosa, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Alagoinhas, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Juazeiro, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Vitória, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Joao Pessoa, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Campina Grande, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Nova Friburgo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Aracatuba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sena Madureira, Brazil",
        "value": "America/Rio_Branco"
    },
    {
        "label": "Fonte Boa, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Eirunepe, Brazil",
        "value": "America/Eirunepe"
    },
    {
        "label": "Manicore, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Barcelos, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Tonantins, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Tefe, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Coari, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Sao Cabriel da Cachoeira, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Novo Airao, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Itacoatiara, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Parintins, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Natal, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Crato, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Imperatriz, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Balsas, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Breves, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Jacareacanga, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Tucurui, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Itaituba, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Conceicao do Araguaia, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Abaetetuba, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Principe da Beira, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Araguaina, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Palmas, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Teofilo Otoni, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Uberaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Januaria, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Mato Grosso, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Aripuana, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Sinop, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Jaguarao, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Bage, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Londrina, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Criciuma, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Aracati, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Ico, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Parnaiba, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Picos, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Arapiraca, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Jequie, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Ilheus, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Canavieiras, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Santa Maria da Vitoria, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Irece, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Xique-Xique, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Linhares, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Campos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Mossoro, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Aracaju, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Laranjal do Jari, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Amapa, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Vila Velha, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Santos, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Bauru, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Iguape, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Franca, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Garanhuns, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Caruaru, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Rio Branco, Brazil",
        "value": "America/Rio_Branco"
    },
    {
        "label": "São Luís, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Porto Velho, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Alvorada, Brazil",
        "value": "America/Araguaina"
    },
    {
        "label": "Corumba, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Belo Horizonte, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Montes Claros, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Uberlandia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Colider, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Alta Floresta, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Cuiaba, Brazil",
        "value": "America/Cuiaba"
    },
    {
        "label": "Pelotas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Caxias do Sul, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ponta Grossa, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Teresina, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Maceio, Brazil",
        "value": "America/Maceio"
    },
    {
        "label": "Vitoria da Conquista, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Barreiras, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Vila Velha, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Natal, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Campinas, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sorocaba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Ribeirao Preto, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Petrolina, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Cruzeiro do Sul, Brazil",
        "value": "America/Rio_Branco"
    },
    {
        "label": "Manaus, Brazil",
        "value": "America/Manaus"
    },
    {
        "label": "Caxias, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Santarem, Brazil",
        "value": "America/Santarem"
    },
    {
        "label": "Maraba, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Vilhena, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Ji-Parana, Brazil",
        "value": "America/Porto_Velho"
    },
    {
        "label": "Campo Grande, Brazil",
        "value": "America/Campo_Grande"
    },
    {
        "label": "Florianopolis, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Feira de Santana, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Boa Vista, Brazil",
        "value": "America/Boa_Vista"
    },
    {
        "label": "Macapá, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Belem, Brazil",
        "value": "America/Belem"
    },
    {
        "label": "Brasilia, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Porto Alegre, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Curitiba, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Fortaleza, Brazil",
        "value": "America/Fortaleza"
    },
    {
        "label": "Salvador, Brazil",
        "value": "America/Bahia"
    },
    {
        "label": "Goiania, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Recife, Brazil",
        "value": "America/Recife"
    },
    {
        "label": "Rio de Janeiro, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Sao Paulo, Brazil",
        "value": "America/Sao_Paulo"
    },
    {
        "label": "Bandar Seri Begawan, Brunei",
        "value": "Asia/Brunei"
    },
    {
        "label": "Lovec, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Montana, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Razgrad, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Sliven, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Plovdiv, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Pernik, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Vratsa, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Shumen, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Khaskovo, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Stara Zagora, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Pleven, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Turnovo, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Kyustendil, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Dobrich, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Varna, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Ruse, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Burgas, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Sofia, Bulgaria",
        "value": "Europe/Sofia"
    },
    {
        "label": "Fada Ngourma, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Orodara, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Solenzo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Nouna, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Dedougou, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Gorom Gorom, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Djibo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Tougan, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Kombissiri, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Ziniare, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Yako, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Reo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Leo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Sapouy, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Boulsa, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Zorgo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Koupela, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Po, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Manga, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Diebougou, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Gaoua, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Bogande, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Dori, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Sebba, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Diapaga, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Koudougou, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Ouahigouya, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Kaya, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Tenkodogo, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Banfora, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Bobo Dioulasso, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Ouagadougou, Burkina Faso",
        "value": "Africa/Ouagadougou"
    },
    {
        "label": "Cankuzo, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Karusi, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Rutana, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Ruyigi, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Bubanza, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Kayanza, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Makamba, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Ngozi, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Kirundo, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Muramvya, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Bururi, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Muyinga, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Gitega, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Bujumbura, Burundi",
        "value": "Africa/Bujumbura"
    },
    {
        "label": "Kampong Spoe, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Kampong Thum, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Prey Veng, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Phnum Tbeng Meanchey, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Stoeng Treng, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Kracheh, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Senmonorom, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Lumphat, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Svay Rieng, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Sisophon, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Krong Koh Kong, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Pursat, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Kampong Cham, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Kompong Chhnang, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Kampot, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Takeo, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Battambang, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Siem Reap, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Phnom Penh, Cambodia",
        "value": "Asia/Phnom_Penh"
    },
    {
        "label": "Buea, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Bafang, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Foumban, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Bafoussam, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Kumba, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Eyumojok, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Limbe, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Kribi, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Nkongsamba, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Edea, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Wum, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Kumbo, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Bafia, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Mbalmayo, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Eseka, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Bertoua, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Abong Mbang, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Batouri, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Belabo, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Meiganga, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Ngaoundere, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Tibati, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Kontcha, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Guider, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Mbe, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Douala, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Ebolowa, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Bamenda, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Garoua, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Maroua, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Yaounde, Cameroon",
        "value": "Africa/Douala"
    },
    {
        "label": "Selkirk, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Berens River, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Pukatawagan, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Gimli, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Island Lake, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Melville, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Weyburn, Canada",
        "value": "America/Regina"
    },
    {
        "label": "La Ronge, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Stony Rapids, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Camrose, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Hinton, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Vegreville, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Stettler, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Lac La Biche, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Wetaskiwin, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Meander River, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Creston, Canada",
        "value": "America/Creston"
    },
    {
        "label": "Cranbrook, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Terrace, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Chilliwack, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Hall Beach, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Lutselke, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Hay River, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Déline, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Paulatuk, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Tsiigehtchic, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Owen Sound, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Orillia, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Kapuskasing, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Thessalon, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Geraldton, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Belleville, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Sarnia, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Peterborough, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Oshawa, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "London, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Kitchener, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "New Liskeard, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Brockville, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Big Beaver House, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Port-Menier, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Riviere-du-Loup, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Drummondville, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Sherbrooke, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Cap-Chat, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Baie-Comeau, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Natashquan, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Eastmain, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Schefferville, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Salluit, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Amos, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Joliette, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "St.-Jerome, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "St-Augustin, Canada",
        "value": "America/Blanc-Sablon"
    },
    {
        "label": "Rouyn-Noranda, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "La Sarre, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "New Glasgow, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Liverpool, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Amherst, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Baddeck, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Deer Lake, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "La Scie, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Hopedale, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Happy Valley - Goose Bay, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Port Hope Simpson, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Tofino, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Steinbach, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Nelson House, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Shamattawa, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Oxford House, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Yorkton, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Swift Current, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Biggar, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Kindersley, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Meadow Lake, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Hudson Bay, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Lethbridge, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Brooks, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Lake Louise, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Athabasca, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Fort Chipewyan, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Bella Bella, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Sandspit, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Campbell River, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Port Hardy, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Nanaimo, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Quesnel, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Abbotsford, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Dawson Creek, Canada",
        "value": "America/Dawson_Creek"
    },
    {
        "label": "Penticton, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Nelson, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Lillooet, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Powell River, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Revelstoke, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Burns Lake, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Dease Lake, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Coral Harbour, Canada",
        "value": "America/Coral_Harbour"
    },
    {
        "label": "Baker Lake, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Norman Wells, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Fort McPherson, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Burwash Landing, Canada",
        "value": "America/Whitehorse"
    },
    {
        "label": "Orangeville, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Little Current, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Chapleau, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Wawa, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Hearst, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Marathon, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Sioux Lookout, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Red Lake, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Deer Lake, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Cat Lake, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Cornwall, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Kingston, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Barrie, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Parry Sound, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Wiarton, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Cobalt, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Cochrane, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Nipigon, Canada",
        "value": "America/Nipigon"
    },
    {
        "label": "Atikokan, Canada",
        "value": "America/Atikokan"
    },
    {
        "label": "Rimouski, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Saint-Georges, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Victoriaville, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Chevery, Canada",
        "value": "America/Blanc-Sablon"
    },
    {
        "label": "Mistassini, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Kangirsuk, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Shawinigan, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Matagami, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Mont-Laurier, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Pembroke, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Radisson, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Saint John, Canada",
        "value": "America/Moncton"
    },
    {
        "label": "Edmundston, Canada",
        "value": "America/Moncton"
    },
    {
        "label": "Shelburne, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Antigonish, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Windsor, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Digby, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Stephenville, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Argentia, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "St. Anthony, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Channel-Port aux Basques, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Buchans, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Trout River, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Churchill Falls, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Forteau, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Trepassey, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Brochet, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Lynn Lake, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Gillam, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "North Battleford, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Prince Albert, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Courtenay, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Kelowna, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Pangnirtung, Canada",
        "value": "America/Pangnirtung"
    },
    {
        "label": "Holman, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Dryden, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Attawapiskat, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Hamilton, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Windsor, Canada",
        "value": "America/Detroit"
    },
    {
        "label": "Trois-Rivières, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Sept-Îles, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Corner Brook, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Norway House, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Flin Flon, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Dauphin, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "The Pas, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Uranium City, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Moose Jaw, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Jasper, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Medicine Hat, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Red Deer, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Banff, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Grand Prairie, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Smithers, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Kamloops, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Williams Lake, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Prince George, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Fort Nelson, Canada",
        "value": "America/Fort_Nelson"
    },
    {
        "label": "Pond Inlet, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Cape Dorset, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Kimmirut, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Gjoa Haven, Canada",
        "value": "America/Cambridge_Bay"
    },
    {
        "label": "Grise Fiord, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Alert, Canada",
        "value": "America/Pangnirtung"
    },
    {
        "label": "Ennadai, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Rankin Inlet, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Fort Resolution, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Fort Simpson, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Inuvik, Canada",
        "value": "America/Inuvik"
    },
    {
        "label": "Tuktoyaktuk, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Watson Lake, Canada",
        "value": "America/Whitehorse"
    },
    {
        "label": "Lansdowne House, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Moosonee, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Sudbury, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Kenora, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Gaspe, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Mingan, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Dolbeau, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Val d'Or, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Ivugivik, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Inukjuak, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Chicoutimi, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Moncton, Canada",
        "value": "America/Moncton"
    },
    {
        "label": "Fredericton, Canada",
        "value": "America/Moncton"
    },
    {
        "label": "Bathurst, Canada",
        "value": "America/Moncton"
    },
    {
        "label": "Yarmouth, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Gander, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Cartwright, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Rigolet, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Port Burwell, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Thompson, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Brandon, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Fort Smith, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Fort McMurray, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Peace River, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Fort St. John, Canada",
        "value": null
    },
    {
        "label": "Iqaluit, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Cambridge Bay, Canada",
        "value": "America/Cambridge_Bay"
    },
    {
        "label": "Kugluktuk, Canada",
        "value": "America/Cambridge_Bay"
    },
    {
        "label": "Chesterfield Inlet, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Arviat, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Taloyoak, Canada",
        "value": "America/Cambridge_Bay"
    },
    {
        "label": "Igloolik, Canada",
        "value": "America/Iqaluit"
    },
    {
        "label": "Dawson City, Canada",
        "value": "America/Dawson"
    },
    {
        "label": "Timmins, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "North Bay, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Kuujjuarapik, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Kuujjuaq, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Sydney, Canada",
        "value": "America/Glace_Bay"
    },
    {
        "label": "Labrador City, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Winnipeg, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Churchill, Canada",
        "value": "America/Winnipeg"
    },
    {
        "label": "Regina, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Saskatoon, Canada",
        "value": "America/Regina"
    },
    {
        "label": "Calgary, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Prince Rupert, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Victoria, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Arctic Bay, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Resolute, Canada",
        "value": "America/Resolute"
    },
    {
        "label": "Repulse Bay, Canada",
        "value": "America/Rankin_Inlet"
    },
    {
        "label": "Yellowknife, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Fort Good Hope, Canada",
        "value": "America/Yellowknife"
    },
    {
        "label": "Whitehorse, Canada",
        "value": "America/Whitehorse"
    },
    {
        "label": "Ottawa, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Fort Severn, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Thunder Bay, Canada",
        "value": "America/Thunder_Bay"
    },
    {
        "label": "Québec, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Halifax, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "St. John’s, Canada",
        "value": "America/St_Johns"
    },
    {
        "label": "Nain, Canada",
        "value": "America/Goose_Bay"
    },
    {
        "label": "Charlottetown, Canada",
        "value": "America/Halifax"
    },
    {
        "label": "Edmonton, Canada",
        "value": "America/Edmonton"
    },
    {
        "label": "Montréal, Canada",
        "value": "America/Montreal"
    },
    {
        "label": "Vancouver, Canada",
        "value": "America/Vancouver"
    },
    {
        "label": "Toronto, Canada",
        "value": "America/Toronto"
    },
    {
        "label": "Mindelo, Cape Verde",
        "value": "Atlantic/Cape_Verde"
    },
    {
        "label": "Praia, Cape Verde",
        "value": "Atlantic/Cape_Verde"
    },
    {
        "label": "George Town, Cayman Islands",
        "value": "America/Cayman"
    },
    {
        "label": "Mobaye, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Mbaiki, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Carnot, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bozoum, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Kaga Bandoro, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Zemio, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Yakossi, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Nola, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Sibut, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bossangoa, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Birao, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Ouadda, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bangassou, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bossembele, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Berberati, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bria, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bouar, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bambari, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Ndele, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Obo, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Bangui, Central African Republic",
        "value": "Africa/Bangui"
    },
    {
        "label": "Lai, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Zouar, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Bol, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Ati, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Oum Hadjer, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Mongo, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Doba, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Pala, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Bongor, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Kelo, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Fada, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Faya Largeau, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Mao, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Biltine, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Sarh, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Am Timan, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Moundou, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Ndjamena, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Abeche, Chad",
        "value": "Africa/Ndjamena"
    },
    {
        "label": "Rio Verde, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Cuya, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Chuquicamata, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Maria Elena, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Tierra Amarilla, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Combarbala, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "San Bernardo, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "San Felipe, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Vina del Mar, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "La Ligua, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Quillota, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Nueva Imperial, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Loncoche, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Villarica, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Tolten, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Lonquimay, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Angol, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Collipulli, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "La Union, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Rio Bueno, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Coronel, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Talcahuano, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Quirihue, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Curanilahue, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Santa Barbara, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Pichilemu, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "San Fernando, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Puerto Varas, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Calbuco, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Castro, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Chonchi, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Linares, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Cauquenes, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Cochrane, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Lagunas, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Pozo Almonte, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Toconao, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Huasco, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Diego de Almagro, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Caldera, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Coquimbo, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Vicuna, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Illapel, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Salamanca, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Los Andes, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "San Antonio, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Victoria, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Carahue, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Los Lagos, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Lota, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Lebu, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Quellon, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Constitucion, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Villa O'Higgins, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Puerto Aisen, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Puerto Natales, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Puerto Williams, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Temuco, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Tocopilla, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Calama, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Mejillones, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Taltal, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Vallenar, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Chanaral, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Ovalle, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Chillan, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Rancagua, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Osorno, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Ancud, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Talca, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Curico, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Coihaique, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Arica, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Copiapo, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "La Serena, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Los Angeles, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Punta Arenas, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Iquique, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Antofagasta, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Valparaiso, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Valdivia, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Concepcion, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Puerto Montt, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Santiago, Chile",
        "value": "America/Santiago"
    },
    {
        "label": "Yumen, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Linxia, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Zhuozhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Sanming, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huizhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Chaozhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Gyangze, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Dali, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yangquan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shiyan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Danjiangkou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shashi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Anlu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zixing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Deyang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Tengchong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Mengzi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Chuxiong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Hengshui, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xuanhua, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Luohe, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Beipiao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wafangdian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhucheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hangu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xinyi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yangzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Linhai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huangyan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Daan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Changling, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Tonghua, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Baishan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Yanji, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Ergun Zuoqi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shangdu, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Orongen Zizhiqi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zalantun, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wuchuan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Hanggin Houqi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Anda, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Qinggang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Angangxi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Hulan Ergi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Qingan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Baiquan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Suileng, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Linkou, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Longxi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Pingliang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Anxi, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Minxian, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Jinchang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Guide, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Qinzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Pingxiang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yishan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Beihai, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Hechi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Tongren, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Fengjie, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Changping, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shaowu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Longyan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhangzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Putian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changting, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nanping, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Ninde, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jieshou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Tongling, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Maanshan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fuyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yangjiang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Meizhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Heyuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Qingyuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhaoqing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Lianxian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiangmen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Maoming, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Gar, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Turpan, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Quiemo, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Koktokay, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Hancheng, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Weinan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Shuozhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xinzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jincheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiexiu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changzhi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Guangshui, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jingmen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zicheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shishou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xiaogan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Puqi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yunxian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jinshi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Chenzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhijiang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xiangtan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zigong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yaan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Langzhong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Rongzhag, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Simao, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Wenshan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Zhanyi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Huize, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Chengde, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Cangzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Baoding, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huanghua, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dingzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nangong, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Linqing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xiangtai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Puyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hebi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xuchang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhoukou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dengzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Tieling, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Chaoyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huanren, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhuanghe, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yishui, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shanxian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Pingyi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Pingdu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Laiwu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Buizhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Liaocheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Rizhao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dezhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Linchuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fengcheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shangrao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jingdezhen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Taizhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shuyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Lianyungang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Lishui, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiaojing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Quzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fuyu, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Dunhua, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Nongan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Taonan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Liuhe, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Huinan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Panshi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Jiaohe, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Linjiang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Wangqing, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Helong, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Shulan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Jiutai, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Alxa Zuoqi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Linxi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Kailu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Bairin Zuoqi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yitulihe, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yakeshi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Bugt, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wuyuan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Bayan Obo, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Fengzhen, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Suihua, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Shuangyashan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Shangzhi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Fujin, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Yian, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Tailai, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Longjiang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Gannan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Hailun, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Mishan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Tieli, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Shuangcheng, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Zhaodong, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Lanxi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Keshan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Nancha, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Xinqing, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Hulin, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Boli, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Ningan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Jyekundo, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Liuzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Xingyi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Anshun, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Zunyi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Wanzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Huaibei, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wuhu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Luan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Bengbu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Anqing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Foshan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nagchu, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Nyingchi, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Chamdo, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Korla, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Kuqa, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Tacheng, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Shihezi, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Karamay, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Aksu, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Sanya, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Haikou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Hanzhong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Baoji, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Tongchuan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Linfen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yuci, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Datong, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jianmen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yichang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xiantao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Macheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huangshi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhuzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yongzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yiyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changde, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shaoyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Leshan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Panzhihua, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Fulin, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Guangyuan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Luzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yibin, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Zhaotang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Lijiang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yuxi, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Dali, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Qinhuangdao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Langfang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhangjiakou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Tangshan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Anyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiaozuo, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Kaifeng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shangqiu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Pingdingshan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xinyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xinxiang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Luoyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Liaoyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dandong, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yingkow, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jinzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fuxin, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Benxi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fushun, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jining, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Weifang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Taian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Heze, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Laiyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xinyu, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Ganzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiujiang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhenjiang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nantong, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiaxing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shaoxing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jinhua, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Liaoyuan, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Tumen, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Siping, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Baicheng, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Wuhai, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Erenhot, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jining, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Arxan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Manzhouli, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xilinhot, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Heihe, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Qitaihe, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Yichun, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Hegang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Nenjiang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Nehe, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Mudangiang, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Xuanzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhuhai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xianyang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Xiangfan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Suining, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Lingyuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Weihai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yichun, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yancheng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Fuyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xiamen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nanchong, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Neijiang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Nanyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jinxi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yantai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zaozhuang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Suzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xuzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wuxi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jilin, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Zhangye, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Wuwei, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Dunhuang, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Tianshui, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Dulan, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Golmud, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Yulin, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Bose, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Wuzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Lupanshui, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Quanzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hefei, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Suzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zhanjiang, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Shaoguan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xigaze, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Shache, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Yining, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Altay, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Shizuishan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Yulin, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Ankang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Houma, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yueyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hengyang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Mianyang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Xichang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Baoshan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Gejiu, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Shijianzhuang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Handan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Anshan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dalian, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Qingdao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Linyi, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Huaiyin, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wenzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Ningbo, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Tongliao, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hohhot, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Chifeng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Ulanhot, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hailar, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jiamusi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Beian, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Daqing, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Jixi, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Jiayuguan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Xining, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Guilin, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Huainan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shantou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Lhasa, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Hami, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Hotan, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Kashgar, China",
        "value": "Asia/Kashgar"
    },
    {
        "label": "Yinchuan, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Pingxiang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Qiqihar, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Shenzhen, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Zibo, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Lanzhou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Nanning, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Guiyang, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Chongqing, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Fuzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Guangzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Dongguan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Xian, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Taiyuan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Wuhan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changsha, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Kunming, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Zhengzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shenyeng, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Jinan, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Tianjin, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nanchang, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Nanjing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Hangzhou, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Changchun, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Baotou, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Harbin, China",
        "value": "Asia/Harbin"
    },
    {
        "label": "Urumqi, China",
        "value": "Asia/Urumqi"
    },
    {
        "label": "Chengdu, China",
        "value": "Asia/Chongqing"
    },
    {
        "label": "Beijing, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Shanghai, China",
        "value": "Asia/Shanghai"
    },
    {
        "label": "Yopal, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "San Andres, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Sonson, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Sogamoso, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Barrancabermeja, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Girardot, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Campoalegre, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tuquerres, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Mocoa, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Cartago, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Soledad, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Sabanalarga, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Arjona, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Magangue, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Valledupar, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "San Jose del Guaviare, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Puerto Lopez, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Yarumal, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Puerto Berrio, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Turbo, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tunja, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Chiquinquira, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Duitama, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Ayapel, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Lorica, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Socorro, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Riohacha, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Armenia, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Pereira, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Honda, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "San Vicente del Caguan, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Florencia, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Guapi, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Neiva, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Garzon, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Ipiales, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Buenaventura, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tulua, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "El Carmen de Bolivar, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Jurado, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Nuqui, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Quibdo, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "El Banco, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Cienaga, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Sincelejo, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tolu, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Arauca, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tame, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Pamplona, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Ocana, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Orocue, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Obando, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "San Martin, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Puerto Carreno, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Bello, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Monteria, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Bucaramanga, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Ibague, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Popayan, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Santa Marta, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Cucuta, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Villavicencio, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Tumaco, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Manizales, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Pasto, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Barranquilla, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Cartagena, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Mitu, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Leticia, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Medellin, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Cali, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Bogota, Colombia",
        "value": "America/Bogota"
    },
    {
        "label": "Moroni, Comoros",
        "value": "Indian/Comoro"
    },
    {
        "label": "Madingou, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Kinkala, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Ewo, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Impfondo, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Sembe, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Moloundou, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Owando, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Makoua, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Sibiti, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Mossendjo, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Loubomo, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Gamboma, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Djambala, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Ouesso, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Kayes, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Pointe-Noire, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Brazzaville, Congo (Brazzaville)",
        "value": "Africa/Brazzaville"
    },
    {
        "label": "Buluko, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Zongo, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Libenge, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Bongandanga, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Ikela, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Binga, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Basankusu, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Boende, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Gbadolite, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Businga, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Bosobolo, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Yangambi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Aketi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Mongbwalu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bafwasende, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bunia, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Wamba, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Basoko, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kenge, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Bolobo, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kahemba, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Bulungu, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Lusanga, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Mangai, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kasongo-Lunda, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Mushie, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Dibaya, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Mweka, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Luebo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Demba, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Ilebo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Moanda, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kimpese, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kasangulu, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Mbanza-Ngungu, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Tshela, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Mwenga, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kampene, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kalima, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lubutu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kabinda, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lubao, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lusambo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Gandajika, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lodja, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Dilolo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Nyunzu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kasaji, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Luanza, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Moba, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bukama, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kaniama, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kipushi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kambove, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kongolo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kabalo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Beni, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lisala, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Gemena, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Buta, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Watsa, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Isiro, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bondo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Inongo, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Tshikapa, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Boma, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Bukavu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Uvira, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kindu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Mwene-Ditu, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Likasi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Manono, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kamina, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Mbandaka, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kisangani, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bandundu, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kananga, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kasongo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Mbuji-Mayi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kalemie, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Butembo, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Goma, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Bumba, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kikwit, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Matadi, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Kolwezi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Lubumbashi, Congo (Kinshasa)",
        "value": "Africa/Lubumbashi"
    },
    {
        "label": "Kinshasa, Congo (Kinshasa)",
        "value": "Africa/Kinshasa"
    },
    {
        "label": "Rarotonga, Cook Islands",
        "value": "Pacific/Rarotonga"
    },
    {
        "label": "Heredia, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Cartago, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Golfito, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Alajuela, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Canas, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Sixaola, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Puntarenas, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Ciudad Cortes, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Quesada, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Liberia, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "La Cruz, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Puerto Limon, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "San Jose, Costa Rica",
        "value": "America/Costa_Rica"
    },
    {
        "label": "Sibenik, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Karlovac, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Rijeka, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Slavonski Brod, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Dubrovnik, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Split, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Zadar, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Pula, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Osijek, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Zagreb, Croatia",
        "value": "Europe/Zagreb"
    },
    {
        "label": "Ciego de Avila, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Palma Soriano, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "San Antonio de los Banos, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Guines, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Caibarien, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Placetas, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Cienfuegos, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Nueva Gerona, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Sancti Spiritus, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Moron, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Nuevitas, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Manzanillo, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Bayamo, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Banes, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Las Tunas, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Artemisa, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Matanzas, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Colon, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Sagua la Grande, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Pinar del Rio, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Camaguey, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Guantanamo, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Holguin, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Santa Clara, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Santiago de Cuba, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Havana, Cuba",
        "value": "America/Havana"
    },
    {
        "label": "Willemstad, Curacao",
        "value": "America/Curacao"
    },
    {
        "label": "Larnaka, Cyprus",
        "value": "Asia/Nicosia"
    },
    {
        "label": "Paphos, Cyprus",
        "value": "Asia/Nicosia"
    },
    {
        "label": "Lemosos, Cyprus",
        "value": "Asia/Nicosia"
    },
    {
        "label": "Nicosia, Cyprus",
        "value": "Asia/Nicosia"
    },
    {
        "label": "Usti Nad Labem, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Hradec Kralove, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Ceske Budejovice, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Liberec, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Olomouc, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Pizen, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Jihlava, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Zlin, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Brno, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Pardubice, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Ostrava, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Prague, Czech Republic",
        "value": "Europe/Prague"
    },
    {
        "label": "Vejle, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Hillerod, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Soro, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Viborg, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Roskilde, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Svendborg, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Odense, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Esbjerg, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Frederikshavn, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Aalborg, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Århus, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "København, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Dikhil, Djibouti",
        "value": "Africa/Djibouti"
    },
    {
        "label": "Tadjoura, Djibouti",
        "value": "Africa/Djibouti"
    },
    {
        "label": "Ali Sabih, Djibouti",
        "value": "Africa/Djibouti"
    },
    {
        "label": "Obock, Djibouti",
        "value": "Africa/Djibouti"
    },
    {
        "label": "Djibouti, Djibouti",
        "value": "Africa/Djibouti"
    },
    {
        "label": "Roseau, Dominica",
        "value": "America/Dominica"
    },
    {
        "label": "Sabaneta, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Mao, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Cotui, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Puerto Plata, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Dajabon, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Moca, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Salcedo, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Jimani, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Comendador, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Pedernales, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Azua, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Bonao, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Bani, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Hato Mayor, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Monte Plata, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Nagua, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Samana, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "San Cristobal, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "El Seibo, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Higuey, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Neiba, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "La Vega, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "San Francisco de Macoris, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "San Pedro de Macoris, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Monte Cristi, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Barahona, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Bavaro, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "La Romana, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "San Juan, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Santiago, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Santo Domingo, Dominican Republic",
        "value": "America/Santo_Domingo"
    },
    {
        "label": "Dili, East Timor",
        "value": "Asia/Dili"
    },
    {
        "label": "Puyo, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Tulcan, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Pinas, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Puerto Villamil, Ecuador",
        "value": "Pacific/Galapagos"
    },
    {
        "label": "Puerto Baquerizo Moreno, Ecuador",
        "value": "Pacific/Galapagos"
    },
    {
        "label": "Guaranda, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Azogues, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Salinas, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Alausi, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Sangolqui, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Muisne, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "San Gabriel, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Macara, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Zamora, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Latacunga, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Milagro, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Babahoyo, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Chone, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Jipijapa, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Yaupi, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Macas, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Cayambe, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Ambato, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Tena, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Valdez, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "San Lorenzo, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Esmeraldas, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Ibarra, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Portoviejo, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Machala, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Loja, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Manta, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Riobamba, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Cuenca, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Santa Cruz, Ecuador",
        "value": "Pacific/Galapagos"
    },
    {
        "label": "Quito, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Guayaquil, Ecuador",
        "value": "America/Guayaquil"
    },
    {
        "label": "Shibin el Kom, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Benha, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Zagazig, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Kafr el Sheikh, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Tanta, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Ismailia, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Mansura, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Dumyat, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Matruh, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Alamein, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Daba, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Salum, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Damanhûr, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Samalut, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Mallawi, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Beni Mazar, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Beni Suef, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Rashid, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Qasr Farafra, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Qasr, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Isna, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Qena, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Girga, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Sohag, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Berenice, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Bur Safaga, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Tur, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Arish, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Giza, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Siwa, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Minya, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Kom Ombo, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Kharga, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Hurghada, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Suez, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Bur Said, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "El Faiyum, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Aswan, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Asyut, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Luxor, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Alexandria, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Cairo, Egypt",
        "value": "Africa/Cairo"
    },
    {
        "label": "Ahuachapan, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Cojutepeque, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Nueva San Salvador, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Zacatecoluca, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "La Union, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "San Francisco Gotera, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "San Vicente, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Usulutan, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Chalatenango, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Sensuntepeque, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Sonsonate, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "San Miguel, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Santa Ana, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "San Salvador, El Salvador",
        "value": "America/El_Salvador"
    },
    {
        "label": "Evinayong, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Luba, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Calatrava, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Mongomo, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Bata, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Malabo, Equatorial Guinea",
        "value": "Africa/Malabo"
    },
    {
        "label": "Tessenei, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Agordat, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Massawa, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Keren, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Mendefera, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Assab, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Asmara, Eritrea",
        "value": "Africa/Asmara"
    },
    {
        "label": "Haapsalu, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Viljandi, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Kohtla-Jarve, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Narva, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Tartu, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Parnu, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Tallinn, Estonia",
        "value": "Europe/Tallinn"
    },
    {
        "label": "Awasa, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Gore, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Debre Birhan, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Bati, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Adigrat, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Aksum, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Yirga Alem, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Hosaina, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Dila, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Giyon, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Hagere Hiywet, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Nekemte, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Asela, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Shashemene, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Dembi Dolo, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Gimbi, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Asosa, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Jijiga, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Debre Markos, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Dese, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Sodo, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Arba Minch, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Harar, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Goba, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Jima, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Nazret, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Nagele, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Gode, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Dolo Bay, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Bahir Dar, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Mekele, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Dire Dawa, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Gonder, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Addis Ababa, Ethiopia",
        "value": "Africa/Addis_Ababa"
    },
    {
        "label": "Fox Bay, Falkland Islands",
        "value": "Atlantic/Stanley"
    },
    {
        "label": "Stanley, Falkland Islands",
        "value": "Atlantic/Stanley"
    },
    {
        "label": "Klaksvik, Faroe Islands",
        "value": "Atlantic/Faroe"
    },
    {
        "label": "Tórshavn, Faroe Islands",
        "value": "Atlantic/Faroe"
    },
    {
        "label": "Palikir, Federated States of Micronesia",
        "value": "Pacific/Pohnpei"
    },
    {
        "label": "Nandi, Fiji",
        "value": "Pacific/Fiji"
    },
    {
        "label": "Lautoka, Fiji",
        "value": "Pacific/Fiji"
    },
    {
        "label": "Labasa, Fiji",
        "value": "Pacific/Fiji"
    },
    {
        "label": "Suva, Fiji",
        "value": "Pacific/Fiji"
    },
    {
        "label": "Hameenlinna, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Kouvola, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Mikkeli, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Savonlinna, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Pori, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Sodankylä, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Jyväskylä, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Kuopio, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Lappeenranta, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Porvoo, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Kemijarvi, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Kokkola, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Lahti, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Joensuu, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Turku, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Kemi, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Oulu, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Rovaniemi, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Vaasa, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Tampere, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Helsinki, Finland",
        "value": "Europe/Helsinki"
    },
    {
        "label": "Annecy, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Roanne, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Roura, France",
        "value": "America/Cayenne"
    },
    {
        "label": "Sinnamary, France",
        "value": "America/Cayenne"
    },
    {
        "label": "St.-Brieuc, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Poitier, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Angers, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Biarritz, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Aix-en-Provence, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Perpignan, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Tarbes, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Clermont-Ferrand, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Melun, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Arras, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Besancon, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Saint-Georges, France",
        "value": "America/Cayenne"
    },
    {
        "label": "Saint-Etienne, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Grenoble, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Fort-de-France, France",
        "value": "America/Martinique"
    },
    {
        "label": "Saint-Laurent-du-Maroni, France",
        "value": "America/Cayenne"
    },
    {
        "label": "Iracoubo, France",
        "value": "America/Cayenne"
    },
    {
        "label": "Cherbourg, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Caen, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Lorient, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Brest, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Le Mans, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Nantes, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Agen, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Ajaccio, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Bastia, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Toulon, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Beziers, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Montpellier, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Nimes, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Vichy, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Nevers, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Auxerre, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Dijon, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Bourges, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Tours, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Orleans, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Dieppe, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Rouen, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Versailles, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Brive, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Troyes, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Reims, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Calais, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Amiens, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Mulhouse, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Nancy, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Metz, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Pointe-a-Pitre, France",
        "value": "America/Guadeloupe"
    },
    {
        "label": "Basse-terre, France",
        "value": "America/Guadeloupe"
    },
    {
        "label": "St.-Benoit, France",
        "value": "Indian/Reunion"
    },
    {
        "label": "Dzaoudzi, France",
        "value": "Indian/Mayotte"
    },
    {
        "label": "Rennes, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Nice, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Toulouse, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Limoges, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Lille, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Strasbourg, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Kourou, France",
        "value": "America/Cayenne"
    },
    {
        "label": "La Rochelle, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Bordeaux, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Marseille, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Le Havre, France",
        "value": "Europe/Paris"
    },
    {
        "label": "St.-Denis, France",
        "value": "Indian/Reunion"
    },
    {
        "label": "Lyon, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Cayenne, France",
        "value": "America/Cayenne"
    },
    {
        "label": "Paris, France",
        "value": "Europe/Paris"
    },
    {
        "label": "Papeete, French Polynesia",
        "value": "Pacific/Tahiti"
    },
    {
        "label": "Ebebiyin, Gabon",
        "value": "Africa/Malabo"
    },
    {
        "label": "Tchibanga, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Mekambo, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Makokou, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Mitzik, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Bitam, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Lambarene, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Bifoum, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Ndende, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Mouila, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Omboue, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Moanda, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Okandja, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Koulamoutou, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Oyem, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Mayumba, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Gamba, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Franceville, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Libreville, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Port-Gentil, Gabon",
        "value": "Africa/Libreville"
    },
    {
        "label": "Kutaisi, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Tskhinvali, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Poti, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Rustavi, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Batumi, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Sukhumi, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Tbilisi, Georgia",
        "value": "Asia/Tbilisi"
    },
    {
        "label": "Mainz, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Schwerin, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Bielefeld, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Dortmund, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Duisburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Wuppertal, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Essen, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Karlsruhe, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Heidelberg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Kassel, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Oldenburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Emden, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Braunschweig, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Erfurt, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Coburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Augsburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Furth, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Chemnitz, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Bonn, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Münster, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Düsseldorf, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Ulm, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Mannheim, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Freiburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Giessen, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Wiesbaden, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Bremerhaven, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Osnabrück, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Hannover, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Gottingen, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Gera, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Jena, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Flensburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Lubeck, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Kiel, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Koblenz, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Saarbrucken, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Regensburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Rosenheim, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Hof, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Wurzburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Ingolstadt, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Cottbus, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Potsdam, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Magdeburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Leipzig, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Stralsund, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Rostock, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Stuttgart, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Bremen, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Nürnberg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Cologne, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Dresden, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Frankfurt, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Hamburg, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Munich, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Berlin, Germany",
        "value": "Europe/Berlin"
    },
    {
        "label": "Sunyani, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Tamale, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Yendi, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Bolgatanga, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Bawku, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Wa, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Obuasi, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Berekum, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Winneba, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Cape Coast, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Nkawkaw, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Koforidua, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Tema, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Ho, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Kumasi, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Sekondi, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Accra, Ghana",
        "value": "Africa/Accra"
    },
    {
        "label": "Gibraltar, Gibraltar",
        "value": "Europe/Gibraltar"
    },
    {
        "label": "Lamia, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Polygyros, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Komatini, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Piraiévs, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Volos, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Hania, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Kavala, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Alexandroupoli, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Kerkira, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Tripoli, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Sparti, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Agrinio, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Pirgos, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Larissa, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Ioanina, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Mitilini, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Hios, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Chalkida, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Sitia, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Katerini, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Seres, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Xanthi, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Ermoupoli, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Kos, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Rodos, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Patra, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Kalamata, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Iraklio, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Thessaloniki, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Athens, Greece",
        "value": "Europe/Athens"
    },
    {
        "label": "Qasigiannguit, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Kullorsuaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Tasiusaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Kulusuk, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Paamiut, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Ittoqqortoormiit, Greenland",
        "value": "America/Danmarkshavn"
    },
    {
        "label": "Timmiarmiut, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Qaqortoq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Kangerlussuaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Nord, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Qeqertasuaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Nuussuaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Ilulissat, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Tasiilaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Savissivik, Greenland",
        "value": "America/Thule"
    },
    {
        "label": "Kangersuatsiaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Uummannaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Narsarsuaq, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Sisimiut, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Upernavik, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Qaanaaq, Greenland",
        "value": "America/Thule"
    },
    {
        "label": "Nuuk, Greenland",
        "value": "America/Godthab"
    },
    {
        "label": "Saint George's, Grenada",
        "value": "America/Grenada"
    },
    {
        "label": "Agana, Guam",
        "value": "Pacific/Guam"
    },
    {
        "label": "Salama, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Retalhuleu, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "San Marcos, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Chimaltenango, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Antigua Guatemala, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Solola, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Totonicapan, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "El Progreso, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Cuilapa, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Chiquimula, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Jalapa, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Zacapa, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Santa Cruz Del Quiche, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "San Luis, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Coban, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Livingston, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Jutiapa, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Huehuetenango, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Flores, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "La Libertad, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "San Jose, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Escuintla, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Mazatenango, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Puerto Barrios, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Quetzaltenango, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Guatemala, Guatemala",
        "value": "America/Guatemala"
    },
    {
        "label": "Mali, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Tongue, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kouroussa, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Pita, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Dalaba, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Boffa, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Koundara, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Gaoual, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Telimele, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Forecariah, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Beyla, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Gueckedou, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Dinguiraye, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Dabola, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kerouane, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Siguiri, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Mamou, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kamsar, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Fria, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Macenta, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Yomou, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Faranah, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kissidougou, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Labe, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Boke, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kindia, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Kankan, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Nzerekore, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Conakry, Guinea",
        "value": "Africa/Conakry"
    },
    {
        "label": "Cacheu, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Farim, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Fulacunda, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Gabu, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Catio, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Bolama, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Bafata, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Bissau, Guinea Bissau",
        "value": "Africa/Bissau"
    },
    {
        "label": "Corriverton, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Ituni, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Lethem, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Kumaka, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Bartica, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Anna Regina, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Linden, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Mabaruma, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "New Amsterdam, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Georgetown, Guyana",
        "value": "America/Guyana"
    },
    {
        "label": "Jeremie, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Port-De-Paix, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Hinche, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Fort-Liberte, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Jacmel, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Les Cayes, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Gonaives, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Cap-Haitien, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Port-au-Prince, Haiti",
        "value": "America/Port-au-Prince"
    },
    {
        "label": "Yoro, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "La Esperanza, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "La Paz, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Santa Barbara, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Gracias, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Nueva Ocotepeque, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Yuscaran, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Roatan, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Nacaome, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Santa Rosa de Copan, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Trujillo, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Brus Laguna, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Puerto Lempira, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Juticalpa, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Comayagua, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Choluteca, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "La Ceiba, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "San Pedro Sula, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Tegucigalpa, Honduras",
        "value": "America/Tegucigalpa"
    },
    {
        "label": "Hong Kong, Hong Kong S.A.R.",
        "value": "Asia/Hong_Kong"
    },
    {
        "label": "Veszprem, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Zalaegerszeg, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Tatabanya, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Szekszard, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Salgotarjan, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Bekescsaba, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Eger, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Szombathely, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Kecskemet, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Szekesfehervar, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Nyiregyhaza, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Pecs, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Gyor, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Kaposvar, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Vac, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Miskolc, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Szeged, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Debrecen, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Szolnok, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Budapest, Hungary",
        "value": "Europe/Budapest"
    },
    {
        "label": "Borgarnes, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Egilsstaðir, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Sauðárkrókur, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Selfoss, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Hofn, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Ísafjörður, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Akureyi, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Keflavík, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Reykjavík, Iceland",
        "value": "Atlantic/Reykjavik"
    },
    {
        "label": "Panaji, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Simla, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gurgaon, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sonipat, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Rohtak, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hisar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhiwani, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ambala, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sopore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Silvassa, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kalyan, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhusawal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jorhat, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hoshiarpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ajmer, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hathras, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sitapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Pilibhit, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Budaun, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Firozabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mathura, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bulandshahr, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Muzaffarnagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gangtok, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Diu, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Pathankot, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sirsa, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Panipat, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Karnal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Baramula, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Proddatur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nandyal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hindupur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tirupati, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ongole, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Vizianagaram, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Rajahmundry, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Machilipatnam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Khammam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Chirala, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Karimnagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nizamabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kollam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Alappuzha, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Puri, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sambalpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Raurkela, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kavaratti, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mandya, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kolar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Shimoga, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Raichur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hospet, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bidar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sangli, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Parbhani, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Malegaon, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Port Blair, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tezpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Silchar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kohima, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Shillong, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Abohar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Patiala, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhilwara, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Pali, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tonk, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sikar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bikaner, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bharatpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Alwar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Fatehpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Faizabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bahraich, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mirzapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jhansi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Shahjahanpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Rampur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bareilly, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Etawah, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dehra Dun, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Haora, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Alipur Duar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Haldia, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhatpara, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Medinipur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Siliguri, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Purnia, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Muzaffarpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Aurangabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bilaspur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Burhanpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ujjain, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ratlam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Vellore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tiruvannamalai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Rajapalaiyam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Cuddalore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Karur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kanchipuram, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tirunelveli, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nagercoil, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Thanjavur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kumbakonam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Valparai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tiruppur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Daman, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Navsari, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhuj, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhavnagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gandhinagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Itanagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Aizawl, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Agartala, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kakinada, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Warangal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Brahmapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bijapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhiwandi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Latur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ahmednagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Chandrapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Amravati, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dhule, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dibrugarh, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Imphal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Udaipur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gorakhpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Barddhaman, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Krishnanagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gaya, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Porbandar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nellore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kurnool, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Guntur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tumkur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Davangere, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bellary, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Belgaum, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tuticorin, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dindigul, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Chandigarh, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jammu, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Sholapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Aurangabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nasik, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dispur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jullundur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Allahabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Moradabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ghaziabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Agra, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Aligarh, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Meerut, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Dhanbad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gwalior, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Vadodara, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Rajkot, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Faridabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Srinagar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Vijayawada, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Thiruvananthapuram, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kochi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Cuttack, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hubli, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mangalore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mysore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Gulbarga, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kolhapur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nanded, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Akola, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Guwahati, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ludhiana, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kota, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jodhpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Lucknow, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Saharanpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ranchi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhagalpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Raipur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jabalpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Indore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Pondicherry, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Salem, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Tiruchirappalli, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kozhikode, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhubaneshwar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jamshedpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Vishakhapatnam, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Amritsar, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Varanasi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Asansol, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhilai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bhopal, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Madurai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Coimbatore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Delhi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Hyderabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Pune, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Nagpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Jaipur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kanpur, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Patna, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Chennai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Ahmedabad, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Surat, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "New Delhi, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Bangalore, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Mumbai, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Kolkata, India",
        "value": "Asia/Kolkata"
    },
    {
        "label": "Binjai, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Padangsidempuan, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tarutung, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tebingtinggi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tidore, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Bukittinggi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Sawahlunto, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Padangpanjang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Amahai, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Mataram, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Praya, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Baubau, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Luwuk, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Poso, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Biak, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Timika, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Langsa, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Indramayu, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Sukabumi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Cilacap, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pati, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pakalongan, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tegal, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Salatiga, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Magelang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Serang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bekasi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Singkawang, Indonesia",
        "value": "Asia/Pontianak"
    },
    {
        "label": "Bandar Lampung, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Perabumulih, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Kuta, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Singaraja, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Sumenep, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Banyuwangi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tuban, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Probolinggo, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pasuruan, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Mojokerto, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Madiun, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Kediri, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Blitar, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Waingapu, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Maumere, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Ende, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Makale, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Palopo, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Watampone, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Pinrang, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Majene, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Tanjungpinang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Telukbutun, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Sungaipenuh, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Sampit, Indonesia",
        "value": "Asia/Pontianak"
    },
    {
        "label": "Kualakapuas, Indonesia",
        "value": "Asia/Pontianak"
    },
    {
        "label": "Palangkaraya, Indonesia",
        "value": "Asia/Pontianak"
    },
    {
        "label": "Bontang, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Denpasar, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Sorong, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Sibolga, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pematangsiantar, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pekanbaru, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Manado, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Yogyakarta, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Kendari, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Palu, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Nabire, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Merauke, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Lhokseumawe, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Samarinda, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Cirebon, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tasikmalaya, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bogor, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bengkulu, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pontianak, Indonesia",
        "value": "Asia/Pontianak"
    },
    {
        "label": "Kotabumi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Lahat, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Pangkalpinang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Jember, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Martapura, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Ruteng, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Jambi, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Manokwari, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Ternate, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Ambon, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Raba, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Jayapura, Indonesia",
        "value": "Asia/Jayapura"
    },
    {
        "label": "Banda Aceh, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Balikpapan, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Surakarta, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bandar Lampung, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tanjungpandan, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Malang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Kupang, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Parepare, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Gorontalo, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Padang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Tarakan, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Semarang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Palembang, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bandjarmasin, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Ujungpandang, Indonesia",
        "value": "Asia/Makassar"
    },
    {
        "label": "Medan, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Bandung, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Surabaya, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Jakarta, Indonesia",
        "value": "Asia/Jakarta"
    },
    {
        "label": "Yasuj, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Shar e Kord, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Marv Dasht, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Shahrud, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Varamin, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Masjed Soleyman, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Borujerd, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Malayer, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Zanjan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Urmia, Iran",
        "value": null
    },
    {
        "label": "Ahar, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Sanandaj, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Neyshabur, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Bojnurd, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Sirjan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Qomsheh, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Kashan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Khomeini Shahr, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Fasa, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Gonbad-e Kavus, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Gorgan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Amol, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Sari, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Semnan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Karaj, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Behbehan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Dezful, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Khorramabad, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Ilam, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Saveh, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Arak, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Mahabad, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Khvoy, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Maragheh, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Qasr-e Shirin, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Bijar, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Yazdan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Torbat-e Jam, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Quchan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Chabahar, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Kashmar, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Bam, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Kerman, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Bandar-e Bushehr, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Abadan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Ardabil, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Qom, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Qazvin, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Kermanshah, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Rasht, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Birjand, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Sabzewar, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Zabol, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Zahedan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Yazd, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Ahvaz, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Bandar-e-Abbas, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Hamadan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Tabriz, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Isfahan, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Shiraz, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Mashhad, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Tehran, Iran",
        "value": "Asia/Tehran"
    },
    {
        "label": "Dahuk, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Samarra, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Az Aubayr, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Ad Diwaniyah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Ash Shatrah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Mandali, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Ar Ramadi, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Al Musayyib, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Zakho, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Tall Afar, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Tikrit, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Karbala, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "As Samawah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "An Nasiriyah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Al Amarah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Al Kut, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "As Sulaymaniyah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Baqubah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Ar Rutbah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Al Fallujah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Al Hillah, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Irbil, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Kirkuk, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Mosul, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "An Najaf, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Basra, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Baghdad, Iraq",
        "value": "Asia/Baghdad"
    },
    {
        "label": "Ros Comain, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Muineachan, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Shannon, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Waterford, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Tralee, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Donegal, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Drogheda, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Dundalk, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Galway, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Kilkenny, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Killarney, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Sligo, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Cork, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Limerick, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Dublin, Ireland",
        "value": "Europe/Dublin"
    },
    {
        "label": "Douglas, Isle of Man",
        "value": "Europe/Isle_of_Man"
    },
    {
        "label": "Ramla, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Beer Sheva, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Haifa, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Nazareth, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Jerusalem, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Tel Aviv-Yafo, Israel",
        "value": "Asia/Jerusalem"
    },
    {
        "label": "Potenza, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Campobasso, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Aosta, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Modena, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Crotone, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Vibo Valentia, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Reggio di Calabria, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Caserta, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Barletta, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Ragusa, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Asti, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Novara, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Como, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Udine, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Treviso, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Parma, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Ravenna, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Ferrara, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Bologna, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Olbia, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Cagliari, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Pisa, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Livorno, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Siena, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Arezzo, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Catanzaro, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Salerno, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Benevento, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Bari, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Foggia, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Lecce, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Brindisi, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Taranto, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Messina, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Marsala, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Siracusa, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Pescara, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "L'Aquila, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Civitavecchia, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Ancona, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Perugia, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Bergamo, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Trieste, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Bolzano, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Trento, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Verona, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Sassari, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Turin, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Genoa, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Florence, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Catania, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Venice, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Palermo, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Naples, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Milan, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Rome, Italy",
        "value": "Europe/Rome"
    },
    {
        "label": "Touba, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Bouafle, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Divo, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Toumodi, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Aboisso, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Ferkessedougou, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Odienne, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Man, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Seguela, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Gagnoa, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Soubre, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "San-Pedro, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Sassandra, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Bondoukou, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Agboville, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Dimbokro, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Grand Bassam, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Dabou, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Guiglo, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Abengourou, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Korhogo, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Daloa, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Bouake, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Yamoussoukro, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Abidjan, Ivory Coast",
        "value": "Africa/Abidjan"
    },
    {
        "label": "Lucea, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Mandeville, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Black River, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Falmouth, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Savanna-la-Mar, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Port Antonio, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "St. Ann's Bay, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Port Maria, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Half Way Tree, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Port Morant, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "May Pen, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Spanish Town, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Montego Bay, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Kingston, Jamaica",
        "value": "America/Jamaica"
    },
    {
        "label": "Okayama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Shimonoseki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kanoya, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Takamatsu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tokushima, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Toyama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Takaoka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Otsu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Maebashi, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kawasaki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kawagoe, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Utsunomiya, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hachioji, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Koriyama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kure, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Matsue, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tottori, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Sasebo, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kitakyushu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kumamoto, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Oita, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Gifu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tsu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Matsumoto, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Shizuoka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hamamatsu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Obihiro, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tomakomai, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kitami, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Otaru, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Fukui, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Maizuru, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Wakayama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Mito, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kofu, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Iwaki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Nagaoka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Yamagata, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tsuruoka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kagoshima, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Matsuyama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kanazawa, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Muroran, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Asahikawa, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kobe, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Yokohama, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Akita, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Aomori, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hirosaki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hachinohe, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Fukushima, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Morioka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Niigata, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Fukuoka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Miyazaki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Naha, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kochi, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Nagoya, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Nagano, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kushiro, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hakodate, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Kyoto, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Sendai, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Sakata, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Nagasaki, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Hiroshima, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Sapporo, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Osaka, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Tokyo, Japan",
        "value": "Asia/Tokyo"
    },
    {
        "label": "Al Mafraq, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "At Tafilah, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Ma'an, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Irbid, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "As Salt, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Az Zarqa, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Al Aqabah, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Al Karak, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Amman, Jordan",
        "value": "Asia/Amman"
    },
    {
        "label": "Turgay, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Mangyshlak, Kazakhstan",
        "value": "Asia/Aqtau"
    },
    {
        "label": "Maqat, Kazakhstan",
        "value": "Asia/Atyrau"
    },
    {
        "label": "Bestobe, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Osakarovka, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Aqadyr, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Sharbaqty, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shemonaikha, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Serebryansk, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Boralday, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zharkent, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Esik, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Lenger, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Kentau, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zhosaly, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Oktyabrsk, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Algha, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Bayghanin, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Embi, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Zhetiqara, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Komsomolets, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Tobol, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Qusmuryn, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Shieli, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Makhambet, Kazakhstan",
        "value": "Asia/Atyrau"
    },
    {
        "label": "Chapaev, Kazakhstan",
        "value": "Asia/Oral"
    },
    {
        "label": "Zhanibek, Kazakhstan",
        "value": "Asia/Oral"
    },
    {
        "label": "Aqsay, Kazakhstan",
        "value": "Asia/Oral"
    },
    {
        "label": "Esil, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Derzhavinsk, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zhaltyr, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Makinsk, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Aqsu, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zholymbet, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Erymentau, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Saryshaghan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qarazhal, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Atasu, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Kishkenekol, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Tayynsha, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Bulaevo, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Ertis, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Kachiry, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zaysan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zyryanovsk, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Ridder, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shar, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Urzhar, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Sarqan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Ushtobe, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shonzhy, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qapshaghay, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Otar, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Fort Shevchenko, Kazakhstan",
        "value": "Asia/Aqtau"
    },
    {
        "label": "Zhangaozen, Kazakhstan",
        "value": "Asia/Aqtau"
    },
    {
        "label": "Arys, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Burylbaytal, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shu, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qulan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Oytal, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qaratau, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Khromtau, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Arqalyq, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Oostanay, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Baykonur, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Balyqshy, Kazakhstan",
        "value": "Asia/Atyrau"
    },
    {
        "label": "Atbasar, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Kokshetau, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Temirtau, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Zhezqazghan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qarqaraly, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Balqash, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Petropavlovsk, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Ayakoz, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Taldyqorghan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Turkistan, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shalqar, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Qazaly, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Aral, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Qulsary, Kazakhstan",
        "value": "Asia/Atyrau"
    },
    {
        "label": "Oral, Kazakhstan",
        "value": "Asia/Oral"
    },
    {
        "label": "Beyneu, Kazakhstan",
        "value": "Asia/Aqtau"
    },
    {
        "label": "Aktau, Kazakhstan",
        "value": "Asia/Aqtau"
    },
    {
        "label": "Aktobe, Kazakhstan",
        "value": "Asia/Aqtobe"
    },
    {
        "label": "Rudny, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Qyzylorda, Kazakhstan",
        "value": "Asia/Qyzylorda"
    },
    {
        "label": "Atyrau, Kazakhstan",
        "value": "Asia/Atyrau"
    },
    {
        "label": "Ekibastuz, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Pavlodar, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Semey, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Oskemen, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Shymkent, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Taraz, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Astana, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Qaraghandy, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Almaty, Kazakhstan",
        "value": "Asia/Almaty"
    },
    {
        "label": "Nyeri, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Mwingi, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Embu, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Machakos, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Nanyuki, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Maralal, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Konza, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Lodwar, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Eldama Ravine, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Sotik, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Namanga, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Naivasha, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kericho, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kitale, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Bungoma, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kakamega, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Wajir, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Garissa, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Witu, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Tsavo, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Voi, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kilifi, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Thika, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kendu Bay, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Karungu, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kisii, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Marsabit, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Moyale, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Nakuru, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Lamu, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Malindi, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Kisumu, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Meru, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Eldoret, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Mombasa, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Nairobi, Kenya",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Tarawa, Kiribati",
        "value": "Pacific/Tarawa"
    },
    {
        "label": "Prizren, Kosovo",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Pec, Kosovo",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Pristina, Kosovo",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Hawalli, Kuwait",
        "value": "Asia/Kuwait"
    },
    {
        "label": "Al Ahmadi, Kuwait",
        "value": "Asia/Kuwait"
    },
    {
        "label": "Al Jahra, Kuwait",
        "value": "Asia/Kuwait"
    },
    {
        "label": "Kuwait, Kuwait",
        "value": "Asia/Kuwait"
    },
    {
        "label": "Tokmak, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Kara Balta, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Cholpon Ata, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Naryn, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Kok Yangak, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Balykchy, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "At Bashy, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Jalal Abad, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Toktogul, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Tash Komur, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Talas, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Osh, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Karakol, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Bishkek, Kyrgyzstan",
        "value": "Asia/Bishkek"
    },
    {
        "label": "Ban Houayxay, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Louang Namtha, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Champasak, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Saravan, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Xam Nua, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Phongsali, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Attapu, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Xaignabouri, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Pakxe, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Xiangkhoang, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Louangphrabang, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Thakhek, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Savannakhet, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Vientiane, Laos",
        "value": "Asia/Vientiane"
    },
    {
        "label": "Rezekne, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "Ventspils, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "Jelgava, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "Liepaga, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "Daugavpils, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "Riga, Latvia",
        "value": "Europe/Riga"
    },
    {
        "label": "B'abda, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Nabatiye et Tahta, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Saida, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Zahle, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Trablous, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Beirut, Lebanon",
        "value": "Asia/Beirut"
    },
    {
        "label": "Teyateyaneng, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Mohales Hoek, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Moyeni, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Hlotse, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Butha-Buthe, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Mokhotlong, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Mafetang, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Maseru, Lesotho",
        "value": "Africa/Maseru"
    },
    {
        "label": "Barclayville, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Voinjama, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Bensonville, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Kakata, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Sanniquellie, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Rivercess, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Harper, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Gbarnga, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Zwedru, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Greenville, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Buchanan, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Robertsport, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Monrovia, Liberia",
        "value": "Africa/Monrovia"
    },
    {
        "label": "Dirj, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Nalut, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Zillah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Al Khums, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Tajarhi, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Umm al Abid, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Az Zawiyah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Gharyan, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Mizdah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Bani Walid, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Al Marj, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Al Bayda, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Shahhat, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "El Agheila, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Maradah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Qaminis, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "As Sidr, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Al Jaghbub, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Ghadamis, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Hun, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Birak, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Ghat, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Marzuq, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Ajdabiya, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Awjilah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Surt, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Darnah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Tubruq, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Al Jawf, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Tmassah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Misratah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Zuwarah, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Sabha, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Banghazi, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Tripoli, Libya",
        "value": "Africa/Tripoli"
    },
    {
        "label": "Vaduz, Liechtenstein",
        "value": "Europe/Vaduz"
    },
    {
        "label": "Panevežys, Lithuania",
        "value": "Europe/Vilnius"
    },
    {
        "label": "Siauliai, Lithuania",
        "value": "Europe/Vilnius"
    },
    {
        "label": "Klaipeda, Lithuania",
        "value": "Europe/Vilnius"
    },
    {
        "label": "Kaunas, Lithuania",
        "value": "Europe/Vilnius"
    },
    {
        "label": "Vilnius, Lithuania",
        "value": "Europe/Vilnius"
    },
    {
        "label": "Diekirch, Luxembourg",
        "value": "Europe/Luxembourg"
    },
    {
        "label": "Grevenmacher, Luxembourg",
        "value": "Europe/Luxembourg"
    },
    {
        "label": "Luxembourg, Luxembourg",
        "value": "Europe/Luxembourg"
    },
    {
        "label": "Macau, Macau S.A.R",
        "value": "Asia/Macau"
    },
    {
        "label": "Tetovo, Macedonia",
        "value": "Europe/Skopje"
    },
    {
        "label": "Bitola, Macedonia",
        "value": "Europe/Skopje"
    },
    {
        "label": "Skopje, Macedonia",
        "value": "Europe/Skopje"
    },
    {
        "label": "Sambava, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Ambanja, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Ihosy, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Mandritsara, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Besalampy, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Marovoay, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Antsohihy, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Ambatondrazaka, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Bekiy, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Manja, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Miandrivazo, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Antsirabe, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Antalaha, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Andoany, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Farafangana, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Mananjary, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Maintirano, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Toamasina, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Maroantsetra, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Tolanaro, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Morombe, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Androka, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Morondava, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Antsiranana, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Fianarantsoa, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Mahajanga, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Toliara, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Antananarivo, Madagascar",
        "value": "Indian/Antananarivo"
    },
    {
        "label": "Mzimba, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Machinga, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Dedza, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Mchinji, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Ntcheu, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Chiradzulu, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Nsanje, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Mwanza, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Mulanje, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Karonga, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Chitipa, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Nkhata Bay, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Nkhotakota, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Mangochi, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Salima, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Chiromo, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Zomba, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Mzuzu, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Blantyre, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Lilongwe, Malawi",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Kangar, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kuala Lipis, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Shah Alam, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Teluk Intan, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Butterworth, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Sungai Petani, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Alor Setar, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Muar, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Batu Pahat, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Keluang, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Seremban, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Raub, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Chukai, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kuala Terengganu, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Lahad Datu, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Bintulu, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Miri, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Johor Bahru, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kelang, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Taiping, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Ipoh, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kota Baharu, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Malacca, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kuantan, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Tawau, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Sandakan, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Kota Kinabalu, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Sibu, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "George Town, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kuching, Malaysia",
        "value": "Asia/Kuching"
    },
    {
        "label": "Putrajaya, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Kuala Lumpur, Malaysia",
        "value": "Asia/Kuala_Lumpur"
    },
    {
        "label": "Male, Maldives",
        "value": "Indian/Maldives"
    },
    {
        "label": "Goundam, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Aguelhok, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Bourem, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Kati, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Banamba, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Kangaba, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Nioro du Sahel, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Bafoulabe, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Satadougou, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Yelimane, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Kita, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Koutiala, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Sikasso, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Bougouni, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Markala, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Sokolo, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "San, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Taoudenni, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Araouane, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Tessalit, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Menaka, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Nara, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Koulikoro, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Mopti, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Gao, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Kayes, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Segou, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Timbuktu, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Bamako, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Djenne, Mali",
        "value": "Africa/Bamako"
    },
    {
        "label": "Valletta, Malta",
        "value": "Europe/Malta"
    },
    {
        "label": "Majuro, Marshall Islands",
        "value": "Pacific/Majuro"
    },
    {
        "label": "Fderik, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Aleg, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Akjoujt, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Zouirat, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Chegga, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Magta Lajar, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Bogue, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Boutilimit, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Selibaby, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Timbedra, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Nema, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Saint-Louis, Mauritania",
        "value": "Africa/Dakar"
    },
    {
        "label": "Tidjikdja, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Bir Mogrein, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Rosso, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Kiffa, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Nouadhibou, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Ayoun el Atrous, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Nouakchott, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Atar, Mauritania",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Curepipe, Mauritius",
        "value": "Indian/Mauritius"
    },
    {
        "label": "Port Louis, Mauritius",
        "value": "Indian/Mauritius"
    },
    {
        "label": "Vicente Guerrero, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "Loreto, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Ciudad Constitucion, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Allende, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Nueva Rosita, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Hidalgo del Parral, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Ascension, Mexico",
        "value": "America/Ojinaga"
    },
    {
        "label": "Gomez Palacio, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Canatlan, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Villa Union, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Altata, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Esperanza, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Magdalena, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Nacozari Viejo, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Villanueva, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Montemorelos, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Sabinas Hidalgo, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Cardenas, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ciudad Valles, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Rio Verde, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ciudad Mante, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Reynosa, Mexico",
        "value": "America/Matamoros"
    },
    {
        "label": "Ciudad Madero, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Autlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ciudad Hidalgo, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Apatzingan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Santiago Ixcuintla, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Juchitan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Miahuatlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Atlixco, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Acatlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Paraiso, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Balancan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tlaxcala, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Irapuato, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Celaya, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Chilpancingo, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Iguala, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tecpan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Atoyac, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Nezahualcoyotl, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "San Juan del Rio, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Jaltipan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Orizaba, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Xalapa, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Nautla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "San Cristobal de Las Casas, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Escuintla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Motul, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Tekax, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Peto, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Halacho, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "San Quintin, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "Punta Prieta, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "San Felipe, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "Santa Rosalia, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Guerrero Negro, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Piedras Negras, Mexico",
        "value": "America/Matamoros"
    },
    {
        "label": "San Pedro de las Colonias, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Sierra Mojada, Mexico",
        "value": "America/Matamoros"
    },
    {
        "label": "Parras, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Cuauhtemoc, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Nuevo Casas Grandes, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Ojinaga, Mexico",
        "value": "America/Ojinaga"
    },
    {
        "label": "Villa Ahumada, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Santa Barbara, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Ciudad Camargo, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Cuencame, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Papasquiaro, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Escuinapa, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Guamuchil, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Guasave, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "El Fuerte, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Eldorado, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "La Cruz, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Agua Prieta, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Ciudad Obregon, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Navajoa, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Caborca, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Mazatlán, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Cananea, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Huatabampo, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Zacatecas, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Juan Aldama, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Valparaiso, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Fresnillo, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Linares, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Matehuala, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tamuin, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tamazunchale, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tula, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Aldama, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "San Fernando, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Tecoman, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Puerto Vallarta, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "La Barca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ciudad Guzman, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Lagos de Moreno, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Morelia, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Lazaro Cardenas, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Zamora, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Coalcoman, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Uruapan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tuxpan, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Tepic, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Compostela, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Tecuala, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Ciudad del Carmen, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Champoton, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Salina Cruz, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Puerto Escondido, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Pochutla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Mitla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tlaxiaco, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Huajuapan de Leon, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tehuacan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Teziutlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Frontera, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tenosique, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Salamanca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Guanajuato, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Taxco, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ayutla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Ciudad Altamirano, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Petatlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Pachuca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Toluca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Zumpango, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Minatitlan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Coatzacoalcos, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Poza Rica de Hidalgo, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Cordoba, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Santiago Tuxtla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tuxpam, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Panuco, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Pijijiapan, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Isla Mujeres, Mexico",
        "value": "America/Cancun"
    },
    {
        "label": "Felipe Carrillo Puerto, Mexico",
        "value": "America/Cancun"
    },
    {
        "label": "Tizimin, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Valladolid, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Izamal, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Ticul, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Ensenada, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "Saltillo, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Ciudad Juárez, Mexico",
        "value": "America/Ojinaga"
    },
    {
        "label": "Delicias, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Durango, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Los Mochis, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Ciudad Victoria, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Aguascalientes, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Manzanillo, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tehuantepec, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Villahermosa, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Cuernavaca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Queretaro, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tapachula, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Chetumal, Mexico",
        "value": "America/Cancun"
    },
    {
        "label": "Progreso, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Cabo San Lucas, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Monclova, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Ometepec, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Cozumel, Mexico",
        "value": "America/Cancun"
    },
    {
        "label": "Mexicali, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "La Paz, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Torreon, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Culiacan, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Nogales, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Hermosillo, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "Guaymas, Mexico",
        "value": "America/Hermosillo"
    },
    {
        "label": "San Luis Potosi, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Matamoros, Mexico",
        "value": "America/Matamoros"
    },
    {
        "label": "Nuevo Laredo, Mexico",
        "value": "America/Matamoros"
    },
    {
        "label": "Colima, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Campeche, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Oaxaca, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Leon, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tijuana, Mexico",
        "value": "America/Tijuana"
    },
    {
        "label": "Chihuahua, Mexico",
        "value": "America/Chihuahua"
    },
    {
        "label": "Mazatlan, Mexico",
        "value": "America/Mazatlan"
    },
    {
        "label": "Tampico, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Acapulco, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Veracruz, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Tuxtla Gutierrez, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Cancun, Mexico",
        "value": "America/Cancun"
    },
    {
        "label": "Merida, Mexico",
        "value": "America/Merida"
    },
    {
        "label": "Guadalajara, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Puebla, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Monterrey, Mexico",
        "value": "America/Monterrey"
    },
    {
        "label": "Mexico City, Mexico",
        "value": "America/Mexico_City"
    },
    {
        "label": "Dubasari, Moldova",
        "value": "Europe/Chisinau"
    },
    {
        "label": "Balti, Moldova",
        "value": "Europe/Chisinau"
    },
    {
        "label": "Cahul, Moldova",
        "value": "Europe/Chisinau"
    },
    {
        "label": "Tiraspol, Moldova",
        "value": "Europe/Chisinau"
    },
    {
        "label": "Chisinau, Moldova",
        "value": "Europe/Chisinau"
    },
    {
        "label": "Monaco, Monaco",
        "value": "Europe/Paris"
    },
    {
        "label": "Suchboatar, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Dzuunmod, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Tsetserleg, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Olgiy, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Ulaan-Uul, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Hodrogo, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Buyant-Uhaa, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Ondorhaan, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Bayankhongor, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Uliastay, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Altay, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Moron, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Ulaangom, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Bulgan, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Mandalgovi, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Darhan, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Dzuunharaa, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Arvayheer, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Baruun Urt, Mongolia",
        "value": "Asia/Choibalsan"
    },
    {
        "label": "Dalandzadgad, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Dund-Us, Mongolia",
        "value": "Asia/Hovd"
    },
    {
        "label": "Choybalsan, Mongolia",
        "value": "Asia/Choibalsan"
    },
    {
        "label": "Erdenet, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Ulaanbaatar, Mongolia",
        "value": "Asia/Ulaanbaatar"
    },
    {
        "label": "Podgorica, Montenegro",
        "value": "Europe/Podgorica"
    },
    {
        "label": "Ksar El Kebir, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Larache, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Taza, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Ouezzane, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Kenitra, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Settat, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Er Rachidia, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Meknes, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Tiznit, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "El Jadida, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Dawra, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Lemsid, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Tan Tan, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Bir Anzarane, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Tangier, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Agadir, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Goulimine, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Smara, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Ad Dakhla, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Oujda, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Safi, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Laayoune, Morocco",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Fez, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Rabat, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Marrakesh, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Casablanca, Morocco",
        "value": "Africa/Casablanca"
    },
    {
        "label": "Moatize, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Luangwa, Mozambique",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Manica, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Espungabera, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Montepuez, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Mocimboa, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Marrupa, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Cuamba, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Ligonha, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Macia, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Massangena, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Mapai, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Dondo, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Chiramba, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Mocuba, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Nicuadala, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Maxixe, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Panda, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Quissico, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Vilanculos, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Matola, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Chimoio, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Lichinga, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Angoche, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Mocambique, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Inhambane, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Tete, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Pemba, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Nampula, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Xai-Xai, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Quelimane, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Nacala, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Beira, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Maputo, Mozambique",
        "value": "Africa/Maputo"
    },
    {
        "label": "Loikaw, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Pa-an, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Hakha, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Taunggyi, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Sagaing, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Myingyan, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Letpadan, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Taungoo, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Thongwa, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Mudon, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Ye, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Mawlamyine, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Kyaukphyu, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Wakema, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Labutta, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Phyarpon, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Yandoon, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Hinthada, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Pathein, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Allanmyo, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Yaynangyoung, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Chauk, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Pakokku, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Namtu, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Dawei, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Shwebo, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Bago, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Pyu, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Pyay, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Magway, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Myitkyina, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Monywa, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Myeik, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Mandalay, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Sittwe, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Naypyidaw, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Rangoon, Myanmar",
        "value": "Asia/Rangoon"
    },
    {
        "label": "Omaruru, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Karibib, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Otavi, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Gobabis, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Karasburg, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Bethanie, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Oranjemund, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Mariental, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Rehoboth, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Outjo, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Opuwo, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Usakos, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Okahandja, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Otjiwarongo, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Oshikango, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Cuangar, Namibia",
        "value": "Africa/Luanda"
    },
    {
        "label": "Katima Mulilo, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Keetmanshoop, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Maltahöhe, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Swakopmund, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Ongwediva, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Rundu, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Tsumeb, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Lüderitz, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Walvis Bay, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Windhoek, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Grootfontein, Namibia",
        "value": "Africa/Windhoek"
    },
    {
        "label": "Salyan, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Baglung, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Jumla, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Bhairawa, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Dandeldhura, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Dhangarhi, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Ramechhap, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Bhimphedi, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Rajbiraj, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Ilam, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Lalitpur, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Hetauda, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Nepalganj, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Birganj, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Biratnagar, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Pokhara, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Kathmandu, Nepal",
        "value": "Asia/Kathmandu"
    },
    {
        "label": "Assen, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Arnhem, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Maastricht, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Zwolle, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Middelburg, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "'s-Hertogenbosch, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Eindhoven, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Leeuwarden, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Groningen, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Utrecht, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Haarlem, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Rotterdam, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "The Hague, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Amsterdam, Netherlands",
        "value": "Europe/Amsterdam"
    },
    {
        "label": "Noumea, New Caledonia",
        "value": "Pacific/Noumea"
    },
    {
        "label": "Greymouth, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Upper Hutt, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Masterton, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Levin, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Waitakere, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Takapuna, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Whakatane, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Ashburton, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Kaiapoi, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "New Plymouth, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Westport, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Hokitika, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Oamaru, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Palmerston North, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Wanganui, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Hastings, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Gisborne, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Rotorua, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Taupo, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Tauranga, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Timaru, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Nelson, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Whangarei, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Queenstown, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Invercargill, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Napier, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Manukau, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Hamilton, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Blenheim, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Dunedin, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Wellington, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Christchurch, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Auckland, New Zealand",
        "value": "Pacific/Auckland"
    },
    {
        "label": "Somoto, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Ocotal, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "San Carlos, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Jinotepe, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Jinotega, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Masaya, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "San Juan del Sur, Nicaragua",
        "value": null
    },
    {
        "label": "Esteli, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Boaco, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Juigalpa, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Rivas, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "San Juan de Nicaragua, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Granada, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Chinandega, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Matagalpa, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Puerto Cabezas, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Leon, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Bluefields, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Managua, Nicaragua",
        "value": "America/Managua"
    },
    {
        "label": "Goure, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Gaya, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Tillaberi, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Ayorou, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Birni Nkonni, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Madaoua, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Diffa, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Nguigmi, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Dosso, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Arlit, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Djado, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Maradi, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Tahoua, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Zinder, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Niamey, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Agadez, Niger",
        "value": "Africa/Niamey"
    },
    {
        "label": "Umuahia, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Uyo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Owerri, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Dutse, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Damaturu, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Iwo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Iseyin, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Biu, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Bama, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Aba, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Opobo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Orlu, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Oturkpo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Calabar, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Wukari, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Jalingo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Kontagora, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Bida, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Abeokuta, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ijebu Ode, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Akure, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ikare, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Owo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ondo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ado Ekiti, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ife, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Oshogbo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Oyo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Awka, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Onitsha, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Azare, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Bauchi, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Gombe, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Kumo, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Sapele, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Nsukka, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Lokoja, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Idah, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Lafia, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Keffi, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Funtua, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Katsina, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Gusau, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Nguru, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Gashua, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Potiskum, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Birnin Kebbi, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Koko, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Mubi, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Numan, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ilorin, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Minna, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Zaria, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Jos, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Yola, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Benin City, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Maiduguri, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Port Harcourt, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Makurdi, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ibadan, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Ogbomosho, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Warri, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Kaduna, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Enugu, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Sokoto, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Abuja, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Kano, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Lagos, Nigeria",
        "value": "Africa/Lagos"
    },
    {
        "label": "Sariwon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Sin-Ni, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Changyon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Anbyon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Munchon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kaesong, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Chosan, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Manpo, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Sunchon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kimhyonggwon, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Pyongsan, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Ongjin, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Haeju, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kilchu, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Musan, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Sonbong, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kanggye, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Hungnam, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Taedong, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Chongju, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Hyeson, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Nampo, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Chongjin, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kimchaek, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Hamhung, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Wonsan, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Sinuiju, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Pyongyang, North Korea",
        "value": "Asia/Pyongyang"
    },
    {
        "label": "Kyrenia, Northern Cyprus",
        "value": "Asia/Famagusta"
    },
    {
        "label": "Ammochostos, Northern Cyprus",
        "value": "Asia/Famagusta"
    },
    {
        "label": "Capitol Hill, Northern Mariana Islands",
        "value": "Pacific/Saipan"
    },
    {
        "label": "Arendal, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Vossavangen, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Leikanger, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Bærum, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Hamar, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Tønsberg, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Finnsnes, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Gjøvik, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Rørvik, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Harstad, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Ålesund, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Sandnes, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Drammen, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Moss, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Steinkjer, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Svolvær, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Mo i Rana, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Narvik, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Bodø, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Haugesund, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Stavanger, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Skien, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Namsos, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Alta, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Vadsø, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Molde, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Lillehammer, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Kirkenes, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Kristiansand, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Hammerfest, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Tromsø, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Trondheim, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Bergen, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Oslo, Norway",
        "value": "Europe/Oslo"
    },
    {
        "label": "Alayat Samail, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Dawwah, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Mirbat, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Ibri, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Salalah, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Suhar, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "As Sib, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Nizwa, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Sur, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Muscat, Oman",
        "value": "Asia/Muscat"
    },
    {
        "label": "Parachinar, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sialkote, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sheikhu Pura, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Gujrat, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sahiwal, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Chiniot, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Rahim Yar Khan, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Mansehra, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Kohat, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Abbottabad, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Mardan, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Gwadar, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Zhob, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Gilgit, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Kasur, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Kundian, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Okara, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Jhang, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sargodha, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Dera Ghazi Khan, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sadiqabad, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Nawabshah, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Bannu, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Dera Ismail Khan, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Chaman, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Turbat, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Faisalabad, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Rawalpindi, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Bahawalpur, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Mirput Khas, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Sukkur, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Saidu, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Gujranwala, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Quetta, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Larkana, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Islamabad, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Multan, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Hyderabad, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Peshawar, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Lahore, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Karachi, Pakistan",
        "value": "Asia/Karachi"
    },
    {
        "label": "Koror, Palau",
        "value": "Pacific/Palau"
    },
    {
        "label": "Melekeok, Palau",
        "value": "Pacific/Palau"
    },
    {
        "label": "Ramallah, Palestine",
        "value": "Asia/Hebron"
    },
    {
        "label": "Al Khalil, Palestine",
        "value": "Asia/Hebron"
    },
    {
        "label": "Nablus, Palestine",
        "value": "Asia/Hebron"
    },
    {
        "label": "Gaza, Palestine",
        "value": "Asia/Gaza"
    },
    {
        "label": "El Porvenir, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Penonome, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Chitre, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Jaque, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Bocas del Toro, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Almirante, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Las Tablas, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Santiago, Panama",
        "value": "America/Panama"
    },
    {
        "label": "La Palma, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Colon, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Balboa, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Puerto Armuelles, Panama",
        "value": "America/Panama"
    },
    {
        "label": "David, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Panama City, Panama",
        "value": "America/Panama"
    },
    {
        "label": "Wabag, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Vanimo, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Kundiawa, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Kerema, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Arawa, Papua New Guinea",
        "value": "Pacific/Bougainville"
    },
    {
        "label": "Lorengau, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Kimbe, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Daru, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Sohano, Papua New Guinea",
        "value": "Pacific/Bougainville"
    },
    {
        "label": "Kieta, Papua New Guinea",
        "value": "Pacific/Bougainville"
    },
    {
        "label": "Mendi, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Abau, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Alotau, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Popondetta, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Hoskins, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Wewak, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Madang, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Kavieng, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Goroka, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Mt. Hagen, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Rabaul, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Lae, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Port Moresby, Papua New Guinea",
        "value": "Pacific/Port_Moresby"
    },
    {
        "label": "Mariscal Estigarribia, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Caacupe, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "General Eugenio Alejandrino Garay, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Arroyos y Esteros, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Villa Hayes, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Fortin Falcon, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Puerto Pinasco, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Pozo Colorado, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "San Pedro, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "San Lorenzo, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ypacarai, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "San Juan Bautista, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Paraguari, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Nacunday, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Coronel Oviedo, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Caazapa, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ype Jhu, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Encarnacion, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Coronel Bogado, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Fuerte Olimpo, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Capitan Pablo Lagerenza, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "La Victoria, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Horqueta, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Belen, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Rosario, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ita, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Pilar, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Pedro Juan Caballero, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Bella Vista, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Abai, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ygatimi, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Hohenau, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Concepcion, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Villarrica, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Filadelfia, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ciudad del Este, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Asuncion, Paraguay",
        "value": "America/Asuncion"
    },
    {
        "label": "Ferrenafe, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Motupe, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Mollendo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Urubamba, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Santo Tomas, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Putina, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Casma, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tournavista, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huamachuco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Otuzco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Lamas, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Nauta, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Puquio, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chosica, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Satipo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tarma, Peru",
        "value": "America/Lima"
    },
    {
        "label": "La Oroya, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huaura, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huacho, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Pimentel, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Olmos, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Sechura, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chulucanas, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Sullana, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Abancay, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Camana, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Sicuani, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Puno, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Ayaviri, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Ilave, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Desaguadero, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huarmey, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Cajabamba, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Jaen, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chota, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tingo Maria, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Moyobamba, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Juanjui, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tocache, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Sechura, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chachapoyas, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Caballococha, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Puca Urco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Andoas, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Soldado Bartra, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Nuevo Rocafuerte, Peru",
        "value": "America/Guayaquil"
    },
    {
        "label": "Requena, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huanta, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Coracora, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chincha Alta, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Santiago, Peru",
        "value": "America/Lima"
    },
    {
        "label": "San Ramon, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Junin, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Jauja, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Pativilca, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chancay, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chilca, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chiclayo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Juliaca, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Cerro de Pasco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tarapoto, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Ayacucho, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Callao, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Paita, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Talara, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tumbes, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Puerto Maldonado, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Ilo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Moquegua, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huaraz, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Cajamarca, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huanuco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Pacasmayo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Salaverry, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Gueppi, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Contamana, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huancavelica, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Pisco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Nasca, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Piura, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Arequipa, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Chimbote, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Pucallpa, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Iquitos, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Huancayo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Cusco, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Tacna, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Trujillo, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Ica, Peru",
        "value": "America/Lima"
    },
    {
        "label": "Lima, Peru",
        "value": "America/Lima"
    },
    {
        "label": "San Carlos, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Cadiz, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Pagadian, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Ozamis, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Tarlac, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Cabanatuan, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Olongapo, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Dagupan, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "San Pablo, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Quezon City, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Pasay City, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Iligan, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Ormac, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Tacloban, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Butuan, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Tagum, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Surigao, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Gingoog, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Legazpi, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Tuguegarao, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Vigan, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Bacolod, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Roxas, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Puerto Princesa, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Naga, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Angeles, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Batangas, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Cotabato, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Calbayog, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Cagayan de Oro, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Zamboanga, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Laoag, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Baguio City, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "General Santos, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Cebu, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Iloilo, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Davao, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Manila, Philippines",
        "value": "Asia/Manila"
    },
    {
        "label": "Olsztyn, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Elblag, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Inowroclaw, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Bytom, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Opole, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Koszalin, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Elk, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Gdynia, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Wroclaw, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Szczecin, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Zielona Gora, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Poznan, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Grudziadz, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Bydgoszcz, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Katowice, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Gliwice, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Kielce, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Bialystok, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Lublin, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Rzeszow, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Lódz, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Gdansk, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Kraków, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Warsaw, Poland",
        "value": "Europe/Warsaw"
    },
    {
        "label": "Aveiro, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Leiria, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Viana Do Castelo, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Beja, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Evora, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Portalegre, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Santarem, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Braganca, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Castelo Branco, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Guarda, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Viseu, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Vila Real, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Braga, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Covilha, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Horta, Portugal",
        "value": "Atlantic/Azores"
    },
    {
        "label": "Angra do Heroismo, Portugal",
        "value": "Atlantic/Azores"
    },
    {
        "label": "Portimao, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Faro, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Coimbra, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Setubal, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Porto, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Funchal, Portugal",
        "value": "Atlantic/Madeira"
    },
    {
        "label": "Ponta Delgada, Portugal",
        "value": "Atlantic/Azores"
    },
    {
        "label": "Lisbon, Portugal",
        "value": "Europe/Lisbon"
    },
    {
        "label": "Ponce, Puerto Rico",
        "value": "America/Puerto_Rico"
    },
    {
        "label": "Mayaguez, Puerto Rico",
        "value": "America/Puerto_Rico"
    },
    {
        "label": "Arecibo, Puerto Rico",
        "value": "America/Puerto_Rico"
    },
    {
        "label": "San Juan, Puerto Rico",
        "value": "America/Puerto_Rico"
    },
    {
        "label": "Doha, Qatar",
        "value": "Asia/Qatar"
    },
    {
        "label": "Targu Jiu, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Slatina, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Alexandria, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Targoviste, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Giurgiu, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Slobozia, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Alba Lulia, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Bistrita, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Deva, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Zalau, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Satu Mare, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Rimnicu Vilcea, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Sfintu-Gheorghe, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Miercurea Cuic, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Piatra-Neamt, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Braila, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Vaslui, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Drobeta-Turnu Severin, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Tulcea, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Arad, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Oradea, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Sibiu, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Suceava, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Buzau, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Galati, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Focsani, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Craiova, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Calarasi, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Resita, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Timisoara, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Botosani, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Baia Mare, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Tirgu Mures, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Pitesti, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Brasov, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Ploiesti, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Bacau, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Cluj-Napoca, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Constanta, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Iasi, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Bucharest, Romania",
        "value": "Europe/Bucharest"
    },
    {
        "label": "Nazran, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ust' Ordynskiy, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Maykop, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Mozdok, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Georgievsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Pyatigorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kislovodsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nevinnomyssk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Enurmino, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Lavrentiya, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Zvezdnyy, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Mikhalkino, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Chernyakhovsk, Russia",
        "value": "Europe/Kaliningrad"
    },
    {
        "label": "Severomorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Apatity, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Polyarnyy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Slantsy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kolpino, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novozybkov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Dyatkovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Shuya, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kineshma, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Balakhna, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Arzamas, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rzhev, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vyshnniy Volochek, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Uglich, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yelets, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Orekhovo-Zuevo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Klin, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sergiyev Posad, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kolomna, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bataysk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Taganrog, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novocherkassk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kamensk Shakhtinskiy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novoshakhtinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Aleksin, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novomoskovsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Shchekino, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nikolayevsk, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Shebekino, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Gubkin, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Apsheronsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kropotkin, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ruzayevka, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kirsanov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Michurinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Borisoglebsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Oktyabrskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Plast, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Bakal, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Verkhniy Ufaley, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Severnyy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kirovo-Chepetsk, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Krasnoturinsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Asbest, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Alapayevsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Krasnouralsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Severouralsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Novotroitsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Buguruslan, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Chapayevsk, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Syzran, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Novokuybishevsk, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Naberezhnyye Chelny, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Zelenodolsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Leninogorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bugulma, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nefteyugansk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Leninsk Kuznetsky, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Anzhero Sudzhensk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Kiselevsk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Mundybash, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Chernogorsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Abaza, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Iskitim, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Toguchin, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Kupina, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Zaozernyy, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Bogotol, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Shilka, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Sherlovaya Gora, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Petrovsk Zabaykalskiy, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Arsenyev, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Partizansk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Dalnerechensk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Zemlya Bunge, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Khorgo, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Put Lenina, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Obluchye, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Vanino, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Omchak, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Uglegorsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Kholmsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Solikamsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kizel, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Pakhachi, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Oymyakon, Russia",
        "value": null
    },
    {
        "label": "Timiryazevskiy, Russia",
        "value": "Asia/Tomsk"
    },
    {
        "label": "Asino, Russia",
        "value": "Asia/Tomsk"
    },
    {
        "label": "Strezhevoy, Russia",
        "value": "Asia/Tomsk"
    },
    {
        "label": "Cherkessk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vladikavkaz, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Blagodarnyy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Zelenokumsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Mukhomornoye, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Beringovskiy, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Bilibino, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Mys Shmidta, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Egvekinot, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Sovetsk, Russia",
        "value": "Europe/Kaliningrad"
    },
    {
        "label": "Nikel, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Monchegorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kirovsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Borovichi, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Staraya Russa, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Volkhov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tikhvin, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Svetogorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Gatchina, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Luga, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Klintsy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Roslavl, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Safonovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vyazma, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Segezha, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vichuga, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sharya, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Buy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Dzerzhinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vyska, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kimry, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bezhetsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nelidovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bologoye, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Torzhok, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sokol, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Cherepovets, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rybinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rostov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kaluga, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kirov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Obninsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Lgov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Zheleznogorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Gryazi, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yegoryevsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Podolsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Solnechnogorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Noginsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Serpukhov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Livny, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Mtsensk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Salsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Belaya Kalitva, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Shakhty, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Millerovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yefremov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bogoroditsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kamyshin, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Pallasovka, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Frolovo, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Volzhskiy, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Mikhaylovka, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Uryupinsk, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Starsy Oskol, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Alekseyevka, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Valuyki, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tuapse, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Gelendzhik, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Labinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Armavir, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Timashevsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tikhoretsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yeysk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Saransk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kamenka, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kuznetsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Serdobsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kasimov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sasovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kotovsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Morshansk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kovrov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Murom, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rayevskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Sibay, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kumertau, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Salavat, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Belebey, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Tuymazy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Neftekamsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Troitsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Yemanzhelinsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kartaly, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Asha, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Miass, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kyshtym, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kurtamysh, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Shadrinsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Varnek, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bugrino, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yamburg, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nakhodka, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Sosnogorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sovetsk, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Slobodskoy, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Kirs, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Omutninsk, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Kotelnich, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Yoshkar Ola, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kamensk Uralskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Polevskoy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Tavda, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Artemovskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nevyansk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Verkhnyaya Salda, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nizhnyaya Tura, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Karpinsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Ivdel, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Krasnoufimsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Sarapul, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Mozhga, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Votkinsk, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Glazov, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Kanash, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Shumerlya, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Alatyr, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sol-lletsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Dombarovskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Mednogorsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Gay, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Buzuluk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Otradnyy, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Tolyatti, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Engels, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Pugachev, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Volsk, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Atkarsk, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Balashov, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Almetyevsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Chistopol, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nizhnekamsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Dimitrovgrad, Russia",
        "value": "Europe/Ulyanovsk"
    },
    {
        "label": "Peregrebnoye, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Saranpaul, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Uray, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Laryak, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kogalym, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Megion, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Cherlak, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Kalachinsk, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Nazyvayevsk, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Isikul, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Ishim, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Golyshmanovo, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Yalutorovsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Biysk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Zmeinogorsk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Aleysk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Novoaltaysk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Kamenna Obi, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Gornyak, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Kulunda, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Slavgorod, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Tashtagol, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Guryevsk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Yurga, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Topki, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Mariinsk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Shira, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Cherepanovo, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Kargat, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Ob, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Karasuk, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Barabinsk, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Tatarsk, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Kaspiysk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Derbent, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Buynaksk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yessey, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Ulkan, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Kirensk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Zheleznogorsk Ilimskiy, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Vikhorevka, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Biryusinsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Kodinskiy, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Artemovsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Uyar, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Uzhur, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Sayanogorsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Podkamennaya, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Igarka, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Agapa, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Boyarka, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Nordvik, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Chelyuskin, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Taksimo, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Gusinoozyorsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Aginskoye, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Progress, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Belogorsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Nyukzha, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Nerchinsk, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Kavalerovo, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Spassk Dalniy, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Shalaurova, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Logashkino, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Ust Kuyga, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Pokrovsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Verkhnevilyuysk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Vitim, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Olyokminsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Tunguskhaya, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Natara, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Zhilinda, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Trofimovsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Tukchi, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Amursk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Bikin, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Vyazemskiy, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Chegdomyn, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Siglan, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Karamken, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Strelka, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Severo Kurilsk, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Krasnogorsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Poronaysk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Makarov, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Dolinsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Nevelsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Kudymkar, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kungur, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Krasnokamsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Chusovoy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Gubakha, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Utkholok, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Bol'sheretsk, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Il'pyrskiy, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Korf, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Kolpashevo, Russia",
        "value": "Asia/Tomsk"
    },
    {
        "label": "Omolon, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Pevek, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Umba, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kovda, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Velikiy Novgorod, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Velikiye Luki, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Belomorsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kem, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Krasino, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Matochkin Shar, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Severodvinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kursk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tula, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tambov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sterlitamak, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Kurgan, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Indiga, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Shoyna, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novy Port, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Salekhard, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Gyda, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Tazovskiy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Novy Urengoy, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nadym, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Noyabrsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Syktyvkar, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ukhta, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Serov, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Cheboksary, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Orsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Balakovo, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Igrim, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nyagan, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Khanty Mansiysk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Nizhenvartovsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Numto, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Tara, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Tobolsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Rubtsovsk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Gorno Altaysk, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Prokopyevsk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Makhachkala, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tura, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Noginsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Yerema, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Tayshet, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Usolye Sibirskoye, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Slyudyanka, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Cheremkhovo, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Zima, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Tulun, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Nizhneudinsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Ust Kut, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Bodaybo, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Komsa, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Kansk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Achinsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Yeniseysk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Lesosibirsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Turukhansk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Vorontsovo, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Starorybnoye, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Mikhaylova, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Dudinka, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Teli, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Novyy Uoyin, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Bagdarin, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Severobaykalsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Kyakhta, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Svobodnyy, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Zeya, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Magdagachi, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Shimanovsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Skovorodino, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Tynda, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Olovyannaya, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Mogocha, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Krasnokamensk, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Borzya, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Khilok, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Nakhodka, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Ussuriysk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Lesozavodsk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Kavache, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Verkhoyansk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Cherskiy, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Srednekolymsk, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Zyryanka, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Eldikan, Russia",
        "value": "Asia/Khandyga"
    },
    {
        "label": "Chagda, Russia",
        "value": "Asia/Khandyga"
    },
    {
        "label": "Khandyga, Russia",
        "value": "Asia/Khandyga"
    },
    {
        "label": "Ust Maya, Russia",
        "value": "Asia/Khandyga"
    },
    {
        "label": "Neryungri, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Chernyshevskiy, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Terbyas, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Vilyuysk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Sangar, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Menkere, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Saskylakh, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Govorovo, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Sagastyr, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Ust Olensk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Suntar, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Olenek, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Udachnyy, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Birobidzhan, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Khakhar, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "De Kastri, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Chumikan, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Komsomolsk na Amure, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Ayan, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Nikolayevsk na Amure, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Savetskaya Gavan, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Evensk, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Palatka, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Omsukchan, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Susuman, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Nogliki, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Aleksandrovsk Sakhalinskiy, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Korsakov, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Manily, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Oktyabrskiy, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Klyuchi, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Ust Kamchatsk, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Provideniya, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Uelen, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Kandalaksha, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vyborg, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kondopoga, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rusanovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Mezen, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Velsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kotlas, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Onega, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ivanovo, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kostroma, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Velikiy Ustyug, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Lipetsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Orel, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Volgodonsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Belgorod, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Novorossiysk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vladimir, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Birsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Zlatoust, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Amderma, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Naryan Mar, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Inta, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Usinsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Pechora, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Pervouralsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Izhevsk, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Akhtubinsk, Russia",
        "value": "Europe/Astrakhan"
    },
    {
        "label": "Elista, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Krasnoarmeysk, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Berezniki, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Naltchik, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Stavropol, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ugolnye Kopi, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Kaliningrad, Russia",
        "value": "Europe/Kaliningrad"
    },
    {
        "label": "Pskov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Bryansk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Smolensk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Petrozavodsk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Tver, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Vologda, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Yaroslavl, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Rostov, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Sochi, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Krasnodar, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Penza, Russia",
        "value": null
    },
    {
        "label": "Ryazan, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Voronezh, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Magnitogorsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Chelyabinsk, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Vorkuta, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Kirov, Russia",
        "value": "Europe/Kirov"
    },
    {
        "label": "Nizhny Tagil, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Astrakhan, Russia",
        "value": "Europe/Astrakhan"
    },
    {
        "label": "Orenburg, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Saratov, Russia",
        "value": "Europe/Saratov"
    },
    {
        "label": "Ulyanovsk, Russia",
        "value": "Europe/Ulyanovsk"
    },
    {
        "label": "Omsk, Russia",
        "value": "Asia/Omsk"
    },
    {
        "label": "Tyumen, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Novokuznetsk, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Kemerovo, Russia",
        "value": "Asia/Novokuznetsk"
    },
    {
        "label": "Groznyy, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Ust-Ulimsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Angarsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Abakan, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Norilsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Khatanga, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Kyzyl, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Ulan Ude, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Blagoveshchensk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Bukachacha, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Dalnegorsk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Ambarchik, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Batagay, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Chokurdakh, Russia",
        "value": "Asia/Srednekolymsk"
    },
    {
        "label": "Ust Nera, Russia",
        "value": "Asia/Ust-Nera"
    },
    {
        "label": "Lensk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Aldan, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Mirnyy, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Zhigansk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Okhotsk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Khabarovsk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Okha, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Yuzhno Sakhalinsk, Russia",
        "value": "Asia/Sakhalin"
    },
    {
        "label": "Tomsk, Russia",
        "value": "Asia/Tomsk"
    },
    {
        "label": "Anadyr, Russia",
        "value": "Asia/Anadyr"
    },
    {
        "label": "Murmansk, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Archangel, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Nizhny Novgorod, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Volgograd, Russia",
        "value": "Europe/Volgograd"
    },
    {
        "label": "Ufa, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Yekaterinburg, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Samara, Russia",
        "value": "Europe/Samara"
    },
    {
        "label": "Kazan, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Surgut, Russia",
        "value": "Asia/Yekaterinburg"
    },
    {
        "label": "Barnaul, Russia",
        "value": "Asia/Barnaul"
    },
    {
        "label": "Novosibirsk, Russia",
        "value": "Asia/Novosibirsk"
    },
    {
        "label": "Bratsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Irkutsk, Russia",
        "value": "Asia/Irkutsk"
    },
    {
        "label": "Krasnoyarsk, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Dickson, Russia",
        "value": "Asia/Krasnoyarsk"
    },
    {
        "label": "Chita, Russia",
        "value": "Asia/Chita"
    },
    {
        "label": "Vladivostok, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Nizhneyansk, Russia",
        "value": "Asia/Vladivostok"
    },
    {
        "label": "Yakutsk, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Tiksi, Russia",
        "value": "Asia/Yakutsk"
    },
    {
        "label": "Magadan, Russia",
        "value": "Asia/Magadan"
    },
    {
        "label": "Perm, Russia",
        "value": null
    },
    {
        "label": "Palana, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "Petropavlovsk Kamchatskiy, Russia",
        "value": "Asia/Kamchatka"
    },
    {
        "label": "St. Petersburg, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Moscow, Russia",
        "value": "Europe/Moscow"
    },
    {
        "label": "Gikongoro, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Kibuye, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Kibungo, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Nyanza, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Gitarama, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Butare, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Gisenyi, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Cyangugu, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Byumba, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Ruhengeri, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Kigali, Rwanda",
        "value": "Africa/Kigali"
    },
    {
        "label": "Basseterre, Saint Kitts and Nevis",
        "value": "America/St_Kitts"
    },
    {
        "label": "Castries, Saint Lucia",
        "value": "America/St_Lucia"
    },
    {
        "label": "Kingstown, Saint Vincent and the Grenadines",
        "value": "America/St_Vincent"
    },
    {
        "label": "Apia, Samoa",
        "value": "Pacific/Apia"
    },
    {
        "label": "San Marino, San Marino",
        "value": "Europe/San_Marino"
    },
    {
        "label": "Santo Antonio, Sao Tome and Principe",
        "value": "Africa/Sao_Tome"
    },
    {
        "label": "Sao Tome, Sao Tome and Principe",
        "value": "Africa/Sao_Tome"
    },
    {
        "label": "An Nabk, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Sakakah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Yanbu al Bahr, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Dawmat al Jandal, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Qal at Bishah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "At Taif, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Najran, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Quwayiyah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Hillah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Mubarraz, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al-Qatif, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Az Zahran, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Buraydah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Hail, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Arar, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Rafha, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Kharj, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Ad Damman, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Hafar al Batin, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Jubayl, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Qunfudhah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Hufuf, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Al Wajh, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Abha, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Jizan, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "As Sulayyil, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Medina, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Tabuk, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Jeddah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Makkah, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Riyadh, Saudi Arabia",
        "value": "Asia/Riyadh"
    },
    {
        "label": "Fatick, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Diourbel, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Louga, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Thies, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Kolda, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Tambacounda, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Kedougou, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Ziguinchor, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Kaolack, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Kaedi, Senegal",
        "value": "Africa/Nouakchott"
    },
    {
        "label": "Dakar, Senegal",
        "value": "Africa/Dakar"
    },
    {
        "label": "Subotica, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Kragujevac, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Zrenjanin, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Pec, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Nis, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Novi Sad, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Belgrade, Serbia",
        "value": "Europe/Belgrade"
    },
    {
        "label": "Victoria, Seychelles",
        "value": "Indian/Mahe"
    },
    {
        "label": "Makeni, Sierra Leone",
        "value": "Africa/Freetown"
    },
    {
        "label": "Koidu, Sierra Leone",
        "value": "Africa/Freetown"
    },
    {
        "label": "Kenema, Sierra Leone",
        "value": "Africa/Freetown"
    },
    {
        "label": "Bo, Sierra Leone",
        "value": "Africa/Freetown"
    },
    {
        "label": "Freetown, Sierra Leone",
        "value": "Africa/Freetown"
    },
    {
        "label": "Singapore, Singapore",
        "value": "Asia/Singapore"
    },
    {
        "label": "Banska Bystrica, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Trnava, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Zvolen, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Zilina, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Kosice, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Presov, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Bratislava, Slovakia",
        "value": "Europe/Bratislava"
    },
    {
        "label": "Maribor, Slovenia",
        "value": "Europe/Ljubljana"
    },
    {
        "label": "Ljubljana, Slovenia",
        "value": "Europe/Ljubljana"
    },
    {
        "label": "Gizo, Solomon Islands",
        "value": "Pacific/Guadalcanal"
    },
    {
        "label": "Lata, Solomon Islands",
        "value": "Pacific/Guadalcanal"
    },
    {
        "label": "Honiara, Solomon Islands",
        "value": "Pacific/Guadalcanal"
    },
    {
        "label": "Hudur, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Garbahaarey, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Bu'aale, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Dhuusa Mareeb, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Buurhakaba, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Luuq, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Mandera, Somalia",
        "value": "Africa/Nairobi"
    },
    {
        "label": "Ferfer, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Jawhar, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Hurdiyo, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Qardho, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Caluula, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Buur Gaabo, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Baydhabo, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Marka, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Mereeg, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Beledweyne, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Boosaaso, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Bandarbeyla, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Gaalkacyo, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Eyl, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Garoowe, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Jamaame, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Kismaayo, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Mogadishu, Somalia",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Laascaanood, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Ceerigaabo, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Boorama, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Burco, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Maydh, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Berbera, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Hargeysa, Somaliland",
        "value": "Africa/Mogadishu"
    },
    {
        "label": "Qacha's Nek, South Africa",
        "value": "Africa/Maseru"
    },
    {
        "label": "Colesberg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Poffader, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Carnarvon, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Prieska, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Kuruman, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Knysna, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Swellendam, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Hermanus, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Paarl, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bredasdorp, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Beaufort West, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Brits, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bloemhof, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Potchefstroom, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Brandfort, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bethlehem, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Springs, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Volksrust, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Mbombela, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Komatipoort, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Middelburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bethal, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Standerton, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Lebowakgomo, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Tzaneen, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Ulundi, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Ladysmith, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Port Shepstone, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Ubomba, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Cradock, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Uitenhage, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Port Alfred, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Grahamstown, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Port St. Johns, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Aliwal North, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Queenstown, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Benoni, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Vereeniging, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "De Aar, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Alexander Bay, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Kimberley, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Oudtshoorn, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Vanhynsdorp, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Saldanha, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Mossel Bay, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Vryburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Rustenburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Mmabatho, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Klerksdorp, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Kroonstad, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Polokwane, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Thohoyandou, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Musina, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Vryheid, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Pietermaritzburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Umtata, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Graaff Reinet, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bhisho, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Springbok, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Upington, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Worcester, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "George, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Welkom, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "East London, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Middelburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Bloemfontein, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Pretoria, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Port Elizabeth, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Durban, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Johannesburg, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Cape Town, South Africa",
        "value": "Africa/Johannesburg"
    },
    {
        "label": "Grytviken, South Georgia and the Islands",
        "value": "Atlantic/South_Georgia"
    },
    {
        "label": "Eumseong, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Cheongju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Wonju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Chuncheon, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Ansan, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Iksan, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Gyeongju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Changwon, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Yeosu, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Andong, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Jeju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Gangneung, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Sokcho, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Jeonju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Gunsan, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Mokpo, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Puch'on, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Songnam, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Goyang, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Suwon, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Pohang, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Ulsan, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Daegu, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Incheon, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Daejeon, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Gwangju, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Busan, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Seoul, South Korea",
        "value": "Asia/Seoul"
    },
    {
        "label": "Bentiu, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Maridi, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Yei, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Melut, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Nasir, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Gogrial, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Kapoeta, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Aweil, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Rumbek, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Yambio, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Bor, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Nimule, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Juba, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Malakal, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Wau, South Sudan",
        "value": "Africa/Juba"
    },
    {
        "label": "Merida, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Marbella, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Linares, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Algeciras, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Leon, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Mataro, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Gijon, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Vitoria, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Almeria, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Malaga, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Jaén, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Huelva, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Albacete, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Toledo, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Guadalajara, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Santander, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Salamanca, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Burgos, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Tarragona, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Lorca, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Cartagena, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Oviedo, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Santiago de Compostela, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Badajoz, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Logrono, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "San Sebastián, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Alicante, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Castello, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Arrecife, Spain",
        "value": "Atlantic/Canary"
    },
    {
        "label": "Cadiz, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Granada, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Murcia, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Ceuta, Spain",
        "value": "Africa/Ceuta"
    },
    {
        "label": "La Coruña, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Ourense, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Pamplona, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Valladolid, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Melilla, Spain",
        "value": "Africa/Ceuta"
    },
    {
        "label": "Palma, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Zaragoza, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Santa Cruz de Tenerife, Spain",
        "value": "Atlantic/Canary"
    },
    {
        "label": "Cordoba, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Vigo, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Bilbao, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Las Palmas, Spain",
        "value": "Atlantic/Canary"
    },
    {
        "label": "Seville, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Valencia, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Barcelona, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Madrid, Spain",
        "value": "Europe/Madrid"
    },
    {
        "label": "Trincomalee, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Puttalan, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Ratnapura, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Batticaloa, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Kilinochchi, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Matara, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Badulla, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Moratuwa, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Galle, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Anuradhapura, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Jaffna, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Kandy, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Sri Jawewardenepura Kotte, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Colombo, Sri Lanka",
        "value": "Asia/Colombo"
    },
    {
        "label": "Ad Damazin, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Haiya, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "El Manaqil, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Shendi, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Berber, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Kerma, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Ed Dueim, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Umm Ruwaba, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "En Nuhud, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Muglad, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Tokar, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Medani, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Gedaref, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "EdDamer, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Atbara, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Wadi Halfa, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Merowe, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Kosti, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Sennar, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "El Fasher, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Kadugli, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Babanusa, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Geneina, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Omdurman, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "El Obeid, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Port Sudan, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Niyala, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Dongola, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Kassala, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Khartoum, Sudan",
        "value": "Africa/Khartoum"
    },
    {
        "label": "Onverwacht, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Groningen, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Brownsweg, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Moengo, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Nieuw Amsterdam, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Nieuw Nickerie, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Brokopondo, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Totness, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Cottica, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Paramaribo, Suriname",
        "value": "America/Paramaribo"
    },
    {
        "label": "Longyearbyen, Svalbard and Jan Mayen Islands",
        "value": "Arctic/Longyearbyen"
    },
    {
        "label": "Piggs Peak, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Siteki, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Manzini, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Hlatikulu, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Golela, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Lobamba, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Mbabane, Swaziland",
        "value": "Africa/Mbabane"
    },
    {
        "label": "Falun, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Nykoping, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Harnosand, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Karlskrona, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Mariestad, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Vannersborg, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Borlänge, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Västerås, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Bollnäs, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Gävle, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Kalmar, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Växjö, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Örebro, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Norrköping, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Halmstad, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Karlstad, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Skellefteå, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Visby, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Trollhättan, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Borås, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Kristianstad, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Helsingborg, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Jönköping, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Örnsköldsvik, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Linköping, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Östersund, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Kiruna, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Umeå, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Uppsala, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Göteborg, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Luleå, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Sundsvall, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Malmö, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Stockholm, Sweden",
        "value": "Europe/Stockholm"
    },
    {
        "label": "Delemont, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Neuchatel, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Aarau, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Stans, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Sion, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Herisau, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Saint Gallen, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Bellinzona, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Glarus, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Schaffhausen, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Schwyz, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Frauenfeld, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Altdorf, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Zug, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Fribourg, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Liestal, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Solothurn, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Sarnen, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Appenzell, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Chur, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Biel, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Luzern, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Lugano, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Lausanne, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Basel, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Bern, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Zürich, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Geneva, Switzerland",
        "value": "Europe/Zurich"
    },
    {
        "label": "Dar'a, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Al Ladhiqiyah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Madinat ath Thawrah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Izaz, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Manbij, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Idlib, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Al Qamishli, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Al Hasakah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Douma, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Tartus, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Ar Raqqah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Hamah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Tadmur, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Abu Kamal, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Dayr az Zawr, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "As Suwayda, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Ad Nabk, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Al Qunaytirah, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Hims, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Aleppo, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Damascus, Syria",
        "value": "Asia/Damascus"
    },
    {
        "label": "Bade, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Pingzhen, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Taibao, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Taoyuan, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Yangmei, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Yilan, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Zhubei, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Douliou, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Zhongli, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Keelung, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Nantou, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Puzi, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Changhua, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Chiayi, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Hsinchu, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Miaoli, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Pingtung, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Hualien, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "New Taipei, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Tainan, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Taitung, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Magong, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Taichung, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Kaohsiung, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Taipei, Taiwan",
        "value": "Asia/Taipei"
    },
    {
        "label": "Leninobod, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Qurghonteppa, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Konibodom, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Kuybyshevskiy, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Kulob, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Uroteppa, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Khorugh, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Khujand, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Dushanbe, Tajikistan",
        "value": "Asia/Dushanbe"
    },
    {
        "label": "Wete, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kibaha, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mkokotoni, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Tunduma, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Tukuyu, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Sumbawanga, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mpanda, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kipili, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Karema, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Geita, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Nyahanga, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kahama, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Shinyanga, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Nzega, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Sikonge, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Biharamulo, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Bukoba, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Ngara, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kakonko, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kasulu, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kanyato, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Uvinza, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kigoma, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mikumi, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Ifakara, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kilosa, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Chake Chake, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kibiti, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Bagamoyo, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Kilindoni, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mpwapwa, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Njombe, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Iringa, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Masasi, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mtwara, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Tunduru, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mbamba Bay, Tanzania",
        "value": "Africa/Blantyre"
    },
    {
        "label": "Manyoni, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Itigi, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Singida, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Ngorongoro, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Oldeani, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mbulu, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Babati, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Same, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Moshi, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Musoma, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Korogwe, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Tabora, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Lindi, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Songea, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Tanga, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mwanza, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Morogoro, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Dodoma, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Arusha, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mbeya, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Zanzibar, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Dar es Salaam, Tanzania",
        "value": "Africa/Dar_es_Salaam"
    },
    {
        "label": "Mae Hong Son, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phangnga, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Ranong, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Krabi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phatthalung, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Satun, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Lamphun, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Kamphaeng Phet, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phichit, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phetchabun, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Supham Buri, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Ang Thong, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chainat, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Nayok, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Sing Buri, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Pathom, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Prachuap Khiri Khan, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Samut Sakhon, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Samut Songkhram, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Yasothon, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chachoengsao, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Trat, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Kalasin, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Maha Sarakham, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Roi Et, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Pattani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chumphon, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Thung Song, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Trang, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Yala, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chiang Rai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Lampang, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nan, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phayao, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phrae, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phitsanulok, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Sukhothai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Uttaradit, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Kanchanaburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Mae Sot, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Tak, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Uthai Thani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Lop Buri, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Prachin Buri, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Ayutthaya, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Pathum Thani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Saraburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nonthaburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phetchaburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Hua Hin, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Ratchaburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Samut Prakan, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Sisaket, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Si Racha, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chon Buri, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chanthaburi, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Aranyaprathet, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Rayong, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Buriram, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chaiyaphum, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Bua Yai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Surin, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Loei, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nong Khai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Sakhon Nakhon, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Udon Thani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Phanom, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Narathiwat, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Khon Kaen, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Phuket, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Si Thammarat, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Songkhla, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Hat Yai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Sawan, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Ubon Ratchathani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Surat Thani, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Chiang Mai, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Nakhon Ratchasima, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Bangkok, Thailand",
        "value": "Asia/Bangkok"
    },
    {
        "label": "Freeport, The Bahamas",
        "value": "America/Nassau"
    },
    {
        "label": "Nassau, The Bahamas",
        "value": "America/Nassau"
    },
    {
        "label": "Georgetown, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Basse Santa Su, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Kerewan, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Mansa Konko, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Bansang, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Brikama, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Banjul, The Gambia",
        "value": "Africa/Banjul"
    },
    {
        "label": "Bassar, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Sotouboua, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Kpalime, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Sokode, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Mango, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Atakpame, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Lome, Togo",
        "value": "Africa/Lome"
    },
    {
        "label": "Neiafu, Tonga",
        "value": "Pacific/Tongatapu"
    },
    {
        "label": "Nukualofa, Tonga",
        "value": "Pacific/Tongatapu"
    },
    {
        "label": "San Fernando, Trinidad and Tobago",
        "value": "America/Port_of_Spain"
    },
    {
        "label": "Port-of-Spain, Trinidad and Tobago",
        "value": "America/Port_of_Spain"
    },
    {
        "label": "Medenine, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Kebili, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Tataouine, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "L'Ariana, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Jendouba, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Kasserine, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Sdid Bouzid, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Siliana, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Mahdia, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Monastir, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Zaghouan, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Ben Gardane, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Zarzis, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Dehibat, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Tozeur, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Beja, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Bizerte, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Nabeul, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "El Kef, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Qasserine, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Gabes, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Gafsa, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Qairouan, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Sfax, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Sousse, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Tunis, Tunisia",
        "value": "Africa/Tunis"
    },
    {
        "label": "Kirklareli, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bilecik, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Sakarya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kastamonu, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Burdur, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kirsehir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Nevsehir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Antioch, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Giresun, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Sinop, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Tokat, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Artvin, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bingol, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bitlis, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Cankiri, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Nigde, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Yozgat, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Gumushane, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Siirt, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Tunceli, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Aydin, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Luleburgaz, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Isparta, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kutahya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Mugla, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Elazig, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kahramanmaras, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Icel, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Corum, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Rize, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Tatvan, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Polatli, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Karabuk, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Nusaybin, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Hakkari, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Soke, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Balikesir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Canakkale, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Edirne, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Tekirdag, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Izmit, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bolu, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Afyon, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Denizli, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Manisa, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Adiyaman, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Malatya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Tarsus, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Samandagi, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Hatay, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Iskenderun, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Amasya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Ordu, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Sivas, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bafra, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Erzurum, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Erzincan, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Agri, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Diyarbakir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Mus, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Zonguldak, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Eregli, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Karaman, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Usak, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kilis, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kirikkale, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kars, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Mardin, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Batman, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Van, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Adapazari, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Trabzon, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Sanliurfa, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Eskisehir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Antalya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Kayseri, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Gaziantep, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Izmir, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Bursa, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Samsun, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Konya, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Adana, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Ankara, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Istanbul, Turkey",
        "value": "Europe/Istanbul"
    },
    {
        "label": "Gyzlarbat, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Celeken, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Tejen, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Buzmeyin, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Koneurgench, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Balkanabat, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Kaka, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Atamyrat, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Dasoguz, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Turkmenbasy, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Turkmenabat, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Mary, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Ashgabat, Turkmenistan",
        "value": "Asia/Ashgabat"
    },
    {
        "label": "Grand Turk, Turks and Caicos Islands",
        "value": "America/Grand_Turk"
    },
    {
        "label": "Funafuti, Tuvalu",
        "value": "Pacific/Funafuti"
    },
    {
        "label": "Kalangala, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kumi, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kaberamaido, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kayunga, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Iganga, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kamuli, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Pallisa, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mpigi, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Adjumani, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Nebbi, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kiboga, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Nakasongola, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Bombo, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Masindi, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Fort Portal, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kibale, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Sironko, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Busia, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Katakwi, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Ntungamo, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kisoro, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Jinja, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Soroti, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Arua, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Pakwach, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Moyo, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Entebbe, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mubende, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mityana, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kitgum, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Lira, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Masindi-Port, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mbale, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Tororo, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kaabong, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Moroto, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Masaka, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Katwe, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mbarara, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kabale, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kasese, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Gulu, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Kampala, Uganda",
        "value": "Africa/Kampala"
    },
    {
        "label": "Mykolayiv, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Chernihiv, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Khmelnytskyy, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kamyanets-Podilskyy, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Drohobych, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Uzhgorod, Ukraine",
        "value": "Europe/Uzhgorod"
    },
    {
        "label": "Uman, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Brovary, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Bila Tserkva, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Illichivsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Konotop, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kryvyy Rih, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Makiyivka, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Horlivka, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kramatorsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Berdyansk, Ukraine",
        "value": "Europe/Zaporozhye"
    },
    {
        "label": "Dzhankoy, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Yevpatoriya, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Kerch, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Simferopol, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Kherson, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Voznesensk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Nizhyn, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Rivne, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Chernivtsi, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Ivano-Frankivsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Ternopil, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Lutsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kovel, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Cherkasy, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kirovohrad, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Izmayil, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Vinnytsya, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Korosten, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Shostka, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Nikopol, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kupyansk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Lysychansk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Luhansk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Poltava, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kremenchuk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Melitopol, Ukraine",
        "value": "Europe/Zaporozhye"
    },
    {
        "label": "Zaporizhzhya, Ukraine",
        "value": "Europe/Zaporozhye"
    },
    {
        "label": "Yalta, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Chernobyl, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Sumy, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Mariupol, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Lvov, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Odesa, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Zhytomyr, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Dnipropetrovsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Donetsk, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Kharkiv, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Sevastapol, Ukraine",
        "value": "Europe/Simferopol"
    },
    {
        "label": "Kyiv, Ukraine",
        "value": "Europe/Kyiv"
    },
    {
        "label": "Umm al Qaywayn, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Sharjah, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Jabal Ali, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Ras al Khaymah, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Al Fujayrah, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Al Ayn, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Abu Dhabi, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Dubai, United Arab Emirates",
        "value": "Asia/Dubai"
    },
    {
        "label": "Greenock, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Sunderland, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Southampton, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Bristol, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Bournemouth, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Omagh, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Chester, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Swansea, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Carlisle, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Southend-on-Sea, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Reading, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Leicester, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Bradford, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Sheffield, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Fort William, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Ayr, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Aberdeen, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Perth, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Dundee, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Middlesbrough, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Coventry, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Bath, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Exeter, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Cambridge, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Kingston upon Hull, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Londonderry, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Lisburn, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Penzance, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "York, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Blackpool, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Dumfries, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Scarborough, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Plymouth, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Ipswich, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Norwich, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Brighton, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Kirkwall, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Inverness, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Oxford, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Luton, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Portsmouth, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Peterborough, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Nottingham, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Stoke, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Dover, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Edinburgh, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Newcastle, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Liverpool, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Cardiff, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Wick, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Leeds, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Lerwick, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Manchester, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Birmingham, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Belfast, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Glasgow, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "London, United Kingdom",
        "value": "Europe/London"
    },
    {
        "label": "Faribault, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Mankato, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Albert Lea, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Willmar, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Brainerd, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Crookston, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hardin, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Glendive, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Dillon, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Polson, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Devils Lake, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Burley, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Wallace, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Kennewick, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Centralia, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Glendale, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Safford, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Casa Grande, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Mesa, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Lake Havasu City, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Nogales, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Berkeley, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "National City, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Mendocino, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Paso Robles, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Riverside, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Delano, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "San Mateo, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Vallejo, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Glenwood Springs, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Aurora, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Greeley, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Tonopah, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Deming, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Truth or Consequences, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Las Vegas, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Farmington, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Springfield, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Tillamook, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Ontario, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "La Grande, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Richfield, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Nephi, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Lander, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Powell, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Paragould, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Iowa City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ottumwa, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Spencer, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ft. Dodge, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hutchinson, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kansas City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lawrence, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Garden City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Manhattan, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hays, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Goodland, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Independence, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kirksville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kearney, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Grand Island, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alliance, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Bartlesville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Enid, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ardmore, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "McAlester, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Stillwater, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lead, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Slidell, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lake Charles, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Metairie, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "New Iberia, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Bryan, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "San Marcos, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Longview, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "McAllen, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Harlingen, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alice, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "New Braunfels, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Cleburne, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Brownwood, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alpine, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Van Horn, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Big Spring, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Vernon, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Childress, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hereford, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dalhart, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Texas City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pasadena, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Baytown, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Arlington, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "New London, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Stamford, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Waterbury, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "New Bedford, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Springfield, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Salem, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Pittsfield, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Montpelier, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Auburn, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Florence, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Winter Haven, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Melbourne, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Homestead, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Sanford, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Miami Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Coral Springs, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Port Charlotte, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Spring Hill, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Palm Coast, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Palatka, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Leesburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lake City, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Crestview, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Panama City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dalton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Marietta, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Waycross, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "La Grange, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Southaven, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Meridian, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Laurel, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Spartanburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Orangeburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Galesburg, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Joliet, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Cape Girardeau, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rockford, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Evanston, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rock Island, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Elgin, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Richmond, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Terre Haute, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Lafayette, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Marion, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "South Bend, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "New Albany, United States of America",
        "value": "America/Kentucky/Louisville"
    },
    {
        "label": "Elkhart, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Hopkinsville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "London, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Madisonville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rocky Mount, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Salisbury, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Durham, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lumberton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Zanesville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Mansfield, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Bowling Green, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Springfield, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lancaster, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Johnson City, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Kingsport, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Columbia, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Barlett, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Blacksburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Harrisonburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Petersburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Hampton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Sheboygan, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Waukesha, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "La Crosse, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Eau Claire, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tomah, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Janesville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Appleton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Parkersburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "White Sulphur Springs, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Clarksburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Dover, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "St. Charles, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Annapolis, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Hagerstown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Paterson, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Saratoga Springs, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Poughkeepsie, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Plattsburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Beaver Falls, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Altoona, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Williamsport, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lancaster, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Allentown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Waterville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Calais, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Houlton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Benton Harbor, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Battle Creek, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Bay City, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Alpena, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Iron Mountain, United States of America",
        "value": "America/Menominee"
    },
    {
        "label": "Ironwood, United States of America",
        "value": "America/Menominee"
    },
    {
        "label": "Sand Point, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Hydaburg, United States of America",
        "value": "America/Sitka"
    },
    {
        "label": "Mekoryuk, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Atqasuk, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Port Heiden, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Perryville, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Dillingham, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Goodnews Bay, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Nyac, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Tununak, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Mountain Village, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Emmonak, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Kaltag, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Teller, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Koyukuk, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Kobuk, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Selawik, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Talkeetna, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Whittier, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Montana, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Lake Minchumina, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Cantwell, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Gulkana, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Eagle, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Nenana, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Big Delta, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Allakaket, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Tanana, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Virginia, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Winona, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rochester, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lakeville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ely, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Moorhead, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "St. Cloud, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Miles City, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Bozeman, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Glasgow, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Dickinson, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Jamestown, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Williston, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lihue, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Wahiawa, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Wailuku, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Montpelier, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Twin Falls, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Caldwell, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Salmon, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Coeur d'Alene, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Richland, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bellingham, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Longview, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Walla Walla, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Aberdeen, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bremerton, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Everett, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bullhead City, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Winslow, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Gila Bend, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Tombstone, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Willcox, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Scottsdale, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Kingman, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Grand Canyon, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Arcata, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Stockton, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Barstow, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Victorville, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Pasadena, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Visalia, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "El Centro, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "San Luis Obispo, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Merced, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Yuba City, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Redding, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Santa Rosa, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Oceanside, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Modesto, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Irvine, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Ukiah, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Needles, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bishop, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Palm Springs, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Santa Maria, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Tulare, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Mt. Shasta, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Crescent City, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Fort Collins, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Pueblo, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Lamar, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Trinidad, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Gunnison, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Durango, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Montrose, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Craig, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Boulder, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Boulder City, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Winnemucca, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Roswell, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Clovis, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Las Cruces, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Hobbs, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Socorro, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Gallup, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Raton, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Tucumcari, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Roseburg, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Pendleton, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "John Day, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Grants Pass, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Corvallis, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Albany, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Astoria, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Logan, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Parowan, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Kanab, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Monticello, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Moab, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Price, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Cedar City, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Vernal, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Ogden, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Green River, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Rawlins, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Douglas, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Riverton, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Thermopolis, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Gillette, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Jonesboro, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Texarkana, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pine Bluff, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hot Springs, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fort Smith, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fayetteville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Conway, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "El Dorado, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Davenport, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Burlington, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dubuque, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Waterloo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Sioux City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Council Bluffs, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ames, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Mason City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Emporia, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Salina, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dodge City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Coffeyville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "St. Charles, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Poplar Bluff, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Joplin, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Columbia, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "St. Joseph, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "McCook, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Norfolk, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "North Platte, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Sidney, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Scottsbluff, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Chadron, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Lawton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Norman, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Muskogee, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ponca City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Shawnee, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Woodward, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Guymon, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Yankton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Brookings, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Mitchell, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Aberdeen, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Mobridge, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Houma, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Monroe, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Conroe, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Nacogdoches, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Eagle Pass, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Edinburg, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kingsville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Port Arthur, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Huntsville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Killeen, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lufkin, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Del Rio, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "San Angelo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Sherman, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Beaumont, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Bay City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Port Lavaca, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Falfurrias, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Beeville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fort Stockton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pecos, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dumas, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Denton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Midland, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Temple, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "New Haven, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lowell, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Worcester, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Manchester, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Newport, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Dothan, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tuscaloosa, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Gadsden, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Enterprise, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Selma, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Coral Gables, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Cape Coral, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Naples, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Fort Pierce, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Kissimmee, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Titusville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "St. Augustine, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Ocala, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Fort Lauderdale, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Apalachicola, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Vero Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Valdosta, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Albany, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Athens, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Macon, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Columbus, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Douglas, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Dublin, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Gulfport, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hattiesburg, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tupelo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Greenville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Natchez, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Florence, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Greenville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Sumter, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Anderson, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Aiken, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Beaufort, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Rock Hill, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Decatur, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alton, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Quincy, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Urbana, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Bloomington, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kankakee, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Waukegan, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Aurora, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Carbondale, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Belleville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Bloomington, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Muncie, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Kokomo, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Gary, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fort Wayne, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Covington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Bowling Green, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Paducah, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Owensboro, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Jacksonville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Goldsboro, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Greenville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Fayetteville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Hickory, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Asheville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Winston-Salem, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Kitty Hawk, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Akron, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lima, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Oak Ridge, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Murfreesboro, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Clarksville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Jackson, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alexandria, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Fredericksburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Roanoke, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Danville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Winchester, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Bristol, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Superior, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "West Bend, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fond du Lac, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Oshkosh, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rhinelander, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Racine, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Marinette, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Wheeling, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Morgantown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Huntington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Beckley, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Wilmington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Cumberland, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Atlantic City, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Newark, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Schenectady, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Binghamton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Utica, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Watertown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Niagara Falls, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Jamestown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Elmira, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "York, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Johnstown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Scranton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "State College, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Erie, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Wilkes Barre, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Bar Harbor, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lewiston, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Presque Isle, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Ann Arbor, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Kalamazoo, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Muskegon, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Flint, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Grand Rapids, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Pontiac, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Cadillac, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Traverse City, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Petoskey, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Escanaba, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Marquette, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Hancock, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Wrangell, United States of America",
        "value": "America/Sitka"
    },
    {
        "label": "Shishmaref, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Hoonah, United States of America",
        "value": "America/Juneau"
    },
    {
        "label": "Atka, United States of America",
        "value": "America/Adak"
    },
    {
        "label": "Nikolski, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Karluk, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "False Pass, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Kivalina, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Newhalen, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Pilot Point, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Chignik, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "King Salmon, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Quinhagak, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Aniak, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Kotlit, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Unalakleet, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Koyuk, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "McGrath, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Hughes, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Ambler, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Wales, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Kotzebue, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Wasilla, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Circle, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Denali Park, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Yakutat, United States of America",
        "value": "America/Yakutat"
    },
    {
        "label": "Homer, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Tanacross, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Wiseman, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Kailua-Kona, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Butte, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Grand Forks, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pocatello, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Tacoma, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Yuma, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Prescott, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Long Beach, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Grand Junction, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Ely, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Carson City, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Carlsbad, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Alamogordo, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Medford, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Klamath Falls, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "St. George, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Provo, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Laramie, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Little Rock, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Wichita, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Jefferson City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Rapid City, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Lafayette, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Galveston, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Freeport, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Victoria, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Odessa, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Wichita Falls, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Waco, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lubbock, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hartford, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Providence, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Birmingham, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Mobile, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pensacola, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "St. Petersburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Biloxi, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Springfield, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Frankfort, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Greensboro, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Dayton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Virginia Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Madison, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Green Bay, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Trenton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lansing, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Gambell, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Palmer, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Seward, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Duluth, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Bemidji, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Havre, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Kalispell, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Idaho Falls, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "Lewiston, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Yakima, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Wenatchee, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Douglas, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Bakersfield, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Oakland, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Lancaster, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Chico, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Monterey, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Salinas, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Los Alamos, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Eugene, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Coos Bay, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bend, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Cody, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Cedar Rapids, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Springfield, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Lincoln, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Alexandria, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Abilene, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Brownsville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tyler, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Concord, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Huntsville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Key West, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "West Palm Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Sarasota, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Daytona Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Gainesville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Ft. Myers, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Brunswick, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Augusta, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Vicksburg, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Myrtle Beach, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Charleston, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Peoria, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Evansville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Louisville, United States of America",
        "value": "America/Kentucky/Louisville"
    },
    {
        "label": "Lexington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Charlotte, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Youngstown, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Canton, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Toledo, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Columbus, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Chattanooga, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Charlottesville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Lynchburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Wausau, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Albany, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Ithaca, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Harrisburg, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Bangor, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Portland, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Saginaw, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Ketchikan, United States of America",
        "value": "America/Sitka"
    },
    {
        "label": "Unalaska, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Togiak, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Red Devil, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Hooper Bay, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Wainwright, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Galena, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Kaktovik, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Skagway, United States of America",
        "value": "America/Juneau"
    },
    {
        "label": "Cordova, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Kenai, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Fort Yukon, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Santa Cruz, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "San Bernardino, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Bridgeport, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Rochester, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "International Falls, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "St. Paul, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Billings, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Great Falls, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Missoula, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Minot, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Fargo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Hilo, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Olympia, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Spokane, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Vancouver, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Flagstaff, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Tucson, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "Santa Barbara, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Fresno, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Eureka, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Colorado Springs, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Reno, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Elko, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Albuquerque, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Salem, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Casper, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Topeka, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Kansas City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tulsa, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Sioux Falls, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Shreveport, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Baton Rouge, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Ft. Worth, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Corpus Christi, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Austin, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Amarillo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "El Paso, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Laredo, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Burlington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Montgomery, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Tallahassee, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Orlando, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Jacksonville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Savannah, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Columbia, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Indianapolis, United States of America",
        "value": "America/Indiana/Indianapolis"
    },
    {
        "label": "Wilmington, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Knoxville, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Richmond, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Charleston, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Baltimore, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Syracuse, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Augusta, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Sault Ste. Marie, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Sitka, United States of America",
        "value": "America/Sitka"
    },
    {
        "label": "Helena, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Bismarck, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Boise, United States of America",
        "value": "America/Boise"
    },
    {
        "label": "San Jose, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Sacramento, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Las Vegas, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Santa Fe, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Portland, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Salt Lake City, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Cheyenne, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Des Moines, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Omaha, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Oklahoma City, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Pierre, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "San Antonio, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Jackson, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Raleigh, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Cleveland, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Cincinnati, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Nashville, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Memphis, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Norfolk, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Milwaukee, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Buffalo, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Pittsburgh, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Kodiak, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Cold Bay, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Bethel, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Point Hope, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Barrow, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Nome, United States of America",
        "value": "America/Nome"
    },
    {
        "label": "Valdez, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Juneau, United States of America",
        "value": "America/Juneau"
    },
    {
        "label": "Fairbanks, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Prudhoe Bay, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "Minneapolis, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Honolulu, United States of America",
        "value": "Pacific/Honolulu"
    },
    {
        "label": "Seattle, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Phoenix, United States of America",
        "value": "America/Phoenix"
    },
    {
        "label": "San Diego, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "St. Louis, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "New Orleans, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Dallas, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Boston, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Tampa, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Philadelphia, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Detroit, United States of America",
        "value": "America/Detroit"
    },
    {
        "label": "Anchorage, United States of America",
        "value": "America/Anchorage"
    },
    {
        "label": "San Francisco, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Denver, United States of America",
        "value": "America/Denver"
    },
    {
        "label": "Houston, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Miami, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Atlanta, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Chicago, United States of America",
        "value": "America/Chicago"
    },
    {
        "label": "Los Angeles, United States of America",
        "value": "America/Los_Angeles"
    },
    {
        "label": "Washington, D.C., United States of America",
        "value": "America/New_York"
    },
    {
        "label": "New York, United States of America",
        "value": "America/New_York"
    },
    {
        "label": "Christiansted, United States Virgin Islands",
        "value": "America/St_Thomas"
    },
    {
        "label": "Colonia del Sacramento, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Trinidad, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Fray Bentos, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Canelones, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Florida, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Artigas, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Baltasar Brum, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Tranqueras, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Tacuarembo, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Paso de los Toros, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Vergara, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Treinta y Tres, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Santa Lucia, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Jose Batlle y Ordonez, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Minas, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Maldonado, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Punta del Este, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Aigua, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "La Paloma, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Carmelo, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Bella Union, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Mercedes, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Melo, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Rivera, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Lascano, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Castillos, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "San Jose de Mayo, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Rocha, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Paysandu, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Salto, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Durazno, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Montevideo, Uruguay",
        "value": "America/Montevideo"
    },
    {
        "label": "Khujayli, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Urgut, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Kattaqorgon, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Denow, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Guliston, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Iskandar, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Chirchiq, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Kogon, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Khiwa, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Chimboy, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Qunghirot, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Zarafshon, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Navoi, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Shahrisabz, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Qarshi, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Qoqon, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Jizzax, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Angren, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Olmaliq, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Muynoq, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Termiz, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Fargona, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Namangan, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Urgentch, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Bukhara, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Nukus, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Andijon, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Samarqand, Uzbekistan",
        "value": "Asia/Samarkand"
    },
    {
        "label": "Tashkent, Uzbekistan",
        "value": "Asia/Tashkent"
    },
    {
        "label": "Luganville, Vanuatu",
        "value": "Pacific/Efate"
    },
    {
        "label": "Port Vila, Vanuatu",
        "value": "Pacific/Efate"
    },
    {
        "label": "Vatican City, Vatican (Holy Sea)",
        "value": "Europe/Rome"
    },
    {
        "label": "San Carlos, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "San Felipe, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "San Juan De Los Morros, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "La Asuncion, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Guasdualito, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Barinas, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Valera, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Cabimas, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Carora, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Guanare, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Puerto la Cruz, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Anaco, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Los Teques, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Valle de la Pascua, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Ocumare del Tuy, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Carupano, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Trujillo, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Santa Rita, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Machiques, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "San Carlos del Zulia, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Puerto Cabello, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Acarigua, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Upata, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "El Manteco, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Chaguaramas, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Barcelona, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "El Tigre, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Maiquetia, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Calabozo, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Zaraza, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Altagracia de Orituco, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Tucupita, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Porlamar, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "San Fernando de Apure, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Barquisimeto, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Maturin, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Cumana, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Coro, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Punto Fijo, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "La Esmeralda, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Ciudad Bolivar, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "El Dorado, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Maracay, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Merida, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Puerto Ayacucho, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "San Cristobal, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Valencia, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Ciudad Guayana, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Maracaibo, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Caracas, Venezuela",
        "value": "America/Caracas"
    },
    {
        "label": "Tay Ninh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Luan Chau, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Bac Kan, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Lang Son, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Son La, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Tuyen Quang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Yen Bai, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hai Duong, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Thai Binh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Tuy Hoa, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Thu Dau Mot, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Dong Ha, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Cao Lanh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Truc Giang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Tra Vinh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Vinh Long, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Cao Bang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hong Gai, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Cam Pha, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Lao Chi, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hoa Binh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Son Tay, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Ninh Binh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Viet Tri, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Bac Giang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Ha Tinh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Buon Me Thuot, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Da Lat, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Phan Rang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hon Quan, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Kon Tum, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Quang Ngai, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Quang Tri, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Vung Tau, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Phan Thiet, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Long Xuyen, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Chau Doc, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Rach Gia, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Tan An, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "My Tho, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Bac Lieu, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Ca Mau, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Soc Trang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Ha Giang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Thai Nguyen, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Thanh Hoa, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Nam Dinh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Vinh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Dong Hoi, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Play Ku, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Nha Trang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Cam Ranh, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Qui Nhon, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hue, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Bien Hoa, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Can Tho, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Haiphong, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Da Nang, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Hanoi, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Ho Chi Minh City, Vietnam",
        "value": "Asia/Ho_Chi_Minh"
    },
    {
        "label": "Bir Lehlou, Western Sahara",
        "value": "Africa/El_Aaiun"
    },
    {
        "label": "Al Bayda, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "'Ataq, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Marib, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Dhamar, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Ibb, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Ash Shihr, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Zabid, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Hajjah, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Lahij, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Al Ghaydah, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Rida, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Hadiboh, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Saywun, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Sadah, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Al Hudaydah, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Sayhut, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Al Mukalla, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Taizz, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Aden, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Sanaa, Yemen",
        "value": "Asia/Aden"
    },
    {
        "label": "Kawambwa, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Nchelenge, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Chinsali, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kasama, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kapiri Mposhi, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mumbwa, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Chingola, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Chililabombwe, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Nyimba, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Lundazi, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Chipata, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mwinilunga, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kasempa, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Solwezi, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Choma, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mongu, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kaoma, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Sesheke, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Lukulu, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kalabo, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Senanga, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mansa, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mpika, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mbala, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Luanshya, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Ndola, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Zambezi, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kafue, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mazabuka, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kabwe, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mufulira, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Kitwe, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Livingstone, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Lusaka, Zambia",
        "value": "Africa/Lusaka"
    },
    {
        "label": "Mazowe, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Shamva, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Victoria Falls, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Zvishavane, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Kwekwe, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Plumtree, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Beitbridge, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Gwanda, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Chiredzi, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Masvingo, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Karoi, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Chinhoyi, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Kariba, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Hwange, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Gweru, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Mutare, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Kadoma, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Chitungwiza, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Harare, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Bulawayo, Zimbabwe",
        "value": "Africa/Harare"
    },
    {
        "label": "Copenhagen, Denmark",
        "value": "Europe/Copenhagen"
    },
    {
        "label": "Oakleigh, Australia",
        "value": "Australia/Melbourne"
    },
    {
        "label": "Oak Park, United States of America",
        "value": "America/Chicago"
    }
]

export default cities;
  