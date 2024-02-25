const addbtn=document.querySelector(".add-btn");
const modalcont=document.querySelector(".modal-cont");
const mainTicketContainer = document.querySelector(".main-ticket-cont");
const textArea= document.querySelector(".textarea-cont");
const allprioritycolor = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const toolBoxColor = document.querySelectorAll(".color");

const ticketArr =[];

for(let i=0;i<toolBoxColor.length;i++){
    toolBoxColor[i].addEventListener("click",() =>{
        // get the selected color from the filter
        const selectedToolBoxColor= toolBoxColor[i].classList[0];

        // filter the tickets based on the selected color
        const filterdeTickets = ticketArr.filter((ticket) =>{
            return selectedToolBoxColor=== ticket.ticketColor;
        });

        //remove all the selected ticket those are created
        const allTickets = document.querySelectorAll(".ticket-cont");
        for(let i=0;i<allTickets.length;i++){
            allTickets[i].remove();
        }

        // re-create the filtered tickets
        filterdeTickets.forEach((ticket) => 
          createTicket(ticket.ticketColor,ticket.ticketInfo,ticket.ticketId)
        );
       
    });

    toolBoxColor[i].addEventListener("dblclick",()=>{
        const allTicket = document.querySelectorAll(".ticket-cont");
        for(let i=0 ;i< allTicket.length;i++){
            allTicket[i].remove();
        }
        filterdeTickets.forEach((ticket) => 
          createTicket(ticket.ticketColor,ticket.ticketInfo,ticket.ticketId)
        );
       
    });

}
let addTaskflag = false;
let modalPrioritycolor= "black";
let removeTaskFlag = false;
const cleanUpColorSelection =() =>{
    allprioritycolor.forEach((currElem) =>{
        currElem.classList.remove("active-status-color");
    });
};
removeBtn.addEventListener("click", ()=>{
    removeTaskFlag=!removeTaskFlag;
   if(removeTaskFlag==true){
    window.alert("Delete Button has been activated");
    removeBtn.style.color="red";
   }
   else{
    removeBtn.style.color="white";
   }
});
addbtn.addEventListener("click" ,()=>{
    addTaskflag=!addTaskflag;
    cleanUpColorSelection();
    if(addTaskflag === true){
        modalcont.style.display="flex";
    }
    else{
        modalcont.style.display="none";
    }
});

allprioritycolor.forEach((colorElem) => {
    colorElem.addEventListener("click",(event) =>{
        //clean up  the exisiting  selected option
        allprioritycolor.forEach((curElem)=>{
            curElem.classList.remove("active-status-color");
        });  
        modalPrioritycolor =event.target.classList[0];
        colorElem.classList.add("active-status-color");
    });
});

// Keydown
modalcont.addEventListener("keydown",(event) =>{
    // console.log(event);
    if(event.key==="Alt"){
        createTicket(modalPrioritycolor,textArea.value,"");
       modalcont.style.display = "none";
       textArea.value = "";
    }
});
const createTicket =(ticketColor,ticketInfo, ticketUniqueId)  =>{
    const ticketId= ticketUniqueId || shortid();
    const ticketCont =document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${ticketId}</div>
    <div class="task-area">
        ${ticketInfo}
    </div>
    <div class="lock">
        <i class="fa-solid fa-lock"></i>
    </div>`;
mainTicketContainer.appendChild(ticketCont);
if(ticketUniqueId.length <=0){
    ticketArr.push({ticketId,ticketInfo,ticketColor});
}
// if you want to add listener to each ticket and return it
handleRemove(ticketCont);
handleLock(ticketCont);
handleColor(ticketCont);
};

const handleRemove =(ticket) =>{
    ticket.addEventListener("click",()=>{
        if(removeTaskFlag=== true){
            ticket.remove();
            const ticketObj=getTicket(ticketId);
            ticketArr.splice(ticketObj,1);
        }
      
    });
};

let lockTicket= "fa-lock";
let unlockTicket ="fa-lock-open";
const handleLock = (ticket) =>{
    const ticketKLockElem = ticket.querySelector(".lock");
    const ticketKLockIcon = ticketKLockElem.children[0];
    const ticketTaskArea = ticket.querySelector(".task-area");

    ticketKLockIcon.addEventListener("click", () =>{
        if(ticketKLockIcon.classList.contains("fa-lock")){
            ticketKLockIcon.classList.remove("fa-lock");
            ticketKLockIcon.classList.add("fa-lock-open");
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            ticketKLockIcon.classList.remove("fa-lock-open");
            ticketKLockIcon.classList.add("fa-lock");
        }
    });
};

const colors = ["lightpink","lightgreen","lightblue","black"];
const handleColor =(ticket) =>{
    let colorBand = ticket.querySelector(".ticket-color");

    colorBand.addEventListener("click", () =>{
        //We have to find color of the band and then index of that color
        //From colors array and then we need to update color of the band
        //with next index of colo
        let currentColor = colorBand.classList[1]; 
       const currentColorIndex = colors.indexOf(currentColor);
       const newColor = colors[(currentColorIndex+1)%colors.length];
       colorBand.classList.remove(currentColor);
       colorBand.classList.add(newColor);
    });
};

// Get the ticket based on ticket
const getTicket = (ticketId) =>{
    let ticket={};
    for(let i=0;i<ticketArr.length;i++){
        if(ticketArr[i].ticketId = ticketId){
            ticket = ticketArr[i];
            break;
        }
    }
    return ticket;
};

