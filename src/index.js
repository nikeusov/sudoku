module.exports = function solveSudoku(matrix) {
  solve();
  return matrix;
  
  function solve() {
      for(let row = 0; row < 9; ++row) {
          for(let col = 0; col < 9; ++col) {
              if(matrix[row][col] !== 0) {
                  continue;
              }
              for(let v = 1; v <= 9; ++v) {
                  const v_s = v;
                  if(isValid(row, col, v_s)) {
                    matrix[row][col] = v_s;
                      if(solve()) {
                          return true;
                      } else {
                        matrix[row][col] = 0;
                      }
                  }
              }
              return false;
          }
      }
      return true;
  }
  
  function isValid(row, col, v) {
      const regionRow = 3 * Math.floor(row / 3);    
      const regionCol = 3 * Math.floor(col / 3);    
      for (let i = 0; i < 9; i++) {
          if (matrix[i][col] === v) return false;    
          if (matrix[row][i] === v) return false;   
          const cube_r = regionRow + Math.floor(i / 3),
                cube_c = regionCol + i % 3;
          if (matrix[cube_r][cube_c] === v) return false;
      }
      return true;
  }
}
