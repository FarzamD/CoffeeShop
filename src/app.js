    //third party to use
// react bootstrap
// router + redux
//react accordion: collapsable sections
//react-dates
//react image carousel: rotating images
//react data grid: for tables?
//react forms: form validation (and contact us?)
// //
// Places to Find Open Source React Footers and Headers:

//     GitHub Explore:
//         Search for "react footer open source" or "react header open source".
//         Use filters to narrow down results by language (JavaScript) and sort by stars (popularity) or recently updated.
//         Check the repository description and documentation to see if the component seems well-maintained and easy to use.

//     NPM Package Search:
//         Search for keywords like "react footer" or "react header" on the npm registry: https://www.npmjs.com/search?q=keywords:search
//         Look for packages with a significant number of downloads and good ratings.
//         Check the package's documentation and license information.

//     Open Source Component Directories:
//         Websites like ComponentHub ([https://www.thereacthub.com/]) showcase various React components, including footers and headers.
//         Filter by category or search for specific keywords.
//         These directories often provide summaries and links to the component's repository or documentation.
const names=['فاطمه صالحی','محمد افشار',
'امیر حسینی','زهرا محمدی','کیان سعادت',
'آرش کمالى','نیما محمدی','نازنین عزیزی',
'مریم معظمی','رضا شهیدی','ریحانه جواهری',
'مهتا طباطبایی','کاوه فرهنگی','فاطمه محمدی',
'سام نوبخت','علی رضایی','رویا شفيعی',
'عرفان انصاری','دانیال فرجی','سارا رحمانی',
'سهیل کاظمی','متین مرادی']
const emails1=[
    'Fatemeh_Salehi@example.com',
    'Mohammad_Afshar@example.com',
    'Amir_Hosseini@example.com',
    'Zahra_Mohammadi@example.com',
    'Kian_Saadat@example.com',
    'Arash_Kamali@example.com',
    'Nima_Mohammadi@example.com',
    'Nazanin_Azizi@example.com',
    'Maryam_Moazemi@example.com',
    'Reza_Shahidi@example.com',
    'Reyhaneh_Javaheri@example.com',
    'Mehta_Tabatabaei@example.com',
    'Kaveh_Farhangi@example.com',
    'Fateme_Mohammadi@example.com',
    'Sam_Nobakht@example.com',
    'Ali_Rezaei@example.com',
    'Roya_Shafiei@example.com',
    'Erfan_Bahar@example.com',
    'Daniel_Faraji@example.com',
    'Sara_Rahmani@example.com',
    'Soheil_Kazemi@example.com',
    'Matin_Moradi@example.com'
]
const emails2=[
    'Fatemeh_Salehi@iranmehr.sch.ir',
    'Mohammad_Afshar@iranmehr.sch.ir',
    'Amir_Hosseini@iranmehr.sch.ir',
    'Zahra_Mohammadi@iranmehr.sch.ir',
    'Kian_Saadat@iranmehr.sch.ir',
    'Arash_Kamali@iranmehr.sch.ir',
    'Nima_Mohammadi@iranmehr.sch.ir',
    'Nazanin_Azizi@iranmehr.sch.ir',
    'Maryam_Moazemi@iranmehr.sch.ir',
    'Reza_Shahidi@iranmehr.sch.ir',
    'Reyhaneh_Javaheri@iranmehr.sch.ir',
    'Mehta_Tabatabaei@iranmehr.sch.ir',
    'Kaveh_Farhangi@iranmehr.sch.ir',
    'Fateme_Mohammadi@iranmehr.sch.ir',
    'Sam_Nobakht@iranmehr.sch.ir',
    'Ali_Rezaei@iranmehr.sch.ir',
    'Roya_Shafiei@iranmehr.sch.ir',
    'Erfan_Bahar@iranmehr.sch.ir',
    'Daniel_Faraji@iranmehr.sch.ir',
    'Sara_Rahmani@iranmehr.sch.ir',
    'Soheil_Kazemi@iranmehr.sch.ir',
    'Matin_Moradi@iranmehr.sch.ir'
]

const store= configureStore();
console.log(store.getState().items)
store.getState().items.map(({type})=>{console.log(type==='cold drink')})
// console.log(
    names.map((name,i)=>{
        let f={name:name, email1:emails1[i], email2:emails2[i],
        number:'09110123456', title:'مربی', bio:'bio'};
        store.dispatch(addFaculty({...f, imgSrc:`./imgs/ppl/${i+1}.jpg`}));
    })
//  )
// const store= configureStore();
// const f1={name: 'فاطمه صالحی', email1: 'Fatemeh_Salehi@example.com',
//         title: 'دبیر', number:'09110487231'}
// store.dispatch(addFaculty(f1));

// test codes above
const RootAPP = document.getElementById('app');

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
// import 'normalize.css/normalize.css';
import Routes from './routers/Routes';
import {Provider, connect } from 'react-redux'
import configureStore from './components/redux/store/configureStore';
import { addFaculty } from './components/redux/actions/faculties';



const app =(
    <Provider store={store}>
        <Routes/>
    </Provider>
)


ReactDOM.render(app, RootAPP);

