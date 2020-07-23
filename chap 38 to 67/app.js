// chap 38-42                         ctrl-a & uncomment

// task1

function power(a, b) {
    alert(a + ' raised to ' + b + ' is : ' + (Math.pow(a, b)))
}
power(5, 3)

// ===================================================================================

// task 2

var year = prompt("enter year", "2020");
function leapYear(Year) {
    var date = new Date(`February 29, ${year}`);
    result = (date.getMonth() === 1) ? alert("Its a Leap Year") : alert("Its not a Leap Year");
}
leapYear(year);

// var year = prompt("enter year", "2020");
// function leapYear2(year){
//    var flag = (year%100===0) ? (year%400===0):(year%4===0);
//    result = (flag===true) ? alert("Its a Leap Year"):alert("Its not a Leap Year")
// }
//leapYear2(year)

// ===================================================================================

// task 3

function S(a, b, c) {
    var S = (a + b + c) / 2
    return S
}

function area(a, b, c) {
    var side = S(a, b, c)
    var areav = side * (side - a) * (side - b) * (side - c)
    alert("a = " + a + ", b = " + b + ", c = " + c + " Area of triangle is " + areav)
}
area(5, 3, 4)

//   ######### using clouser ############

//function S(a,b,c){
//     var side = (a+b+c)/2
//     function area(){
//         var area = side*(side-a)*(side-b)*(side-c)
//         return area
//     }
//     return area
// }
// var area = S(6,7,8)
// alert("Area of triangle is 2"+area())

// ===================================================================================

// task 4

// var totalmMarks =300
// function percentage(sub1,sub2,sub3){
//     return((sub1+sub2+sub3)*100/totalmMarks).toFixed(1)

// }

// function average(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)/3).toFixed(1)
// }
// function mainFunction(sub1,sub2,sub3){
//     var per = percentage(sub1,sub2,sub3)
//     var ave =   average(sub1,sub2,sub3)
//     alert("your percentage is "+ per+" and your average is "+ave)
// }
// mainFunction(76,89,94)

function main(sub1, sub2, sub3) {
    function percentage() {
        var percentage = (((sub1 + sub2 + sub3) * 100) / 300)
        return percentage
    }
    function average() {
        var average = (sub1 + sub2 + sub3) / 3
        return average
    }

    var per = percentage().toFixed(1)
    var avg = average().toFixed(1)
    alert("your percentage is " + per + " and your average is " + avg)

}

main(76, 89, 94)

// ===================================================================================

// task 5

sen = "Programing language Javascript is on top, this language use for front-end and back-end development"
flag = false
function index(char, start = null) {
    if (start !== null && typeof (start) === 'number') {
        var val = start
    } else {
        val = 0
    }
    for (var i = val; i < sen.length; i++) {
        var check = sen.slice(i, (i + char.length));
        if (check === char) {
            flag = true
            return i

        }
    }
    if (!flag) {
        return -1
    }

}
var word = 'language'
var res = index(word)
alert('index of ' + word + " in a sentence " + " is " + res)

// ===================================================================================

// task 6

var vowelSen =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
totam rem aperiameaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit";

function removeVowel(sentence) {
    sentence = sentence.replace(/i/g, "")
    sentence = sentence.replace(/o/g, "")
    sentence = sentence.replace(/u/g, "")
    sentence = sentence.replace(/e/g, "")
    sentence = sentence.replace(/a/g, "")
    // vowelSen = sentence.replace(/i/g,"")
    alert("Sentence after remove vowel : " + sentence)
}

removeVowel(vowelSen)

//function removeVowels(sentence) {
//  newSen = "";
//   for (var i = 0; i < vowelSen.length; i++) {
//     check = sentence.slice(i, i + 1);
//     switch (check) {
//       case "a":
//         break;
//       case "i":
//         break;
//       case "o":
//         break;
//       case "u":
//         break;
//       case "e":
//         break;
//       default:
//         newSen += check;
//    }
//   }
//   alert(newSen);
// }

// removeVowels(vowelSen);

// ===================================================================================

// task 7

var senVow =
    "Pleases read this application and give me gratuity Such occurrences are ea, ea, ui.";
function vowelNum(senVow) {
    vowelCount = 0;
    for (var i = 0; i < senVow.length; i++) {
        var check = senVow.slice(i, i + 1);
        switch (check) {
            case "a":
                vowelCount++;
                break;
            case "e":
                vowelCount++;
                break;
            case "i":
                vowelCount++;
                break;
            case "o":
                vowelCount++;
                break;
            case "u":
                vowelCount++;
                break;
            default:
                break
        }
    }
    alert("number of vowel in this sentence is " + vowelCount)
}

vowelNum(senVow)

// ===================================================================================

// task 8


var dis = prompt("Enter distance in KM :", 1);

