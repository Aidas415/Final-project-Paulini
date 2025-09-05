# 🧪🔍💡 **PAULINI - Test scenarios & Test Cases** 

## **Documentation**

## **TS 02. Login**

##  Login positive tests


### 🧪✅  **TC 02.01. - Positive: login with email from main page**

- **Environment:**  `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 

- The user must access the homepage without being signed in
- Real user credentials are used for testing purposes
- Only non-sensitive data (name and email) will be disclosed in this test case; password and full phone number are masked

📝- **Test Steps:**
  1. Click on the `Tel.numeris/El.paštas` field
  2. Enter email: `aidasambotas@gmail.com`
  3. Click on the `Slaptažodis` field
  4. Enter password: ********
  5. Click on the `Prisijungti` button
  6. Observe the result

🎯- **Expected Result:** 
- The user is successfully logged in
- No popup message is displayed
- Top-left corner of the page shows: `Aidas`


### 🧪✅ **TC 02.02. - Positive: login with phone number from main page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- The user must access the homepage without being signed in
- - Real user credentials are used for testing purposes
- Only non-sensitive data (name and email) will be disclosed in this test case; password and full phone number are masked

📝- **Test Steps:**
  1. Click on the `Tel.numeris/El.paštas` field
  2. Enter phone number: `+3706531...8`
  3. Click on the `Slaptažodis` field
  4. Enter password: `*********`
  5. Click on the `Prisijungti` button
  6. Observe the result

🎯- **Expected Result:** 
- The user is successfully logged in
- No popup message is displayed
- Top-left corner of the page shows: `Aidas`


### 🧪✅ **TC 02.03. - Positive: login from header**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Navigate to the top of the page
  2. Locate the `PRISIJUNGTI` item in the header
  3. Click the item to proceed to the login screen
  4. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/prisijungimas`
- The login form appears
- The breadcrumb `PAULINI > PRISIJUNGTI` appears above the list on the left side
- The `PRISIJUNGTI` item is underline
- The form includes fields for phone/email and password
- The `PRISIJUNGTI` action button is visible and functional


### 🧪✅ **TC 02.04. - Positive: login from hamburger menu**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The user must access the homepage without being signed in
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on the hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PRISIJUNGTI` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/prisijungimas`
- The login form was displayed correctly
- The breadcrumb `PAULINI > PRISIJUNGTI` appears above the form on the left side
- The `PRISIJUNGTI` item is underline
- The form includes fields for phone/email and password
- The `PRISIJUNGTI` action button is visible and functional


## 👍 Login negative tests

### 🧪✅ **TC 02.08. - Negative: login when email without "@" symbol**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Click on the "Tel.numeris/El.paštas" field
  2. Enter email without `@` symbol: `aidasambotasgmail.com`
  3. Click on the `Slaptažodis` field
  4. Enter correct password: `*********`
  5. Click on the `Prisijungti` button
  6. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


### 🧪✅ **TC 02.09. - Negative: login fails with invalid phone number**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Click on the `Tel.numeris/El.paštas` field
  2. Enter incorrect phone number: `+3706531...5`
  3. Click on the `Slaptažodis` field
  4. Enter correct password: `*********`
  5. Click on the `Prisijungti` button
  6. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


### 🧪✅ **TC 02.10. - Negative: login fails with invalid password**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** The user must access the homepage without being signed in

📝- **Test Steps:**
  1. Click on the "Tel.numeris/El.paštas" field
  2. Enter correct email: `aidasambotas@gmail.com`
  3. Click on the `Slaptažodis` field
  4. Enter incorrect password: `*****`
  5. Click on the `Prisijungti` button
  6. Observe the result

🎯- **Expected Result:** 
- The system does not log the user in.  
- An error message is displayed below the login fields, in red text:  
`Neteisingi prisijungimo duomenys`


## **TS 03. Navigation Menu**


