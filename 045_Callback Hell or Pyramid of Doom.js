// Pyramid of Doom :
// When we have callbacks inside callbacks, the code becomes diificult to manage. As calls are nested, the code becomes deeper and more difficult to manage especially if we have real code. This is called "Callback Hell" or "Pyramid of Doom".
// The Pyramid of these calls grows towards the right more with every asynchronous action and soon it spreads out of control which isn't very good!

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src;
    script.onload = function () {    // --> Showing Callback on load
        console.log("Your Script is loaded with SRC :" + src);
        callback(null, src);
    }
    script.onerror = function () {        // --> Error Handling
        console.log("Error Loading Script with SRC : " + src);
        callback(new Error("Error loading SRC"))
    }
    document.body.appendChild(script);
}

// Example :

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap1.bundle.min.js", function hello(error, src) {
    if (error) {
        console.log("Src got error");
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function hello(error, src) {
        if (error) {
            console.log("Src got error");
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function hello(error, src) {
            if (error) {
                console.log("Src got error");
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function hello(error, src) {
                if (error) {
                    console.log("Src got error");
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function hello(error, src) {
                    if (error) {
                        console.log("Src got error");
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function hello(error, src) {
                        if (error) {
                            console.log("Src got error");
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function hello(error, src) {
                            if (error) {
                                console.log("Src got error");
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function hello(error, src) {
                                if (error) {
                                    console.log("Src got error");
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function hello(error, src) {
                                    if (error) {
                                        console.log("Src got error");
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap10.bundle.min.js", function hello(error, src) {
                                        if (error) {
                                            console.log("Src got error");
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap11.bundle.min.js", function hello(error, src) {
                                            if (error) {
                                                console.log("Src got error");
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap12.bundle.min.js", function hello(error, src) {
                                                if (error) {
                                                    console.log("Src got error");
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap13.bundle.min.js", function hello(error, src) {
                                                    if (error) {
                                                        console.log("Src got error");
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap14.bundle.min.js", function hello(error, src) {
                                                        if (error) {
                                                            console.log("Src got error");
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap15.bundle.min.js", function hello(error, src) {
                                                            if (error) {
                                                                console.log("Src got error");
                                                            }

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})