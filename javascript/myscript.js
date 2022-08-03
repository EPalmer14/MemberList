$.ajax({
    url: 'data/members.csv',
    dataType: "text"
}).done(function(raw) {
    const data=Papa.parse(raw.trim(), {header:true}).data;
    console.log(data);

    const memberListRoot = document.querySelector("#member_list");
    memberListRoot.innerHTML = "";
    data.forEach(member=> {
        console.log(member.first_name, member.last_name);
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.classList.add(member.pet);
        memberListRoot.appendChild(li);

        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        li.appendChild(rowDiv);

        const imgDiv = document.createElement("div");
        imgDiv.className = "col-md-3"
        rowDiv.appendChild(imgDiv);

        const infoDiv = document.createElement("div");
        infoDiv.setAttribute("class", "col-md-9");
        rowDiv.appendChild(infoDiv);

        const img = document.createElement("img");
        img.setAttribute('src', member.picture);
        img.setAttribute('alt', 'member name' + member.name);
        imgDiv.appendChild(img);

        const nameText = document.createElement('h2');
        nameText.innerText = member.first_name + " " + member.last_name;
        infoDiv.appendChild(nameText);

        const majorText = document.createElement('p');
        majorText.innerText = member.major;
        infoDiv.appendChild(majorText);

        const emailText = document.createElement('p');
        emailText.innerText = member.email;
        infoDiv.appendChild(emailText);

        const addressText = document.createElement('p');
        addressText.innerText = member.address;
        infoDiv.appendChild(addressText);

        const petImgDiv = document.createElement("div");
        petImgDiv.setAttribute("class", "pet_img");
        infoDiv.appendChild(petImgDiv);

        const petImg = document.createElement('img');
        petImg.setAttribute('src', "img/" + member.pet + ".svg");
        petImg.setAttribute('alt', member.pet);
        petImg.setAttribute('id', member.pet);
        petImgDiv.appendChild(petImg);

    });

    const allOverview = document.querySelectorAll('#member_list p');
    allOverview.forEach(p => {
        p.style.fontSize = "0.8rem";
    });

    document.querySelectorAll('h2').forEach(ele => {
        ele.classList.add('name_text');
    })

    document.querySelectorAll('p').forEach(ele => {
        ele.classList.add('main_text');
    })


    const allMembers = document.querySelector('#member_list').children
    for(let i=0; i < allMembers.length; i++) {
        allMembers[i].addEventListener('click', () => {
            allMembers[i].classList.toggle("italic_text");
            console.log(allMembers[i]);
            const italic_text = document.querySelectorAll('.italic_text').length;
        })
    }

});

const allMembers = document.querySelector('#member_list').children
function showList(indicator) {
    for(let i = 0; i < allMembers.length; i++){
        if(indicator.id === allMembers[i].classList[1]){
            allMembers[i].classList.toggle('gold_bg');
        }
    }
};