### 🧪✅ **TC 03.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The `PRIĖMIMO SKYRIAI` page opens
  - A list of all admission departments is displayed
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side
  - The `PRIĖMIMO SKYRIAI` menu item is underlined


### 🧪✅ **TC 03.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- the top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 
- The page shows offers where each includes a title, short description, and optionally an image or expiration date
- The `AKCIJOS IR NAUJIENOS` menu item is underlined


### 🧪✅ **TC 03.03. - Page "APIE MUS" is visible and accessible from main page** 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on `APIE MUS` menu item
  2. Observe result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The page describe everything about `PAULINI` with a short introduction
- Contact information includes email, phone number, and address
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side
- The `APIE MUS` menu item is underlined


### 🧪✅ **TC 03.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page** 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- I am connected to `https://paulini.lt/priemimo-skyriai`
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful loginn

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- The top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 
- The page shows offers where each includes a title, short description, and optionally an image or expiration date
- The `AKCIJOS IR NAUJIENOS` menu item is underlined


### 🧪✅ **TC 03.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page** 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- I am connected to `https://paulini.lt/priemimo-skyriai`
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on the `APIE MUS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The page describe everything about `PAULINI` with a short introduction
- Contact information includes email, phone number, and address
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side
- The `APIE MUS` menu item is underlined


### 🧪✅ **TC 03.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- I am connected to `https://paulini.lt/akcijos-ir-naujienos`
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The `PRIĖMIMO SKYRIAI` page opens
  - A list of all admission departments is displayed
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side
  - The `PRIĖMIMO SKYRIAI` menu item is underlined


### 🧪✅ **TC 03.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page** 

  - **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
  - **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
  - **Preconditions:**
  - I am logged into my account. 
  - I am connected to `https://paulini.lt/akcijos-ir-naujienos`
  - The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on the `APIE MUS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/apie-mus`
- The page describe everything about `PAULINI` with a short introduction
- Contact information includes email, phone number, and address
- The breadcrumb `PAULINI > APIE MUS` appears above the describe on the left side
- The `APIE MUS` menu item is underlined


### 🧪✅ **TC 03.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- I am connected to `https://paulini.lt/apie-mus`
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:** 
  1. Click on the `PRIĖMIMO SKYRIAI` menu item
  2. Observe the result

🎯- **Expected Result:**
  - The user is successfully redirected to `https://paulini.lt/priemimo-skyriai`
  - The `PRIĖMIMO SKYRIAI` page opens
  - A list of all admission departments is displayed
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side
  - The `PRIĖMIMO SKYRIAI` menu item is underlined


### 🧪✅ **TC 03.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page** 

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- I am connected to `https://paulini.lt/apie-mus`
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on the `AKCIJOS IR NAUJIENOS` menu item
  2. Observe the result

🎯- **Expected Result:** 
- The user is successfully redirected to `https://paulini.lt/akcijos-ir-naujienos`
- the top-left corner of the page shows the breadcrumb `PAULINI > AKCIJOS IR NAUJIENOS` 
- The page shows offers where each includes a title, short description, and optionally an image or expiration date
- The `AKCIJOS IR NAUJIENOS` menu item is underlined


## **TS 04. Hamburger Menu**


## When the user is not logged in


### 🧪✅ **TC 04.01. - Registration is possible from the "hamburger" menu**

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


### 🧪✅ **TC 04.02. - The "AKCIJOS IR NAUJIENOS" page is accessible from the "hamburger" menu**

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
- The `AKCIJOS IR NAUJIENOS` menu item is underlined


### 🧪✅ **TC 04.03. - The "PASLAUGOS IR PREKĖS" page is accessible from the "hamburger" menu**

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
- The page displays a list of all goods and services
- The breadcrumb `PAULINI > PREKĖS IR PASLAUGOS` appears above the list on the left side


### 🧪✅ **TC 04.04. - The "KREDITAI IR KUPONAI" page is accessible from the "hamburger" menu**

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


