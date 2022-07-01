describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://app.keka.com/Account/KekaLogin?returnUrl=%2F')
        const domain=await $('#subdomainname')
        await browser.execute("arguments[0].value='msys';",domain)
        await $('#email').setValue('ssharma@msystechnologies.com')
        await $('#password').setValue('Shivam@0105')
        await $("//button[@type='submit']").click()
        await expect($('.profile-name')).toBeExisting();
        await expect($('.profile-name')).toHaveTextContaining('Shivam Sharma');
    });
});

