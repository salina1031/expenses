//selecting the elements form the index
expensesName=document.getElementById("ExpensesName");
amount=document.getElementById("amount");
addButton=document.querySelector("button");
List=document.getElementsByClassName("listConatiner")
Total=document.querySelector("span")
//loading the expenses form the local storage or creating the array if no expenses  exists
Expenses=JSON.parse(localStorage.getItem("Expenses"))||[]
//save and render the data 
function saveRender(){
    localStorage.setItem("expenses",JSON.stringify(expenses))
}

//randers /show the expenses when web page is open/load
renderExpenses();//this is the function to call the elements/ content in the function

//for adding the expenses
addButton.addEventListener("click",()=>{
    const expName=expensesName.value;
    const Amt=number(amount.value)
    if (expName=""||amt<=0)
        return;
    //keeping all the value in the expense array which contain(date,expName,Amt)
    const expense={
        id:Date.now(),
        expName,
        Amt
    };
    //add expense to the expenses
    expenses.push(expense)
    //calling the function saveRender to store in the web local storage
    saveRender();
    
    expensesName.value=""
    amount.value=""
});


//for rendering the expenses n the web page so creating the function
//which is called in above code
function renderExpenses(){
    List.innerHTML="";
    let total=0;//initial total amount

    expenses.foreach(exp=>{
        total+=exp.Amt
    

    //creating the div to display the amount
    const div=document.createElement("div");
    //writing in the web so it can be display in the page
    div.innerHTML=`${exp.expName} -RS.${exp.Amt}
    <button onclick="deleteExp(${exp.id})">Delete</button>`//creating the delete button
    List.appendChild(div)
    });
    Total.textContent=`Total Expenses: RS${total}`

}
//delete the expenses
function deleteExp(){
    expenses.expenses.filter(ex=>ex.id!=id)
    saveRender();
}