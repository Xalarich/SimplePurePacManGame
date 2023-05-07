document.addEventListener("DOMContentLoaded", function loaded() {
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,1,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    const squares = []

    function createBoard() {
        for (let i=0; i < layout.length; i++){
        const square = document.createElement("div")
        grid.appendChild(square)
        squares.push(square)
        
        if(layout[i] === 0){
            squares[i].classList.add("pac-dot")
            squares[i].appendChild(document.createElement("div"))
        } else if (layout[i] === 1){
            squares[i].classList.add("wall")
        } else if (layout[i] === 2){
            squares[i].classList.add("ghost-lair")
        } else if (layout[i] === 3){
            squares[i].classList.add("power-pellet")
        }
    }
    }
    createBoard()

    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add("pac-man")

    function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man")
    console.log(e)

    switch(e.key) {
        case "ArrowLeft":
            if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")){
            pacmanCurrentIndex -=1} else if(pacmanCurrentIndex === 364){pacmanCurrentIndex += 27}
            break;
        case "ArrowUp":
            if(pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")){
            pacmanCurrentIndex -=width}
            break;
        case "ArrowRight":
            if(pacmanCurrentIndex % width < width -1 && !squares[pacmanCurrentIndex +1].classList.contains("wall") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-lair")) {
            pacmanCurrentIndex +=1} else if(pacmanCurrentIndex === 391){pacmanCurrentIndex -= 27}
            break;
        case "ArrowDown":
            if(pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")){
             pacmanCurrentIndex +=width}
            break;
        }
        
    squares[pacmanCurrentIndex].classList.add("pac-man")
    
    pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForWin()
    }

    function movePacmanLeft(e) {
        squares[pacmanCurrentIndex].classList.remove("pac-man")
        if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")){
            pacmanCurrentIndex -=1} else if(pacmanCurrentIndex === 364){pacmanCurrentIndex += 27}
        squares[pacmanCurrentIndex].classList.add("pac-man")
        pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForWin()
    }

    function movePacmanTop(e) {
        squares[pacmanCurrentIndex].classList.remove("pac-man")
        if(pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")){
            pacmanCurrentIndex -=width}
            squares[pacmanCurrentIndex].classList.add("pac-man")
        pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForWin()
    }

    function movePacmanRight(e) {
        squares[pacmanCurrentIndex].classList.remove("pac-man")
        if(pacmanCurrentIndex % width < width -1 && !squares[pacmanCurrentIndex +1].classList.contains("wall") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-lair")) {
            pacmanCurrentIndex +=1} else if(pacmanCurrentIndex === 391){pacmanCurrentIndex -= 27}
        squares[pacmanCurrentIndex].classList.add("pac-man")
        pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForWin()
    }

    function movePacmanDown(e) {
        squares[pacmanCurrentIndex].classList.remove("pac-man")
        if(pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")){
            pacmanCurrentIndex +=width}
        squares[pacmanCurrentIndex].classList.add("pac-man")
        pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForWin()
    }

    document.addEventListener("keyup", movePacman)
    document.querySelector(".leftBtn").addEventListener("click", movePacmanLeft)
    document.querySelector(".upBtn").addEventListener("click", movePacmanTop)
    document.querySelector(".rightBtn").addEventListener("click", movePacmanRight)
    document.querySelector(".downBtn").addEventListener("click", movePacmanDown)

    function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove("pac-dot")

    }}

    function powerPelletEaten(){
        if(squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            score +=10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove("power-pellet")
        }
    }

    function unScareGhosts(){
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    class ghost {
        constructor(className, startIndex, speed){
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.timerId = NaN
            this.isScared = false
        }
    }
     const ghosts = [
        new ghost("blinky", 348, 100),
        new ghost("pinky", 376, 100),
        new ghost("inky", 351, 200),
        new ghost("clyde", 379, 200)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add("ghost")
    })

    ghosts.forEach(ghost => moveGhost(ghost))
    function moveGhost(ghost){
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]
        
    ghost.timerId = setInterval(function(){
        if (!squares[ghost.currentIndex + direction].classList.contains("wall") && !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")

        } else direction = directions[Math.floor(Math.random() * directions.length)]

        if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost")
        }
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")) {
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.startIndex
                score +=100
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
        }
        checkGameOver()
        }, ghost.speed)
    }
    function checkGameOver() {
        if(squares[pacmanCurrentIndex].classList.contains("ghost") && 
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            
    document.querySelector(".leftBtn").removeEventListener("click", movePacmanLeft)
    document.querySelector(".upBtn").removeEventListener("click", movePacmanTop)
    document.querySelector(".rightBtn").removeEventListener("click", movePacmanRight)
    document.querySelector(".downBtn").removeEventListener("click", movePacmanDown)
            scoreDisplay.innerHTML = "game over!"
        }
    }
    function checkForWin() {
        if (score > 274){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            document.querySelector(".leftBtn").removeEventListener("click", movePacmanLeft)
    document.querySelector(".upBtn").removeEventListener("click", movePacmanTop)
    document.querySelector(".rightBtn").removeEventListener("click", movePacmanRight)
    document.querySelector(".downBtn").removeEventListener("click", movePacmanDown)
            scoreDisplay.innerHTML = "game won"
        }
        }

})