function distance(dis) {
    function Meter() {
        meterDis = (dis * 1000);
        alert(dis + " KM into meter are " + meterDis + " m")
    }
    function Feet() {
        feetDis = (dis * 3280.839895)
        alert(dis + " KM into feet are " + feetDis + " ft")
    }
    function Inches() {
        inchDis = (dis * 39370)
        alert(dis + " KM into inches are " + inchDis + " inch")
    }
    function Cm() {
        cmDis = (dis * 100000)
        alert(dis + " KM into inches are " + cmDis + " cm")
    }
    return { meter: Meter, feet: Feet, inches: Inches, cm: Cm }
}

var result = distance(dis)
// result.meter()
result.feet()
result.inches()
// result.cm()


// ===================================================================================



// task 9

var hour = +prompt("Enter your work hour", 45)
function overTime(hour) {
    overPay = 0
    if (hour > 40) {
        var diff = Math.floor(hour) - 40
        overPay += diff * 12
    }
    alert("For " + diff + " hour of over time your over pay is " + overPay + " RS")
}

overTime(hour)


// ===================================================================================


// task 10




var num = +prompt("Enter amount : ", 4350)
var th;
var hun;
var ten;
var unit;


function currencyNote(amount) {
    var result = `you will have `;
    var num = amount;
    if (num >= 1000) {
        th = Math.floor(num / 1000);
        num = num - (th * 1000)
    }
    if (num >= 100 && num < 1000) {
        hun = Math.floor(num / 100)
        num = num - (hun * 100)
    }
    if (num >= 10 && num < 100) {
        ten = Math.floor(num / 10)
        num = num - (ten * 10)
    }

    if (th !== 0) {
        result += ` ${th} thousand notes,`
    }
    if (hun !== 0) {
        result += ` ${hun} hundred notes,`
    }
    if (ten !== 0) {
        result += ` ${ten} ten notes`
    }

    alert(result)
}

currencyNote(num)




// ===================================================================================
// ===================================================================================
// ===================================================================================



// chap 43-48                         ctrl-a & uncomment


// task 1 & 2


var btn = document.querySelector('.main');

btn.addEventListener("click", (e) => {
    if (e.target.className === "btn") {
        var al = document.querySelector('.alert')
        al.classList.add("alertShow")
        var a = document.getElementsByTagName('html')
        var pop = document.querySelector('.pop')
        pop.style.display = "block"
    }
})


var okbtn = document.querySelector('.alert-btn');
okbtn.addEventListener("click", (e) => {
    var al = document.querySelector('.alert')
    al.classList.remove("alertShow")
    var pop = document.querySelector('.pop')
    pop.style.display = "none"

})



// ===================================================================================


// task3

var tabBtn = document.querySelector(".stuTable")
tabBtn.addEventListener('click', (e) => {
    if (e.target.className === "tab-btn") {
        var tr = e.target.parentElement.parentElement;
        tr.parentElement.removeChild(tr);
    }
})

// ===================================================================================

//task 4



var imgxc = document.querySelector(".img-change");
imgxc.addEventListener('mouseover', () => {
    imgxc.src = "./images/car2.jpg"
})

var imgxc = document.querySelector(".img-change");
imgxc.addEventListener('mouseout', () => {
    imgxc.src = "./images/car1.jpg"
})



// ===================================================================================


//task 5



var btn = document.querySelector('.cbtn')
var num = document.querySelector('.num')
var reset = document.querySelector('.reset')
btn.addEventListener('click', (e) => {
    if (e.target.innerText === "+") {
        num.innerText++
    } else if (e.target.innerText === "-") {
        num.innerText--
    }
})

reset.addEventListener('click', (e) => {
    num.innerText = 0
})








// ===================================================================================

// ===================================================================================

// chapter 49-52

// task 1

var emailInp = document.querySelector("#emailP")
emailInp.value = "email@gmail.com"
var passInp = document.querySelector("#passP")
passInp.value = "password123";

var btn = document.querySelector(".btnS")
btn.addEventListener('click', (e) => {
    e.preventDefault()
    var email = document.querySelector("#emailP").value;
    var pass = document.querySelector("#passP").value;
    var check = document.querySelector(".cks").checked;
    (email !== null) ? alert("Your email is : " + email) : "";
    (pass !== null) ? alert("Your Password is :" + pass) : "";
    (check === true) ? alert("Your remember password is check") : alert("Your remember password is not check");
})

// ===================================================================================



// task 2


var moreText = document.querySelector(".read-More");
moreText.addEventListener('click', () => {
    moreText.style.display = "none"
    var text = document.querySelector(".text");
    var append = document.querySelector(".moretext").textContent;
    text.innerHTML += append

})


// ===================================================================================



// task 3

var tabBtn = document.querySelector(".stuTable2")
tabBtn.addEventListener('click', (e) => {
    if (e.target.className === "tab-btn2") {
        var tr = e.target.parentElement.parentElement;
        tr.parentElement.removeChild(tr);
    }
})



