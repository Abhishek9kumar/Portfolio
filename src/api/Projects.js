export const getPost = async () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwYN8e6Tl1YycXpwYi4PqiEtlMdDh2rd2tRruKzFpT0ZAs2wAhZ5cSUqp6elT_TgQy9/exec?route=getProjects", {
        method: "GET",
    });
    return await response.json();
}