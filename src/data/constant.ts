import { menuItem } from "../types";



 export const AllCATEGORIES = [
 {
        label:{en:'home',bn:'home'},
         type:'link',
        },
    {
        label:{en:'Prochod',bn:'প্রচ্ছদ'},
        type:'link',
    },
    {
        label:{en:'Biggopti',bn:'বিজ্ঞপ্তি'},
        type:'link',
},
    {
        label:{en:'Songbad',bn:'সংবাদ'},
        type:'link'    
    },
    {
        label:{en:'Komiti',bn:'কমিটি'},
        type:'link'    
    },
    
    {
        label:{en:'Itihas',bn:'ইতিহাস'},
        type:'link',
    },
    {
        label:{en:'Songbad',bn:'সংবাদ'},
        type:'link',
    },
    {
        label:{en:'Komiti',bn:'কমিটি'},
        type:'link',
    },
    {
        label:{en:'Chitipotro',bn:'চিঠিপত্র'},
        type:'link',
    },
    {
        label:{en:'Sompadokio',bn:'সম্পাদকীয়'},
        type:'link',
    },
    {
        label:{en:'Gronthalochona',bn:'গ্রন্থালোচনা'},
        type:'link',
    },
    {
        label:{en:'Probondho',bn:'প্রবন্ধ'},
        type:'link',
    },
    {
        label:{en:'Nibondho',bn:'নিবন্ধ'},
        type:'link',
    },
    {
        label:{en:'Natok',bn:'নাটক'},
        type:'link',
    },
    {
        label:{en:'Uponnas',bn:'উপন্যাস'},
        type:'link',
    },
    {
        label:{en:'Golpo',bn:'গল্প'},
        type:'link',
    },
    {
        label:{en:'Kobita',bn:'কবিতা'},
        type:'link',
    },
    {
        label:{en:'Chora',bn:'ছড়া'},
        type:'link',
    },
    {
        label:{en:' Muktijodha',bn:'মুক্তিযুদ্ধ'},
        type:'link',
    },
    {
        label:{en:'BiseshRochona',bn:'বিশেষ রচনা'},
        type:'link',
    },
    {
        label:{en:'VromonKahini',bn:'ভ্রমণকাহিনী'},
        type:'link',
    },
    {
        label:{en:'Onugolpo',bn:'অনুগল্প'},
        type:'link',
    },
    {
        label:{en:'Sriticharon',bn:'স্মৃতিচারণ'},
        type:'link',
    },
{
        label:{en:'Biggapon',bn:'বিজ্ঞাপন'},
        type:'link',
    },
{
        label:{en:'Chobi',bn:'ছবি '},
        type:'link',
    },
{
        label:{en:'Suchipotro',bn:'সূচিপত্র'},
        type:'link',
    },
{
        label:{en:'SongbadKonika',bn:'সংবাদ-কণিকা'},
        type:'link',
    },
    {
        label:{en:'progoti-1',bn:'প্রথম সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-2',bn:'দ্বিতীয় সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-3',bn:'তৃতীয় সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-4',bn:'চতুর্থ সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-5',bn:'পঞ্চম সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-6',bn:'ষষ্ঠ সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-7',bn:'সপ্তম সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-8',bn:'অষ্টম সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-9',bn:'নবম সংখ্যা'},
         type:'link',
        },
        {
        label:{en:'progoti-10',bn:'দশম সংখ্যা'},
         type:'link',
        },
]



export const NAVBARITEMS:menuItem[] = [
    {
        label:{en:'Prochod',bn:'প্রচ্ছদ'},
        type:'link',
    },
    {
        label:{en:'Songothon',bn:'সংগঠন'},
        type:'dropdown',
        child:[
            {
                label:{en:'Itihas',bn:'ইতিহাস'},
                type:'link',
            },
          
            {
                label:{en:'Songbad',bn:'সংবাদ'},
                type:'link'    
            },
            {
                label:{en:'Komiti',bn:'কমিটি'},
                type:'link'    
            },
        ]
    },
    {
            label:{en:'Biggopti',bn:'বিজ্ঞপ্তি'},
            type:'link',
    },
    {
            label:{en:'Ovimot',bn:'অভিমত'},
            type:'dropdown', 
            child:[
                {
                    label:{en:'Chitipotro',bn:'চিঠিপত্র'},
                    type:'link',
                },
                {
                    label:{en:'Sompadokio',bn:'সম্পাদকীয়'},
                    type:'link',
                },
                {
                    label:{en:'Gronthalochona',bn:'গ্রন্থালোচনা'},
                    type:'link',
                },
            ]
        },
        {
            label:{en:'Archarive ',bn:'আর্কাইভ'},
            type:'dropdown',
            child:[
                {
                    label:{en:'Probondho',bn:'প্রবন্ধ'},
                    type:'link',
                },
                {
                    label:{en:'Nibondho',bn:'নিবন্ধ'},
                    type:'link',
                },
                {
                    label:{en:'Natok',bn:'নাটক'},
                    type:'link',
                },
                {
                    label:{en:'Uponnas',bn:'উপন্যাস'},
                    type:'link',
                },
                {
                    label:{en:'Golpo',bn:'গল্প'},
                    type:'link',
                },
                {
                    label:{en:'Kobita',bn:'কবিতা'},
                    type:'link',
                },
                {
                    label:{en:'Chora',bn:'ছড়া'},
                    type:'link',
                },
                {
                    label:{en:' Muktijodha',bn:'মুক্তিযুদ্ধ'},
                    type:'link',
                },
                {
                    label:{en:'BiseshRochona',bn:'বিশেষ রচনা'},
                    type:'link',
                },
                {
                    label:{en:'VromonKahini',bn:'ভ্রমণকাহিনী'},
                    type:'link',
                },
                {
                    label:{en:'Onugolpo',bn:'অনুগল্প'},
                    type:'link',
                },
                {
                    label:{en:'Sriticharon',bn:'স্মৃতিচারণ'},
                    type:'link',
                },
            ]

        },
        {
            label:{en:'Potrika',bn:'পত্রিকা'},
            type:'dropdown', 
            child:[
               { 
                label:{en:'প্রগতিপত্র',bn:'প্রগতিপত্র'},
                type:'dropdown',
                child:[
                    {
                    label:{en:'progoti-1',bn:'প্রথম সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-2',bn:'দ্বিতীয় সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-3',bn:'তৃতীয় সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-4',bn:'চতুর্থ সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-5',bn:'পঞ্চম সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-6',bn:'ষষ্ঠ সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-7',bn:'সপ্তম সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-8',bn:'অষ্টম সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-9',bn:'নবম সংখ্যা'},
                     type:'link',
                    },
                    {
                    label:{en:'progoti-10',bn:'দশম সংখ্যা'},
                     type:'link',
                    },
                ]
                
                
            
                }
            ]
        },
        {
            label:{en:'Other',bn:'অন্যান্য'},
            type:'dropdown',
            child:[
                {
                    label:{en:'Biggapon',bn:'বিজ্ঞাপন'},
                    type:'link',
                },
                {
                    label:{en:'Chobi',bn:'ছবি '},
                    type:'link',
                },
                {
                    label:{en:'Suchipotro',bn:'সূচিপত্র'},
                    type:'link',
                },
                {
                    label:{en:'SongbadKonika',bn:'সংবাদ-কণিকা'},
                    type:'link',
                },
            ]
        },
  


]



