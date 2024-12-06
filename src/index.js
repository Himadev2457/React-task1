import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sample from './SampleComp'
// import {Table} from './Task2.js'
// import Text from './Task1.js'
// import Component from './Task3.js'
// import Main from './Task4.js'
// import ProfileCard from './day6/Day6.js';
// import Notification from './day6/NotificationCard.js'
// import Accordian from './Bootstrap/BoostrapTask1';
// import Parent from './Day8/Parentcomp'
// import Practice from   '../src/jsx/Practice.jsx';
// import Image from './useImage/Image';
// import Parent from './props/Sparent';
// import FuncLifeCycle from './day/day';
import ButtonComponent from './Component/button';
// const products = [
//   {
//         id: 1,
//         title:
//           "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
//         price: 773,
//         description:
//           "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
//         brand: "sony",
//         model: "WH-1000XM3",
//         color: "silver",
//         category: "audio",
//         discount: 11,
//       },
//       {
//         id: 2,
//         title: "Microsoft Xbox X/S Wireless Controller Robot White",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
//         price: 57,
//         description:
//           "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
//         brand: "microsoft",
//         model: "Xbox X/S",
//         color: "white",
//         category: "gaming",
//         popular: true,
//         discount: 4,
//       },
//       {
//         id: 3,
//         title:
//           "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
//         price: 384,
//         description:
//           "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
//         brand: "logitech G",
//         model: "G733 LIGHTSPEED",
//         color: "white",
//         category: "gaming",
//         popular: true,
//         discount: 3,
//       },
//       {
//         id: 4,
//         title:
//           "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
//         price: 362,
//         description:
//           "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise cancelling is automatically optimized based on your wearing conditions and environment.\r\nIndustry-leading call quality with our Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm\r\nMagnificent Sound, engineered to perfection with the new Integrated Processor V1\r\nCrystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
//         brand: "song",
//         model: "WH1000XM5/SMIN",
//         color: "white",
//         category: "audio",
//         popular: true,
//         discount: 11,
//       },
//       {
//         id: 5,
//         title:
//           "Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
//         price: 265,
//         description:
//           "Welcome to the dawn of a new era with URBANISTA LOS ANGELES, the world’s first solar-charging premium wireless headphoneS powered by Powerfoyle solar cell material. Using ADVANCED GREEN TECHNOLOGY, Los Angeles converts all light, outdoor and indoor, into energy to deliver virtually infinite playtime. Los Angeles never stops charging when exposed to light, providing you with a nonstop audio experience. With Los Angeles, you’re always in complete control of your audio experience. Just the press of a button activates advanced hybrid Active Noise Cancelling, instantly reducing unwanted background noise, or switches on Ambient Sound Mode so you can stay aware of important surrounding sounds.",
//         brand: "urbanista",
//         model: "Los Angeles",
//         color: "sand gold",
//         category: "audio",
//         popular: true,
//         discount: 19,
//       },
//       {
//         id: 6,
//         title:
//           "Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
//         price: 5,
//         description:
//           "Ergonomically angled to fit perfectly in your ear canal that provides long lasting comfort for every day usage.\r\nFeatures 1.25 meter long cable & L-shaped 3.5mm jack to connect with your phone. Due to the L-shape, the connector will deliver a strong & durable life. Earphones are compatible with Android, iOS & Windows devices with jack.\r\nPowerful 10 mm drivers & aluminum sound chamber for super extra bass and clear sound for the best music & calling experience.\r\nHigh-quality silicone earbuds, which are gentle on skin without compromising the comfortable fit on the ears.\r\nIn-line microphone with a durable multi-function button to play/pause your music, and answer/end your calls, all with just one tap.",
//         brand: "xiaomi",
//         model: "Mi Earphones Basic Blue",
//         color: "Blue",
//         category: "audio",
//       },
//       {
//         id: 7,
//         title:
//           "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
//         price: 12,
//         description:
//           "Rockerz 370 come equipped with latest Bluetooth v5.0 for instant wireless connectivity\r\nThe powerful 300mAh battery provides up to 8 Hours of audio bliss\r\n40mm Dynamic Drivers supply immersive High Definition sound\r\nThe headset has padded earcups for a comfortable experience\r\nThe headphone has been ergonomically and aesthetically designed for a seamless experience\r\nOne can connect to Rockerz 370 via dual modes for connectivity in the form of Bluetooth and AUX\r\n1 year warranty from the date of purchase.",
//         brand: "boat",
//         model: "Rockerz 370",
//         color: "Black",
//         category: "audio",
//       },
//       {
//         id: 8,
//         title: "Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691073671025-galaxy S21 FE.jpg",
//         price: 434,
//         description:
//           "Pro-grade Camera with AI Single Take, Portrait Mode, Night Mode and 30X Space zoom. Dual Recording: Film in both wide and selfie angles at the same time | 12MP F1.8 Main Camera (Dual Pixel AF & OIS) + 12MP UltraWide Camera (123° FOV) + 8MP Telephoto Camera (3x Optic Zoom, 30X Space Zoom, OIS) | 32 MP F2.2 Front Camera.\r\n16.28cm (6.4-inch) Dynamic AMOLED 2X Display with120Hz Refresh rate for Smooth scrolling. Intelligent Eye Comfort Shield, New 19.5:9 Screen Ratio with thinner bezel, 1080x2340 (FHD+) Resolution.\r\n5G Ready with Octa-core Exynos 2100 (5nm) Processor. Android 12 operating system. Dual Sim.\r\nIconic Contour Cut Design with 7.9 mm thickness. Gorilla Glass Victus and IP68 Water Resistant .",
//         brand: "samsung",
//         model: "Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)",
//         color: "Lavender",
//         category: "mobile",
//         discount: 9,
//         onSale: true,
//       },
//       {
//         id: 9,
//         title:
//           "Amkette EvoFox Elite Ops Wireless Gamepad for Android TV | Google TV | 8+ Hours of Play Time | Zero Lag Connectivity Upto 12 Feets | USB Extender for TV Included | - Dusk Grey",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
//         price: 18,
//         description:
//           "The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance.\r\nThis Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play!\r\nThe Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode.\r\nThe gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies.",
//         brand: "Amkette",
//         model: "Woburn II Bluetooth",
//         color: "gray",
//         category: "gaming",
//         discount: 3,
//       },
//       {
//         id: 10,
//         title:
//           "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",
//         price: 760,
//         description:
//           "Pro-grade Camera that lets you make your nights epic with Nightography: It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.\r\nVisionBooster outshines the sun: Stunning 120Hz Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight.\r\n4nm processor, our fastest chip yet: Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nSleek design in a range of colors lets you express yourself how you like. The slim bezels flow into a symmetrical polished frame for an expansive, balanced display. Corning Gorilla Glass Victus+ on the screen and back panels.",
//         brand: "samsung",
//         model: "Samsung Galaxy S22 5G",
//         color: "White",
//         category: "mobile",
//         discount: 29,
//       },
//       {
//         id: 11,
//         title: "Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) ",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074776147-galaxy S22 ultra 5G.jpg",
//         price: 1147,
//         description:
//           "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.\r\n5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nThe Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.",
//         brand: "samsung",
//         model: "Samsung Galaxy S22 Ultra 5G",
//         color: "Burgundy",
//         category: "mobile",
//         discount: 29,
//         onSale: true,
//       },
//       {
//         id: 12,
//         title: "Poco by Xiaomi F1 Steel Blue, 6GB RAM, 64GB Storage",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078463674-poco f1.jpg",
//         price: 132,
//         description:
//           "2MP+5MP dual camera | 20MP front facing camera\r\n15.69 centimeters (6.18-inch) IPS (in-cell) multi-touch capacitive touchscreen with 2246 x 1080 pixels resolution, 403 ppi pixel density\r\nMemory, Storage & SIM: 6GB RAM, 64GB internal memory expandable up to 128GB | Dual SIM (nano+nano) dual-standby (4G+4G)\r\nAndriod Oreo v8.1 operating system with 2.8GHz Qualcomm Snapdragon 845 octa core processor, 8xKyro cores/10 nm architecture\r\n4000mAH lithium-ion battery with quick charge 3.0 to keep you going all-day long\r\n1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
//         brand: "xiaomi",
//         model: "Poco F1",
//         color: "steel blue",
//         category: "mobile",
//         popular: true,
//       },
//       {
//         id: 13,
//         title: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075307831-galaxy M14 5G.jpg",
//         price: 187,
//         description:
//           "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color\r\n50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera\r\nSuperfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with Letest Android 13,One UI Core 5.0,\r\n6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nGet up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G.",
//         brand: "samsung",
//         model: "Samsung Galaxy M14 5G",
//         color: "Smoky Teal",
//         category: "mobile",
//         discount: 11,
//       },
//       {
//         id: 14,
//         title: "Apple iPhone 14 (128 GB) - Blue",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075659827-iPhone 14.jpg",
//         price: 809,
//         description:
//           "15.40 cm (6.1-inch) Super Retina XDR display\r\nAdvanced camera system for better photos in any light\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nVital safety technology — Crash Detection calls for help when you can’t\r\nAll-day battery life and up to 20 hours of video playback\r\nIndustry-leading durability features with Ceramic Shield and water resistance",
//         brand: "apple",
//         model: "iPhone 14",
//         color: "Blue",
//         category: "mobile",
//         discount: 9,
//       },
//       {
//         id: 15,
//         title: "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone 14 pro max.jpg",
//         price: 1810,
//         description:
//           "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 29 hours of video playback\r\nVital safety technology — Crash Detection can detect a severe car crash and call for help",
//         brand: "apple",
//         model: "iPhone 14 Pro Max",
//         color: "Deep Purple",
//         category: "mobile",
//         popular: true,
//       },
//       {
//         id: 16,
//         title: "Apple iPhone 14 Pro (256 GB) - Gold",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691076020478-iPhone 14 pro.jpg",
//         price: 1546,
//         description:
//           "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 23 hours of video playback\r\nVital safety technology — Crash Detection calls for help when you can’t",
//         brand: "apple",
//         model: "iPhone 14 Pro",
//         color: "Golden",
//         category: "mobile",
//       },
//       {
//         id: 17,
//         title: "Apple iPhone 12 (256GB) - Green",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691077233139-iPhone 12.jpg",
//         price: 844,
//         description:
//           "6.1-inch (15.5 cm diagonal) Super Retina XDR display\r\nCeramic Shield, tougher than any smartphone glass\r\nA14 Bionic chip, the fastest chip ever in a smartphone\r\nAdvanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\r\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\r\nIndustry-leading IP68 water resistance\r\nSupports MagSafe accessories for easy attach and faster wireless charging\r\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
//         brand: "apple",
//         model: "iPhone 12 256GB Green",
//         color: "Green",
//         category: "mobile",
//       },
//       {
//         id: 18,
//         title:
//           "Xiaomi 12 Pro | 5G (Noir Black, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50+50+50MP Flagship Cameras (OIS) | 10bit 2K+ Curved AMOLED Display",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691077711136-xiaomi 12 pro 5g.jpg",
//         price: 507,
//         description:
//           "The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best.\r\nThe 6.73'' WQHD+ 120Hz AMOLED display with AdaptiveSync Pro is a master in clarity, brightness and smoothness. The display is certified A+ by DisplayMate & is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus and comes with a In-display fingerprint sensor\r\nThe flagship Snapdragon 8 Gen 1, 4nm processor is designed to provide groundbreaking performance. The super-big 2900mm² vapour chamber, along with three layers of massive graphite sheets provides an advanced cooling system.\r\nThe 120W in-box HyperCharger can fully charge the massive 4600mAh battery in 18 minutes. The device also supports upto 50W of Wireless Turbo charging.",
//         brand: "xiaomi",
//         model: "T21",
//         color: "Noir Black",
//         category: "mobile",
//         discount: 17,
//         onSale: true,
//       },
//       {
//         id: 19,
//         title:
//           " Xiaomi 11T Pro 5G Hyperphone (Meteorite Black, 8GB RAM, 256GB Storage) |SD 888|120W HyperCharge|Segment's only Phone with Dolby Vision+Dolby Atmos",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078241728-xiaomi 11T Pro 5G.jpg",
//         price: 507,
//         description:
//           'The 5G enabled flagship Snapdragon 888 chipset is designed on a 5nm fab process and is paired with LPDDR5 RAM and UFS 3.1 storage to ensure ultra-smooth performance and seamless multitasking experience.\r\nThe 6.67" FHD+ true 10-bit AMOLED display has a 120 Hz refresh rate along with 480Hz touch sampling rate. This Displaymate A+ certified panel brings vivid picture, smoother and faster touch response. It also comes with Dolby Vision, HDR 10+ certification to ensure unparalled multimedia viewing experience. Also the display is protected by Corning Gorilla Victus glass.\r\nThe flaship 108MP HM2 sensor, 8MP Ultra-Wide sensor and 5MP TeleMacro sensor ensures flawless photography as well as Videography in all scenarios and lighting conditions. The device supports 8K video recording and comes with several easy-to-use photography and videography modes so that everyone can capture proffessional grade images and videos with least effort.',
//         brand: "xiaomi",
//         model: "11T Pro",
//         color: "Meteorite Black",
//         category: "mobile",
//         popular: true,
//         discount: 7,
//       },
//       {
//         id: 20,
//         title: "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075065521-galaxy M13.jpg",
//         price: 140,
//         description:
//           "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nUpto 12GB RAM with RAM Plus | 128GB internal memory expandable up to 1TB| Dual Sim (Nano)\r\n50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam\r\nAndroid 12,One UI Core 4 with a powerful Octa Core Processor\r\n16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color",
//         brand: "samsung",
//         model: "Samsung Galaxy M13",
//         color: "Aqua Green",
//         category: "mobile",
//         discount: 9,
//       },
//       {
//         id: 21,
//         title:
//           "Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078965685-redmi note 12 5g.jpg",
//         price: 229,
//         description:
//           "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate\r\nProcessor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz\r\nCamera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera\r\nBattery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity\r\nMemory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)",
//         brand: "xiaomi",
//         model: "Redmi Note 12 5G",
//         color: "Matte Black",
//         category: "mobile",
//       },
//       {
//         id: 22,
//         title:
//           "Sennheiser HD 400s Wired Over The Ear Headphone with Mic (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055730759-headphone4.jpg",
//         price: 54,
//         description:
//           "Renowned Sennheiser sound quality for a unique listening experience\r\nBuilt-in microphone and remote for call and music control\r\nClosed-back around-ear headphones reduce unwanted background noise for your comfort\r\nLightweight, foldable headphones for easy on-the-go storage\r\nImpedance: 18 Ω ; Frequency response (Microphone): 100 – 10,000 Hz (-10 dB) ; Frequency response (Headphones): 18–20,000 Hz (-10 dB) ; Jack plug: 3.5mm",
//         brand: "Sennheiser",
//         model: "HD 400s",
//         color: "Black",
//         category: "audio",
//         discount: 9,
//       },
//       {
//         id: 23,
//         title:
//           "Ant Esports GP310 Wireless Gamepad, Compatible for PC & Laptop (Windows 10/8 /7, Steam) / PS3 / Android",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255692675-ant sport.jpg",
//         price: 14,
//         description:
//           "Compatibility – PC / Laptop Computer(Windows 10/8/7/XP), Steam, Play Station 3(PS3), Android Mobile Phone*/Tablet*/the device needs support OTG function( * not all Android phones are supported, check your device before purchasing for Android devices, Limited games can play on it which are supported to android games)\r\nExcellent Design – Equipped with 2.4Ghz wireless technology, supports up to 10m range | Wear-resistant Anti-slip Joystick | Cool Appearance | Comfortable Grip\r\nPlug & Play -Only for PC games supporting X input mode, Android mobile games supporting Android mode, Play Station 3. No need to install drivers except for Windows XP\r\nFeature - Multi-mode : X input, D input, Android, PS3 | Vibration Feedback Function",
//         brand: "ant esports",
//         model: "GP310",
//         color: "black",
//         category: "gaming",
//         popular: true,
//         discount: 3,
//         onSale: true,
//       },
//       {
//         id: 24,
//         title:
//           "Logitech G502 Lightspeed Wireless Gaming Mouse, 25K Hero Gaming Sensor, 25600 DPI, RGB, Ultra-Light, 11 Programmable Buttons, Long Life Battery, PowerPlay-Compatible, PC - Black",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257315660-logitech.jpg",
//         price: 19,
//         description:
//           "COLORFUL LIGHTSYNC RGB : Play in colour with our most vibrant LIGHTSYNC RGB featuring colour wave effects that are customisable across 16.8 million colours. 8,000 DPI sensor.\r\nCLASSIC,GAMER TESTED DESIGN : Play comfortably and with total control. The simple 6-button layout and classic gaming shape form a comfortable, time-tested and loved design\r\nMECHANICAL SPRING BUTTON TENSIONING: Primary buttons are mechanical and tensioned with durable metal springs for reliability, performance and an excellent feel\r\nCUSTOMIZABLE SETTINGS : To suit the sensitivity you like with Logitech G HUB gaming software and cycle easily through up to 5 DPI settings; SYSTEM REQUIREMENTS : Windows 7 or later, macOS 10.11 or later, Chrome OSTM, USB port, Internet access for Logitech Gaming Software (optional)\r\nStyle Name: G102 2nd Gen",
//         brand: "logitech G",
//         model: "Logitech G502",
//         color: "black",
//         category: "gaming",
//         discount: 3,
//       },
//       {
//         id: 25,
//         title: "Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074179466-galaxy S23 5G.jpg",
//         price: 905,
//         description:
//           "More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.\r\nDesigned with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.\r\nPower for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.",
//         brand: "samsung",
//         model: "Samsung Galaxy S23",
//         color: "Green",
//         category: "mobile",
//         popular: true,
//         discount: 21,
//         onSale: true,
//       },
//       {
//         id: 26,
//         title:
//           "Handheld Game Console 5.1 inch Pro Retro Games Consoles Built-in Classic Games Rechargeable Battery Portable Style Game Consoles X12",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692458709910-51DkZC39goL._SL1000_.jpg",
//         price: 163,
//         description:
//           "🎮900+ Selected Classic Games: This X12 game console has nostalgic 900 games, unique game file and folder list systematically, find the game you want to play by accurate original English name and number more quickly.\r\n🎮Customized Professional System: Exclusive customization console system, English default setted and Save & Load features, no more lost datas and start again, providing excellent gaming experience.\r\n🎮Quick to Go: The handheld game console with super compact size, easy to carry wherever you go on a business trip, traveling, camping, also equip with bigger battery for long playing.\r\n🎮Multimedia Gaming Device: With multifunction designing, you can reach more entertainment function like playing game, watching movie, music, TXT fiction etc.\r\n🎮Perfect Gifts for Kids & Nostalgia: This mini gaming player is a perfect companion to keep your children occupied and improve their hand-eye coordination.",
//         brand: "CredevZone",
//         model: "X12 Red&blue",
//         category: "gaming",
//         discount: 9,
//       },
//       {
//         id: 27,
//         title:
//           "Sony PS5 PlayStation Console+God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692459170997-61iHq6qV0gL._SL1422_.jpg",
//         price: 708,
//         description:
//           'Maximize your play sessions with near instant load times for installed PS5 games.\r\nThe custom integration of the PS5 console\'s systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.\r\nImmerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games.\r\nPlay your favorite PS5 games on your stunning 4K TV.\r\nThose who break fate: Atreus seeks knowledge to help him understand the prophecy of "Loki" and what role he is to play in Ragnarök. Kratos must decide whether he will be chained by the fear of repeating his mistakes or break free of his past to be the father Atreus needs.',
//         brand: "sony",
//         model: "ps5",
//         category: "gaming",
//         popular: true,
//         discount: 11,
//       },
//       {
//         id: 28,
//         title:
//           "Apple AirPods (3rd Generation) with Lightning Charging Case ​​​​​​​",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691054448465-earbud2.jpg",
//         price: 230,
//         description:
//           "Spatial audio with dynamic head tracking places sound all around you\r\nAdaptive EQ automatically tunes music to your ears\r\nAll-new contoured design",
//         brand: "apple",
//         model: "AirPods 3rd Generation",
//         color: "White",
//         category: "audio",
//       },
//       {
//         id: 29,
//         title:
//           "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Blue)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692939683873-headphone1.jpg",
//         price: 60,
//         description:
//           "With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.\r\nGreat sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.\r\nBoost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.\r\nDesigned to be lightweight and comfortable for all-day use.\r\nCrystal clear hands-free calling with built-in mic.\r\nMultipoint connection allows you to quickly switch between two devices at once.",
//         brand: "sony",
//         model: "WH-CH520",
//         color: "blue",
//         category: "audio",
//         discount: 3,
//       },
//       {
//         id: 30,
//         title:
//           "Sony Srs-Xb13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life, Type-C, Ip67 Waterproof, Dustproof, with Mic, Loud Audio for Phone Calls/Work from Home (Black), Small",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692940742197-speaker1.jpg",
//         price: 42,
//         description:
//           "Waterproof and dustproof with an IP67 rating, this speaker is just as good outside as it is inside.\r\nGet up to 16 hours of battery life to keep the party going.\r\nNeed to make a call? No problem. Whether you’re at home or out and about, the built-in mic lets you enjoy hands-free calling straight through your speaker.\r\nIn one tap, the Sony SRS-XB13 enables quick effortless Bluetooth pairing with you Android devices.\r\nA passive radiator works together with a full-range speaker to enhance low-end tones, giving bass a boost.",
//         brand: "sony",
//         model: "SRS-XB13",
//         color: "black",
//         category: "audio",
//         onSale: true,
//         discount: 3,
//       },
//       {
//         id: 31,
//         title:
//           "Panasonic RB-M300B Deep Bass Wireless Bluetooth Immersive Headphones with XBS DEEP and Bass Augmentation (Sand Beige), RB-M300B-C",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056086962-headphone.jpg",
//         price: 289,
//         description:
//           "ULTRA-LOW BASS RESPONSE Enjoy powerful deep bass, without compromising the depth and balance of the track\r\nWIRELESS PERFORMANCE Reliable Bluetooth connectivity with built-in microphone\r\n50 HOURS PLAYBACK On a full four-hour charge, plus quick 15min charge for 3 hours playback\r\nDUO POWER DRIVERS Two 40 mm Neodymium driver units provide deep, yet delicate bass sound\r\nHIGH-COMFORT FIT Soft cushioned headband and earpads fit gently over the ears for hours of anytime anywhere comfort",
//         brand: "panasonic",
//         model: "Panasonic Deep Bass Wireless Bluetooth Immersive",
//         color: "White",
//         category: "audio",
//         popular: true,
//         discount: 15,
//       },
//       {
//         id: 32,
//         title:
//           "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Beige)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941955003-headphone2.jpg",
//         price: 54,
//         description:
//           "With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.\r\nGreat sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.\r\nBoost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.\r\nDesigned to be lightweight and comfortable for all-day use.",
//         brand: "sony",
//         model: "WH-CH520",
//         color: "Taupe",
//         category: "audio",
//         discount: 3,
//       },
//       {
//         id: 33,
//         title:
//           'boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback, 1.75" Driver, IPX7 & TWS Feature(Black)',
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692943845065-71vI6nfLtYL._SL1500_.jpg",
//         price: 13,
//         description:
//           'Stone 180 comes equipped with 1.75" Dynamic Drivers for powerful immersive sound\r\nIts power packed 800mAh battery ensures extended indulgence in musical bliss with up to 10 hours of play time, Charging Time : 1.5 Hours\r\nThe speaker offers 5W of premium High Definition sound, Frequency Response - 70Hz-70kHz\r\nStone 180 supports instant wireless connectivity with latest Bluetooth v5.0\r\nConnect two Stone 180’s and turn the scene right around with double the volume at the same clarity level, get the party started anywhere, anytime with the boAt Stone 180\r\nIt is IPX7 rated which offers protection against sweat and water.',
//         brand: "boat",
//         model: "Stone 180",
//         color: "black",
//         category: "audio",
//         discount: 2,
//       },
//       {
//         id: 34,
//         title:
//           "Mivi Play Bluetooth Speaker with 12 Hours Playtime. Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Black",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692944238682-61UJnlIHF9S._SL1500_.jpg",
//         price: 10,
//         description:
//           "Studio Grade Sound: The Mivi Play Bluetooth speaker delivers a deep and powerful sound with a solid bass to amplify your beats and make you fall in love with every note.\r\nPlay it non-stop: The Mivi Play wireless speaker packs a battery life of up to 12 long hours on a single charge to keep your party going on and on till the break of dawn.\r\nPremium Brag Worthy Design: The Mivi Play portable wireless speaker comes with a sleek design, that makes it numero uno choice for those who love their music in private or with a couple friends!\r\nConnections made stronger: Nobody likes it when their music gets interrupted. Mivi Play’s latest and advanced Bluetooth 5.0 lets you enjoy seamless wireless connectivity, keeping your connections strong and uninterrupted. Now that’s the next generation of wireless bluetooth speakers!",
//         brand: "mivi",
//         model: "Play",
//         color: "black",
//         category: "audio",
//         popular: true,
//         discount: 3,
//       },
//       {
//         id: 35,
//         title:
//           " JBL Go 2, Wireless Portable Bluetooth Speaker with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Blue)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692944486283-8193DNNjZFS._SL1500_.jpg",
//         price: 24,
//         description:
//           "JBL Signature Sound\r\n5 Hours of Playtime under optimum audio settings\r\nWireless Bluetooth Streaming\r\nIPX7 Waterproof design, Battery Type Lithium-ion polymer (3.7V, 730mAh), Charging time (hrs) 2.5\r\nBuilt-in Noise-cancelling Speakerphone\r\nAudio cable input\r\nWhat’s in the box: 1 x JBL GO 2, 1 x Micro USB cable for charging, 1 x Safety Sheet, 1 x Quick Start Guide, 1 x Warranty Card",
//         brand: "JBL",
//         model: "JBLGO2BLU",
//         color: "blue",
//         category: "audio",
//         discount: 4,
//         onSale: true,
//       },
//       {
//         id: 36,
//         title:
//           "Mivi Duopods A25 Bluetooth Truly Wireless in Ear Earbuds with Mic with 40Hours Battery, 13Mm Bass Drivers & Made in India. with Immersive Sound Quality, Voice Assistant, Touch Control (White)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692945068061-61yTSVeLebS._SL1500_.jpg",
//         price: 12,
//         description:
//           "Made in India : From design to manufacturing, Mivi DuoPods A25 is proudly made in India. It is built locally to compete globally..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears\r\nConcert In Your Ears: Need to get away from the ever noisy city life? Simply tune in to the Mivi DuoPods A25 and immerse yourself in the high-quality sound of these wireless earbuds.\r\nStudio Quality Sound: The Mivi DuoPods A25 has a studio quality sound output which makes it one of the best wireless earbuds in the market or anything youve ever tried.\r\n",
//         brand: "Mivi",
//         model: "Duopods A25",
//         color: "white",
//         category: "audio",
//         popular: true,
//         discount: 6,
//       },
//       {
//         id: 37,
//         title:
//           "soundcore by Anker Space Q45 Adaptive Noise Cancelling Headphones, Reduce Noise by Up to 98%, Ultra Long 50H Playtime, App Customization, Hi-Res Sound with Details, Bluetooth 5.3",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056348236-headphone3.jpg",
//         price: 415,
//         description:
//           "98% Less Noise for Your Journey: The fully-upgraded noise cancelling system targets and blocks out a wider range of noises—from plane engines to crying babies. So wherever you go, you can enjoy your personal space.\r\nMake Every Space Your Own: Whether you're indoors, outdoors, commuting, or on a flight, Space Q45's adaptive noise cancelling will automatically select a suitable level to match your location. Also, use the app to choose 1 of 5 noise cancelling levels.\r\nIdeal for Traveling: 50 hours of playtime in noise cancelling mode will cover an around-the-world flight without needing to recharge. In normal mode, get up to 65 hours of playtime and if you are low on battery, charge for 5 minutes for 4 hours of playtime.",
//         brand: "soundcore",
//         model: "Space Q45",
//         color: "Blue",
//         category: "audio",
//         discount: 29,
//       },
//       {
//         id: 38,
//         title:
//           " Marshall Uxbridge Airplay Multi-Room Wireless Speaker with Alexa Built-in - White",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692946110280-81WIcjaGp2L._SL1500_.jpg",
//         price: 266,
//         description:
//           "Loud just got smaller. Uxbridge Voice is engineered to create a thunderous sound from itscompact frame. An advanced setup with high-end components come together to producescreaming highs\r\nConsider this speaker your backstage pass to every song on the planet. Access to the world’s music has never been easier, just ask Alexa to play music.Frequency Range 54-20,000 Hz\r\nFill your home with immersive sound by building a multi-room system with Amazon Echo andother supported Alexa built-in speakers or Airplay 2 enabled speakers.\r\nYou can play music, get answers, manage everyday tasks and easily control smart devicesaround your home – just by using your voice. Alexa can help you listen to your favouritesong, turn up the volume,",
//         brand: "Marshall",
//         model: "Marshall Uxbridge",
//         color: "White",
//         category: "audio",
//         popular: true,
//         discount: 9,
//         onSale: true,
//       },
//       {
//         id: 39,
//         title:
//           " Bang & Olufsen Beosound Balance Wireless Multiroom Speaker, Natural Oak",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692946673658-91xz5VkenTL._SL1500_.jpg",
//         price: 5804,
//         description:
//           "Beosound Balance is a wireless speaker with a cutting-edge audio engine, made to deliver a powerful, dynamic yet sophisticated sound experience for larger living spaces. It is designed for design-conscious consumers preferring a display-friendly interior inspired speaker. One that does not have to take up valuable floor space in the home. Placement up against the wall is ideal for optimal listening, whether from room-filling to focused sound modes. Inspired by interior objects and the use of soft and well-curated materials like natural solid oak wood, seamlessly knitted textile and precision-crafted aluminium components, Beosound Balance is the manifestation of the perfect balance between elegant and approachable beauty and unspoiled, pure sound performance.",
//         brand: "Bang & Olufsen",
//         model: "Beosound Balance",
//         category: "audio",
//         popular: true,
//         discount: 21,
//       },
//       {
//         id: 40,
//         title:
//           "JBL Tune 720BT Wireless Over Ear Headphones with Mic, Pure Bass Sound, Upto 76 Hrs Playtime, Speedcharge, Dual Pairing, Customizable Bass with Headphones App, Lightweight, Bluetooth 5.3 (Blue)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055458260-headphone.jpg",
//         price: 63,
//         description:
//           "JBL PURE BASS SOUND: The JBL Tune 720BT utilizes the renowned JBL Pure Bass sound, the same technology that powers the most famous venues all around the world.\r\nUP TO 76H BATTERY LIFE: Get the most out of your entertainment with up to 76 hours of wireless listening pleasure, and easily recharge the battery in as little as 2 hours using the convenient Type-C USB cable.\r\nQUICK CHARGE: Running low on battery? With a quick 5-minute recharge, you can get an additional 3 hours of music playback to keep the beats going\r\nJBL HEADPHONES APP: By downloading the JBL Headphones app, you can personalize the sound of your Tune 720BT headphones according to your preferences with ease, using the EQ settings. Moreover, the app offers voice prompts in your desired language to guide you through the different headphone features",
//         brand: "jbl",
//         model: "Tune 720BT",
//         color: "Blue",
//         category: "audio",
//         popular: true,
//         discount: 9,
//       },
//       {
//         id: 41,
//         title:
//           " Sony SA-SW5 300W Wireless Subwoofer for HT-A9 and HT-A7000 - Black",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947684843-61T7iilajhL._SL1200_.jpg",
//         price: 629,
//         description:
//           "Experience powerful, booming sound with the SW5 wireless subwoofer for use with HT-A9 & A7000 soundbars.\r\nDeep bass and further clearness and fidelity\r\nWireless connectivity and quick and easy setup\r\nAdd depth with 300W powerful bass",
//         brand: "sony",
//         model: "SA-SW5",
//         color: "black",
//         category: "audio",
//         discount: 9,
//       },
//       {
//         id: 42,
//         title:
//           " DENON Home 350 Wireless Speaker - Powerful Room Filling Sound with Bluetooth, AirPlay 2 and Alexa Built-in - White",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947856684-81xoxBiCcjL._SL1500_.jpg",
//         price: 919,
//         description:
//           "DENON HOME 350 The Denon Home series fills your home with superb wireless sound. The powerful Denon Home 350 with its amazing sound stage takes your music into every corner, even in large rooms. Pair it with another Denon Home 350 for stereo or combine it with other HEOS Built-in products.\r\nUPGRADE TO SUPERB WIRELESS SOUND Enjoy exceptional sound with the Denon Home Series. Stream your favourite music effortlessly and make use of quick pre-selections with just a gentle touch. Experience impressive acoustic performance, based on 110 years of sound innovation.\r\nA MIGHTY PERFORMER. Like every Denon the Denon Home 350 is built to deliver best-in-class audio quality. With advanced acoustic hardware, expertly tuned digital signal processing and premium drivers, the Denon Home 350 delivers the clearest highs and deepest lows. Experience excellence in every beat.",
//         brand: "Denon",
//         model: "DENON HOME 350",
//         color: "white",
//         category: "audio",
//         discount: 9,
//       },
//       {
//         id: 43,
//         title:
//           "JBL Wave 200 Wireless Earbuds (TWS) with Mic, 20 Hours Playtime, Deep Bass Sound, Dual Connect Technology, Quick Charge, Comfort Fit Ergonomic Design, Voice Assistant Support for Mobiles (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055343505-earbud.jpg",
//         price: 24,
//         description:
//           "JBL DEEP BASS SOUND: Feel the sound with the Deep Bass powered by the 8mm Dynamic drivers and add fun to your routine.\r\nUPTO 20 HOURS OF PLAYTIME: With 5 hours in the earbuds and 15 hours in the case, the JBL Wave 200TWS don’t drop until you do.\r\nQUICK CHARGE: Running Low on Charge, worry not. A quick 15min of charge provides you with playtime upto an Hour.\r\nDUAL CONNECT TECHNOLOGY: With the Dual Connect Technology on the Wave 200 TWS, take calls or listen to music with either bud (or both). Choose which one to use and leave the other one in the case to save battery life.",
//         brand: "jbl",
//         model: "JBL",
//         color: "Black",
//         category: "audio",
//       },
//       {
//         id: 44,
//         title:
//           "Sony WF-C700N Bluetooth Truly Wireless Lightest Active Noise Cancellation in Ear Earbuds, Multipoint Connection, 10 mins Super Quick Charge, 20hrs Batt, IPX4 Ratings, Fast Pair, App Support-Black",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692939913875-earphone1.jpg",
//         price: 108,
//         description:
//           "Lightest Earbuds : Focus on your music for as long as you like. These small, lightweight earbuds have an ergonomic surface design for all-day comfort, even for smaller ears.\r\nNoise Cancellation: Cancel out background noise with Noise Sensor Technology or use the Ambient Sound Mode to stay connected to your natural surroundings. Headphones Connect app to control your listening experience.\r\nMultipoint connection: For total convenience, these Bluetooth headphones can be paired with two Bluetooth devices at the same time. So when call comes in your headphones know which device is ringing and connects to the right one automatically.\r\nListen all day, charge in minutes: Enjoy up to 15 hours of listening thanks to the handy charging case.",
//         brand: "sony",
//         model: "WF-C700N",
//         color: "black",
//         category: "audio",
//         popular: true,
//         discount: 9,
//       },
//       {
//         id: 45,
//         title: "New Apple AirPods Max - Pink",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691053838595-headphone2.jpg",
//         price: 723,
//         description:
//           "Apple-designed dynamic driver provides high-fidelity audio\r\nActive Noise Cancellation blocks outside noise, so you can immerse yourself in music\r\nTransparency mode for hearing and interacting with the world around you\r\nSpatial audio with dynamic head tracking provides theater-like sound that surrounds you\r\nComputational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences\r\nDesigned with a knit-mesh canopy and memory foam ear cushions for an exceptional fit",
//         brand: "apple",
//         model: "New Apple AirPods Max - Pink",
//         color: "Pink",
//         category: "audio",
//         onSale: true,
//         discount: 9,
//       },
//       {
//         id: 46,
//         title:
//           "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154515879-819Lw2PE8tL._SL1500_.jpg",
//         price: 138,
//         description:
//           "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz | 178 wide viewing angle\r\nConnectivity: Dual Band Wi-Fi (2.4 GHz/ 5 GHz) | 2 HDMI ports to connect set top box, gaming consoles, DVD or Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ARC | Bluetooth 5.0 | Ethernet | 3.5mm earphone Jack\r\nSound: 20 Watts Output | Dolby Audio | DTS Virtual: X | DTS-HD\r\nSmart TV Features : Fire TV Built-In | Supported Apps: Prime Video | Netflix | Disney+ Hotstar | YouTube | 12000+ apps from App Store | Voice Remote with Alexa | DTH Set-Top Box Integration to switch between DTH TV Channels and OTT apps from home screen | Display Mirroring - Airplay & Miracast | Quad core ARM Cortex-A35 CPU @ 2.0GHz | 1GB RAM + 8GB Internal Storage\r\nDisplay: Metal bezel-less Screen | Vivid Picture Engine\r\nRecommendation: We recommend using 1.5V Alkaline AAA Batteries in your Alexa Voice Remote for a steady performance.",
//         brand: "redmi",
//         model: "L32R8",
//         color: "black",
//         category: "tv",
//         onSale: true,
//         discount: 7,
//       },
//       {
//         id: 47,
//         title:
//           "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154827301-81+JXgPUDLL._SL1500_.jpg",
//         price: 396,
//         description:
//           "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide, Media Home, Tap View, Mobile Camera Support, AI Speaker, Easy Setup, App Casting, Wireless DeX, SmartThings, Smart Hub, IoT Sensor, Web Browser",
//         brand: "samsung",
//         model: "UA43CUE60AKLXL",
//         color: "black",
//         category: "tv",
//         discount: 9,
//       },
//       {
//         id: 48,
//         title:
//           "Mi 125 cm (50 inches) X Series 4K Ultra HD Smart Android LED TV L50M7-A2IN (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694155239807-81UT46-gwRL._SL1500_.jpg",
//         price: 384,
//         description:
//           "Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 hertz | 178° wide viewing angle\r\nConnectivity: Dual Band Wi-Fi (2.4 GHz/ 5 GHz) | 3 HDMI ports to connect latest gaming consoles, set top box, Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ALLM | eARC | Bluetooth 5.0 | Optical | Ethernet | 3.5mm earphone Jack\r\nSound: 30 Watts Output | Dolby Audio, DTS Virtual: X, DTS-HD\r\nSmart TV Features : Android TV 10 | PatchWall 4 with IMDb integration | Kids Mode with Parental Lock | 300+ Free Live Channels | Universal search | Language Universe (16+ Languages) | India's Top 10 | Miracast | Supported Apps: Prime Video | Netflix | Disney + Hotstar | YouTube | Apple TV | 10000+ apps from Play Store | Quad core A55 CPU processor | Chromecast built-in | Ok Google | Auto Low Latency Mode | 2GB RAM + 8GB Storage\r\nDisplay: 4K HDR | Metal Bezel-less Design | Dolby Vision | HDR10 | HLG | Reality Flow MEMC | Vivid Picture Engine | DCI-P3 94% Colour Gam",
//         brand: "mi",
//         model: "Xiaomi TV X50",
//         color: "black",
//         category: "tv",
//         popular: true,
//         discount: 11,
//       },
//       {
//         id: 49,
//         title:
//           " Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694155440745-619--Jabh2L._SL1048_.jpg",
//         price: 444,
//         description:
//           "Resolution: QLED, 4K Ultra HD (3840x2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle\r\nConnectivity: Dual band Wifi | 2 way Bluetooth | HDMI ports 2.1 x 3 (HDMI 1 supports eARC) to connect personal computer, laptop, set top box, Blu-ray speakers or a gaming console | USB ports 2.0 x 1, 3.0 x 1 to connect hard drives or other USB device\r\nSound: 30 Watts Output | High Fidelity Speakers with Dolby Atmos | 5 Sound Modes - Stadium, Standard, Movie, Music, Speech\r\nSmart TV Features: Google TV | Content Recommendations | Watchlist | Personal Profile | Kids Profile | Google Assistant | Built-in Chromecast | Voice enabled Smart Remote | Hotkeys for Quick Access - Netflix, Prime Video, YouTube, Disney+Hotstar | Quad Core Processor 2GB RAM | 16GB Storage",
//         brand: "acer",
//         model: "AR50GR2851VQD",
//         color: "black",
//         category: "tv",
//         discount: 5,
//       },
//       {
//         id: 50,
//         title:
//           "LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver)",
//         image:
//           "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694156089516-71KVQa4N4zL._SL1500_.jpg",
//         price: 1322,
//         description:
//           "Display backlight technology used by the TV \r\nThe number of display pixels in the TV, usually denoted by the number of horizontal pixels multiplies by number of vertical pixels\r\n",
//         brand: "LG",
//         model: "OLED55BXPTA",
//         color: "dark steel silver",
//         category: "tv",
//         discount: 9,
//       },
//     ]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    {/* <Table/> */}
    {/* <Text/> */}
    {/* <Component/> */}
    {/* <Main/> */}
    {/* <Practice/> */}
    {/* <Image/> */}
    {/* <Parent/> */}
    {/* <Main1/> */}
    <ButtonComponent/>
    {/* <FuncLifeCycle/> */}
    {/* <parent login="Admin"/> */}
    {/* <ProfileCard  name="Hima"/>
    <Notification type="liked" name="Hima"/>
    <Notification type="Commented" name="Hima"/>
    <Notification type="shared" name="Hima"/> */}
    {/* <Accordian  title="Hima" city="hyd" role="Developer"/> */}
    {/* {products.map((a,b)=>{return(<Accordian  title={a.title} info={a.description}/>)})} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
