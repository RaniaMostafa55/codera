# Connecting Codera Landing Page to Google Sheets

To connect your lead generation form to a Google Sheet, follow these steps:

## 1. Prepare your Google Sheet
1. Open [Google Sheets](https://sheets.new).
2. Create a new spreadsheet named "Codera Leads".
3. In the first row (A1 to H1), add these headers:
   - `Timestamp`
   - `Parent Name`
   - `Child Name`
   - `Child Age`
   - `Phone Number`
   - `Email`
   - `Course`
   - `Notes`

## 2. Create the Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**.
2. Delete any existing code and paste the following:

```javascript
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Append row to the sheet
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.parentName,
    data.childName,
    data.childAge,
    data.phoneNumber,
    data.email,
    data.course,
    data.notes
  ]);
  
  // Return success response
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("Codera API is active.");
}
```

3. Click the disk icon to **Save**(name it "Codera Backend").

## 3. Deploy as Web App
1. Click the **Deploy** button > **New deployment**.
2. Select type: **Web app**.
3. Description: "Codera Form Handler".
4. Execute as: **Me**.
5. Who has access: **Anyone** (this is necessary for the public form to send data).
6. Click **Deploy**.
7. **Important:** Copy the **Web App URL** provided at the end.

## 4. Update the Frontend Code
1. Open `/src/components/ui/RegistrationForm.tsx`.
2. Locate the `DEFAULT_WEB_APP_URL` constant.
3. Replace the placeholder URL with your actual Web App URL.
4. Save and your form is now LIVE!

---

### Security Note
In a production environment, you should use environment variables (e.g., `VITE_GOOGLE_SCRIPT_URL`) and potentially a backend proxy if you want to hide the URL, though for simple lead forms like this, direct Apps Script integration is a common and efficient solution.
