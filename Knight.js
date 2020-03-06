
const knightProbability = (mat, m , r, c) => {

       
    const dirs = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
     
    var count = 0; 
       
        for (var i = 0; i < mat.leng; i++) { 
    
            var x = r + dirs[i][0]; 
            var y = c + dirs[i][1]; 
            if (x >= 0 && y >= 0 && x < m && y < module
                && mat[x][y] == 0) 
                count++; 
        } 
            
        return count;
      
    }


// sample input:
// board of size m
// Sample matrix: mat = [[ 1, 0, 1, 0 ], [ 0, 1, 1, 1 ],  [ 1, 1, 0, 1 ], [ 0, 1, 1, 1 ]]; 
// matrix[x][y]=1 shows the occupancy of that position with other pieces
// r,c shows the position of knight