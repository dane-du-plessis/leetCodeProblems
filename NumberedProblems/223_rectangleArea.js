var computeArea = function(A, B, C, D, E, F, G, H) {
    
    var computeOneArea = function(A,B,C,D) {
        return (C-A)*(D-B)
    }

    var computeDelta = function(A,C,E,G) {
        if (G <= A || C <= E) 
            return 0
        if (E <= A && C <= G)
            return C - A
        if (A <= E && G <= C)
            return G - E
        if (A <= G && G <= C)
            return G - A
        if (A <= E && E <= C)
            return C - E
    }

    return computeOneArea(A, B, C, D) + computeOneArea(E, F, G, H) - computeDelta(A,C,E,G)*computeDelta(B,D,F,H)

}


computeArea(-3,-3,1,1,0,0,3,3)
console.log(0 === computeArea(0,0,0,0,0,0,0,0))
console.log(0 === computeArea(0,0,0,0,0,0,0,0))
console.log(24 === computeArea(-3,-3,1,1,0,0,3,3))
console.log(45 === computeArea(-3,0,3,4,0,-1,9,2))

