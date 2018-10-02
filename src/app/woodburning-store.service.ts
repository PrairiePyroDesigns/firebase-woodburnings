export interface WoodburningDetails {
    title: string;
    size: string;
    material: string;
    dateFinished: string;
    totalTimeTakenMinutes: number;
    totalTimeTakenHours: number;
    imageUrl: string;
    sharedOnline: boolean;
    framed: boolean;
    forSale: boolean;
    sellingPrice: number;
    sold: boolean;
}

// import * as functions from 'firebase-functions';
//
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
//
// firebase.initializeApp({
//   apiKey: 'AIzaSyDSROWgmB9vVLzfDygZen2dAzjZHtklzaM',
//   authDomain: 'my-woodburnings.firebaseapp.com',
//   projectId: 'my-woodburnings'
// });
//
// const firestoreDatabase = firebase.firestore();
//
// // Disable deprecated features
// firestoreDatabase.settings({
//   timestampsInSnapshots: true
// });

// const woodburningData = {
//   'title': "Ornate Butterfly",
//   'size': "8' x 10'",
//   'material': "Russian Birch",
//   'dateFinished': new Date("December 10, 1815"), //update
//   'totalTimeTakenMinutes': 120, //update
//   'totalTimeTakenHours': 2, //update
//   'framed': true,
//   'forSale': true,
//   'sold': false,
//   'sellingPrice': 60,
//   'sharedOnline': true,
//   'imageUrl': "https://google.com" //update
// };

// collection used for all woodburning endpoints
// const collection: AngularFirestoreCollection<Item> = aft.collection('woodburnings')

// export const addNewWoodburningToDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   console.log(woodburningData);
//   // Add a new document with a generated id.
//   firestoreDatabase.collection("woodburnings").put({
//       'title': woodburningData.title,
//       'size': woodburningData.size,
//       'material': woodburningData.material,
//       'date-finished': woodburningData.dateFinished,
//       'total-time-taken-minutes': woodburningData.totalTimeTakenMinutes,
//       'total-time-taken-hours': woodburningData.totalTimeTakenHours,
//       'framed': woodburningData.framed,
//       'for-sale': woodburningData.forSale,
//       'sold': woodburningData.sold,
//       'selling-price': woodburningData.sellingPrice,
//       'shared-online': woodburningData.sharedOnline,
//       'image-url': woodburningData.imageUrl,
//   })
//   .then(function(docRef) {
//       console.log("Woodburning written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding woodburning: ", error);
//   });
// });


// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const editWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const ornateButterflyRef = firestoreDatabase.collection("woodburnings").doc("Ornate Butterfly");
//   // Set the "capital" field of the city 'DC'
//   return ornateButterflyRef.update({
//      isSold: true
//   })
//   .then(function() {
//      console.log("Edited Woodburning from database.");
//      response.send(`Edited Woodburning from database.`);
//   })
//   .catch(function(error) {
//      // The document probably doesn't exist.
//      console.error("Error updating woodburning: ", error);
//   });
// });

// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const deleteWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   firestoreDatabase.collection("woodburnings").doc("Ornate Butterfly 2").delete().then(function() {
//     response.send(`Deleting Woodburning from database.`);
//     console.log("Deleted Woodburning from database.");
//   }).catch(function(error) {
//     console.error("Error removing Woodburning: ", error);
//   });
// });


// afs.collection('woodburnings', ref => ref.orderBy('dateFinished') )
// export const listWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   firestoreDatabase.collection("woodburnings").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   })
// });

// afs.collection('woodburnings', ref => ref.where('name', '==', 'jeff') )
// export const getWoodburningFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const ornateButterflyDocumentRef = firestoreDatabase.collection('woodburnings').doc('Ornate Butterfly');
//   // Will likely need a .then and .catch on this instead of the return below;
//   response.send(`Retrieving Woodburning from database.`);
//   return ornateButterflyDocumentRef;
// });

// export const listForSaleWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const forSaleRef = firestoreDatabase.collection("woodburnings");
//   const query = forSaleRef.where("forSale", "==", true);
//   return query;
// });

//afs.collection('woodburnings', ref => ref.orderBy('forSale') )
//afs.collection('woodburnings', ref => ref.orderBy('isSold') )
// export const listNotSoldWoodburningsFromDB = functions.https.onRequest((request, response) => {
//   console.log(request);
//   const forSaleRef = firestoreDatabase.collection("woodburnings");
//   forSaleRef.where("forSale", "==", true);
//   forSaleRef.where("isSold", "==", false);
//   const query = forSaleRef;
//   return query;
// });