// var nilaiUmam = 0;

// const scores = [80, 90, 72, 60, 85];

// // console.log(scores, "jumlah dari array =", scores.length);
// // console.log("nilai scores pertama:", scores[0]);

// const elements = ["month", "date", "year"];
// // console.log(elements.join());

// // key, value
// let user = {
//   name: "Budi",
//   age: 20,
//   isActive: true,
//   createAt: true,
//   gender: true,
//   address: {
//     city: "Bandung",
//     zipCode: 41151,
//     province: "West Java",
//   },
//   phoneNumber: {
//     countryCode: "62",
//     number: "8827736",
//   },
// };

// // console.log(user.address.zipCode);

// // console.log(Object.keys(user.address));

// const masterDataItems = [
//   {
//     _id: "item:1783061167173",
//     _rev: "1-44353617960486107e8a0fbc6ff0f95f",
//     entity: "item",
//     data: {
//       id: "1783061167173",
//       creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       creator_name: "narawin",
//       editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       editor_name: "narawin",
//       created_at: "1724396607574",
//       updated_at: "1724989541519",
//       status: "active",
//       image_url: null,
//       item_type: "wahana",
//       hpp: "100000",
//       sales_margin: "50",
//       share_profit: "10",
//       total_price: 330000,
//       base_price: "150000",
//       play_estimation: 10,
//       use_queue: true,
//       show_to_booking: false,
//       breakdown_bundling: false,
//       limit_type: "no limit",
//       limit_value: 0,
//       item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//       tenant_id: null,
//       item_category: {
//         id: "26195082-8629-4554-b349-a58bceaa546c",
//         creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         creator_name: "narawin",
//         editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         editor_name: "narawin",
//         created_at: "1724396376892",
//         updated_at: "1724396437336",
//         status: "active",
//         name: "Wahana Air",
//         item_type: "wahana",
//       },
//       bundling_items: [],
//       item_rates: [
//         {
//           id: "6f598503-d87e-42ad-9655-c20219b90b36",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//           price: "200000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396674273",
//             updated_at: "1724396674387",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: ["jumat", "sabtu", "minggu"],
//             holiday_name: null,
//             priority: 2,
//             season_type_id: "99687061-2841-468a-8796-912d65d7b2a2",
//             season_type: {
//               id: "99687061-2841-468a-8796-912d65d7b2a2",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316773493",
//               updated_at: "1724316830656",
//               status: "active",
//               name: "Weekend",
//             },
//           },
//         },
//         {
//           id: "6fa85e74-5cc3-4d02-8154-52455e4cb5ee",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//           price: "150000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396639956",
//             updated_at: "1724396640070",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//         {
//           id: "db6de421-55de-41a9-ad89-81382c68f96c",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "c6267f43-c531-4d7e-8db1-509187d09621",
//           price: "110000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "c6267f43-c531-4d7e-8db1-509187d09621",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1725356858684",
//             updated_at: "1725357961677",
//             status: "active",
//             start_date: "2024-09-03",
//             end_date: "2024-09-30",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//       ],
//       price: "110000",
//       qty: 3,
//       name: "Mie Ayam Original Klasik #338",
//       code: "SLS1783061167173",
//     },
//   },
//   {
//     _id: "item:1783061167173",
//     _rev: "1-44353617960486107e8a0fbc6ff0f95f",
//     entity: "item",
//     data: {
//       id: "1783061167173",
//       creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       creator_name: "narawin",
//       editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       editor_name: "narawin",
//       created_at: "1724396607574",
//       updated_at: "1724989541519",
//       status: "active",
//       image_url: null,
//       item_type: "wahana",
//       hpp: "100000",
//       sales_margin: "50",
//       share_profit: "10",
//       total_price: 330000,
//       base_price: "150000",
//       play_estimation: 10,
//       use_queue: true,
//       show_to_booking: false,
//       breakdown_bundling: false,
//       limit_type: "no limit",
//       limit_value: 0,
//       item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//       tenant_id: null,
//       item_category: {
//         id: "26195082-8629-4554-b349-a58bceaa546c",
//         creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         creator_name: "narawin",
//         editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         editor_name: "narawin",
//         created_at: "1724396376892",
//         updated_at: "1724396437336",
//         status: "active",
//         name: "Wahana Air",
//         item_type: "wahana",
//       },
//       bundling_items: [],
//       item_rates: [
//         {
//           id: "6f598503-d87e-42ad-9655-c20219b90b36",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//           price: "200000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396674273",
//             updated_at: "1724396674387",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: ["jumat", "sabtu", "minggu"],
//             holiday_name: null,
//             priority: 2,
//             season_type_id: "99687061-2841-468a-8796-912d65d7b2a2",
//             season_type: {
//               id: "99687061-2841-468a-8796-912d65d7b2a2",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316773493",
//               updated_at: "1724316830656",
//               status: "active",
//               name: "Weekend",
//             },
//           },
//         },
//         {
//           id: "6fa85e74-5cc3-4d02-8154-52455e4cb5ee",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//           price: "150000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396639956",
//             updated_at: "1724396640070",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//         {
//           id: "db6de421-55de-41a9-ad89-81382c68f96c",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "c6267f43-c531-4d7e-8db1-509187d09621",
//           price: "110000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "c6267f43-c531-4d7e-8db1-509187d09621",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1725356858684",
//             updated_at: "1725357961677",
//             status: "active",
//             start_date: "2024-09-03",
//             end_date: "2024-09-30",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//       ],
//       price: "110000",
//       qty: 3,
//       name: "Mie Ayam Original Klasik #338",
//       code: "SLS1783061167173",
//     },
//   },
//   {
//     _id: "item:1783061167173",
//     _rev: "1-44353617960486107e8a0fbc6ff0f95f",
//     entity: "item",
//     data: {
//       id: "1783061167173",
//       creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       creator_name: "narawin",
//       editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//       editor_name: "narawin",
//       created_at: "1724396607574",
//       updated_at: "1724989541519",
//       status: "active",
//       image_url: null,
//       item_type: "wahana",
//       hpp: "100000",
//       sales_margin: "50",
//       share_profit: "10",
//       total_price: 330000,
//       base_price: "150000",
//       play_estimation: 10,
//       use_queue: true,
//       show_to_booking: false,
//       breakdown_bundling: false,
//       limit_type: "no limit",
//       limit_value: 0,
//       item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//       tenant_id: null,
//       item_category: {
//         id: "26195082-8629-4554-b349-a58bceaa546c",
//         creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         creator_name: "narawin",
//         editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//         editor_name: "narawin",
//         created_at: "1724396376892",
//         updated_at: "1724396437336",
//         status: "active",
//         name: "Wahana Air",
//         item_type: "wahana",
//       },
//       bundling_items: [],
//       item_rates: [
//         {
//           id: "6f598503-d87e-42ad-9655-c20219b90b36",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//           price: "200000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "8aabd4b7-d819-48ed-aa19-a17b0437cc34",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396674273",
//             updated_at: "1724396674387",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: ["jumat", "sabtu", "minggu"],
//             holiday_name: null,
//             priority: 2,
//             season_type_id: "99687061-2841-468a-8796-912d65d7b2a2",
//             season_type: {
//               id: "99687061-2841-468a-8796-912d65d7b2a2",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316773493",
//               updated_at: "1724316830656",
//               status: "active",
//               name: "Weekend",
//             },
//           },
//         },
//         {
//           id: "6fa85e74-5cc3-4d02-8154-52455e4cb5ee",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//           price: "150000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "afe85b80-cc5d-4dfd-beef-e616c141a5fc",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396639956",
//             updated_at: "1724396640070",
//             status: "active",
//             start_date: "2024-08-23",
//             end_date: "2024-08-31",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//         {
//           id: "db6de421-55de-41a9-ad89-81382c68f96c",
//           item_id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//           season_period_id: "c6267f43-c531-4d7e-8db1-509187d09621",
//           price: "110000",
//           item: {
//             id: "7e9bb16e-6e66-4731-b4f4-5bcfbc9257a6",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1724396607574",
//             updated_at: "1724989541519",
//             status: "active",
//             name: "Water Coaster",
//             image_url: null,
//             item_type: "wahana",
//             hpp: "100000",
//             sales_margin: "50",
//             share_profit: "10",
//             total_price: "0",
//             base_price: "150000",
//             play_estimation: 10,
//             use_queue: true,
//             show_to_booking: false,
//             breakdown_bundling: false,
//             limit_type: "no limit",
//             limit_value: 0,
//             item_category_id: "26195082-8629-4554-b349-a58bceaa546c",
//             tenant_id: null,
//           },
//           season_period: {
//             id: "c6267f43-c531-4d7e-8db1-509187d09621",
//             creator_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             creator_name: "narawin",
//             editor_id: "1b5f133c-fdfc-4154-8702-18786c8a81c1",
//             editor_name: "narawin",
//             created_at: "1725356858684",
//             updated_at: "1725357961677",
//             status: "active",
//             start_date: "2024-09-03",
//             end_date: "2024-09-30",
//             days: [],
//             holiday_name: null,
//             priority: 3,
//             season_type_id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//             season_type: {
//               id: "4ddd9118-4fad-440c-a9ba-87091c846528",
//               creator_id: "c59f811e-873c-4472-bd58-21c111902114",
//               creator_name: "superadmin",
//               editor_id: "c59f811e-873c-4472-bd58-21c111902114",
//               editor_name: "superadmin",
//               created_at: "1724316753711",
//               updated_at: "1724316785505",
//               status: "active",
//               name: "Standard",
//             },
//           },
//         },
//       ],
//       price: "110000",
//       qty: 3,
//       name: "Mie Ayam Original Klasik #338",
//       code: "SLS1783061167173",
//     },
//   },
// ];

