
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
const links = searchWrapper.querySelectorAll("li");

//capture users data
inputBox.onkeyup = (e) => {
    let value = e.target.value;
    if (value) {

        fetch('http://localhost:8080/search?query=' + value)
            .then(response => response.json())
            .then(data => {
                let userMap = data.map((users) => {
                    return `<li> 
                    <div class = "result">
                    <a>${users.firstName} ${users.lastName}</a>
                    <img src = "https://wallpaperaccess.com/full/6173557.jpg">
                    </div>
                    </li>
                `;
                });
                searchWrapper.classList.add("active");
                suggBox.innerHTML = userMap.join('');
                let allList = suggBox.querySelectorAll("li");


                for (let i = 0; i < allList.length; i++) {
                    allList[i].setAttribute("onclick", "select(this)");
                }

            });
    }
    else {
        searchWrapper.classList.remove("active");
    }
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //pass the input data to textfield
}






