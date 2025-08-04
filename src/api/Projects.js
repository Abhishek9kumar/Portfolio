export const getPost = async () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzf2ENSxJ-YS7NdgVSDjNJeJngNbaBiP7HImqU6qi49_3Nb54Cg4O4p5T46u5ghAJCF/exec?route=getProjects", {
        method: "GET",
    });
    return await response.json();
}