var ttd;
var edtBtn = document.querySelector(".stuTable2");
edtBtn.addEventListener('click', (e) => {
    if (e.target.className === "edt-btn") {
        ttd = e.target
        var db = document.querySelector('.form2');
        db.style.display = "inline"
        var pop2 = document.querySelector('.pop2');
        pop2.style.display = "inline"
        if (e.target.className === "edt-btn") {
            var tr = e.target.parentElement.parentElement.children;
            Array.from(tr).forEach((tar) => {
                if (tar.className === "index") {
                    index = tar.textContent;
                }
                if (tar.className === "name") {
                    name = tar.textContent;
                }
                if (tar.className === "standard") {
                    standard = tar.textContent;
                }
            })
            var ind = document.querySelector('.Indexf');
            ind.value = index
            var nam = document.querySelector('.Namef');
            nam.value = name
            var cl = document.querySelector('.Classf');
            cl.value = standard
        }
    }
})






var sub2 = document.querySelector(".btnS2");
sub2.addEventListener('click', (e) => {
    e.preventDefault()
    var ind = document.querySelector('.Indexf');
    var nam = document.querySelector('.Namef');
    var cl = document.querySelector('.Classf');
    var tr2 = document.querySelectorAll(".row");
    var tr = ttd.parentElement.parentElement.children;
    Array.from(tr).forEach((tar) => {
        if (tar.className === "index") {
            tar.textContent = ind.value;
        }
        if (tar.className === "name") {
            tar.textContent = nam.value;
        }
        if (tar.className === "standard") {
            tar.textContent = cl.value;
        }
    })
    var db = document.querySelector('.form2');
    db.style.display = "none"
    var pop2 = document.querySelector('.pop2');
    pop2.style.display = "none"
})




// ===================================================================================

// ===================================================================================

// chapter 52-57

// task 1


var img = document.querySelector('.gallery');
img.addEventListener('click', function a(e) {
    if (e.target.nodeName === "IMG" && e.target.classList.contains("not") === false) {
        var popup = document.querySelector('.pop3');
        popup.style.display = "inline";
        var div = document.createElement("div");
        var image = e.target.cloneNode(false);
        image.classList.add("not")
        div.appendChild(image)
        div.classList.add("add")
        img.appendChild(div)
    }
})


var cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (e) => {
    var popup = document.querySelector('.pop3');
    popup.style.display = "none";
    var bigImg = document.querySelector(".add");
    addRm = bigImg.parentElement
    addRm.removeChild(bigImg)
})

var inOut = document.querySelector('.in-out');
inOut.addEventListener('click', (e) => {
    if (e.target.nodeName === "P") {
        if (e.target.className === "zoom-in") {
            var imgSize = document.querySelector(".add img");
            currenWidth = imgSize.clientWidth;
            currenHeigth = imgSize.clientHeight;
            if (currenWidth <= 1000) {
                var ww = ((currenWidth + 10) + "px")
                var hh = ((currenHeigth + 10) + "px")

                var setP = document.querySelector(':root')
                setP.style.setProperty("--pop-width", ww)
                setP.style.setProperty("--pop-height", hh)
            }
        } else if (e.target.className === "zoom-out") {
            var imgSize = document.querySelector(".add img");
            currenWidth = imgSize.clientWidth;
            currenHeigth = imgSize.clientHeight;
            if (currenWidth >= 650) {
                var w = ((currenWidth - 10) + "px")
                var h = ((currenHeigth - 10) + "px")
                var setP = document.querySelector(':root')
                setP.style.setProperty("--pop-width", w)
                setP.style.setProperty("--pop-height", h)
            }
        }
    }
})



// ===================================================================================

// ===================================================================================

// chapter 58-67

// task 1

var mainContent = document.querySelector('#main-content')
Array.from(mainContent.children).forEach((tar) => {
    document.write("<br> Child elements of main-content : " + tar)
})

var render = document.querySelector('.render')
document.write("<br><br> render innerHTML : " + render.innerHTML)

var fn = document.querySelector('#first-name')
fn.value = "Abdullah"
var ln = document.querySelector('#last-name')
ln.value = "jamshed"
var em = document.querySelector('#ema')
em.value = "email@domain.com"


// // task 2

var formContent = document.querySelector('#main-content')
document.write("<br><br> NODE type of id form-content : " + formContent.nodeType)

var lastName = document.querySelector('#lastName');
document.write("<br><br>" + "node type of id lastName" + lastName.nodeType)
Array.from(lastName.childNodes).forEach((res) => {
    document.write("<br><br>" + "node type of id lastName child : " + res.nodeType)
})

lastName.textContent = "Child of id lastName is update "



document.write("<br><br> First child of id main-content is : " + formContent.firstElementChild)
document.write("<br><br> Last child of id main-content is : " + formContent.lastElementChild)


document.write("<br><br> next sibling of id lastName is : " + lastName.previousElementSibling)
document.write("<br><br> previous sibling  of id lastName is : " + lastName.previousElementSibling)


document.write("<br><br> parent Node of id email : " + em.parentElement)
document.write("<br><br> parent Node of id email : " + em.nodeType)