### 🧪✅ **TC 04.05. - The "PRIĖMIMO SKYRIAI" page is accessible from the "hamburger" menu**

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
  - A list of all admission departments is displayed
  - The breadcrumb `PAULINI > PRIĖMIMO SKYRIAI` appears above the list on the left side
  - The `PRIĖMIMO SKYRIAI` menu item is underlined


### 🧪✅ **TC 04.06. - The "APIE MUS" page is accessible from the "hamburger" menu**

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
- The `APIE MUS` menu item is underlined


### 🧪✅ **TC 04.07. - The "PASIEKIMAI" page is accessible from the "hamburger" menu**

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
- The page displays a list of `PAULINI` achievements
- The breadcrumb `PAULINI > PASIEKIMAI` appears above the list on the left side


### 🧪✅ **TC 04.08. - The "PARTNERIAI" page is accessible from the "hamburger" menu**

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
- The page displays a list of `PAULINI` business partners
- The breadcrumb `PAULINI > PARTNERIAI` appears above the list on the left side


### 🧪✅ **TC 04.09. - The "KLAUSKITE?" page is accessible from the "hamburger" menu**

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
- The form includes fields for questions, your message, email, phone number and files 
- The breadcrumb `PAULINI > TURITE KLAUSIMŲ?` appears above the list on the left side


### 🧪✅ **TC 04.10. - The "TAISYKLĖS" page is accessible from the "hamburger" menu**

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
- The page displays a list of rules
- The breadcrumb `PAULINI > TAISYKLĖS` appears above the list on the left side


### 🧪✅ **TC 04.11. - The "PRIVATUMO POLITIKA" page is accessible from the "hamburger" menu**

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
- The page displays privacy policy, data usage, and your rights
- The breadcrumb `PAULINI > PRIVATUMO POLITIKA` appears above the list on the left side


### 🧪✅ **TC 04.12. - The QR code from the "hamburger" menu**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:** 
- The user must access the homepage without being signed in
- The top-left corner of the page displays a `PRISIJUNGTI` button
- Hamburger menu icon `(☰)` is visible in the top-left corner of the page

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. Scan the QR code at the bottom of the hamburger menu with your phone 
   
🎯- **Expected Result:**
- The QR code works
- The user has the option to download and install the app


## logged in user hamburger menu

### 🧪✅ [**TC 04.13. - Verify that the page displays order history if available**](hamburgerImg/hamburgeriopasirinkimas0413.jpg)

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `UŽSAKYMŲ ISTORIJA` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/uzsakymu-istorija`
- The page displays thw user's orders history, if any
- The breadcrumb `PAULINI > TAISYKLĖS` appears above the list on the left side


### 🧪✅ **TC 04.14 - Access to Cart via Hamburger Menu**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `JŪSŲ KREPŠELIS` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/krepselis`
- The cart contents opening
- If the cart is empty, there is no information. 
- If there are purchases, it shows information abeutthem
- The breadcrumb `PAULINI > KREPŠELIS` appears cart information


### 🧪✅ **TC 04.15 - Verify functionality of the Account Settings page**

- **Environment:** `Windows 11`, `Chrome v139.0.7258.139 (64-bit)`
- **Pre-requisite:** Open the website `https://paulini.lt/` in a web browser
- **Preconditions:**
- I am logged into my account. 
- The text `Aidas 0.00 €` is visible in the top-left corner, confirming a successful login

📝- **Test Steps:**
  1. Click on hamburger menu `(☰)` icon
  2. In the expanded hamburger menu, click on the `PASKYROS NUSTATYMAI` button
  3. Observe the result

🎯- **Expected Result:**
- The user is successfully redirected to `https://paulini.lt/paskyros-nustatymai`
- personal information is revealed
- There is an option to edit personal information, change password. 
- The breadcrumb `PASKYROS NUSTATYMAI` appears cart information
