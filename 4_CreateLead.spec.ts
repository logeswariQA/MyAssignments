import test from '@playwright/test'

test("leaftaps", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill('democsr')
    await page.locator("[id='password']").fill('crmsfa')
    await page.locator("[class='decorativeSubmit']").click()
    console.log("Login Successful.......")


    await page.locator(`text='CRM/SFA'`).click()
    console.log("Inside CRM/SFA Page.......")

    await page.locator("//a[text()='Leads']").click()
    console.log("Inside Leads Page......")

    await page.locator("//a[text()='Create Lead']").click()
    console.log("Inside Lead Creation Page......")

     await page.locator("#createLeadForm_companyName").fill("Accenture")
    await page.locator("#createLeadForm_firstName").nth(0).fill("Logeswari")
    await page.locator("#createLeadForm_lastName").nth(0).fill("DK")
    await page.locator("#createLeadForm_personalTitle").fill("Miss")
    await page.locator("#createLeadForm_generalProfTitle").fill("Snr Analyst")
    await page.locator("#createLeadForm_annualRevenue").fill("3000000")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9999999999")
    await page.locator(".smallSubmit").click()
    console.log("Lead Created Successfully......")


})