def markIsland(binaryMatrix, row, col):
    cells_queue = []
    cells_queue.append((row, col))
    while len(cells_queue) > 0 :
        r, c = cells_queue.pop(0)   
        

def etNumberOfIslands(binaryMatrix):
    island_count = 0;
    for row in range(len(binaryMatrix)):
        for col in range(len(binaryMatrix[0])):
            if binaryMatrix[row][col] == 1:
                island_count += 1
                markIsland(binaryMatrix, row, col)
    return island_count


binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

