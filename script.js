let heart = document.querySelector(".heart");
let maincont = document.querySelector(".right-cont");
heart.addEventListener("click",function(){
    // console.log("heart");
    // console.log(solid_heart);
    if(heart.src=="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
        heart.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
    }
    else{
        heart.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
    }
})

let bin = document.querySelector(".bin")
bin.addEventListener("click",function(){
    // console.log("bin");
    let body = document.querySelector("body");
    let divalert = document.createElement("div");
    divalert.className = "alert";
    let image = document.createElement("img");
    image.className = "alertbin";
    image.setAttribute("src","https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714");
    divalert.innerText="Are you sure you want to delete this?";
    divalert.appendChild(image);
    let cancel_button = document.createElement("button");
    let delete_button = document.createElement("button");
    cancel_button.className = "Cancel";
    delete_button.className = "Delete";
    delete_button.innerText = "Delete";
    cancel_button.innerText = "Cancel";
    divalert.appendChild(delete_button);
    divalert.appendChild(cancel_button);
    body.appendChild(divalert);
    // body.style.backgroundColor = "black";
    // body.style.opacity = "0.2";
})

let post = document.querySelector(".bottom button");
post.addEventListener("click",function(){
    // console.log("btn");
    let left_cont = document.querySelector(".top");
    let textarea = left_cont.querySelector(".textarea"); 
    generateTweet(textarea.value);
})
function generateTweet(task){
    let tweetcont = document.createElement("div");
    // <div class="left-cont">
    //             <div class="top">
    //                 <div> <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt=""></div>
    //                 <textarea class="textarea" >Lorem ipsum dolor, sit amet repudiandae architecto inventore magnam dicta minus. Maiores!</textarea>
    //             </div>
    //             <div class="bottomfeed">
    //                 <div class="bottomfeedleft">
    //                     <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">    
    //                     <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
    //                  </div>
    //                  <div class="bottomfeedright">
    //                     <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">    
    //                     <img class="bin" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
    //                  </div>
    //             </div>         
    // </div>
    tweetcont.className = "tweet-cont";
    tweetcont.innerHTML = `<div class="left-cont">
    <div class="top">
        <div> <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt=""></div>
        <textarea class="textarea" >${task}</textarea>
    </div>
    <div class="bottomfeed">
        <div class="bottomfeedleft">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">    
            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
         </div>
         <div class="bottomfeedright">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">    
            <img class="bin" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
         </div>
    </div>         
</div>`
    // console.log(ticketcont);
    maincont.appendChild(tweetcont);
}


