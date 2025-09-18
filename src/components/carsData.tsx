export type Car={id:number,brand:string,model:string,color:string,available:number,favourite:boolean,seats:number,type:string,price:number,info:string,images:string[]}

export function setCarData(id:number,action:string,value:any){
    switch(action){
        case 'favourite':carsData.map(x=>{if(x.id==id)x.favourite=!x.favourite})
    }
}

let carsData:Car[]=[
    {id:1,
    brand:"Toyota",model:'Yaris',color:"White",
    available:69,favourite:false,
    seats:5,type:"Standard",
    price:70,info:"A compact hatchback with great fuel efficiency, easy handling, and seating for up to 5. Ideal for city driving and everyday trips.",images:["../src/Images/RentalCars/1/A.jpg","../src/Images/RentalCars/1/B.jpg","../src/Images/RentalCars/1/C.jpg"]},

    {id:2,
    brand:"Mercedes",model:'Sprinter',color:"Black",
    available:7,favourite:false,
    seats:12,type:"Bus",
    price:140,info:'Spacious and reliable van with seating for up to 12 passengers, large luggage capacity, and air-conditioning. Perfect for group trips, tours, or airport transfers.',
    images:["../src/Images/RentalCars/2/A.jpg","../src/Images/RentalCars/2/B.jpg","../src/Images/RentalCars/2/C.jpg"]},

    

    {id:3,
    brand:"TOYOTA",model:'Hilux Champ',color:"White",
    available:0,favourite:false,
    seats:2,type:"Truck",
    price:60,info:'A rugged and reliable bakkie with a strong load capacity, perfect for work and transport.',
    images:["../src/Images/RentalCars/3/A.jpg","../src/Images/RentalCars/3/B.jpg","../src/Images/RentalCars/3/C.jpg"]},

    {id:4,
    brand:"BMW",model:'X5',color:"Black",
    available:172,favourite:false,
    seats:5,type:"SUV",
    price:170,info:'A luxurious and powerful SUV, premium comfort and advanced features. Perfect for city driving, road trips or special occasions.',
    images:["../src/Images/RentalCars/4/A.jpg","../src/Images/RentalCars/4/B.jpg","../src/Images/RentalCars/4/C.jpg"]},

    
    {id:5,
    brand:"Audi",model:"Q7",color:"Black",
    available:0,favourite:false,
    seats:15,type:"SUV",
    price:130,info:"A premium SUV with seating for 7, luxurious interior, and advanced features. Perfect for family trips or business travel.",
    images:["https://m.atcdn.co.uk/vms/media/a2a264fcf9ef490faa57c187ec2f3c3a.jpg","https://di-uploads-pod16.dealerinspire.com/victorymitsubishi/uploads/2021/06/used-Audi-Q7-Interior-Social.jpg","https://images.harwoods.cloud/02iQ4000007AjJLIA0/a0pQ4000008EyPVIA0/4e710547-adec-4184-9d80-4cefc9819fd4.png?width=1920&height=1280&format=webp"]},

    {id:6,
    brand:"Ford",model:"Transit",color:"White",
    available:0,favourite:false,
    seats:7,type:"Bus",
    price:140,info:"A spacious and reliable van with seating for up to 15 passengers and ample luggage space. Ideal for group travel, tours or airport transfers.",
    images:["https://www.ford.ie/content/dam/guxeu/global-shared/vehicle-images/transit-van/ford-transit-eu-V363_VAN-16x9-1230x692.jpeg.renditions.original.png","https://www.topgear.com/sites/default/files/2024/03/50397444321_5c28a11bdd_k.jpg","https://build.ford.com/dig/Ford/Transit%20Commercial/2025/HD-TILE/Image%5B%7CFord%7CTransit%20Commercial%7C2025%7C1%7C1.%7C101A..130.PYZ..88V.89K.LRL.16C.21G.96K.SRW.64D.RWD.998.58U.BS1.54X.VRE.%5D/EXT/3/vehicle.png"]},

    {id:7,
    brand:"Toyoya",model:"Coaster",color:"White",
    available:8,favourite:false,
    seats:23,type:"Bus",
    price:200,info:"Durable bus perfect for long-distance travel or shuttles.",
    images:["https://media.cdntoyota.co.za/toyotacms23/attachments/clpjy9nfe041l1dakbzg5pc93-coaster-accessories-601x460.desktop.png","https://media.cdntoyota.co.za/toyotacms23/attachments/clptrlmhq01xcusak1th50fy4-coaster-design-ig-01.desktop.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_279,q_auto,c_fill,f_auto,fl_lossy/auto-client/750a7b801531a8f5d0099607566ef158/10083_1_toyota_coaster_rear_shotjpg_1_1920x1080.jpg"]},

    {id:8,
    brand:"Isuzu",model:"D-Max",color:"Orange",
    available:0,favourite:false,
    seats:4,type:"Truck",
    price:110,info:"Isuzu D-Max – A tough and reliable pickup truck with strong load capacity, and excellent off-road performance. Perfect for work, travel, or adventure.",
    images:["https://topauto.co.za/wp-content/uploads/2023/10/2024-Isuzu-D-Max-V-Cross-Header.jpg","https://cdn.mattaki.com/isuzu/page-builder/content-pieces/4f86c202-93ef-429c-af8e-5bb01a6adca3/image.jpg","https://cdn.prod.website-files.com/5e95cf7028fba51eba3a080b/633bd76022ba2553729e551c_Isuzu%20D-Max%203.0%20Ddi%20Double%20Cab%20V-Cross%204x4%20TopGear%20SA%20Front%20(1).jpg"]},

    {id:9,
    brand:"Hyundai",model:"Elantra",color:"Blue",
    available:74,favourite:false,
    seats:4,type:"Standard",
    price:90,info:"A stylish and efficient sedan with seating for 5 or 5, comfortable interior, and great fuel economy. Perfect for city driving and daily trips.",
    images:["https://vehicle-images.dealerinspire.com/stock-images/chrome/30e45e2848d0db63b0b20acdda401609.png","https://www.netcarshow.com/Hyundai-Elantra_Blue-2010-Interior.4d1f3908.jpg","https://content.homenetiol.com/2000292/2192701/0x0/stock_images/8/cc_2025HYC19_02_640/cc_2025HYC191980234_02_640_YP5.jpg"]},

    {id:10,
    brand:"Mercedes",model:"C-Class",color:"White",
    available:0,favourite:false,
    seats:4,type:"Standard",
    price:190,info:"A premium sedan with luxurious interior, and advanced features. Perfect for business trips or stylish city driving.",
    images:["https://s3.amazonaws.com/cka-dash/017-0424-CMD156/model2.webp","https://s1.cdn.autoevolution.com/images/news/gallery/mercedes-c-class-finally-gets-its-star-studded-mid-cycle-refresh-albeit-only-digitally_3.jpg","https://lh3.googleusercontent.com/N6DQgiYtok6kjF2IS5Bvt2fmpECJAdPde-sD4uJsBvhK3DwDZdusxZ-fDkORzSLSuG31F6MUttjNFSdiEjmF9YNOXTJkmTf64Q=s1200"]},

    {id:11,
    brand:"Kawasaki",model:"Ninja-400",color:"",
    available:29,favourite:false,
    seats:1,type:"Bike",
    price:40,info:"A sporty and agile bike with lightweight design, and powerful performance. Perfect for city rides and weekend adventures.",
    images:["https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/kawasaki-select-model-lime-green-1676441525643.png?q=80","https://upload.wikimedia.org/wikipedia/commons/6/6f/Kawasaki_Ninja_400_KRT_Edition_%28facelift_model%29_right_side.jpg","https://i.pinimg.com/736x/6b/0c/91/6b0c91fe640772b9d2d5e708c238370e.jpg"]},

    {id:12,
    brand:"Raptor",model:"200 Buggy",color:"Black and White",
    available:380,favourite:false,
    seats:2,type:"Bike",
    price:45,info:"A fun and nimble off-road buggy with seating for 2, perfect for adventure and thrill rides on rough terrain.",
    images:["https://gokartsusa.com/images/products/detail/Tarzan_200_Gokart_DF200GKR_22.1.jpg","https://gokartsusa.com/images/products/detail/DF200GKRSilver01.jpg","https://bdxperformance.com/cdn/shop/products/20181223_121554_b13eba8d-4dbf-419d-b965-fca24dd5d6f0.jpg?v=1653512854&width=4096"]},

     {id:13,
    brand:"Volkswagen ",model:"Jetta",color:"Blue",
    available:240,favourite:false,
    seats:4,type:"Standard",
    price:70,info:"A reliable and comfortable sedan with smooth handling, and great fuel efficiency. Ideal for city driving and daily trips.",
    images:["https://vehicle-images.dealerinspire.com/stock-images/chrome/aa2d466e8d44085e8a7f00f2c8c65742.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAhd8EWTTOiMouyK_ckOA18ll1htLo9a8ygrnHmA88rjcDJAuWXSb3Dz1PH8C3dPrkbQ&usqp=CAU","https://car-images.bauersecure.com/wp-images/14014/001_vw_jetta.jpg"]},

     {id:14,
    brand:"KTM",model:"Duke 390",color:"Orande",
    available:0,favourite:false,
    seats:1,type:"Bike",
    price:50,info:"A lightweight and agile bike with sharp handling, and sporty performance. Perfect for city rides and weekend adventures.",
    images:["https://www.jimaimracing.co.uk/wp-content/uploads/2023/12/390-duke-24-orange-rf-1.jpg","https://wallpapers.com/images/hd/duke-390-pictures-x1v8gh3ksjgjcx64.jpg","https://media.zigcdn.com/media/model/2025/Mar/ktm-390-duke-right-side-view_600x400.jpg"]},

     {id:15,
    brand:"Isuzu",model:"NQR",color:"White",
    available:120,favourite:false,
    seats:3,type:"Truck",
    price:150,info:"A durable and powerful truck designed for heavy loads and reliable transport. Perfect for work and commercial use.",
    images:["https://www.isuzuphil.com/storage/app/media//n-series/2022/NQR75L.png","https://www.isuzucv.com/images/us/nseries/ev/interior_hero.webp","https://eu.amcdn.co.za/-id-79803339.thumb.webp?width=800"]},

     {id:16,
    brand:"Toyota",model:"RAV4",color:"Silver",
    available:17,favourite:false,
    seats:5,type:"SUV",
    price:110,info:"A compact and versatile SUV with fuel-efficiency and reliable. Perfect for city driving, road trips, and everyday adventures.",
    images:["https://global.toyota/pages/models/images/rav4/rav4_ogp_02.jpg","https://toyotaconnect.co.za/wp-content/uploads/2021/09/RAV_article_2.jpg","https://images.hgmsites.net/med/2025-toyota-rav4-hybrid-xse-awd-gs-angular-rear-exterior-view_100961626_m.webp"]},

    ]



    
export default carsData