// const newItem = masterDataItems.map((item) => {
//   return { id: item._id, name: item.data.name };
// });
// // console.log(newItem);

// // provinsi = [1, 2];

// const provinsi = [
//   {
//     name: "jabar",
//     id: 1,
//     city: {
//       id: "1a",
//       name: "bandung",
//     },
//   },
//   {
//     name: "banten",
//     id: 2,
//     city: {
//       id: "2a",
//       name: "serang",
//     },
//   },
//   {
//     name: "jatim",
//     id: 1,
//   },
// ];

// const newProv = provinsi.map((item) => {
//   console.log(item);

//   return { id: item.id, cityName: item?.city?.name };
// });
// // console.log(newProv);

function checkScore(nilai) {
  if (nilai >= 80) {
    return "lulus";
  } else if (nilai > 60) {
    return "Diperbaiki lagi";
  } else {
    return "Tidak lulus";
  }
}

// const scoresBatch20 = [90, 91, 92, 93, 98, 92, 72, 70];
// for (let index = 0; index < scoresBatch20.length; index + 2) {
//   console.log("ini perulangan ke =", index);
// const nilaiSaatLooping = scoresBatch20[index];

//   if (nilaiSaatLooping % 2 == 0) {
//     const hasil = checkScore(nilaiSaatLooping);
//     console.log({ nilaiSaatLooping, hasil });
//   } else {
//     console.log({ nilaiSaatLooping, hasil: "nilai nya ganjil" });
//   }
// }

