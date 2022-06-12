import { AssetDetail, AssetHistory } from '../AssetDetail';

export const AssetDetails: AssetDetail[] = [
  {
    pkAssetHistoryDetailId: 59,
    fkAssetId: {
      pkAssetId: 1,
      fkAssetType: {
        pkAssetTypeId: 1,
        assetType: 'Truck',
      },
      assetName: 'Truck1',
      assetContactDetail: null,
    },
    timeOfTracking: '2021-03-03T16:12:37.748+00:00',
    latitude: 19.110874372804577,
    longitude: 72.86838220662229,
  },
  {
    pkAssetHistoryDetailId: 60,
    fkAssetId: {
      pkAssetId: 3,
      fkAssetType: {
        pkAssetTypeId: 2,
        assetType: 'Salesperson',
      },
      assetName: 'Person 1',
      assetContactDetail: 9593935934,
    },
    timeOfTracking: '2021-03-05T16:12:37.900+00:00',
    latitude: 19.11400894581814,
    longitude: 72.84385085894638,
  },
  {
    pkAssetHistoryDetailId: 61,
    fkAssetId: {
      pkAssetId: 4,
      fkAssetType: {
        pkAssetTypeId: 1,
        assetType: 'Truck',
      },
      assetName: 'Truck3',
      assetContactDetail: null,
    },
    timeOfTracking: '2021-03-05T16:12:37.916+00:00',
    latitude: 19.151573603727645,
    longitude: 72.97737717732568,
  },
  {
    pkAssetHistoryDetailId: 62,
    fkAssetId: {
      pkAssetId: 5,
      fkAssetType: {
        pkAssetTypeId: 1,
        assetType: 'Truck',
      },
      assetName: 'Truck5',
      assetContactDetail: null,
    },
    timeOfTracking: '2021-03-05T16:12:37.932+00:00',
    latitude: 19.134515136449945,
    longitude: 72.83759339257924,
  },
];

export const history: AssetHistory[] = [
  {
    timeOfTracking: '2021-03-22T14:11:28',
    latitude: 19.151573603727645,
    pkAssetHistoryDetailId: 1,
    longitude: 72.97737717732568,
  },
  {
    timeOfTracking: '2021-03-22T23:38:51',
    latitude: 19.16,
    pkAssetHistoryDetailId: 2,
    longitude: 72.98,
  },
];

//  export const history:AssetHistory[]=[{
//    "latitude": 19.151573603727645,
//    "longitude": 72.97737717732568
//  },
//    {
//        "latitude": 19.153273341047782,
//        "longitude": 72.96789450350683
//    },
//    {
//        "latitude": 19.15376281806577,
//        "longitude": 72.95660018920898
//    },
//    {
//        "latitude": 19.14082597939619,
//        "longitude": 72.94738096896093
//    },
//    {
//        "latitude": 19.126490591719953,
//        "longitude": 72.93850669270108
//    },
//    {
//        "latitude": 19.106459500309192,
//        "longitude": 72.93043860798429
//    },
//    {
//        "latitude": 19.092763133230946,
//        "longitude": 72.92606124287198
//    },
//    {
//        "latitude": 19.081164116712447,
//        "longitude": 72.9190231264169
//    },
//    {
//        "latitude": 19.0685375609046,
//        "longitude": 72.904867566344
//    },
//    {
//        "latitude": 19.059208380452834,
//        "longitude": 72.89122048687622
//    },
//    {
//        "latitude": 19.05036705841263,
//        "longitude": 72.87405816499117
//    },
//    {
//        "latitude": 19.039576428998497,
//        "longitude": 72.86092606965425
//    },
//    {
//        "latitude": 19.022861738957953,
//        "longitude": 72.85251466218355
//    },
// ]
