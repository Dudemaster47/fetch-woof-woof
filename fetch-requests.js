/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch('/products',{
    method: 'POST',
    body:"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",   
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        }

    })  

/* ============================== Phase 2 ============================== */

async function postObj(){
 
    const resObj = await fetch('/products',{
        method: 'POST',
        body:"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",   
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            }
    
        })  
    const status = resObj.status
    
    const url = resObj.url
    
    const header = resObj.headers.get("Content-Type")
    
        console.log(status, url, header)
    
    }
    
    postObj()


/* ============================== Phase 3 ============================== */

// Your code here