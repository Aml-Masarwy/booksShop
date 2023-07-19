searchForm = document.querySelector(".search-form");

function goToProfile() {
  location.replace("../UserProfile/UserProfile.html");
}

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  mustLogin();
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  // adding data to localstorage
  const cartBox = document.querySelector(".cartBox");
  const iconShopping = document.querySelector(".iconShopping");
  const cartCloseBtn = document.querySelector(".fa-close");
  const attToCartBtn = document.getElementsByClassName("attToCart");
  iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});
  console.log(localStorage.getItem("items"));
  let items = [];
  for (let i = 0; i < attToCartBtn.length; i++) {
    attToCartBtn[i].addEventListener("click", function (e) {
      if (typeof Storage !== "undefined") {
        let item = {
          id: i + 1,
          name: e.target.parentElement.children[0].textContent,
          price: e.target.parentElement.children[1].children[0].textContent,
          no: 1,
        };
        if (JSON.parse(localStorage.getItem("items")) === null) {
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
          window.location.reload();
        } else {
          const localItems = JSON.parse(localStorage.getItem("items"));
          localItems.map((data) => {
            if (item.id == data.id) {
              item.no = data.no + 1;
            } else {
              items.push(data);
            }
          });
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
          window.location.reload();
        }
      } else {
        alert("local storage is not working on your browser");
      }
    });
  }
  // adding data to shopping cart
  const iconShoppingP = document.querySelector(".iconShopping p");
  let no = 0;
  if (localStorage.getItem("items")) {
    JSON.parse(localStorage.getItem("items")).map((data) => {
      no = no + data.no;
    });
  }
    iconShoppingP.innerHTML = no;

    //adding cartbox data in table
    const cardBoxTable = cartBox.querySelector("table");
    let tableData = "";
    tableData +=
      "<tr><th>S no.</th><th>Item Name</th><th>item Price</th><th></th></tr>";
    if (localStorage.getItem("items") === null) {
      tableData += '<tr><td colspan="5">No items found</td></tr>';
    } else {
      JSON.parse(localStorage.getItem("items")).map((data) => {
        tableData +=
          "<tr>  <th>" +
          data.id +
          "</th><th>" +
          data.name +
          "</th>  <th>" +
          data.no +
          "</th><th>" +
          data.price +
          '</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
      });
      cardBoxTable.innerHTML = tableData;
      cardBoxTable.innerHTML += `<th style="color: red;">Total= ₪ ${(onclick =
        Total())}\n</th>`;
      cardBoxTable.innerHTML +=
        ' <th><a href="../PaymentPage/index.html">Pay Safely Here </th></a>  ';
    }

   
  
 
};



function Total()
{
	let total=0;
	var products=JSON.parse(localStorage.getItem('items'));
	for(let i=0 ;i<products.length;i++)
	{
      total+=JSON.parse(products[i].price);
	  
	}
	return total;
	
}
function Delete(e){
	let items = [];
	JSON.parse(localStorage.getItem('items')).map(data=>{
		if(data.id != e.parentElement.parentElement.children[0].textContent){
			
			items.push(data);

		}
	});
	localStorage.setItem('items',JSON.stringify(items));
	window.location.reload();
};
var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var prouducts = document.getElementsByClassName("abc");
for (var i = 0; i < prouducts.length; i++) {
  console.log(prouducts[i]);
}

function mustLogin() {
  if (!localStorage.getItem("user")) {
    alert(
      "you have To Login First \n You Can creat Acount If Its You First Time "
    );
    location.replace("../login/login.html");
  }
}
