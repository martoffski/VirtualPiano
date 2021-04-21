document.addEventListener("keypress", ev => {
    switch (ev.code) {
        case "KeyW":
            let W = new Audio("../audio/W.mp3")
            W.play()
            break
       case "KeyE":
            let E = new Audio("../audio/E.mp3")
            E.play()
            break
       case "KeyT":
            let T = new Audio("../audio/T.mp3")
            T.play()
            break
       case "KeyY":
            let Y = new Audio("../audio/Y.mp3")
            Y.play()
            break
       case "KeyU":
            let U = new Audio("../audio/U.mp3")
            U.play()
            break
        case "KeyA":
            let A = new Audio("../audio/A.mp3")
            A.play()
            break
        case "KeyS":
            let S = new Audio("../audio/S.mp3")
            S.play()
            break
        case "KeyD":
            let D = new Audio("../audio/D.mp3")
            D.play()
            break
        case "KeyF":
            let F = new Audio("../audio/F.mp3")
            F.play()
            break
        case "KeyG":
            let G = new Audio("../audio/G.mp3")
            G.play();
            break
        case "KeyH":
            let H = new Audio("../audio/H.mp3")
            H.play();
            break
        case "KeyJ":
            let J = new Audio("../audio/J.mp3")
            J.play()
            break
        default:
            console.warn("Wrong key is pressed")
    }
})