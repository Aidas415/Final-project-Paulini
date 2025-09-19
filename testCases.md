# 🧪🔍💡 **PAULINI - Test scenarios & Test Cases** 

## **Documentation**

## **TS 01. Login**

##  Login positive tests


### 🧪✅  [**TC 01.01. - Positive: login with email from main page**](/pictures/loginImg/tc0101/prisijungti.button.png)

- **Environment:**  `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:**
- Valid user account must exist and be accessible via environment variables
- Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- Real user credentials are used for testing purposes
- Only non-sensitive data (name and email) will be disclosed in this test case 
- Password and full phone number are masked

📝- **Test Steps:**
  1. Enter correct email
  2. Enter correct password
  3. Click on the `Prisijungti` button
  4. Observe the result

🎯- **Expected Result:** 
- The user is successfully logged in
- No popup message is displayed
- Top-left corner of the page shows: `DISPLAY_NAME`


### 🧪✅ [**TC 01.02. - Positive: login with phone number from main page**](/pictures/loginImg/tc0102/prisijungti.button.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** 
- Valid user account must exist and be accessible via environment variables
- Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The user must access the homepage without being signed in
- Real user credentials are used for testing purposes
- Only non-sensitive data (name and email) will be disclosed in this test case; password and full phone number are masked

📝- **Test Steps:**
  1. Enter correct phone number
  2. Enter correct password
  3. Click on the `Prisijungti` button
  4. Observe the result

🎯- **Expected Result:** 
- The user is successfully logged in
- No popup message is displayed
- Top-left corner of the page shows: `DISPLAY_NAME`


### 🧪✅ [**TC 01.03. - Positive: login from header**](/pictures/loginImg/tc0103/login.from.header.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** 
- Valid user account must exist and be accessible via environment variables
- Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Navigate to the top of the page, locate the `PRISIJUNGTI` item in the header
  2. Click the item `PRISIJUNGTI` to proceed to the login screen
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/prisijungimas`
- The login form appears
- The breadcrumb `PAULINI > PRISIJUNGTI` appears above the list on the left side
- The form includes fields for phone/email and password
- The `PRISIJUNGTI` action button is visible and functional


### 🧪✅ [**TC 01.04. - Positive: login from hamburger menu**](/pictures/loginImg/tc0104/hmbrg.item.prisijungti.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** 
- Valid user account must exist and be accessible via environment variables
- Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The user must access the homepage without being signed in
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on the hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PRISIJUNGTI` item
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/prisijungimas`
- The login form was displayed correctly
- The breadcrumb `PAULINI > PRISIJUNGTI` appears above the form on the left side
- The form includes fields for phone/email and password
- The `PRISIJUNGTI` action button is visible and functional


## 👍 Login negative tests

### 🧪✅ [**TC 01.05. - Negative: login when email without "@" symbol**](/pictures/loginImg/tc0105/incorrect.email.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Enter email without `@` symbol
  2. Enter password `USER_PASSWORD`
  3. Click on the `Prisijungti` button
  4. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


### 🧪✅ [**TC 01.06. - Negative: login fails with invalid phone number**](/pictures/loginImg/tc0106/incorrect.phone.nmb.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Enter incorrect phone number
  2. Enter correct password
  3. Click on the `Prisijungti` button
  4. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


### 🧪✅ [**TC 01.07. - Negative: login fails with invalid password**](/pictures/loginImg/tc0107/incorrect.passw.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Enter correct email
  2. Enter incorrect password
  3. Click on the `Prisijungti` button
  4. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


## **TS 02. Navigation Menu**


### 🧪✅ [**TC 02.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page**](/pictures/navigatioImg/tc0201/breadcrumb.priemimo_skyriai.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** 
- Open the website `https://paulini.lt/` in a web browser

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The `PRIĖMIMO SKYRIAI` page opens
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side


### 🧪✅ [**TC 02.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page**](/pictures/navigatioImg/tc0202/breadcrumb.akcijos_naujienos.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- the top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 


### 🧪✅ [**TC 02.03. - Page "APIE MUS" is visible and accessible from main page**](/pictures/navigatioImg/tc0203/breabcrum.apie_mus.png) 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** 
- Open the website `https://paulini.lt/` in a web browser

📝- **Test Steps:**
  1. Click on `APIE MUS` menu item
  2. Observe result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side


### 🧪✅ [**TC 02.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page**](/pictures/navigatioImg/tc0204/breadcrumb.akcijos_naujienos.png) 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- The page `https://paulini.lt/priemimo-skyriai` is reachable and fully loaded

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- The top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 


### 🧪✅ [**TC 02.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page**](/pictures/navigatioImg/tc0205/breadcrumb.apie_mus.png) 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- The page `https://paulini.lt/priemimo-skyriai` is reachable and fully loaded

📝- **Test Steps:**
  1. Click on the `APIE MUS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side


### 🧪✅ [**TC 02.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page**](/pictures/navigatioImg/tc0206/breadcrumb.priemimo_skyriai.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- The page `https://paulini.lt/akcijos-ir-naujienos` is reachable and fully loaded

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
- The `PRIĖMIMO SKYRIAI` page opens
- The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side


### 🧪✅ [**TC 02.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page**](/pictures/navigatioImg/tc0207/breadcrumb.apie_mus.png) 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- The page `https://paulini.lt/akcijos-ir-naujienos` is reachable and fully loaded

