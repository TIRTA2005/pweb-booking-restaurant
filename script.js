function homePage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Home Page</h2>
        <p>Halaman home</p>`;
    return page;
}

function menuPage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Menu Page</h2>
        <p>Halaman menu</p>`;
    return page;
}

function bookingPage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Booking Page</h2>
        <p>Halaman booking</p>`;
    return page;
}

function contactPage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Contact Page</h2>
        <p>Halaman contact</p>`;
    return page;menuPage
}

function errorPage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Error Page</h2>
        <p>Halaman error</p>`;
    return page;
}

const route = {
    "/": homePage(),
    "/menu": menuPage(),
    "/booking": bookingPage(),
    "/contact": contactPage(),
};

function router() {
    const hash = window.location.hash || "#/";
    const path = hash.replace("#/", "/");
    console.log(hash);
    try {
        document.getElementById("app");
        app.innerHTML = "";
    } catch (error) {
        app.appendChild(errorPage());
    } finally {
        app.appendChild(route[path]);
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
