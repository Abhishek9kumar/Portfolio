export const getPost = async () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzK-PSaGfxqnWFddF_mi_DcZi5fQYQBX99P0c1pqAgTFrBSv_ioZH3gpjU3R1r1Z5Mo/exec?route=getSkills", {
        method: "GET",
    });
    return await response.json();
}