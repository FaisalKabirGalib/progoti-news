import { menuItem } from "../types";



 export const AllCATEGORIES = [
    {
        label:{en:'Prochod',bn:'প্রচ্ছদ'},
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



// প্রগতিপত্র ~ প্রথম সংখ্যা ~ শ্রাবণ ১৪২১ বঙ্গাব্দ ।। জুন-জুলাই ২০১৪ খ্রিস্টাব্দ
// প্রগতিপত্র ~ দ্বিতীয় সংখ্যা ~ আশ্বিন ১৪২১ বঙ্গাব্দ ।। সেপ্টেম্বর-অক্টোবর ২০১৪ খ্রিস্টাব্দ
// প্রগতিপত্র ~ তৃতীয় সংখ্যা ~ ফাল্গুন ১৪২১ বঙ্গাব্দ ।। ফেব্রুয়ারি-মার্চ ২০১৫ খ্রিস্টাব্দ
// প্রগতিপত্র ~ চতুর্থ সংখ্যা ~ ভাদ্র ১৪২২ বঙ্গাব্দ ।। আগস্ট-সেপ্টেম্বর ২০১৫ খ্রিস্টাব্দ
// প্রগতিপত্র ~ পঞ্চম সংখ্যা ~ চৈত্র ১৪২২ বঙ্গাব্দ ।। মার্চ-এপ্রিল ২০১৬ খ্রিস্টাব্দ
// প্রগতিপত্র ~ ষষ্ঠ সংখ্যা ~ মাঘ ১৪২৩ বঙ্গাব্দ ।। জানুয়ারি-ফেব্রুয়ারি ২০১৭ খ্রিস্টাব্দ
// প্রগতিপত্র ~ সপ্তম সংখ্যা ~ অগ্রহায়ণ ১৪২৪ বঙ্গাব্দ ।। নভেম্বর-ডিসেম্বর ২০১৭ খ্রিস্টাব্দ
// প্রগতিপত্র ~ অষ্টম সংখ্যা ~ ভাদ্র ১৪২৯ বঙ্গাব্দ ।। আগস্ট-সেপ্টেম্বর ২০২২ খ্রিস্টাব্দ
// প্রগতিপত্র ~ নবম সংখ্যা ~ চৈত্র ১৪২৯ বঙ্গাব্দ ।। মার্চ-এপ্রিল ২০২৩ খ্রিস্টাব্দ
// প্রগতিপত্র ~ দশম সংখ্যা ~ অগ্রহায়ণ ১৪৩০ বঙ্গাব্দ ।। নভেম্বর-ডিসেম্বর ২০২৩ খ্রিস্টাব্দ