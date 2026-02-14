# Backend Fundamentals — Concept Preparation & Discovery Guide

---

## Section 1: How a Website Actually Works

>Task 1: Observe what happens when you open a website


<details>
<summary> 1. Where is Google stored?</summary>
Google ka ak server hai jaha ya store hota hai aur uska aalag aalag center hotain hai 
</details>

<details>
<summary> 2. How did your browser get Google's data??</summary>
Google ka Data ko lana ka liya hamara browser google ka api's mai request karta hai aur google ka server us request ko process karta hai aur uska aanusar data send karta hai .
</details>

<details>
<summary> 3. Did your browser already have Google's code?
</summary>
Hamara browser ka pass google ka code nahi hota hai but hamara browser google ka server mai request kar ka data leta hai .
</details>

<details>
<summary> 4. Who sent the HTML, CSS, and JavaScript to your browser?</summary>
jaha per bhe hum apni website ko host kartain hai vaha sa html css and js ke file aati hai .
</details>

<details>
<summary> 5. What is that system called that sends this data?</summary>

its called a server.
</details>

---
---

## Section 2: Understanding Server

> Task 2: Understand what a server really is

<details>
<summary> 1. What is a server?</summary>
server ak aaisa code hota hai jo kisi machine mai run hota hai aur jab uski api's mai koi request aati hai to vo request ka aanausar run ho kar response send karta ahi 
</details>

<details>
<summary> 2. Is server a software or hardware?
</summary>
server software hota hai jo hardware par run hota hai .
</details>

<details>
<summary> 3. Can your laptop act as a server?
</summary>
ha hamara laptop server ke tahara act karta hai 
</details>

<details>
<summary> 4. What makes a machine a server?
</summary>
jab machine mai koi code ka aanusar request aana per response send karna hota hai to vo server ke tahara act karta hai 
</details>

<details>
<summary> 5. What does "starting a server" actually mean?
</summary>
starting a server ka matlab ya hai ke jab hamara server koi request ko handle karna ka liya ready ho jata hai 
</details>

<details>
<summary>  7 . When a server starts, what is it waiting for?
</summary>
jab server start hota hai to vo user ke request ka liya wait karta hai 
</details>

---
---
## Section 3: Understanding Request and Response


> Task 3: Observe real requests

<details>
<summary> 1. What is a request?</summary>
request aaisa koi query hota hai jo cilent karta hai server ko 
</details>

<details>
<summary> 2. Who sends the request?

</summary>
cilent send karta hai request 
</details>

<details>
<summary> 3. Who receives the request?
</summary>
server receive karta hai request 
</details>

<details>
<summary> 4. What is a response?
</summary>
response server deta hai cilent ko cilent ke request pe 
</details>

<details>
<summary> 5. Who sends the response?
</summary>
server send karta hai response 
</details>

<details>
<summary> 6. What happens if response is not sent?

</summary>
jab response nahi aaata hai tab cilent wait karta hai aur bauth der ho jati hai tab cilent ke request fail ho jati hai aur error aata hai 
</details>

---
---
## Section 4: Understanding HTTP Protocol

>Task 4: Discover HTTP methods

<details>
<summary>1. What is HTTP?</summary>
HTTP ek rules ka set hai jiske zariye frontend aur backend aapas mein baat karte hain.
</details>

<details>
<summary>2. What do these methods do: GET, POST, PUT, DELETE?</summary>
- **GET**: Data lene ke liye use hota hai .
- **POST**: Naya data save karne ke liye use hota hai .
- **PUT**: Purane data ko badalne ya update karne ke liye use hota hai .
- **DELETE**: Data ko hatane ke liye use hota hai .
</details>

---
---

## Section 5: Understanding API

>Task 5: Explore APIs