// for (const score of scoresBatch20) {
//   console.log("ini score:", score);
//   const hasilCheckScore = checkScore(score);
//   console.log("hasil dari checkSore: ", hasilCheckScore);
// }

// for (const key in user) {
//   console.log(key, user[key]);
// }

// let i = 0;
// while (i < 10) {
//   // logic perhitungan

//   // get database

//   // minta ke url lain

//   // server
//   console.log(i);
//   i++;
// }

// let tryPasswordSalah = 0;
// do {

// } while (tryPasswordSalah < 3);
// 4< 3
// if (tryPassword == 100) {
//   // blokir kartu
// }

// let user = {
//   name: "Budi",
//   age: 20,
//   gender: "Male",
// };
// let dataUser = {}; // ditujukan userDataUser => info alamat, no telp

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user);
//     }, 2000);
//   });
// }

// getData().then((data) => {
//   console.log("hai, ini data setelah 2 detik :", data);
// });

function login(isValid) {
  return new Promise((resolve, reject) => {
    if (isValid) {
      resolve("Login success");
    } else {
      reject("Login failed");
    }
  });
}

// login password email
login()
  .then((msg) => console.log("hai kamu berhasil", msg))
  .catch((err) => {
    console.log("hai kamu gagal", err);
  })
  .finally(() => console.log("proses login selesai"));
