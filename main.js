var animating = false;
let animateQueue = [];
const speed = 60

function getTimeLength(text) {
    return text.length * speed
}

function animate(text, reset) {
    if (animating == false) {
        animating = true;
        if (reset) {
            document.getElementById("terminal").innerHTML = "";
        }
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                document.getElementById("terminal").innerHTML += text.substring(i, i + 1);
            }, i * speed);
        }
		
        setTimeout(() => {
			
            animating = false;
            for (var i = 0; i < animateQueue.length; i++) {
                var t = animateQueue[i]["tex"]
                var r = animateQueue[i]["res"]
                animate(t, r)
            }
            animateQueue = []
        }, text.length * speed);
        return text.length * speed
    } else {
        animateQueue.push({
            tex: text,
            res: reset
        });
    }
}

function instAnim(text, reset) {
    if (reset) {
        document.getElementById("terminal").innerHTML = "";
    }
    document.getElementById("terminal").innerHTML += text;
}
document.addEventListener("DOMContentLoaded", () => {
    var wait
    var ip
    fetch("https://api.ipify.org/")
        .then((r) => r.text())
        .then(data => {
            ip = data
            instAnim("<span style=\"color: rgba(50,255,50,255);\">" + ip + "@me.fuchsiax.dev ~ $</span>", true)
        });
    setTimeout(() => {
        fetch("https://api.ipify.org/")
            .then((r) => r.text())
            .then(data => {
                ip = data
                instAnim("<span style=\"color: rgba(50,255,50,255);\">" + ip + "@me.fuchsiax.dev ~ $</span> ", true)
                setTimeout(() => {
                    wait = animate("Hello " + data + "! ")
                    setTimeout(() => {
                        fetch("https://ipapi.co/" + ip + "/json/")
                            .then((r) => r.json())
                            .then(data => {
                                instAnim("<br><span style=\"color: rgba(50,255,50,255);\">" + ip + "@me.fuchsiax.dev ~ $</span> ", false)
                                wait = animate("Looks like we have someone from " + data["country"] + ", that's cool!")
                                setTimeout(() => {
                                    instAnim("<br><span style=\"color: rgba(50,255,50,255);\">" + ip + "@me.fuchsiax.dev ~ $</span> ", false)
                                    setTimeout(() => {
                                        animate("Anyways, welcome to my website!", false)
                                        setTimeout(() => {
                                            instAnim("<br><span style=\"color: rgba(50,255,50,255);\">" + ip + "@me.fuchsiax.dev ~ $</span> ", false)
                                            animate("./latealways", false)
											setTimeout(() => {
												instAnim("<br>")
												setTimeout(() => {
													document.getElementById("term").style.setProperty("opacity", "0")
													document.getElementById("page").style.setProperty("opacity", "1")
													setTimeout(() => {
														document.getElementById("animateText").style.setProperty("opacity", "0")
														setTimeout(() => {
															document.getElementById("animateText").innerHTML = "I am a developer."
															document.getElementById("animateText").style.setProperty("opacity", "1")
															setTimeout(() => {
																document.getElementById("animateText").style.setProperty("opacity", "0")
																setTimeout(() => {
																	document.getElementById("animateText").innerHTML = "I currently know 5 programming languages."
																	document.getElementById("animateText").style.setProperty("opacity", "1")
																	setTimeout(() => {
																		document.getElementById("animateText").style.setProperty("opacity", "0")
																		setTimeout(() => {
																			document.getElementById("animateText").innerHTML = "My primary programming language is java, but I also code in LUA and PHP.";
																			document.getElementById("animateText").style.setProperty("opacity", "1")
																			setTimeout(() => {
																				document.getElementById("animateText").style.setProperty("opacity", "0")
																				setTimeout(() => {
																					document.getElementById("animateText").innerHTML = "Welcome!";
																					document.getElementById("animateText").style.setProperty("opacity", "1")
																					fetch("https://api.github.com/users/LateAlways/repos")
																					.then(resp => resp.json())
																					.then(data => {
																						//To be done
																					})
																					setTimeout(() => {
																						document.getElementById("animateText").style.setProperty("opacity", "0")
																						document.getElementById("page").style.setProperty("opacity", "0")
																					}, 2000)
																				}, 130)
																			}, 2000)
																		}, 130)
																	}, 2000)
																}, 130)
															}, 2000)
														}, 130)
													}, 2000)
												}, 2500)
											}, getTimeLength("./latealways"))
                                        }, getTimeLength("Anyways, welcome to my website!")+500)

                                    }, 500)
                                }, wait + 1500)
                            })
                    }, wait + 750)
                }, 500)
            });
    }, 500)
});