<details>
<summary>1. Is this frontend or backend? (https://jsonplaceholder.typicode.com/users)</summary>
Ye backend hai. Browser sirf us data ko fetch karke dikha raha hai.
</details>

<details>
<summary>2. Why is browser showing data?</summary>
Kyunki browser ne us URL par ek request bheji hai aur server ne response mein data wapas kiya hai.
</details>

<details>
<summary>3. Who sent this data?</summary>
server ne ye data bheja hai.
</details>

<details>
<summary>4. What happens when frontend calls this URL?</summary>
Frontend ko response main JSON data milta hai jise wo code ke zariye web page par dikha sakta hai.
</details>

---
---

## Section 6: Understanding JSON

>Task 6: Discover JSON

<details>
<summary>1. What is JSON?</summary>
JSON data ko ek se doosri jagah bhejne ka ek format hai.
</details>

<details>
<summary>2. Why does backend use JSON instead of HTML?</summary>
Kyunki backend ka kaam sirf data bhejna hota hai aur json mai data send karna light weight hota hai aur machine ka liya read karna bhe easy hota hai.
</details>

<details>
<summary>3. What is difference between JSON and JavaScript object?</summary>
json ek string format hai jisme keys aur values hamesha double quotes (" ") mein hoti hain aur eska ak proper format hota hai aur jo javascript object hota hai uska ak aalag feature hota hai jaisa it can store a function and undefined values. 
</details>

<details>
<summary>4. Why is JSON easy for machines to read?</summary>
Kyunki iska structure fix aur predictable hota hai aur koi specefic programing langauge based nahi hota hai .
</details>

---
---

## Section 7: Understanding localhost and Port

>Task 7: Discover localhost

<details>
<summary>1. What is localhost?</summary>
localhost ka matlab hota hai ke jo cheez hamara computer mai chalta hai bas .
</details>

<details>
<summary>2. Why does localhost refer to your own computer?</summary>
kyucki localhost hamara computer ke address hota hai 
</details>

<details>
<summary>3. What is a port?</summary>
port ak 4 dig and 5 digit number hota hai jo kisi server mai jana ka liya use hota hai .
</details>

<details>
<summary>4. Why do we use port 3000, 5000, etc?</summary>
Ye common ports hain jo development ke liye use kiye jaate hain 
</details>

<details>
<summary>5. Can two servers use same port?</summary>
nahi ek machine par ek port par ek samay mein sirf ek hi server ya application chal sakti hai.
</details>

---
---

## Section 8: Understanding Full Request Flow

>Task 8: Explain in your own words

<details>
<summary>1. When user clicks button, what happens first?</summary>
frontend us button ka press karna per jo bhe code run hoga uska aanusar ak request ko send karta hai backend server mai
</details>

<details>
<summary>2. How does frontend contact backend?</summary>
fontend mai fetch and axios ka use kar ka hum forntend and backend ko connect karte hai 
</details>

<details>
<summary>3. How does backend know what to send?</summary>
frontend sa jab request send kartain hai to tab hum backend ke api url ka use kartain hai aur usasa backend ka routes mai request jati hai aur response send karta hai
</details>

<details>
<summary>4. How does frontend receive data?</summary>
backend sa json format mai fronted mai response aata hai 
</details>

---
---

## Section 9: Practical Observation Task

>Task 9: Visit JSONPlaceholder Posts

<details>
<summary>1. What type of data is this?</summary>
Ye ek JSON Array hai jisme 'posts' ka data hai.
</details>

<details>
<summary>2. Who created this data?</summary>
backend server mai rakha gya hai 
</details>

<details>
<summary>3. Is this frontend or backend?</summary>
ya backend hai 
</details>

<details>
<summary>4. Why is this useful?</summary>
kyuki  eas data sa hum frontend mai dynamic data ko show kar saktain hai 
</details>

---
---

## Final Outcome 


### Core Concepts You Must Understand:

**What is a server?**
- koi aaisa machine jisain program kiya ho aur request aana per response send karta hai 

**What is backend?**
- ya server ko run karta hai aur req,res ka cycle ka logic ko handle karta hai database sa operation karta hai 

**What is an API?**
- api ak aaisa cheez hoti hai jismain koi do program aapas mai baat kartain hai ya connect hota hai aur data send and revcive kartain hai 

**What is a request?**
- aaisa koi message ho cilent send karta hai server par

 **What is a response?**
- aaisa message jo server send karta hai cilent ko uski ke gaye request per

 **What is JSON?**
- do api ka beech mai data ko transfer karna ka liya use hota hai.

 **What is localhost?**
- hamara computer ke localhost hota hai 

 **What is a port?**
- koi number hota hai jo kisi server par jana ke liya use hota hai 

 **How do frontend and backend communicate?**
- frontend ko backend se connect karne ke liya fetch and axios ka use hota hai 
- backend ko frontend se connect karne ke liya api ka use hota hai 

---
---