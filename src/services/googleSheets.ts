export interface RegistrationData {
  parentName: string;
  childName: string;
  childAge: string;
  phoneNumber: string;
  email: string;
  course: string;
  notes: string;
}

/**
 * Service to handle Google Sheets integration via Apps Script Web App
 */
export const googleSheetsService = {
  /**
   * Submit registration data to the Google Sheet
   * @param data - The form data to submit
   * @param webAppUrl - The URL of your deployed Google Apps Script Web App
   */
  async submitRegistration(data: RegistrationData, webAppUrl: string): Promise<boolean> {
    try {
      // Note: In a real environment, the webAppUrl should be a VITE_ secret
      const response = await fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors', // Use no-cors as Apps Script doesn't always support CORS for POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we won't get the status, but we assume it sent if no error thrown
      return true;
    } catch (error) {
      console.error('Error submitting form to Google Sheets:', error);
      throw error;
    }
  }
};
