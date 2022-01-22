import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'
import styles from '../css/statsCard.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  let history = []
  let labels = []
  let confirmed = []
  let death = []
  let recovered = []

  const test = [
    {
      date: "2020-01-22T00:00:00",
      confirmed: 554,
      deaths: 17,
      recovered: 28
    },
    {
      date: "2020-01-23T00:00:00",
      confirmed: 653,
      deaths: 18,
      recovered: 30
    },
    {
      date: "2020-01-24T00:00:00",
      confirmed: 941,
      deaths: 26,
      recovered: 36
    },
    {
      date: "2020-01-25T00:00:00",
      confirmed: 1434,
      deaths: 42,
      recovered: 39
    },
    {
      date: "2020-01-26T00:00:00",
      confirmed: 2118,
      deaths: 56,
      recovered: 52
    },
    {
      date: "2020-01-27T00:00:00",
      confirmed: 2927,
      deaths: 82,
      recovered: 61
    },
    {
      date: "2020-01-28T00:00:00",
      confirmed: 5578,
      deaths: 131,
      recovered: 107
    },
    {
      date: "2020-01-29T00:00:00",
      confirmed: 6166,
      deaths: 133,
      recovered: 126
    },
    {
      date: "2020-01-30T00:00:00",
      confirmed: 8233,
      deaths: 171,
      recovered: 143
    },
    {
      date: "2020-01-31T00:00:00",
      confirmed: 9927,
      deaths: 213,
      recovered: 222
    },
    {
      date: "2020-02-01T00:00:00",
      confirmed: 12037,
      deaths: 259,
      recovered: 284
    },
    {
      date: "2020-02-02T00:00:00",
      confirmed: 16787,
      deaths: 362,
      recovered: 471
    },
    {
      date: "2020-02-03T00:00:00",
      confirmed: 19881,
      deaths: 426,
      recovered: 623
    },
    {
      date: "2020-02-04T00:00:00",
      confirmed: 23892,
      deaths: 492,
      recovered: 852
    },
    {
      date: "2020-02-05T00:00:00",
      confirmed: 27635,
      deaths: 564,
      recovered: 1121
    },
    {
      date: "2020-02-06T00:00:00",
      confirmed: 30794,
      deaths: 634,
      recovered: 1487
    },
    {
      date: "2020-02-07T00:00:00",
      confirmed: 34391,
      deaths: 719,
      recovered: 2011
    },
    {
      date: "2020-02-08T00:00:00",
      confirmed: 37120,
      deaths: 806,
      recovered: 2614
    },
    {
      date: "2020-02-09T00:00:00",
      confirmed: 40150,
      deaths: 906,
      recovered: 3244
    },
    {
      date: "2020-02-10T00:00:00",
      confirmed: 42762,
      deaths: 1013,
      recovered: 3944
    },
    {
      date: "2020-02-11T00:00:00",
      confirmed: 44802,
      deaths: 1113,
      recovered: 4683
    },
    {
      date: "2020-02-12T00:00:00",
      confirmed: 45221,
      deaths: 1118,
      recovered: 5151
    },
    {
      date: "2020-02-13T00:00:00",
      confirmed: 60368,
      deaths: 1371,
      recovered: 6295
    },
    {
      date: "2020-02-14T00:00:00",
      confirmed: 66885,
      deaths: 1523,
      recovered: 8054
    },
    {
      date: "2020-02-15T00:00:00",
      confirmed: 69030,
      deaths: 1666,
      recovered: 9395
    },
    {
      date: "2020-02-16T00:00:00",
      confirmed: 71224,
      deaths: 1770,
      recovered: 10865
    },
    {
      date: "2020-02-17T00:00:00",
      confirmed: 73258,
      deaths: 1868,
      recovered: 12583
    },
    {
      date: "2020-02-18T00:00:00",
      confirmed: 75136,
      deaths: 2007,
      recovered: 14352
    },
    {
      date: "2020-02-19T00:00:00",
      confirmed: 75639,
      deaths: 2122,
      recovered: 16121
    },
    {
      date: "2020-02-20T00:00:00",
      confirmed: 76197,
      deaths: 2247,
      recovered: 18178
    },
    {
      date: "2020-02-21T00:00:00",
      confirmed: 76819,
      deaths: 2251,
      recovered: 18890
    },
    {
      date: "2020-02-22T00:00:00",
      confirmed: 78572,
      deaths: 2458,
      recovered: 22886
    },
    {
      date: "2020-02-23T00:00:00",
      confirmed: 78958,
      deaths: 2469,
      recovered: 23394
    },
    {
      date: "2020-02-24T00:00:00",
      confirmed: 79561,
      deaths: 2629,
      recovered: 25228
    },
    {
      date: "2020-02-25T00:00:00",
      confirmed: 80406,
      deaths: 2708,
      recovered: 27906
    },
    {
      date: "2020-02-26T00:00:00",
      confirmed: 81379,
      deaths: 2770,
      recovered: 30387
    },
    {
      date: "2020-02-27T00:00:00",
      confirmed: 82736,
      deaths: 2814,
      recovered: 33280
    },
    {
      date: "2020-02-28T00:00:00",
      confirmed: 84102,
      deaths: 2872,
      recovered: 36714
    },
    {
      date: "2020-02-29T00:00:00",
      confirmed: 85999,
      deaths: 2941,
      recovered: 39785
    },
    {
      date: "2020-03-01T00:00:00",
      confirmed: 88356,
      deaths: 2996,
      recovered: 42719
    },
    {
      date: "2020-03-02T00:00:00",
      confirmed: 90293,
      deaths: 3085,
      recovered: 45605
    },
    {
      date: "2020-03-03T00:00:00",
      confirmed: 92824,
      deaths: 3160,
      recovered: 48231
    },
    {
      date: "2020-03-04T00:00:00",
      confirmed: 95097,
      deaths: 3254,
      recovered: 51173
    },
    {
      date: "2020-03-05T00:00:00",
      confirmed: 97859,
      deaths: 3348,
      recovered: 53799
    },
    {
      date: "2020-03-06T00:00:00",
      confirmed: 101759,
      deaths: 3460,
      recovered: 55867
    },
    {
      date: "2020-03-07T00:00:00",
      confirmed: 105796,
      deaths: 3558,
      recovered: 58361
    },
    {
      date: "2020-03-08T00:00:00",
      confirmed: 109758,
      deaths: 3802,
      recovered: 60714
    },
    {
      date: "2020-03-09T00:00:00",
      confirmed: 113471,
      deaths: 3988,
      recovered: 62514
    },
    {
      date: "2020-03-10T00:00:00",
      confirmed: 118139,
      deaths: 4262,
      recovered: 64406
    },
    {
      date: "2020-03-11T00:00:00",
      confirmed: 125774,
      deaths: 4611,
      recovered: 67010
    },
    {
      date: "2020-03-12T00:00:00",
      confirmed: 134155,
      deaths: 4976,
      recovered: 69079
    },
    {
      date: "2020-03-13T00:00:00",
      confirmed: 145731,
      deaths: 5436,
      recovered: 72505
    },
    {
      date: "2020-03-14T00:00:00",
      confirmed: 156873,
      deaths: 5839,
      recovered: 75893
    },
    {
      date: "2020-03-15T00:00:00",
      confirmed: 168668,
      deaths: 6516,
      recovered: 77708
    },
    {
      date: "2020-03-16T00:00:00",
      confirmed: 182807,
      deaths: 7171,
      recovered: 79832
    },
    {
      date: "2020-03-17T00:00:00",
      confirmed: 198674,
      deaths: 7989,
      recovered: 82706
    },
    {
      date: "2020-03-18T00:00:00",
      confirmed: 219190,
      deaths: 8966,
      recovered: 85729
    },
    {
      date: "2020-03-19T00:00:00",
      confirmed: 245687,
      deaths: 10047,
      recovered: 88425
    },
    {
      date: "2020-03-20T00:00:00",
      confirmed: 276386,
      deaths: 11419,
      recovered: 91929
    },
    {
      date: "2020-03-21T00:00:00",
      confirmed: 308268,
      deaths: 13073,
      recovered: 95621
    },
    {
      date: "2020-03-22T00:00:00",
      confirmed: 339251,
      deaths: 14721,
      recovered: 99048
    },
    {
      date: "2020-03-23T00:00:00",
      confirmed: 381628,
      deaths: 16555,
      recovered: 101556
    },
    {
      date: "2020-03-24T00:00:00",
      confirmed: 423197,
      deaths: 18924,
      recovered: 108468
    },
    {
      date: "2020-03-25T00:00:00",
      confirmed: 472163,
      deaths: 21316,
      recovered: 114588
    },
    {
      date: "2020-03-26T00:00:00",
      confirmed: 533643,
      deaths: 24090,
      recovered: 122334
    },
    {
      date: "2020-03-27T00:00:00",
      confirmed: 597500,
      deaths: 27375,
      recovered: 131107
    },
    {
      date: "2020-03-28T00:00:00",
      confirmed: 665001,
      deaths: 30854,
      recovered: 139541
    },
    {
      date: "2020-03-29T00:00:00",
      confirmed: 737290,
      deaths: 34525,
      recovered: 148096
    },
    {
      date: "2020-03-30T00:00:00",
      confirmed: 798299,
      deaths: 38268,
      recovered: 160899
    },
    {
      date: "2020-03-31T00:00:00",
      confirmed: 869449,
      deaths: 42725,
      recovered: 172531
    },
    {
      date: "2020-04-01T00:00:00",
      confirmed: 952762,
      deaths: 47787,
      recovered: 194713
    },
    {
      date: "2020-04-02T00:00:00",
      confirmed: 1031314,
      deaths: 53664,
      recovered: 211805
    },
    {
      date: "2020-04-03T00:00:00",
      confirmed: 1113657,
      deaths: 59390,
      recovered: 226513
    },
    {
      date: "2020-04-04T00:00:00",
      confirmed: 1194664,
      deaths: 65238,
      recovered: 246752
    },
    {
      date: "2020-04-05T00:00:00",
      confirmed: 1267722,
      deaths: 69973,
      recovered: 262634
    },
    {
      date: "2020-04-06T00:00:00",
      confirmed: 1338691,
      deaths: 75317,
      recovered: 284387
    },
    {
      date: "2020-04-07T00:00:00",
      confirmed: 1414301,
      deaths: 82608,
      recovered: 300646
    },
    {
      date: "2020-04-08T00:00:00",
      confirmed: 1499980,
      deaths: 88959,
      recovered: 328788
    },
    {
      date: "2020-04-09T00:00:00",
      confirmed: 1585375,
      deaths: 96183,
      recovered: 355165
    },
    {
      date: "2020-04-10T00:00:00",
      confirmed: 1680108,
      deaths: 103297,
      recovered: 377401
    },
    {
      date: "2020-04-11T00:00:00",
      confirmed: 1756958,
      deaths: 109365,
      recovered: 404474
    },
    {
      date: "2020-04-12T00:00:00",
      confirmed: 1853984,
      deaths: 114768,
      recovered: 435166
    },
    {
      date: "2020-04-13T00:00:00",
      confirmed: 1924490,
      deaths: 120222,
      recovered: 457636
    },
    {
      date: "2020-04-14T00:00:00",
      confirmed: 1999840,
      deaths: 127269,
      recovered: 493610
    },
    {
      date: "2020-04-15T00:00:00",
      confirmed: 2080891,
      deaths: 135075,
      recovered: 510922
    },
    {
      date: "2020-04-16T00:00:00",
      confirmed: 2176704,
      deaths: 143547,
      recovered: 548174
    },
    {
      date: "2020-04-17T00:00:00",
      confirmed: 2266479,
      deaths: 154816,
      recovered: 566644
    },
    {
      date: "2020-04-18T00:00:00",
      confirmed: 2343093,
      deaths: 161469,
      recovered: 593739
    },
    {
      date: "2020-04-19T00:00:00",
      confirmed: 2421289,
      deaths: 165964,
      recovered: 620803
    },
    {
      date: "2020-04-20T00:00:00",
      confirmed: 2495367,
      deaths: 171251,
      recovered: 647153
    },
    {
      date: "2020-04-21T00:00:00",
      confirmed: 2568583,
      deaths: 178037,
      recovered: 681610
    },
    {
      date: "2020-04-22T00:00:00",
      confirmed: 2646629,
      deaths: 184790,
      recovered: 708870
    },
    {
      date: "2020-04-23T00:00:00",
      confirmed: 2734509,
      deaths: 191436,
      recovered: 737543
    },
    {
      date: "2020-04-24T00:00:00",
      confirmed: 2832490,
      deaths: 197884,
      recovered: 786066
    },
    {
      date: "2020-04-25T00:00:00",
      confirmed: 2926162,
      deaths: 203735,
      recovered: 833231
    },
    {
      date: "2020-04-26T00:00:00",
      confirmed: 2999073,
      deaths: 207384,
      recovered: 877022
    },
    {
      date: "2020-04-27T00:00:00",
      confirmed: 3069349,
      deaths: 212095,
      recovered: 916866
    },
    {
      date: "2020-04-28T00:00:00",
      confirmed: 3144334,
      deaths: 218218,
      recovered: 952107
    },
    {
      date: "2020-04-29T00:00:00",
      confirmed: 3223748,
      deaths: 228554,
      recovered: 995771
    },
    {
      date: "2020-04-30T00:00:00",
      confirmed: 3309901,
      deaths: 234263,
      recovered: 1033606
    },
    {
      date: "2020-05-01T00:00:00",
      confirmed: 3393419,
      deaths: 239296,
      recovered: 1070466
    },
    {
      date: "2020-05-02T00:00:00",
      confirmed: 3483141,
      deaths: 244852,
      recovered: 1110695
    },
    {
      date: "2020-05-03T00:00:00",
      confirmed: 3564011,
      deaths: 248550,
      recovered: 1142380
    },
    {
      date: "2020-05-04T00:00:00",
      confirmed: 3640914,
      deaths: 252720,
      recovered: 1183660
    },
    {
      date: "2020-05-05T00:00:00",
      confirmed: 3721483,
      deaths: 258239,
      recovered: 1218567
    },
    {
      date: "2020-05-06T00:00:00",
      confirmed: 3816737,
      deaths: 264912,
      recovered: 1277832
    },
    {
      date: "2020-05-07T00:00:00",
      confirmed: 3913657,
      deaths: 270531,
      recovered: 1317352
    },
    {
      date: "2020-05-08T00:00:00",
      confirmed: 4010583,
      deaths: 276012,
      recovered: 1358428
    },
    {
      date: "2020-05-09T00:00:00",
      confirmed: 4097263,
      deaths: 280276,
      recovered: 1411984
    },
    {
      date: "2020-05-10T00:00:00",
      confirmed: 4176367,
      deaths: 283720,
      recovered: 1462759
    },
    {
      date: "2020-05-11T00:00:00",
      confirmed: 4251137,
      deaths: 287283,
      recovered: 1495773
    },
    {
      date: "2020-05-12T00:00:00",
      confirmed: 4336309,
      deaths: 292868,
      recovered: 1578337
    },
    {
      date: "2020-05-13T00:00:00",
      confirmed: 4423941,
      deaths: 298205,
      recovered: 1633795
    },
    {
      date: "2020-05-14T00:00:00",
      confirmed: 4515469,
      deaths: 303700,
      recovered: 1711028
    },
    {
      date: "2020-05-15T00:00:00",
      confirmed: 4621481,
      deaths: 309146,
      recovered: 1759002
    },
    {
      date: "2020-05-16T00:00:00",
      confirmed: 4714187,
      deaths: 313317,
      recovered: 1810726
    },
    {
      date: "2020-05-17T00:00:00",
      confirmed: 4796977,
      deaths: 316747,
      recovered: 1857606
    },
    {
      date: "2020-05-18T00:00:00",
      confirmed: 4885129,
      deaths: 320133,
      recovered: 1906152
    },
    {
      date: "2020-05-19T00:00:00",
      confirmed: 4980313,
      deaths: 325099,
      recovered: 1957880
    },
    {
      date: "2020-05-20T00:00:00",
      confirmed: 5082904,
      deaths: 329737,
      recovered: 2023165
    },
    {
      date: "2020-05-21T00:00:00",
      confirmed: 5188991,
      deaths: 334510,
      recovered: 2079743
    },
    {
      date: "2020-05-22T00:00:00",
      confirmed: 5296777,
      deaths: 339989,
      recovered: 2154999
    },
    {
      date: "2020-05-23T00:00:00",
      confirmed: 5395929,
      deaths: 344704,
      recovered: 2242091
    },
    {
      date: "2020-05-24T00:00:00",
      confirmed: 5491996,
      deaths: 347515,
      recovered: 2297755
    },
    {
      date: "2020-05-25T00:00:00",
      confirmed: 5580337,
      deaths: 350662,
      recovered: 2361900
    },
    {
      date: "2020-05-26T00:00:00",
      confirmed: 5677475,
      deaths: 354667,
      recovered: 2425344
    },
    {
      date: "2020-05-27T00:00:00",
      confirmed: 5779886,
      deaths: 359744,
      recovered: 2492490
    },
    {
      date: "2020-05-28T00:00:00",
      confirmed: 5896047,
      deaths: 364604,
      recovered: 2576473
    },
    {
      date: "2020-05-29T00:00:00",
      confirmed: 6020340,
      deaths: 369204,
      recovered: 2654260
    },
    {
      date: "2020-05-30T00:00:00",
      confirmed: 6146982,
      deaths: 373121,
      recovered: 2730942
    },
    {
      date: "2020-05-31T00:00:00",
      confirmed: 6253005,
      deaths: 376121,
      recovered: 2840545
    },
    {
      date: "2020-06-01T00:00:00",
      confirmed: 6357664,
      deaths: 379786,
      recovered: 2897384
    },
    {
      date: "2020-06-02T00:00:00",
      confirmed: 6473556,
      deaths: 384560,
      recovered: 3055783
    },
    {
      date: "2020-06-03T00:00:00",
      confirmed: 6588620,
      deaths: 389945,
      recovered: 3156979
    },
    {
      date: "2020-06-04T00:00:00",
      confirmed: 6722828,
      deaths: 395255,
      recovered: 3239848
    },
    {
      date: "2020-06-05T00:00:00",
      confirmed: 6868463,
      deaths: 400154,
      recovered: 3338229
    },
    {
      date: "2020-06-06T00:00:00",
      confirmed: 6998362,
      deaths: 404171,
      recovered: 3399937
    },
    {
      date: "2020-06-07T00:00:00",
      confirmed: 7108502,
      deaths: 408141,
      recovered: 3447625
    },
    {
      date: "2020-06-08T00:00:00",
      confirmed: 7214652,
      deaths: 410711,
      recovered: 3522289
    },
    {
      date: "2020-06-09T00:00:00",
      confirmed: 7338636,
      deaths: 415505,
      recovered: 3590558
    },
    {
      date: "2020-06-10T00:00:00",
      confirmed: 7472740,
      deaths: 420829,
      recovered: 3762798
    },
    {
      date: "2020-06-11T00:00:00",
      confirmed: 7610188,
      deaths: 425640,
      recovered: 3826561
    },
    {
      date: "2020-06-12T00:00:00",
      confirmed: 7748650,
      deaths: 429853,
      recovered: 3949863
    },
    {
      date: "2020-06-13T00:00:00",
      confirmed: 7882413,
      deaths: 434201,
      recovered: 4025872
    },
    {
      date: "2020-06-14T00:00:00",
      confirmed: 8005367,
      deaths: 437358,
      recovered: 4109147
    },
    {
      date: "2020-06-15T00:00:00",
      confirmed: 8125521,
      deaths: 440855,
      recovered: 4211540
    },
    {
      date: "2020-06-16T00:00:00",
      confirmed: 8271444,
      deaths: 447747,
      recovered: 4302386
    },
    {
      date: "2020-06-17T00:00:00",
      confirmed: 8433577,
      deaths: 453050,
      recovered: 4412595
    },
    {
      date: "2020-06-18T00:00:00",
      confirmed: 8590185,
      deaths: 458000,
      recovered: 4514562
    },
    {
      date: "2020-06-19T00:00:00",
      confirmed: 8768690,
      deaths: 463034,
      recovered: 4606676
    },
    {
      date: "2020-06-20T00:00:00",
      confirmed: 8923083,
      deaths: 467286,
      recovered: 4722282
    },
    {
      date: "2020-06-21T00:00:00",
      confirmed: 9052216,
      deaths: 471320,
      recovered: 4820631
    },
    {
      date: "2020-06-22T00:00:00",
      confirmed: 9193026,
      deaths: 474982,
      recovered: 4919578
    },
    {
      date: "2020-06-23T00:00:00",
      confirmed: 9359861,
      deaths: 480376,
      recovered: 5025800
    },
    {
      date: "2020-06-24T00:00:00",
      confirmed: 9528125,
      deaths: 485548,
      recovered: 5157469
    },
    {
      date: "2020-06-25T00:00:00",
      confirmed: 9710313,
      deaths: 492298,
      recovered: 5260056
    },
    {
      date: "2020-06-26T00:00:00",
      confirmed: 9899418,
      deaths: 497229,
      recovered: 5366328
    },
    {
      date: "2020-06-27T00:00:00",
      confirmed: 10071599,
      deaths: 501572,
      recovered: 5460392
    },
    {
      date: "2020-06-28T00:00:00",
      confirmed: 10240381,
      deaths: 504833,
      recovered: 5556728
    },
    {
      date: "2020-06-29T00:00:00",
      confirmed: 10399497,
      deaths: 508580,
      recovered: 5662635
    },
    {
      date: "2020-06-30T00:00:00",
      confirmed: 10577509,
      deaths: 514380,
      recovered: 5790976
    },
    {
      date: "2020-07-01T00:00:00",
      confirmed: 10793669,
      deaths: 519360,
      recovered: 6019589
    },
    {
      date: "2020-07-02T00:00:00",
      confirmed: 11002596,
      deaths: 524374,
      recovered: 6132580
    },
    {
      date: "2020-07-03T00:00:00",
      confirmed: 11205391,
      deaths: 529488,
      recovered: 6319839
    },
    {
      date: "2020-07-04T00:00:00",
      confirmed: 11394265,
      deaths: 533932,
      recovered: 6419394
    },
    {
      date: "2020-07-05T00:00:00",
      confirmed: 11577145,
      deaths: 537221,
      recovered: 6507395
    },
    {
      date: "2020-07-06T00:00:00",
      confirmed: 11746590,
      deaths: 541098,
      recovered: 6714655
    },
    {
      date: "2020-07-07T00:00:00",
      confirmed: 11934370,
      deaths: 545709,
      recovered: 6849450
    },
    {
      date: "2020-07-08T00:00:00",
      confirmed: 12168518,
      deaths: 552481,
      recovered: 7041377
    },
    {
      date: "2020-07-09T00:00:00",
      confirmed: 12391259,
      deaths: 557812,
      recovered: 7195820
    },
    {
      date: "2020-07-10T00:00:00",
      confirmed: 12622784,
      deaths: 563167,
      recovered: 7338772
    },
    {
      date: "2020-07-11T00:00:00",
      confirmed: 12836757,
      deaths: 567949,
      recovered: 7453519
    },
    {
      date: "2020-07-12T00:00:00",
      confirmed: 13023888,
      deaths: 572157,
      recovered: 7558043
    },
    {
      date: "2020-07-13T00:00:00",
      confirmed: 13231871,
      deaths: 576161,
      recovered: 7675125
    },
    {
      date: "2020-07-14T00:00:00",
      confirmed: 13450274,
      deaths: 581842,
      recovered: 7819390
    },
    {
      date: "2020-07-15T00:00:00",
      confirmed: 13684196,
      deaths: 587441,
      recovered: 8121422
    },
    {
      date: "2020-07-16T00:00:00",
      confirmed: 13936015,
      deaths: 593270,
      recovered: 8249123
    },
    {
      date: "2020-07-17T00:00:00",
      confirmed: 14167823,
      deaths: 599843,
      recovered: 8433405
    },
    {
      date: "2020-07-18T00:00:00",
      confirmed: 14405407,
      deaths: 605357,
      recovered: 8583537
    },
    {
      date: "2020-07-19T00:00:00",
      confirmed: 14621371,
      deaths: 609387,
      recovered: 8700056
    },
    {
      date: "2020-07-20T00:00:00",
      confirmed: 14828123,
      deaths: 614565,
      recovered: 8873576
    },
    {
      date: "2020-07-21T00:00:00",
      confirmed: 15066754,
      deaths: 620811,
      recovered: 9077687
    },
    {
      date: "2020-07-22T00:00:00",
      confirmed: 15341399,
      deaths: 628989,
      recovered: 9290476
    },
    {
      date: "2020-07-23T00:00:00",
      confirmed: 15617534,
      deaths: 637624,
      recovered: 9503364
    },
    {
      date: "2020-07-24T00:00:00",
      confirmed: 15902698,
      deaths: 651525,
      recovered: 9699563
    },
    {
      date: "2020-07-25T00:00:00",
      confirmed: 16158479,
      deaths: 657133,
      recovered: 9870169
    },
    {
      date: "2020-07-26T00:00:00",
      confirmed: 16371942,
      deaths: 660931,
      recovered: 10006836
    },
    {
      date: "2020-07-27T00:00:00",
      confirmed: 16588470,
      deaths: 664907,
      recovered: 10188496
    },
    {
      date: "2020-07-28T00:00:00",
      confirmed: 16841568,
      deaths: 672604,
      recovered: 10414748
    },
    {
      date: "2020-07-29T00:00:00",
      confirmed: 17132029,
      deaths: 679175,
      recovered: 10653321
    },
    {
      date: "2020-07-30T00:00:00",
      confirmed: 17416375,
      deaths: 685513,
      recovered: 10889066
    },
    {
      date: "2020-07-31T00:00:00",
      confirmed: 17699141,
      deaths: 691771,
      recovered: 11111980
    },
    {
      date: "2020-08-01T00:00:00",
      confirmed: 17953335,
      deaths: 697357,
      recovered: 11277342
    },
    {
      date: "2020-08-02T00:00:00",
      confirmed: 18168210,
      deaths: 701174,
      recovered: 11392134
    },
    {
      date: "2020-08-03T00:00:00",
      confirmed: 18371737,
      deaths: 705337,
      recovered: 11620654
    },
    {
      date: "2020-08-04T00:00:00",
      confirmed: 18633145,
      deaths: 712655,
      recovered: 11864456
    },
    {
      date: "2020-08-05T00:00:00",
      confirmed: 18901336,
      deaths: 719361,
      recovered: 12108083
    },
    {
      date: "2020-08-06T00:00:00",
      confirmed: 19182012,
      deaths: 725713,
      recovered: 12298741
    },
    {
      date: "2020-08-07T00:00:00",
      confirmed: 19464433,
      deaths: 732128,
      recovered: 12482577
    },
    {
      date: "2020-08-08T00:00:00",
      confirmed: 19729128,
      deaths: 737611,
      recovered: 12658344
    },
    {
      date: "2020-08-09T00:00:00",
      confirmed: 19937520,
      deaths: 741874,
      recovered: 12832567
    },
    {
      date: "2020-08-10T00:00:00",
      confirmed: 20167271,
      deaths: 746715,
      recovered: 13119418
    },
    {
      date: "2020-08-11T00:00:00",
      confirmed: 20437706,
      deaths: 753512,
      recovered: 13377776
    },
    {
      date: "2020-08-12T00:00:00",
      confirmed: 20718764,
      deaths: 761695,
      recovered: 13613638
    },
    {
      date: "2020-08-13T00:00:00",
      confirmed: 21001312,
      deaths: 770427,
      recovered: 13849602
    },
    {
      date: "2020-08-14T00:00:00",
      confirmed: 21282537,
      deaths: 776374,
      recovered: 14074473
    },
    {
      date: "2020-08-15T00:00:00",
      confirmed: 21551690,
      deaths: 783274,
      recovered: 14231496
    },
    {
      date: "2020-08-16T00:00:00",
      confirmed: 21767634,
      deaths: 787336,
      recovered: 14439419
    },
    {
      date: "2020-08-17T00:00:00",
      confirmed: 21952335,
      deaths: 791412,
      recovered: 14618642
    },
    {
      date: "2020-08-18T00:00:00",
      confirmed: 22220937,
      deaths: 798361,
      recovered: 14838358
    },
    {
      date: "2020-08-19T00:00:00",
      confirmed: 22494890,
      deaths: 805043,
      recovered: 15037481
    },
    {
      date: "2020-08-20T00:00:00",
      confirmed: 22782386,
      deaths: 811089,
      recovered: 15216018
    },
    {
      date: "2020-08-21T00:00:00",
      confirmed: 23038244,
      deaths: 816915,
      recovered: 15380152
    },
    {
      date: "2020-08-22T00:00:00",
      confirmed: 23300740,
      deaths: 822317,
      recovered: 15554038
    },
    {
      date: "2020-08-23T00:00:00",
      confirmed: 23500502,
      deaths: 826084,
      recovered: 15710023
    },
    {
      date: "2020-08-24T00:00:00",
      confirmed: 23684937,
      deaths: 830057,
      recovered: 15931874
    },
    {
      date: "2020-08-25T00:00:00",
      confirmed: 23979422,
      deaths: 836941,
      recovered: 16150823
    },
    {
      date: "2020-08-26T00:00:00",
      confirmed: 24265869,
      deaths: 842708,
      recovered: 16344456
    },
    {
      date: "2020-08-27T00:00:00",
      confirmed: 24553837,
      deaths: 849029,
      recovered: 16538189
    },
    {
      date: "2020-08-28T00:00:00",
      confirmed: 24834638,
      deaths: 854581,
      recovered: 16715338
    },
    {
      date: "2020-08-29T00:00:00",
      confirmed: 25089927,
      deaths: 859884,
      recovered: 16891405
    },
    {
      date: "2020-08-30T00:00:00",
      confirmed: 25263177,
      deaths: 863023,
      recovered: 17064797
    },
    {
      date: "2020-08-31T00:00:00",
      confirmed: 25549534,
      deaths: 867825,
      recovered: 17277383
    },
    {
      date: "2020-09-01T00:00:00",
      confirmed: 25820161,
      deaths: 874238,
      recovered: 17490424
    },
    {
      date: "2020-09-02T00:00:00",
      confirmed: 26106057,
      deaths: 880266,
      recovered: 17690067
    },
    {
      date: "2020-09-03T00:00:00",
      confirmed: 26398255,
      deaths: 886014,
      recovered: 17878980
    },
    {
      date: "2020-09-04T00:00:00",
      confirmed: 26722960,
      deaths: 891627,
      recovered: 18062065
    },
    {
      date: "2020-09-05T00:00:00",
      confirmed: 26985409,
      deaths: 896261,
      recovered: 18238291
    },
    {
      date: "2020-09-06T00:00:00",
      confirmed: 27214568,
      deaths: 900151,
      recovered: 18428079
    },
    {
      date: "2020-09-07T00:00:00",
      confirmed: 27418335,
      deaths: 909410,
      recovered: 18619331
    },
    {
      date: "2020-09-08T00:00:00",
      confirmed: 27673129,
      deaths: 914270,
      recovered: 18821988
    },
    {
      date: "2020-09-09T00:00:00",
      confirmed: 27957671,
      deaths: 920354,
      recovered: 19044921
    },
    {
      date: "2020-09-10T00:00:00",
      confirmed: 28183038,
      deaths: 924135,
      recovered: 19226639
    },
    {
      date: "2020-09-11T00:00:00",
      confirmed: 28586183,
      deaths: 931911,
      recovered: 19454393
    },
    {
      date: "2020-09-12T00:00:00",
      confirmed: 28867010,
      deaths: 936667,
      recovered: 19647358
    },
    {
      date: "2020-09-13T00:00:00",
      confirmed: 29108696,
      deaths: 940354,
      recovered: 19835278
    },
    {
      date: "2020-09-14T00:00:00",
      confirmed: 29356252,
      deaths: 944686,
      recovered: 20030823
    },
    {
      date: "2020-09-15T00:00:00",
      confirmed: 29648760,
      deaths: 951164,
      recovered: 20256555
    },
    {
      date: "2020-09-16T00:00:00",
      confirmed: 29956971,
      deaths: 956830,
      recovered: 20467298
    },
    {
      date: "2020-09-17T00:00:00",
      confirmed: 30269788,
      deaths: 962264,
      recovered: 20669121
    },
    {
      date: "2020-09-18T00:00:00",
      confirmed: 30608288,
      deaths: 968024,
      recovered: 20925970
    },
    {
      date: "2020-09-19T00:00:00",
      confirmed: 30900983,
      deaths: 973010,
      recovered: 21141717
    },
    {
      date: "2020-09-20T00:00:00",
      confirmed: 31142047,
      deaths: 976549,
      recovered: 21357767
    },
    {
      date: "2020-09-21T00:00:00",
      confirmed: 31401395,
      deaths: 980763,
      recovered: 21592143
    },
    {
      date: "2020-09-22T00:00:00",
      confirmed: 31696497,
      deaths: 986936,
      recovered: 21828605
    },
    {
      date: "2020-09-23T00:00:00",
      confirmed: 32010872,
      deaths: 993343,
      recovered: 22058109
    },
    {
      date: "2020-09-24T00:00:00",
      confirmed: 32325885,
      deaths: 999001,
      recovered: 22268088
    },
    {
      date: "2020-09-25T00:00:00",
      confirmed: 32660968,
      deaths: 1004559,
      recovered: 22469411
    },
    {
      date: "2020-09-26T00:00:00",
      confirmed: 32951240,
      deaths: 1009743,
      recovered: 22659091
    },
    {
      date: "2020-09-27T00:00:00",
      confirmed: 33204020,
      deaths: 1013462,
      recovered: 22850145
    },
    {
      date: "2020-09-28T00:00:00",
      confirmed: 33442055,
      deaths: 1017379,
      recovered: 23043219
    },
    {
      date: "2020-09-29T00:00:00",
      confirmed: 33743241,
      deaths: 1023571,
      recovered: 23273255
    },
    {
      date: "2020-09-30T00:00:00",
      confirmed: 34061956,
      deaths: 1029637,
      recovered: 23507665
    },
    {
      date: "2020-10-01T00:00:00",
      confirmed: 34378675,
      deaths: 1038310,
      recovered: 23709815
    },
    {
      date: "2020-10-02T00:00:00",
      confirmed: 34727987,
      deaths: 1043936,
      recovered: 23892451
    },
    {
      date: "2020-10-03T00:00:00",
      confirmed: 35026332,
      deaths: 1048448,
      recovered: 24080809
    },
    {
      date: "2020-10-04T00:00:00",
      confirmed: 35187322,
      deaths: 1050697,
      recovered: 24225667
    },
    {
      date: "2020-10-05T00:00:00",
      confirmed: 35591732,
      deaths: 1056434,
      recovered: 24487115
    },
    {
      date: "2020-10-06T00:00:00",
      confirmed: 35933615,
      deaths: 1064939,
      recovered: 24725144
    },
    {
      date: "2020-10-07T00:00:00",
      confirmed: 36280846,
      deaths: 1070697,
      recovered: 24939771
    },
    {
      date: "2020-10-08T00:00:00",
      confirmed: 36631861,
      deaths: 1076880,
      recovered: 25150868
    },
    {
      date: "2020-10-09T00:00:00",
      confirmed: 36992829,
      deaths: 1082714,
      recovered: 25343102
    },
    {
      date: "2020-10-10T00:00:00",
      confirmed: 37347931,
      deaths: 1087358,
      recovered: 25532085
    },
    {
      date: "2020-10-11T00:00:00",
      confirmed: 37617739,
      deaths: 1091193,
      recovered: 25738121
    },
    {
      date: "2020-10-12T00:00:00",
      confirmed: 37906694,
      deaths: 1095146,
      recovered: 25929643
    },
    {
      date: "2020-10-13T00:00:00",
      confirmed: 38228973,
      deaths: 1100261,
      recovered: 26133244
    },
    {
      date: "2020-10-14T00:00:00",
      confirmed: 38611529,
      deaths: 1106098,
      recovered: 26356444
    },
    {
      date: "2020-10-15T00:00:00",
      confirmed: 39038868,
      deaths: 1112054,
      recovered: 26566624
    },
    {
      date: "2020-10-16T00:00:00",
      confirmed: 39462703,
      deaths: 1118243,
      recovered: 26770957
    },
    {
      date: "2020-10-17T00:00:00",
      confirmed: 39824937,
      deaths: 1123510,
      recovered: 26961615
    },
    {
      date: "2020-10-18T00:00:00",
      confirmed: 40149328,
      deaths: 1127108,
      recovered: 27168968
    },
    {
      date: "2020-10-19T00:00:00",
      confirmed: 40517935,
      deaths: 1131779,
      recovered: 27361458
    },
    {
      date: "2020-10-20T00:00:00",
      confirmed: 40908506,
      deaths: 1138140,
      recovered: 27591528
    },
    {
      date: "2020-10-21T00:00:00",
      confirmed: 41351203,
      deaths: 1144647,
      recovered: 27819675
    },
    {
      date: "2020-10-22T00:00:00",
      confirmed: 41855873,
      deaths: 1150706,
      recovered: 28040168
    },
    {
      date: "2020-10-23T00:00:00",
      confirmed: 42349187,
      deaths: 1156969,
      recovered: 28236449
    },
    {
      date: "2020-10-24T00:00:00",
      confirmed: 42817641,
      deaths: 1162335,
      recovered: 28435731
    },
    {
      date: "2020-10-25T00:00:00",
      confirmed: 43216733,
      deaths: 1166307,
      recovered: 28638975
    },
    {
      date: "2020-10-26T00:00:00",
      confirmed: 43639228,
      deaths: 1171533,
      recovered: 28853912
    },
    {
      date: "2020-10-27T00:00:00",
      confirmed: 44121346,
      deaths: 1178084,
      recovered: 29074347
    },
    {
      date: "2020-10-28T00:00:00",
      confirmed: 44642202,
      deaths: 1185458,
      recovered: 29299266
    },
    {
      date: "2020-10-29T00:00:00",
      confirmed: 45211956,
      deaths: 1192410,
      recovered: 29517748
    },
    {
      date: "2020-10-30T00:00:00",
      confirmed: 45779652,
      deaths: 1199623,
      recovered: 29732531
    },
    {
      date: "2020-10-31T00:00:00",
      confirmed: 46226078,
      deaths: 1205504,
      recovered: 29930277
    },
    {
      date: "2020-11-01T00:00:00",
      confirmed: 46690654,
      deaths: 1210705,
      recovered: 30162819
    },
    {
      date: "2020-11-02T00:00:00",
      confirmed: 47195109,
      deaths: 1216892,
      recovered: 30372635
    },
    {
      date: "2020-11-03T00:00:00",
      confirmed: 47692204,
      deaths: 1225505,
      recovered: 30637527
    },
    {
      date: "2020-11-04T00:00:00",
      confirmed: 48275952,
      deaths: 1236370,
      recovered: 30899232
    },
    {
      date: "2020-11-05T00:00:00",
      confirmed: 48872294,
      deaths: 1245002,
      recovered: 31163995
    },
    {
      date: "2020-11-06T00:00:00",
      confirmed: 49524245,
      deaths: 1254635,
      recovered: 31398176
    },
    {
      date: "2020-11-07T00:00:00",
      confirmed: 50072636,
      deaths: 1261527,
      recovered: 31619484
    },
    {
      date: "2020-11-08T00:00:00",
      confirmed: 50539072,
      deaths: 1267207,
      recovered: 31820670
    },
    {
      date: "2020-11-09T00:00:00",
      confirmed: 51048711,
      deaths: 1274546,
      recovered: 32018127
    },
    {
      date: "2020-11-10T00:00:00",
      confirmed: 51619489,
      deaths: 1284737,
      recovered: 32310387
    },
    {
      date: "2020-11-11T00:00:00",
      confirmed: 52269449,
      deaths: 1295137,
      recovered: 32544238
    },
    {
      date: "2020-11-12T00:00:00",
      confirmed: 52915934,
      deaths: 1304722,
      recovered: 33001764
    },
    {
      date: "2020-11-13T00:00:00",
      confirmed: 53564751,
      deaths: 1315565,
      recovered: 33250188
    },
    {
      date: "2020-11-14T00:00:00",
      confirmed: 54136858,
      deaths: 1324292,
      recovered: 33492491
    },
    {
      date: "2020-11-15T00:00:00",
      confirmed: 54617426,
      deaths: 1330475,
      recovered: 33716852
    },
    {
      date: "2020-11-16T00:00:00",
      confirmed: 55167397,
      deaths: 1338847,
      recovered: 34015668
    },
    {
      date: "2020-11-17T00:00:00",
      confirmed: 55716569,
      deaths: 1349233,
      recovered: 34394212
    },
    {
      date: "2020-11-18T00:00:00",
      confirmed: 56383131,
      deaths: 1361278,
      recovered: 34747060
    },
    {
      date: "2020-11-19T00:00:00",
      confirmed: 57042910,
      deaths: 1371552,
      recovered: 35011863
    },
    {
      date: "2020-11-20T00:00:00",
      confirmed: 57703242,
      deaths: 1383471,
      recovered: 35312670
    },
    {
      date: "2020-11-21T00:00:00",
      confirmed: 58251263,
      deaths: 1391925,
      recovered: 35576209
    },
    {
      date: "2020-11-22T00:00:00",
      confirmed: 58762542,
      deaths: 1399154,
      recovered: 35826199
    },
    {
      date: "2020-11-23T00:00:00",
      confirmed: 59283992,
      deaths: 1407581,
      recovered: 36127194
    },
    {
      date: "2020-11-24T00:00:00",
      confirmed: 59843964,
      deaths: 1419958,
      recovered: 36434096
    },
    {
      date: "2020-11-25T00:00:00",
      confirmed: 60492792,
      deaths: 1432259,
      recovered: 36747664
    },
    {
      date: "2020-11-26T00:00:00",
      confirmed: 61075274,
      deaths: 1443052,
      recovered: 37070107
    },
    {
      date: "2020-11-27T00:00:00",
      confirmed: 61769401,
      deaths: 1454696,
      recovered: 37391252
    },
    {
      date: "2020-11-28T00:00:00",
      confirmed: 62339349,
      deaths: 1463654,
      recovered: 37689515
    },
    {
      date: "2020-11-29T00:00:00",
      confirmed: 62802820,
      deaths: 1470081,
      recovered: 37955525
    },
    {
      date: "2020-11-30T00:00:00",
      confirmed: 63308363,
      deaths: 1478831,
      recovered: 38282833
    },
    {
      date: "2020-12-01T00:00:00",
      confirmed: 63881671,
      deaths: 1491216,
      recovered: 38634815
    },
    {
      date: "2020-12-02T00:00:00",
      confirmed: 64548028,
      deaths: 1504037,
      recovered: 39004951
    },
    {
      date: "2020-12-03T00:00:00",
      confirmed: 64988110,
      deaths: 1512603,
      recovered: 39304803
    },
    {
      date: "2020-12-04T00:00:00",
      confirmed: 65915958,
      deaths: 1528827,
      recovered: 39677785
    },
    {
      date: "2020-12-05T00:00:00",
      confirmed: 66528739,
      deaths: 1538718,
      recovered: 39973596
    },
    {
      date: "2020-12-06T00:00:00",
      confirmed: 67051371,
      deaths: 1545853,
      recovered: 40244686
    },
    {
      date: "2020-12-07T00:00:00",
      confirmed: 67584821,
      deaths: 1554305,
      recovered: 40566252
    },
    {
      date: "2020-12-08T00:00:00",
      confirmed: 68210874,
      deaths: 1566781,
      recovered: 40902209
    },
    {
      date: "2020-12-09T00:00:00",
      confirmed: 68877078,
      deaths: 1579335,
      recovered: 41293730
    },
    {
      date: "2020-12-10T00:00:00",
      confirmed: 70362707,
      deaths: 1591916,
      recovered: 42347468
    },
    {
      date: "2020-12-11T00:00:00",
      confirmed: 71047884,
      deaths: 1604744,
      recovered: 42660956
    },
    {
      date: "2020-12-12T00:00:00",
      confirmed: 71663723,
      deaths: 1615068,
      recovered: 43368583
    },
    {
      date: "2020-12-13T00:00:00",
      confirmed: 72187783,
      deaths: 1622146,
      recovered: 43656709
    },
    {
      date: "2020-12-14T00:00:00",
      confirmed: 72790849,
      deaths: 1631334,
      recovered: 43988267
    },
    {
      date: "2020-12-15T00:00:00",
      confirmed: 73407131,
      deaths: 1645069,
      recovered: 44339407
    },
    {
      date: "2020-12-16T00:00:00",
      confirmed: 74125330,
      deaths: 1658480,
      recovered: 44724583
    },
    {
      date: "2020-12-17T00:00:00",
      confirmed: 74871723,
      deaths: 1671584,
      recovered: 45084410
    },
    {
      date: "2020-12-18T00:00:00",
      confirmed: 75597604,
      deaths: 1684505,
      recovered: 45420884
    },
    {
      date: "2020-12-19T00:00:00",
      confirmed: 76185425,
      deaths: 1694809,
      recovered: 45726572
    },
    {
      date: "2020-12-20T00:00:00",
      confirmed: 76730910,
      deaths: 1702660,
      recovered: 45985240
    },
    {
      date: "2020-12-21T00:00:00",
      confirmed: 77269831,
      deaths: 1712015,
      recovered: 46323584
    },
    {
      date: "2020-12-22T00:00:00",
      confirmed: 77907263,
      deaths: 1726124,
      recovered: 46716300
    },
    {
      date: "2020-12-23T00:00:00",
      confirmed: 78595268,
      deaths: 1740097,
      recovered: 47079210
    },
    {
      date: "2020-12-24T00:00:00",
      confirmed: 79281582,
      deaths: 1751686,
      recovered: 47441622
    },
    {
      date: "2020-12-25T00:00:00",
      confirmed: 79729795,
      deaths: 1759809,
      recovered: 47738235
    },
    {
      date: "2020-12-26T00:00:00",
      confirmed: 80227450,
      deaths: 1766580,
      recovered: 48017490
    },
    {
      date: "2020-12-27T00:00:00",
      confirmed: 80651038,
      deaths: 1773846,
      recovered: 48313662
    },
    {
      date: "2020-12-28T00:00:00",
      confirmed: 81149671,
      deaths: 1783292,
      recovered: 48631171
    },
    {
      date: "2020-12-29T00:00:00",
      confirmed: 81820433,
      deaths: 1798161,
      recovered: 49001640
    },
    {
      date: "2020-12-30T00:00:00",
      confirmed: 82625364,
      deaths: 1813179,
      recovered: 49380172
    },
    {
      date: "2020-12-31T00:00:00",
      confirmed: 83343066,
      deaths: 1826684,
      recovered: 49706037
    },
    {
      date: "2021-01-01T00:00:00",
      confirmed: 83894801,
      deaths: 1836029,
      recovered: 49982407
    },
    {
      date: "2021-01-02T00:00:00",
      confirmed: 84512709,
      deaths: 1844845,
      recovered: 50251902
    },
    {
      date: "2021-01-03T00:00:00",
      confirmed: 85036571,
      deaths: 1851910,
      recovered: 50554038
    },
    {
      date: "2021-01-04T00:00:00",
      confirmed: 85584585,
      deaths: 1861646,
      recovered: 50844091
    },
    {
      date: "2021-01-05T00:00:00",
      confirmed: 86329261,
      deaths: 1877503,
      recovered: 51298160
    },
    {
      date: "2021-01-06T00:00:00",
      confirmed: 87120499,
      deaths: 1892648,
      recovered: 52957167
    },
    {
      date: "2021-01-07T00:00:00",
      confirmed: 87969643,
      deaths: 1907362,
      recovered: 53294752
    },
    {
      date: "2021-01-08T00:00:00",
      confirmed: 88742817,
      deaths: 1921868,
      recovered: 53587617
    },
    {
      date: "2021-01-09T00:00:00",
      confirmed: 89523301,
      deaths: 1935184,
      recovered: 53896487
    },
    {
      date: "2021-01-10T00:00:00",
      confirmed: 90086389,
      deaths: 1942995,
      recovered: 54123106
    },
    {
      date: "2021-01-11T00:00:00",
      confirmed: 90716718,
      deaths: 1952882,
      recovered: 54435662
    },
    {
      date: "2021-01-12T00:00:00",
      confirmed: 91414047,
      deaths: 1970288,
      recovered: 54839290
    },
    {
      date: "2021-01-13T00:00:00",
      confirmed: 91453688,
      deaths: 1971410,
      recovered: 54884085
    },
    {
      date: "2021-01-14T00:00:00",
      confirmed: 92182720,
      deaths: 1984772,
      recovered: 55248391
    },
    {
      date: "2021-01-15T00:00:00",
      confirmed: 92913081,
      deaths: 1998724,
      recovered: 55612776
    },
    {
      date: "2021-01-16T00:00:00",
      confirmed: 93643423,
      deaths: 2012758,
      recovered: 55977151
    },
    {
      date: "2021-01-17T00:00:00",
      confirmed: 94373784,
      deaths: 2026710,
      recovered: 56341536
    },
    {
      date: "2021-01-18T00:00:00",
      confirmed: 95350322,
      deaths: 2048184,
      recovered: 56913409
    },
    {
      date: "2021-01-19T00:00:00",
      confirmed: 95953488,
      deaths: 2064087,
      recovered: 57309522
    },
    {
      date: "2021-01-20T00:00:00",
      confirmed: 96608868,
      deaths: 2081231,
      recovered: 57671051
    },
    {
      date: "2021-01-21T00:00:00",
      confirmed: 97403259,
      deaths: 2098249,
      recovered: 58175580
    },
    {
      date: "2021-01-22T00:00:00",
      confirmed: 98056577,
      deaths: 2113811,
      recovered: 58514302
    },
    {
      date: "2021-01-23T00:00:00",
      confirmed: 98616048,
      deaths: 2127574,
      recovered: 58837074
    },
    {
      date: "2021-01-24T00:00:00",
      confirmed: 99048595,
      deaths: 2135914,
      recovered: 59140522
    },
    {
      date: "2021-01-25T00:00:00",
      confirmed: 99551245,
      deaths: 2146351,
      recovered: 59496481
    },
    {
      date: "2021-01-26T00:00:00",
      confirmed: 100101409,
      deaths: 2163935,
      recovered: 59899015
    },
    {
      date: "2021-01-27T00:00:00",
      confirmed: 100704411,
      deaths: 2181000,
      recovered: 60181662
    },
    {
      date: "2021-01-28T00:00:00",
      confirmed: 101290699,
      deaths: 2197933,
      recovered: 60608610
    },
    {
      date: "2021-01-29T00:00:00",
      confirmed: 101868311,
      deaths: 2212933,
      recovered: 60918865
    },
    {
      date: "2021-01-30T00:00:00",
      confirmed: 102353737,
      deaths: 2225388,
      recovered: 61222391
    },
    {
      date: "2021-01-31T00:00:00",
      confirmed: 102732917,
      deaths: 2233417,
      recovered: 61507802
    },
    {
      date: "2021-02-01T00:00:00",
      confirmed: 103139440,
      deaths: 2245335,
      recovered: 61925670
    },
    {
      date: "2021-02-02T00:00:00",
      confirmed: 103604161,
      deaths: 2260276,
      recovered: 62318496
    },
    {
      date: "2021-02-03T00:00:00",
      confirmed: 104103892,
      deaths: 2275520,
      recovered: 62681573
    },
    {
      date: "2021-02-04T00:00:00",
      confirmed: 104621633,
      deaths: 2291720,
      recovered: 63014984
    },
    {
      date: "2021-02-05T00:00:00",
      confirmed: 105113170,
      deaths: 2306099,
      recovered: 63335256
    },
    {
      date: "2021-02-06T00:00:00",
      confirmed: 105526609,
      deaths: 2317213,
      recovered: 63645738
    },
    {
      date: "2021-02-07T00:00:00",
      confirmed: 105869237,
      deaths: 2324052,
      recovered: 63978771
    },
    {
      date: "2021-02-08T00:00:00",
      confirmed: 106015765,
      deaths: 2330879,
      recovered: 64253881
    },
    {
      date: "2021-02-09T00:00:00",
      confirmed: 106515413,
      deaths: 2347099,
      recovered: 64646766
    },
    {
      date: "2021-02-10T00:00:00",
      confirmed: 106964022,
      deaths: 2360729,
      recovered: 64985116
    },
    {
      date: "2021-02-11T00:00:00",
      confirmed: 107401404,
      deaths: 2374687,
      recovered: 65348980
    },
    {
      date: "2021-02-12T00:00:00",
      confirmed: 107839538,
      deaths: 2390193,
      recovered: 65665992
    },
    {
      date: "2021-02-13T00:00:00",
      confirmed: 108207196,
      deaths: 2401086,
      recovered: 65923294
    },
    {
      date: "2021-02-14T00:00:00",
      confirmed: 108466067,
      deaths: 2406558,
      recovered: 66185031
    },
    {
      date: "2021-02-15T00:00:00",
      confirmed: 108757545,
      deaths: 2413877,
      recovered: 68798392
    },
    {
      date: "2021-02-16T00:00:00",
      confirmed: 109119092,
      deaths: 2424677,
      recovered: 69170848
    },
    {
      date: "2021-02-17T00:00:00",
      confirmed: 109520924,
      deaths: 2435940,
      recovered: 69529936
    },
    {
      date: "2021-02-18T00:00:00",
      confirmed: 109907459,
      deaths: 2447080,
      recovered: 69872137
    },
    {
      date: "2021-02-19T00:00:00",
      confirmed: 110340532,
      deaths: 2458094,
      recovered: 70143423
    },
    {
      date: "2021-02-20T00:00:00",
      confirmed: 110716049,
      deaths: 2466350,
      recovered: 70756742
    },
    {
      date: "2021-02-21T00:00:00",
      confirmed: 111017785,
      deaths: 2472057,
      recovered: 71138535
    },
    {
      date: "2021-02-22T00:00:00",
      confirmed: 111319589,
      deaths: 2479351,
      recovered: 71472353
    },
    {
      date: "2021-02-23T00:00:00",
      confirmed: 111702208,
      deaths: 2490463,
      recovered: 71822827
    },
    {
      date: "2021-02-24T00:00:00",
      confirmed: 112143899,
      deaths: 2502447,
      recovered: 72165814
    },
    {
      date: "2021-02-25T00:00:00",
      confirmed: 112567104,
      deaths: 2512203,
      recovered: 72468921
    }
  ]

  for (let i = 0; i < test.length; i += 40) {
      const newDate = new Date(test[i].date)
      const data = {
          ...test[i],
          date: newDate
      }
      history.push(data)
  }

  for (let point of history) {
      labels.push(point.date.toLocaleDateString("en-US"))
      confirmed.push(point.confirmed)
      death.push(point.deaths)
      recovered.push(point.recovered)
  }

function ChartCard({dataSet}) {
    const darkMode = useSelector(selectDarkMode)

    ChartJS.defaults.color = darkMode ? '#FFFFFF' : '#666'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              fontColor: darkMode ? '#FFFFFF' : '#666'
            }
          },
        },
        layout: {
          padding: 10
        },
      };
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Confirmed Cases',
            data: confirmed,
            borderColor: 'orange',
          },
          {
            label: 'Deaths',
            data: death,
            borderColor: 'red',
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            borderColor: darkMode ? 'lightGreen' : 'green',
          }
        ],
      };


    return (
        <Card 
            className={styles.gridItem2}
            elevation={0}
        >
            <CardContent sx={{flexGrow: 1, padding: '0 !important', maxWidth: '100%'}}>
                <Line options={options} data={data} />
            </CardContent>
        </Card>
    )
}

export default ChartCard