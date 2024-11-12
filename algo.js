// 79. Word Search



// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.







/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || 
            board[r][c] !== word[i] || board[r][c] === '#') {
            return false;
        }

        board[r][c] = '#';
        const res = dfs(r + 1, c, i + 1) ||
                    dfs(r - 1, c, i + 1) ||
                    dfs(r, c + 1, i + 1) ||
                    dfs(r, c - 1, i + 1);
        board[r][c] = word[i];
        return res;
    };

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}
