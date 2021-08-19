import { useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Container, Navbar, Row, Col, Form, Input, Button } from 'reactstrap'

import './products.css'

const Products = () =>{
    const dataProducts = [{
            id : 1,
            name : 'Hazelnut Latte',
            img : 'https://s3-alpha-sig.figma.com/img/e927/9050/cf7ff0ed682c5b1138bcefc23b8d2817?Expires=1629676800&Signature=MlPFqPk9xuwPTbJGvrreSQug2WBpA0byxH4Cu30PH3JbT6wX~QtonbtxBuXQRpcLY9WqFduZ5QK9kbX4-fJZ~5qrBaTcjLxPWwvGZjRNyphaZqgvLJwGWplCx-hnd6Nls6aYpy3wmxN~gPI0AB77Mb3WjLY7lJaBgxz13HrPziw9dLrcFD3macvKtW7u~qRSytz8mrsmlO3KQKjDgVABzQCTliJ1-1W9tdYTJmLCJ2erxQLpgQKqSKfuP5k2gDIANS1AlUgHRnXPiBI~V62v1IoF5b-YEpkntzicj2YgWPq6ZQ~ZbgEjlI1ZaRVkWzi2Uh3yLouIrLmRQ9tTq6YgrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 25000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 2,
            name : 'Veggie tomato mix',
            img : 'https://s3-alpha-sig.figma.com/img/eb89/44d7/59339e337c28bfc186fa32260b9a33c7?Expires=1630281600&Signature=Aibm5P~sng-OfOIW9tQQyzm~1KDM8r~AYE1Y2P8l2LCNLIE3xT0z8doGk9d9~Y9j1iNKcv6dJG7PvhmVk3hWy9uvC1P46Ue-fvNCEn~NjKDRaXVXZQ9bKseEvW56u5t6JoOewhx2hKT~CcxyUqsSP9F5jqvMFwxkPuUIX9--eHKJzjfatDJmKBWQcm7JAJuPMfIVwJyP13P~NBELeDzN4G7jEvIvVwgaJsFbvb0hgWfzD9hFrlGd0GYGKyyLffTAm4Ry9qJcWRFtphwmeQvTunz-JP7LmG33mEp~X3jJZHGcxtDnVcDdQTCWqLEhjUzHJRl1~CTu3FQGepoSGmfHHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 32000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 3,
            name : 'Summer fried rice',
            img : 'https://s3-alpha-sig.figma.com/img/05d2/2dde/db32c62ddc3bb93b3bd487e381aa3644?Expires=1630281600&Signature=BqXyqhIYBOZbdYb~jbGh-g8PZ0FU41F1cURx6NXIqgZog2snLqxh70QRq7vGph7AQZehhvBr7qaBWTMGleLyTUsdqHMihkx~OUt1ETG0KNgCOehsy9APDFcTjmMfofbnh6fEXfFySLbZUq~RDCzwLIlYe8oBvSn5b9jBA02m5qqOOEsMI63-F07y9Glryr5Ujep5HvHRdfGCwJM2p-zJCVvsBI5WN8KSm6nP4IEg2471kreD40C03BVkjSSomDt8fJbcNf1muGipOot5cieea-K5hO1nLW6JYClgPI4evI0v~twB3I0lnupCLORVpxp2Uc~yYrAGSYqmjWWEnpm8OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 27000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 4,
            name : 'Creamy Ice Latte',
            img : 'https://s3-alpha-sig.figma.com/img/b8f7/0e2a/0d98dd6a1ea259209e5b715734ee5a22?Expires=1630281600&Signature=cIYJHe7i9Y8UJXcMWe9WIPBEKE3Mje4wUXJFsAyCnVtaj-71KHPci4NkxyOAmZDhW64I8CrF6FgQbUKNihCQqJwklUy1tDZtn3REyq8DQrF0FGrPaJEOgDjilByRcwOJrVK7exgZQtttRqrD8~aZJNRpAvP8cbcRqfMj7~TZuO~udLEiZ4wI8Y5BJxtXD82QEZkV55K-VzPrmcSt1HrauObwn7A5uicBfVoXbnvtryscYg9cXg~MU9JqD~PmQZrrDJak0ZRDgwdTmdvUpT11MSVUvCshqeTm8h61eS0jrVx15yrOm-UzSnpT4iNa6tMJ4V7BCL8CEn6u75eCWJAE-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 34000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 5,
            name : 'Hazelnut Latte',
            img : 'https://s3-alpha-sig.figma.com/img/e927/9050/cf7ff0ed682c5b1138bcefc23b8d2817?Expires=1629676800&Signature=MlPFqPk9xuwPTbJGvrreSQug2WBpA0byxH4Cu30PH3JbT6wX~QtonbtxBuXQRpcLY9WqFduZ5QK9kbX4-fJZ~5qrBaTcjLxPWwvGZjRNyphaZqgvLJwGWplCx-hnd6Nls6aYpy3wmxN~gPI0AB77Mb3WjLY7lJaBgxz13HrPziw9dLrcFD3macvKtW7u~qRSytz8mrsmlO3KQKjDgVABzQCTliJ1-1W9tdYTJmLCJ2erxQLpgQKqSKfuP5k2gDIANS1AlUgHRnXPiBI~V62v1IoF5b-YEpkntzicj2YgWPq6ZQ~ZbgEjlI1ZaRVkWzi2Uh3yLouIrLmRQ9tTq6YgrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 25000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 6,
            name : 'Veggie tomato mix',
            img : 'https://s3-alpha-sig.figma.com/img/eb89/44d7/59339e337c28bfc186fa32260b9a33c7?Expires=1630281600&Signature=Aibm5P~sng-OfOIW9tQQyzm~1KDM8r~AYE1Y2P8l2LCNLIE3xT0z8doGk9d9~Y9j1iNKcv6dJG7PvhmVk3hWy9uvC1P46Ue-fvNCEn~NjKDRaXVXZQ9bKseEvW56u5t6JoOewhx2hKT~CcxyUqsSP9F5jqvMFwxkPuUIX9--eHKJzjfatDJmKBWQcm7JAJuPMfIVwJyP13P~NBELeDzN4G7jEvIvVwgaJsFbvb0hgWfzD9hFrlGd0GYGKyyLffTAm4Ry9qJcWRFtphwmeQvTunz-JP7LmG33mEp~X3jJZHGcxtDnVcDdQTCWqLEhjUzHJRl1~CTu3FQGepoSGmfHHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 32000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 7,
            name : 'Summer fried rice',
            img : 'https://s3-alpha-sig.figma.com/img/05d2/2dde/db32c62ddc3bb93b3bd487e381aa3644?Expires=1630281600&Signature=BqXyqhIYBOZbdYb~jbGh-g8PZ0FU41F1cURx6NXIqgZog2snLqxh70QRq7vGph7AQZehhvBr7qaBWTMGleLyTUsdqHMihkx~OUt1ETG0KNgCOehsy9APDFcTjmMfofbnh6fEXfFySLbZUq~RDCzwLIlYe8oBvSn5b9jBA02m5qqOOEsMI63-F07y9Glryr5Ujep5HvHRdfGCwJM2p-zJCVvsBI5WN8KSm6nP4IEg2471kreD40C03BVkjSSomDt8fJbcNf1muGipOot5cieea-K5hO1nLW6JYClgPI4evI0v~twB3I0lnupCLORVpxp2Uc~yYrAGSYqmjWWEnpm8OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 27000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 8,
            name : 'Creamy Ice Latte',
            img : 'https://s3-alpha-sig.figma.com/img/b8f7/0e2a/0d98dd6a1ea259209e5b715734ee5a22?Expires=1630281600&Signature=cIYJHe7i9Y8UJXcMWe9WIPBEKE3Mje4wUXJFsAyCnVtaj-71KHPci4NkxyOAmZDhW64I8CrF6FgQbUKNihCQqJwklUy1tDZtn3REyq8DQrF0FGrPaJEOgDjilByRcwOJrVK7exgZQtttRqrD8~aZJNRpAvP8cbcRqfMj7~TZuO~udLEiZ4wI8Y5BJxtXD82QEZkV55K-VzPrmcSt1HrauObwn7A5uicBfVoXbnvtryscYg9cXg~MU9JqD~PmQZrrDJak0ZRDgwdTmdvUpT11MSVUvCshqeTm8h61eS0jrVx15yrOm-UzSnpT4iNa6tMJ4V7BCL8CEn6u75eCWJAE-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 34000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 9,
            name : 'Hazelnut Latte',
            img : 'https://s3-alpha-sig.figma.com/img/e927/9050/cf7ff0ed682c5b1138bcefc23b8d2817?Expires=1629676800&Signature=MlPFqPk9xuwPTbJGvrreSQug2WBpA0byxH4Cu30PH3JbT6wX~QtonbtxBuXQRpcLY9WqFduZ5QK9kbX4-fJZ~5qrBaTcjLxPWwvGZjRNyphaZqgvLJwGWplCx-hnd6Nls6aYpy3wmxN~gPI0AB77Mb3WjLY7lJaBgxz13HrPziw9dLrcFD3macvKtW7u~qRSytz8mrsmlO3KQKjDgVABzQCTliJ1-1W9tdYTJmLCJ2erxQLpgQKqSKfuP5k2gDIANS1AlUgHRnXPiBI~V62v1IoF5b-YEpkntzicj2YgWPq6ZQ~ZbgEjlI1ZaRVkWzi2Uh3yLouIrLmRQ9tTq6YgrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 25000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 10,
            name : 'Veggie tomato mix',
            img : 'https://s3-alpha-sig.figma.com/img/eb89/44d7/59339e337c28bfc186fa32260b9a33c7?Expires=1630281600&Signature=Aibm5P~sng-OfOIW9tQQyzm~1KDM8r~AYE1Y2P8l2LCNLIE3xT0z8doGk9d9~Y9j1iNKcv6dJG7PvhmVk3hWy9uvC1P46Ue-fvNCEn~NjKDRaXVXZQ9bKseEvW56u5t6JoOewhx2hKT~CcxyUqsSP9F5jqvMFwxkPuUIX9--eHKJzjfatDJmKBWQcm7JAJuPMfIVwJyP13P~NBELeDzN4G7jEvIvVwgaJsFbvb0hgWfzD9hFrlGd0GYGKyyLffTAm4Ry9qJcWRFtphwmeQvTunz-JP7LmG33mEp~X3jJZHGcxtDnVcDdQTCWqLEhjUzHJRl1~CTu3FQGepoSGmfHHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 32000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 11,
            name : 'Summer fried rice',
            img : 'https://s3-alpha-sig.figma.com/img/05d2/2dde/db32c62ddc3bb93b3bd487e381aa3644?Expires=1630281600&Signature=BqXyqhIYBOZbdYb~jbGh-g8PZ0FU41F1cURx6NXIqgZog2snLqxh70QRq7vGph7AQZehhvBr7qaBWTMGleLyTUsdqHMihkx~OUt1ETG0KNgCOehsy9APDFcTjmMfofbnh6fEXfFySLbZUq~RDCzwLIlYe8oBvSn5b9jBA02m5qqOOEsMI63-F07y9Glryr5Ujep5HvHRdfGCwJM2p-zJCVvsBI5WN8KSm6nP4IEg2471kreD40C03BVkjSSomDt8fJbcNf1muGipOot5cieea-K5hO1nLW6JYClgPI4evI0v~twB3I0lnupCLORVpxp2Uc~yYrAGSYqmjWWEnpm8OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 27000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id : 12,
            name : 'Creamy Ice Latte',
            img : 'https://s3-alpha-sig.figma.com/img/b8f7/0e2a/0d98dd6a1ea259209e5b715734ee5a22?Expires=1630281600&Signature=cIYJHe7i9Y8UJXcMWe9WIPBEKE3Mje4wUXJFsAyCnVtaj-71KHPci4NkxyOAmZDhW64I8CrF6FgQbUKNihCQqJwklUy1tDZtn3REyq8DQrF0FGrPaJEOgDjilByRcwOJrVK7exgZQtttRqrD8~aZJNRpAvP8cbcRqfMj7~TZuO~udLEiZ4wI8Y5BJxtXD82QEZkV55K-VzPrmcSt1HrauObwn7A5uicBfVoXbnvtryscYg9cXg~MU9JqD~PmQZrrDJak0ZRDgwdTmdvUpT11MSVUvCshqeTm8h61eS0jrVx15yrOm-UzSnpT4iNa6tMJ4V7BCL8CEn6u75eCWJAE-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price : 34000, 
            decription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }]
    const [data,setData]  = useState(dataProducts)
    const [search,setSearch] = useState('')
    const [promo,setPromo]  = useState([])
    const history = useHistory();
    const location = useLocation();

    const query  = new URLSearchParams(location.search)
    const resultSearch = query.get('search')
    
    localStorage.setItem('data',JSON.stringify(data))
    localStorage.setItem('promo',JSON.stringify(promo))
    const getDataProducts = localStorage.getItem('data')
    const getDataPromo = localStorage.getItem('promo')
    const products = JSON.parse(getDataProducts)
    const promodata = JSON.parse(getDataPromo)

    const changeSearch = (e) =>{
        setSearch(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`products?search=${search}`)
    }

    useEffect(()=>{
        if (resultSearch && resultSearch !==''){
            // eslint-disable-next-line array-callback-return
            const searchProduct = products.filter((e)=>{
                if (e.name.toLowerCase().includes(resultSearch)){
                    return e
                }
            })
            setData(searchProduct)
            console.log(searchProduct)
        }else{
            setData(dataProducts)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[resultSearch])
    
    useEffect(()=>{
        setPromo([{
            image:'https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1630281600&Signature=eoFdGDt2OB5iFXJQ934yjNP-KGz36kOU9Z62Qm1iaFKjbgatVe9MpLyJ62XH2uYJTChmrNS1GTkmPKmPuGcxMTmlQFnU81oh6TxK9f8MmGswHgxPWCWGS37TlkL2uPaPVUVGCRC-W~am-g9PmY8BEZ56uhnrkO7jAaoSrzjKNW5H2np87wg~AJKcCDutbHXVP0OFA~xgBV4G3eZ93GB4LfSbuAvg~M3hF24l3g1ylaEUiC6iYLGkd5Bwoy9~VeWUo71F45eia2xXFRchAi-tbe2PDfXiptxrzSsMCbRv86u8SuIHIJam62o6XrJoiKAgMflRq4QOf13J63eCThgC6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title:"Happy Mother's Day",
            promo:'Get one of our favorite menu for free!',
            color:'#88B788'
        },{
            image:'https://s3-alpha-sig.figma.com/img/ed87/b600/bcd624c9cdfab5f48a586cfe014785b0?Expires=1630281600&Signature=hebfe1YPzGpajLEJrSYoV5FNrsFsX5Jesedp6AEKaeGmvF3rwQ6WU37l-i9mNc7-UonYR6kAYnYxVPBCS7vhzdLCHobdERSY3MftnY9HF-r-jJ~VQ~Ks~H8CQuqIHWCmUvaunf6QazZdIJNUfvW~UJ3aCELOcNeLFZRMvg6Vh7ACjBy9Qn6Y-Daiso1jX0RcM3Z8WE-Jm5C1kaDHVVFpghq-zeZLDUVNj69dJCQq0hmsPDlr3WAFRzgLmVvcuqCrfmFx0yVab2nnkXL-QrmtwbtvNt98j3sq0sYT-Mncc3kHMdsQIERfFactVhQjpJ5zmsDgKG~nJT3FbQWU5GcGzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: "Get a cup of coffee for free on sunday morning",
            promo: 'Only at 7 to 9 AM',
            color:'#f5c361'
        },{
            image:'https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1630281600&Signature=eoFdGDt2OB5iFXJQ934yjNP-KGz36kOU9Z62Qm1iaFKjbgatVe9MpLyJ62XH2uYJTChmrNS1GTkmPKmPuGcxMTmlQFnU81oh6TxK9f8MmGswHgxPWCWGS37TlkL2uPaPVUVGCRC-W~am-g9PmY8BEZ56uhnrkO7jAaoSrzjKNW5H2np87wg~AJKcCDutbHXVP0OFA~xgBV4G3eZ93GB4LfSbuAvg~M3hF24l3g1ylaEUiC6iYLGkd5Bwoy9~VeWUo71F45eia2xXFRchAi-tbe2PDfXiptxrzSsMCbRv86u8SuIHIJam62o6XrJoiKAgMflRq4QOf13J63eCThgC6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title:"Happy Mother's Day",
            promo:'Get one of our favorite menu for free!',
            color:'#88B788'
        },{
            image:'https://www.figma.com/file/fasJn1Olwj6azeNptPY9zB/image/e25b8a97346f786692a9f23c7fc959db9981ae5c?fuid=912948118055089498',
            title:"Happy Halloween!",
            promo:'Do you like chicken wings? Get 1 free only if you buy pinky promise',
            color:'#C59378'
        }])
    }, [])
    // console.log(data)
    return(
        <div>
            <Nav isLogin='true' />
            <div className='main'>
                <div className='promoContent bdr'>
                    <div className="pt-lg-4 pt-md-4 pt-2 title-aside">
                        <h5 className="brown rubik fw-bolder">Promo Today</h5>
                        <p className="poppins p-2 fs12">Coupons will be updated every weeks. Check them out!</p>
                    </div>
                    <div className="d-flex flex-lg-column flex-md-column align-items-lg-center p-2 promo">
                        {
                            promodata.map((e,i)=>{
                                return(
                                    <div key={i} className='card d-flex flex-row poppins mb-lg-2 mb-md-2' style={{backgroundColor: e.color}}>
                                        <img src={e.image} alt="" width="75px" />
                                        <div className="card-body  promotext">
                                            <div className="card-text fw-bold fs12">{e.title}</div>
                                            <div className="card-text mt-2 fs12">{e.promo}</div>
                                        </div> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="d-flex justify-content-lg-center justify-content-md-center p-lg-0 p-md-0 p-2 ">
                        <Link to='#' className="btn bgd-darkbrown text-white btnSubmitPromo  fs12 fw-bolder action">Apply Button</Link>
                    </div>
                    <div className="ms-lg-5 mt-lg-5 mt-3 ms-2">  
                        <p className="m-0 ms-1">Term and Condition</p>
                        <ul className="fs12 list-term">
                            <li>You can only apply 1 coupon per day</li>
                            <li>It only afor dine in</li>
                            <li>Buy 1 get 1 only for new user</li>
                            <li>Should make member card to apply coupon</li>
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    <Navbar className=" fontFamily navbar navbar-expand navbar-light d-flex navbar-products">
                        <ul className="navbar-nav navbarProducts w-100 justify-content-center">
                            <li className="nav-item me-lg-4 nav-product fw-bolder">
                            <Link to='#' className="nav-link">Favorite & Promo</Link>
                            </li>
                            <li className="nav-item me-lg-4 nav-product fw-bolder">
                            <Link to='#'  className="nav-link">Coffee</Link>
                            </li>
                            <li className="nav-item me-lg-4 nav-product fw-bolder">
                            <Link to='#'  className="nav-link">Non Coffee</Link>
                            </li>
                            <li className="nav-item  me-lg-4 nav-product fw-bolder">
                            <Link to='#'  className="nav-link">Foods</Link>
                            </li>
                            <li className="nav-item me-lg-4 nav-product fw-bolder">
                            <Link to='#'  className="nav-link">Add-on</Link>
                            </li>
                        </ul>
                    </Navbar>
                    <Form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                        <Input type="text" onChange={changeSearch} value={search} name="search" placeholder="Cari Product" className='w-75 me-2'/>
                        <Button type="submit" className='btn btn-success'>Search</Button>
                    </Form>
                    <Container>
                        <Row className='ps-lg-5 pe-lg-5'>
                            {products.map((element)=>{
                                return(

                                    <Col key={element.id} xs="6" md ='4' lg='3' className='d-flex justify-content-center p-2'>
                                        <div className="product" onClick={()=>{history.push('/details/'+ element.id)}} >
                                            <div className="round-border shadow">
                                                <img src={element.img} alt="" width='100%' height='auto' />
                                            </div>
                                            <h1 >{element.name}</h1>
                                            <h2 className='fw-bold'>IDR {element.price}</h2>
                                        </div>
                                    </Col>
                                    
                                )
                            })}
                        </Row>  
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Products