📝- **Test Steps:**
  1. Click on the `APIE MUS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side


### 🧪✅ [**TC 02.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page**](/pictures/navigatioImg/tc0208/breadcrumb.priemimo_skyriai.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The page `https://paulini.lt/apie-mus` is reachable and fully loaded

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side


### 🧪✅ [**TC 02.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page**](/pictures/navigatioImg/tc0209/breadcrumb.akcijos_naujienos.png) 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The page `https://paulini.lt/apie-mus` is reachable and fully loaded

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- the top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 


## **TS 03. Hamburger Menu**


## When the user is not logged in


### 🧪✅ [**TC 03.01. - Registration is possible from the "hamburger" menu**](/pictures/hamburgerImg/tc0301/registracija_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on the hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `REGISTRACIJA` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/registracija`
- The breadcrumb `PAULINI > REGISTRACIJA` appears above the form on the left side
- The form includes fields for: Vardas, Pavardė, El.Paštas, Tel.Nr., Lytis, Gimimo diena, Slaptažodis, Pakartoti slaptažodį
- Two checkbexes are visible: `Noriu gauti ypatingus pasiūlymus` and `Sutikti su taisyklėmis`
- A button labeled `PATVIRTINTI REGISTRACIJĄ` is visible


### 🧪✅ [**TC 03.02. - The "AKCIJOS IR NAUJIENOS" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0302/akcijos_naujienos_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on the hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `AKCIJOS IR NAUJIENOS` button
  3. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- the top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 
- The page shows offers where each includes a title, short description, and optionally an image or expiration date


### 🧪✅ [**TC 03.03. - The "PASLAUGOS IR PREKĖS" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0303/paslaugos_prekes_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**`
  1. Click on the hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PASLAUGOS IR PREKĖS` button
  3. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/paieska`
- The breadcrumb `PAULINI > PREKĖS IR PASLAUGOS` appears above the list on the left side
- The page displays a list of all goods and services


### 🧪✅ [**TC 03.04. - The "KREDITAI IR KUPONAI" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0304/kreditai_kuponai_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `KREDITAI IR KUPONAI` button
  3. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/kreditai-ir-kuponai
- The breadcrumb `PAULINI > KREDITAI IR KUPONAI` appears above the list on the left side
- The page displays a list of coupons with credits


### 🧪✅ [**TC 03.05. - The "PRIĖMIMO SKYRIAI" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0305/priemimo_skyriai_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PRIĖMIMO SKYRIAI` button
  3. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The `PRIĖMIMO SKYRIAI` page opens
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side


### 🧪✅ [**TC 03.06. - The "APIE MUS" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0306/apie_mus_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `APIE MUS` button
  3. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The page describe everything about `PAULINI` with a short introduction
- Contact information includes email, phone number, and address
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side


### 🧪✅ [**TC 03.07. - The "PASIEKIMAI" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0307/pasiekimai_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PASIEKIMAI` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/pasiekimai`
- The breadcrumb `PAULINI > PASIEKIMAI` appears above the list on the left side
- The page displays a list of `PAULINI` achievements


### 🧪✅ [**TC 03.08. - The "PARTNERIAI" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0308/partneriai_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PARTNERIAI` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/partneriai`
- The breadcrumb `PAULINI > PARTNERIAI` appears above the list on the left side
- The page displays a list of `PAULINI` business partners


### 🧪✅ [**TC 03.09. - The "KLAUSKITE?" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0309/klauskite_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `KLAUSKITE?` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/pagalba`
- The filling form appears
- The breadcrumb `PAULINI > TURITE KLAUSIMŲ?` appears above the list on the left side


### 🧪✅ [**TC 03.10. - The "TAISYKLĖS" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0310/taisykles_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `TAISYKLĖS` button
  3. Observe result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/taisykles`
- The breadcrumb `PAULINI > TAISYKLĖS` appears above the list on the left side
- The page displays a list of rules


### 🧪✅ [**TC 03.11. - The "PRIVATUMO POLITIKA" page is accessible from the "hamburger" menu**](/pictures/hamburgerImg/tc0311/privatumo_politika_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PRIVATUMO POLITIKA` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/privatumo-politika`
- The breadcrumb `PAULINI > PRIVATUMO POLITIKA` appears above the list on the left side
- The page displays privacy policy, data usage, and your rights


## logged in user hamburger menu

### 🧪✅ [**TC 03.12 - Verify that the page displays order history if available**](/pictures/hamburgerImg/tc0312/uzsakymu_istorija_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** User is logged into a valid account

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `UŽSAKYMŲ ISTORIJA` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/uzsakymu-istorija`
- The breadcrumb `PAULINI > TAISYKLĖS` appears above the list on the left side

[back](/testCases.md)

### 🧪✅ [**TC 03.13 - Access to Cart via Hamburger Menu**](/pictures/hamburgerImg/tc0313/jusu_krepselis_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** User is logged into a valid account

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `JŪSŲ KREPŠELIS` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/krepselis`
- The cart contents opening
- When the cart is empty, there is no information. 
- The breadcrumb `PAULINI > KREPŠELIS` appears cart information


### 🧪✅ [**TC 03.14 - Verify functionality of the Account Settings page**](/pictures/hamburgerImg/tc0314/paskyros_nustatymai_field_hamburger.png)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** User is logged into a valid account

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PASKYROS NUSTATYMAI` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/paskyros-nustatymai`
- The breadcrumb `PASKYROS NUSTATYMAI` appears cart information
